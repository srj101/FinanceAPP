import { View, Text, FlatList } from "react-native";
import React, { useMemo } from "react";
import MovementItem from "../Budget/movement/movementItem";
import { useSelector } from "react-redux";

const Assets = () => {
  const { currentMonth, assetWorths } = useSelector((state) => state.worth);

  const { updated } = useSelector((state) => state.movement);

  const currentMonthAssets = useMemo(() => {
    const data = assetWorths[currentMonth].data;

    // group by category and calculate total amount
    const groupedData = data.reduce((acc, item) => {
      const {
        category: { name: categoryName },
        amount,
      } = item;

      if (!acc[categoryName]) {
        acc[categoryName] = {
          data: [],
          totalAmount: 0,
          category: categoryName,
        };
      }

      acc[categoryName].data.push(item);

      acc[categoryName].totalAmount += amount;

      return acc;
    }, {});

    // convert object to array
    const groupedDataArray = Object.keys(groupedData).map((key) => {
      return groupedData[key];
    });

    return groupedDataArray;
  }, [currentMonth, assetWorths, updated]);

  return (
    <View className="mx-6">
      <Text
        style={{
          fontFamily: "OpenSans-Regular",
        }}
        className="text-2xl text-center my-10"
      >
        Mes actifs
      </Text>

      <View>
        {currentMonthAssets.length > 0 ? (
          <React.Fragment>
            {currentMonthAssets.map((item) => {
              return (
                <View
                  key={item.category}
                  style={{
                    marginVertical: item.data.length > 1 ? 10 : 0,
                  }}
                >
                  <FlatList
                    data={item.data}
                    renderItem={({ item }, index) => {
                      return (
                        <MovementItem
                          key={index}
                          item={item}
                          movementType="assets"
                        />
                      );
                    }}
                    keyExtractor={(item) => item.id}
                  />
                  {item.data.length > 1 ? (
                    <View>
                      <View
                        style={{
                          height: 1,
                          width: "30%",
                          alignSelf: "flex-end",
                          backgroundColor: "#E2E8F0",
                          marginVertical: 10,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: "OpenSans-Regular",
                          textAlign: "right",
                        }}
                        className="text-lg "
                      >
                        Total : {item.totalAmount}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
          </React.Fragment>
        ) : (
          <Text
            className="text-md text-center my-10"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            Aucun actif ajouté pour le moment
          </Text>
        )}
      </View>
    </View>
  );
};

export default Assets;
