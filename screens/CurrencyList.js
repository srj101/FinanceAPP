import { Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import AppLoading from "../components/AppLoading";
import { setCurrency } from "../providers/state/reducers/settings";
import colors from "../utils/colors";

const fetchCurrencies = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const seen = new Set();
  const currencies = [];

  data.forEach((country) => {
    if (country.currencies) {
      Object.entries(country.currencies).forEach(([code, currency]) => {
        if (currency.name && !seen.has(currency.name)) {
          seen.add(currency.name);
          currencies.push({
            name: currency.name,
            symbol: currency.symbol,
            code: code,
          });
        }
      });
    }
  });

  return currencies;
};

const fetchExchangeRate = async (selectedCurrency, dispatch, navigation) => {
  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`);
  const data = await res.json();

  console.log("selectedCurrency", selectedCurrency);
  console.log("exchangeRate", data.rates[selectedCurrency]);

  dispatch(
    setCurrency({
      currency: selectedCurrency,
      exchangeRate: data.rates[selectedCurrency],
    })
  );

  return data.rates[selectedCurrency];
};

const CurrencyItem = memo(({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
      }}
    >
      <Text
        className="text-xl"
        style={{
          fontFamily: "OpenSans-Regular",
          color: colors.black,
        }}
      >
        {item.name}
      </Text>
      <Text
        className="text-xl"
        style={{
          fontFamily: "OpenSans-Bold",
        }}
      >
        {item.symbol}
      </Text>
    </View>
  </TouchableOpacity>
));

export default function CurrencyList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // default is EURO symbol
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  const {
    data: currencies,
    isLoading,
    isError,
  } = useQuery(["currencies"], fetchCurrencies);

  const {
    data: exchangeRate,
    isLoading: isExchangeRateLoading,
    isError: isExchangeRateError,
  } = useQuery(
    ["exchangeRate", selectedCurrency],
    () => fetchExchangeRate(selectedCurrency, dispatch, navigation),
    {
      enabled: !!selectedCurrency,
    }
  );

  if (isLoading || isExchangeRateLoading) {
    return <AppLoading />;
  }

  if (isError || isExchangeRateError) {
    return <Text>An error occurred</Text>;
  }

  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View
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
            style={{ fontFamily: "OpenSans-Bold" }}
          >
            {selectedCurrency}
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Octicons name="check" size={25} color={colors.black} />
        </TouchableOpacity>
      </View>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search Currencies"
        style={{
          padding: 10,
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
              setSelectedCurrency(item.code);
            }}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
