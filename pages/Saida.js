import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Saida = (props) => {
  const { navigation, route } = props;
  const { mediaDeConsumo, indicacaoDeConsumo } = route.params;

  return (
    <View style={styles.container}>
      <Text>Média de consumo: {mediaDeConsumo}</Text>
      <Text>Indicação de consumo: {indicacaoDeConsumo}</Text>
      <View>
        <Button
          title="Retornar"
          onPress={() => navigation.navigate("Entrada")}
        />
      </View>
    </View>
  );
};

export default Saida;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
