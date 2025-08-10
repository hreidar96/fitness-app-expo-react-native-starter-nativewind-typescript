import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";

export default function Page() {
  const { signOut } = useAuth();
  const { user } = useUser();


  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-6 pt-8 pb-6">
          <Text className="text-3xl font-bold text-gray-900">Profile</Text>
          <Text className="text-lg text-gray-600 mt-1">
            Manage your account and stats
          </Text>
        </View>

        {/* Account Settings */}
        <View className="px-6 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Account Settings
          </Text>

          {/* Settings options */}
          <View className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                <Ionicons name="person-outline" size={20} color="#3B82F6" />
              </View>
              <Text className="text-gray-900 font-medium">Edit Profile</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-3">
                <Ionicons name="notifications-outline" size={20} color="#10B981" />
              </View>
              <Text className="text-gray-900 font-medium">Notifications</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-3">
                  <Ionicons
                    name="help-circle-outline"
                    size={20}
                    color="#F59E0B"
                  />
                </View>
                <Text className="text-gray-900 font-medium">
                  Help & Support
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Out */}
        <View className="px-6 mb-8">
          <TouchableOpacity
            onPress={handleSignOut}
            className="bg-red-600 rounded-2xl p-4 shadow-sm"
            activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-center">
                <Ionicons name="log-out-outline" size={20} color="white" />
                <Text className="text-white font-semibold text-lg ml-2">
                  Sign Out
                  </Text> 
              </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
