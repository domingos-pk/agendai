import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { View, ActivityIndicator } from "react-native";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingDone, setOnboardingDone] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        // Cria um timeout de 2 segundos. Se o SecureStore travar (comum em Emuladores Android sem PIN configurado), ele avança.
        const timeoutPromise = new Promise<string | null>((resolve) => 
          setTimeout(() => resolve(null), 2000)
        );

        const value = await Promise.race([
          SecureStore.getItemAsync("agendai_onboarding_done"),
          timeoutPromise
        ]);

        if (value === "true") {
          setOnboardingDone(true);
        }
      } catch (e) {
        console.error("Erro ao ler status do onboarding:", e);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboarding();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return <Redirect href={onboardingDone ? "/welcome" : "/onboarding"} />;
};

export default Index;
