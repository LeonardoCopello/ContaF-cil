import { StyleSheet, Text, View, Image } from "react-native";
import MainBtn from "../components/MainBtn";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/conta_facil.png')} />
      <Text style={styles.text}>Conta Fácil</Text>
      <MainBtn
        onPress={() => navigation.navigate('MainScreen')}>
        Iniciar
      </MainBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C6FFA8",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: '50%',
    height: '50%',
  },
  text: {
    fontSize: 30,
    color: '#39AB8C',
    marginBottom: 20,
  },
  
});
