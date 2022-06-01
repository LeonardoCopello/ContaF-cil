import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const imageSide = Dimensions.get('window').width / 5;
export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Conta Fácil</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/conta_facil.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    color: "#39AB8C",
  },
  image: {
    width: imageSide,
    height: imageSide,
  },
});
