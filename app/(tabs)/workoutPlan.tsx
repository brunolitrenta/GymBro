import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { weekDays } from "@/constants/weekDays";

export default function Index() {

  const dayWeek = new Date().getDay()

  return (
    <SafeAreaView className="flex-1 items-center justify-evenly bg-primary">
      <View className="flex-row w-5/6 h-8 justify-between">
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome6 name="arrow-left" size={32} color="textcolor" />
        </TouchableOpacity>
        <Text className="font-rbold text-3xl color-textcolor">Treinos</Text>
        <TouchableOpacity>
          <FontAwesome6 name="plus" size={34} color="textcolor" />
        </TouchableOpacity>
      </View>
      <Link asChild href="calendar">
        <Pressable className="w-5/6 h-32 flex-row justify-between items-center">
          <View className="bg-secondary w-20 h-20 rounded-full justify-center items-center">
            <Text className="text-white font-rsemi">{weekDays[(dayWeek + 6) % 7]}</Text>
            <View className="w-5 h-5 bg-reallygray rounded justify-center items-center">
              <Text className="text-white font-rregular">-</Text>
            </View>
          </View>
          <View className="bg-secondary w-28 h-28 rounded-full justify-center items-center">
            <Text className="text-white font-rsemi text-xl">{weekDays[dayWeek]}</Text>
            <View className="w-6 h-6 bg-reallygray rounded justify-center items-center">
              <Text className="text-white font-rregular">-</Text>
            </View>
          </View>
          <View className="bg-secondary w-20 h-20 rounded-full justify-center items-center">
            <Text className="text-white font-rsemi">{weekDays[(dayWeek + 1) % 7]}</Text>
            <View className="w-5 h-5 bg-reallygray rounded justify-center items-center">
              <Text className="text-white font-rregular">-</Text>
            </View>
          </View>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
