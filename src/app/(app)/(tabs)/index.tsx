import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Page(){
  const { user } = useUser();
  const router = useRouter();


  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView 
        className="flex-1">
        {/* 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
          */}
        
        {/* Header */}
        <View className="px-6 pt-8 pb-6">
          <Text className="text-lg text-gray-600">Welcome back,</Text>
          <Text className="text-3xl font-bold text-gray-900">
            {user?.firstName || "Athlete"}! 💪
          </Text>
        </View>

        {/* Stats Overview */}
        <View className="px-6 mb-6">
          <View className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Your Stats
            </Text>
            <View className="flex-row justify-between">
              <View className="items-center flex-1">
                <Text className="text-2xl font-bold text-blue-600">
                  25
                </Text>
                <Text className="text-sm text-gray-600 text-center">
                  Total{"\n"}Workouts
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick actions */}
        <View className="px-6 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </Text>

          {/* Start workout button */}
          <TouchableOpacity
            onPress={() => router.push("/workout")}
            className="bg-blue-600 rounded-2xl p-6 mb-4 shadow-sm"
            activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                <View className="w-12 h-12 bg-blue-500 rounded-full items-center justify-center mr-4">
                  <Ionicons name="play" size={24} color="white" />
                </View>
                <View>
                  <Text className="text-white text-xl font-semibold">
                    Start Workout
                  </Text>
                  <Text className="text-blue-100">
                    Begin your training session
                  </Text>
                </View>
                </View>
                <Ionicons name="chevron-forward" size={24} color="white" />
              </View>
            </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}