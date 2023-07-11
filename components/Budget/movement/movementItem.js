import { useActionSheet } from "@expo/react-native-action-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovement } from "../../../providers/state/reducers/movement";
import { deleteWorth } from "../../../providers/state/reducers/worth";
import colors from "../../../utils/colors";
import { NumberFormat } from "../../../utils/funtions";
import DashedBorder from "../../DashedBorder";

const MovementItem = ({ item, movementType }) => {
  const { icon, id, amount, color, date, category, notes } = item;

  const monthIndex = useMemo(() => new Date(date).getMonth(), [date]);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );

  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Supprimer", "Annuler"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case destructiveButtonIndex:
            // Delete

            if (
              movementType === "estimatedBudgets" ||
              movementType === "actualBudgets"
            ) {
              dispatch(
                deleteMovement({
                  movementType,
                  movementId: id,
                  monthIndex,
                })
              );
            } else {
              dispatch(
                deleteWorth({
                  id,
                  selectedMonthIndex: monthIndex,
                  worthType: movementType,
                })
              );
            }

            break;

          case cancelButtonIndex:
          // Canceled
        }
      }
    );
  };

  const handleEditMovement = () => {
    if (
      movementType === "estimatedBudgets" ||
      movementType === "actualBudgets"
    ) {
      navigation.navigate("EditMovement", {
        movementType,
        movementId: id,
        monthIndex,
        movement: item,
      });
    }

    if (movementType === "assets" || movementType === "liabilities") {
      navigation.navigate("EditWorth", {
        worthType: movementType,
        worthId: id,
        monthIndex,
        worth: item,
      });
    }
  };

  return (
    <TouchableOpacity
      onLongPress={onPress}
      onPress={handleEditMovement}
      className="py-4"
    >
      <View
        className={
          notes
            ? `flex flex-row justify-between items-center`
            : `flex flex-row justify-between items-center py-4`
        }
      >
        <View style={{}} className="flex flex-row items-center gap-3">
          <FontAwesome
            name={category?.icon?.icon || "questioncircleo"}
            size={25}
            color={category?.color?.color || colors.black}
          />
          <Text
            className="text-lg"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            {category?.name || "Uncategorized"}
          </Text>
        </View>

        <Text
          className="text-md"
          style={{
            fontFamily: "OpenSans-Regular",
          }}
        >
          {NumberFormat(amount, currency, exchangeRate, decimalEnabled)}
        </Text>
      </View>

      {notes && (
        <Text
          className="text-md py-2 "
          style={{
            fontFamily: "OpenSans-Regular",
          }}
        >
          {notes.length > 25 ? notes.substring(0, 25) + "..." : notes}
        </Text>
      )}

      <DashedBorder vertical={false} />
    </TouchableOpacity>
  );
};

export default MovementItem;
