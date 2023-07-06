import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DashedBorder from "../../DashedBorder";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../utils/colors";
import { NumberFormat } from "../../../utils/funtions";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { deleteMovement } from "../../../providers/state/reducers/movement";
import { deleteWorth } from "../../../providers/state/reducers/worth";

const MovementItem = ({ item, movementType }) => {
  const { icon, id, amount, color, date, category, notes } = item;
  const dispatch = useDispatch();

  const { currency, decimalEnabled, exchangeRate } = useSelector(
    (state) => state.settings
  );

  const { currentMonth: worthMonth } = useSelector((state) => state.worth);
  const { currentMonth: movementMonth } = useSelector(
    (state) => state.movement
  );

  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Delete", "Cancel"];
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
                  monthIndex: movementMonth,
                })
              );
            } else {
              dispatch(
                deleteWorth({
                  id,
                  selectedMonthIndex: worthMonth,
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

  return (
    <TouchableOpacity onLongPress={onPress}>
      <View className="flex flex-row justify-between items-center py-4">
        <View style={{}} className="flex flex-row items-center gap-3">
          <AntDesign
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

      <DashedBorder vertical={false} />
    </TouchableOpacity>
  );
};

export default MovementItem;
