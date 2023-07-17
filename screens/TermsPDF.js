import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";

const TermsPDF = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="mx-4 flex-1">
      <ScrollView>
        <View className="my-4">
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons
              name="ios-arrow-back-outline"
              size={25}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }} className="mx-4">
          <Text
            className="text-lg mb-2"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            CONDITIONS D’UTILISATION & POLITIQUE DE CONFIDENTIALITÉ
          </Text>
          <Text
            className="text-md"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            Dernière mise à jour 17 Juillet 2023
          </Text>

          <Text
            className="text-md my-4"
            style={{
              fontFamily: "OpenSans-Regular",
            }}
          >
            L’utilisation de l’application implique votre acceptation et
            adhérence à nos conditions d’utilisation et règles de
            confidentialité.
          </Text>

          <View className="my-4" style={{}}>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-lg underline mb-3"
            >
              Conditions d’utilisation
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-md mb-2"
            >
              TMVBUDGET est une application gratuite disponible sur la boutique
              Apple et Android. Pour vous permettre de débloquer toutes les
              fonctionnalités de l’application dont vous n’avez pas accès avec
              la version gratuite, vous pouvez souscrire à la version Premium.
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-md mb-2"
            >
              L’accès à la version Premium est permise par une souscription
              unique et à vie. Le paiement de l’option est possible via votre
              compte iTunes ou Play store selon votre téléphone.
            </Text>
          </View>

          <View className="my-4" style={{}}>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-lg underline mb-3"
            >
              Politique de confidentialité{" "}
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-md mb-2"
            >
              Les présentes règles ont pour but de vous indiquer quelle est
              notre politique concernant la collecte, l’utilisation, la mise à
              jour, la gestion, l’export et la suppression de vos données
              personnelles.
            </Text>

            <View className="my-2">
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                }}
                className="text-md"
              >{`\u2022 Nous n’avons pas accès et n’enregistrons aucune de vos données personnelles sur nos serveurs`}</Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                }}
                className="text-md"
              >{`\u2022 Toutes les données financières enregistrées dans l’application appartiennent à l’utilisateur et nous n’y avons pas accès`}</Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                }}
                className="text-md"
              >{`\u2022 TMVBUDGET est une application délocalisée sur le téléphone de l’utilisateur avec un accès personnel réservé à l’utilisateur`}</Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                }}
                className="text-md"
              >{`\u2022 L’utilisateur a la charge d’assurer la sécurité des données enregistrées sur l’application. Ceci en évitant de donner accès à son téléphone ou à l’application, à toute personne autre que lui-même`}</Text>
            </View>
          </View>

          <View className="my-4" style={{}}>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-lg underline mb-3"
            >
              Mise à jour
            </Text>

            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-md my-3"
            >
              Nous nous réservons le droit de mettre à jour nos conditions
              d’utilisation et règles de confidentialité de temps en temps.
              Toute modification à ces règles est mise à jour directement sur
              l’application et prend effet dès lors qu’elle est publiée. Nous
              vous recommandons de prendre connaissance de ces politiques
              périodiquement.
            </Text>
          </View>

          <View className="my-4" style={{}}>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-lg underline mb-3"
            >
              Nous contacter{" "}
            </Text>

            <Text
              style={{
                fontFamily: "OpenSans-Regular",
              }}
              className="text-md my-3"
            >
              N’hésitez pas à nous contacter par mail à l’adresse
              themoneyvisor@gmail.com si vous avez des questions concernant nos
              conditions d’utilisation et règles de confidentialité.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsPDF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
  },
});
