import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";
import Title from "../components/Title";
import MainBtn from "../components/MainBtn";
export default function MainScreen({ navigation }) {
  const [newPrice, setNewPrice] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [priceAndProductList, setPriceAndProductList] = useState([]);
  const [nrClients, setNrClients] = useState("");
  const [total, setTotal] = useState(0);

  function insertItems() {
    if (newProduct == "" || newPrice == "") {
      alert("Preencha com um Produto e seu Valor");
    } else {
      if (isNaN(newPrice)) {
        alert("Insira um valor válido");
      } else {
        let id = Math.random().toString();
        setPriceAndProductList([
          ...priceAndProductList,
          { id: id, price: newPrice, product: newProduct },
        ]);
        Keyboard.dismiss();
      }
    }
  }

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < priceAndProductList.length; i++) {
      let itemNumber = Number(priceAndProductList[i].price);
      total += itemNumber;
    }
    let itemTwoDigits = total.toFixed(2);
    setTotal(itemTwoDigits);
  }, [priceAndProductList]);

  function showList(itemData) {
    return (
      <View style={styles.resultContainerRow}>
        <Text style={styles.textResult}>{itemData.item.product}</Text>
        <Text style={styles.textResult}>
          {Number(itemData.item.price).toFixed(2)}
        </Text>
      </View>
    );
  }
  function calculate() {
    if (nrClients == "") {
      alert("Insira o Nr de Clientes da Mesa");
    } else {
      if (total == 0) {
        alert("A conta está zerada");
      } else {
        navigation.navigate("Results", { nrClients: nrClients, bill: total });
      }
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Title />
      <View style={{ width: "100%" }}>
        <Text style={styles.titleInput}>Item</Text>
        <TextInput
          style={styles.inputContainer}
          value={newProduct}
          onChangeText={(text) => setNewProduct(text)}
        />
      </View>
      <View style={styles.containerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titleInput}>Valor</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.inputContainer}
            value={newPrice}
            onChangeText={(text) => setNewPrice(text)}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <MainBtn onPress={insertItems}>Incluir</MainBtn>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.containerList}
        data={priceAndProductList}
        keyExtractor={(item) => item.id}
        renderItem={showList}
      />
      <View style={styles.resultContainerRow}>
        <Text style={styles.textResult}>Total:</Text>
        <Text style={styles.textResult}>{total}</Text>
      </View>
      <View style={styles.clientsContainerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titleInput}>Qde Pessoas</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.inputContainer}
            value={nrClients}
            onChangeText={(text) => setNrClients(text)}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <MainBtn onPress={calculate}>Calcular</MainBtn>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#C6FFA8",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  inputContainer: {
    backgroundColor: "white",
    paddingLeft: 10,
    height: 40,
    borderRadius: 5,
  },
  titleInput: {
    fontSize: 25,
    color: "#39AB8C",
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  containerList: {
    width: "100%",
    marginTop: 20,
    padding: 20,
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderColor: "#39AB8C",
    borderRadius: 5,
  },
  textResult: {
    fontSize: 30,
    color: "#39AB8C",
  },
  resultContainerRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  clientsContainerRow: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
