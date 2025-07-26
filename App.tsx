import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={["#38BDF8", "#10B981"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView className="flex-1">
          <StatusBar style="light" />

          <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View className="px-6 pt-8 pb-4">
              <Text className="text-3xl font-bold text-white mb-2">
                Expo + NativeWind
              </Text>
              <Text className="text-lg text-white/80">
                TypeScript Starter Template
              </Text>
            </View>

            {/* Welcome Card */}
            <View className="mx-6 mb-8">
              <View className="p-6 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                <Text className="text-xl font-semibold mb-3 text-white">
                  Starter Template
                </Text>
                <Text className="text-base leading-6 text-white/80">
                  Built with Expo SDK 53, React Native 0.79, NativeWind v4, and
                  TypeScript.
                </Text>
              </View>
            </View>

            {/* Features Grid */}
            <View className="mx-6 mb-8">
              <Text className="text-xl font-semibold mb-4 text-white">
                What's Included
              </Text>
              <View className="flex-row flex-wrap justify-between">
                {[
                  { title: "Expo SDK 53", desc: "Latest Expo features" },
                  { title: "NativeWind v4", desc: "Tailwind for React Native" },
                  { title: "TypeScript", desc: "Type-safe development" },
                  { title: "EAS Build", desc: "Production ready builds" },
                ].map((feature, index) => (
                  <View
                    key={index}
                    className="w-[48%] p-4 mb-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
                  >
                    <Text className="font-semibold mb-1 text-white">
                      {feature.title}
                    </Text>
                    <Text className="text-sm text-white/80">
                      {feature.desc}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Footer */}
            <View className="mx-6 mb-8">
              <View className="p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/20">
                <Text className="text-center text-white/90">
                  Made with by Siraj AL Zahran
                </Text>
                <Text className="text-center text-sm mt-1 text-white/70">
                  MIT License
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
}
