import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView, Text, TextInput, View } from "react-native";

export default function Page() {
    const router = useRouter()

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="px-6 py-4 bg-white border-b border-gray-200">  
                <Text className="text-2xl font-bold text-gray-900">
                    Exercise Library
                </Text>
                <Text className="text-gray-600 mt-1">
                    Discover and master new excercises
                </Text>

                {/* Search bar */}
                <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mt-4">
                    <Ionicons name="search" size={20} color="#6B7280" />
                    <TextInput
                        className="flex-1 ml-3 text-gray-800"
                        placeholder="Search exercises..."
                        placeholderTextColor="#9CA3AF"
                        // implementa leitina
                        />
                        
                </View>
            </View>
        </SafeAreaView>
    )
}