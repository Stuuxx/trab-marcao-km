import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Entrada = (props) => {
  const [kmPercorridos, setkmPercorridos] = useState("");
  const [gasolinaUtilizada, setgasolinaUtilizada] = useState("");
  const [msg, setMsg] = useState("Cálculo de KM");

  const { navigation } = props;

  const average = () => {
    if (kmPercorridos && gasolinaUtilizada) {
      const mediaDeConsumo = (kmPercorridos / gasolinaUtilizada).toFixed(2);

      let indicacaoDeConsumo = "";
      if (mediaDeConsumo > 12) {
        indicacaoDeConsumo = "A";
      } else if (mediaDeConsumo > 10 && mediaDeConsumo <= 12) {
        indicacaoDeConsumo = "B";
      } else if (mediaDeConsumo > 8 && mediaDeConsumo <= 10) {
        indicacaoDeConsumo = "C";
      } else if (mediaDeConsumo > 4 && mediaDeConsumo <= 8) {
        indicacaoDeConsumo = "D";
      } else if (mediaDeConsumo < 4) {
        indicacaoDeConsumo = "E";
      }

      navigation.navigate("Saida", {
        mediaDeConsumo,
        indicacaoDeConsumo,
      });

      setkmPercorridos("");
      setgasolinaUtilizada("");
    } else {
      setMsg("Informe dados válidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput
        style={styles.caixaTexto}
        keyboardType="numeric"
        placeholder="KM"
        onChangeText={(valor) => setkmPercorridos(valor)}
        value={kmPercorridos}
      />
      <TextInput
        style={styles.caixaTexto}
        keyboardType="numeric"
        placeholder="Litros de gasolina utilizados"
        onChangeText={(valor) => setgasolinaUtilizada(valor)}
        value={gasolinaUtilizada}
      />
      <View>
        <Button title="Resolver" onPress={() => average()} />
      </View>
    </View>
  );
};

export default Entrada;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  caixaTexto: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    padding: 5,
    marginTop: 5,
  },
});
