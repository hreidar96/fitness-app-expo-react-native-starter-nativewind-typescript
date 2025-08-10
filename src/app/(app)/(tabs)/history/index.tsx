import { SafeAreaView, Text, View } from "react-native";

export default function Page() {
    return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-6 py-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900">
          Workout History
        </Text>
        </View>
    </SafeAreaView>
    )
}