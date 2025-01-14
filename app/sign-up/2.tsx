import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, Stack } from "expo-router";
import { Button } from "../../components/Button";
import { useWizard } from "@/data/hooks/useWizard";

const Screen3 = () => {
  const router = useRouter();
  const { previousStep, nextStep } = useWizard();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerLeft: () => null }} />
      <Button
        label="Previous"
        onPress={() => {
          router.dismiss();
          previousStep();
        }}
      />
      <Text style={styles.text}>Step 2</Text>
      <Button
        label="Next"
        onPress={() => {
          router.push("/sign-up/3");
          nextStep();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Screen3;
