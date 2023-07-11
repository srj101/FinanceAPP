import { Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { memo, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../providers/state/reducers/settings";
import colors from "../utils/colors";
import currencyToSymbolMap from "currency-symbol-map/map";

const CurrencyItem = memo(({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
      }}
    >
      <Text
        className="text-3xl"
        style={{
          fontFamily: "TheHand-Regular",
          color: colors.black,
        }}
      >
        {item.name}
      </Text>
      <Text
        className="text-2xl"
        style={{
          fontFamily: "TheHand-Regular",
        }}
      >
        {item.symbol}
      </Text>
    </View>
  </TouchableOpacity>
));

export default function CurrencyList() {
  const [search, setSearch] = useState("");
  const { currency } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const currencies = React.useMemo(() => {
    const list = Object.entries(currencyToSymbolMap).map(
      ([currencyCode, currencySymbol]) => {
        return {
          name: currencyCode,
          symbol: currencySymbol,
        };
      }
    );

    return list;
  }, []);

  const filteredCurrencies = React.useMemo(() => {
    const filtered = currencies.filter(
      (currency) =>
        // check if the symbol or the name includes the search
        currency.symbol.toLowerCase().includes(search.toLowerCase()) ||
        currency.name.toLowerCase().includes(search.toLowerCase())
    );

    return filtered;
  }, [search]);

  return (
    <SafeAreaView
      style={{
        padding: 10,
        flex: 1,
      }}
    >
      <View
        className="flex relative flex-row justify-between items-center mx-4 my-3"
        style={{}}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back-outline"
            size={25}
            color={colors.black}
          />
        </TouchableOpacity>

        <View>
          <Text
            className="text-xl text-center"
            style={{ fontFamily: "OpenSans-Regular" }}
          >
            {currency}
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Octicons name="check" size={25} color={colors.black} />
        </TouchableOpacity>
      </View>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Rechercher une devise"
        style={{
          paddingHorizontal: 25,
          paddingVertical: 10,
          borderWidth: 1,
          borderColor: colors.lightGray,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      <FlatList
        data={filteredCurrencies}
        renderItem={({ item }) => (
          <CurrencyItem
            item={item}
            onPress={() => {
              dispatch(
                setCurrency({
                  currency: item.symbol,
                  exchangeRate: 1.0,
                })
              );
            }}
          />
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeAreaView>
  );
}
