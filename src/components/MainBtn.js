import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";

export default function MainBtn({ children, onPress }) {
  return (
    <View style={styles.btn}>
      <Pressable  onPress={onPress}>
        <Text style={styles.textBtn}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get("window").width / 2.5,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#39AB8C",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  textBtn: {
    color: "#39AB8C",
    fontSize: 20,
  },
});
