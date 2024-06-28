import { FontAwesome5, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { months, weeks } from "../constants/Calendar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calendario() {

    const [monthLength, setMonthLength] = useState<number[]>([]);
    const monthIndex: number = new Date().getMonth();
    const year: number = new Date().getFullYear();
    const monthName: string = months[monthIndex];

    useEffect(() => {
        getMonthLength();
    }, [year, monthIndex]);

    const getFirstDayOfWeek = useCallback((year: number, monthIndex: number): number => {
        const firstDayOfMonth: Date = new Date(year, monthIndex, 1);
        return firstDayOfMonth.getDay();
    }, []);

    const getMonthLength = useCallback(() => {
        const daysInMonth: number = new Date(year, monthIndex + 1, 0).getDate();
        setMonthLength(Array.from({ length: daysInMonth }, (_, index) => index + 1));
    }, [year, monthIndex]);

    const firstDay = useMemo(() => getFirstDayOfWeek(year, monthIndex), [getFirstDayOfWeek, year, monthIndex]);

    return (
        <SafeAreaView className="flex-1 flex-column justify-evenly items-center">
            <View className="flex-row w-5/6 h-8 justify-between">
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={32} color="black" />
                </TouchableOpacity>
                <Text className="font-rbold text-3xl">Calendário</Text>
                <FontAwesome5 name="calendar-alt" size={32} color="black" />
            </View>
            <View className="flex-row w-11/12 justify-evenly">
                <View className="items-center">
                    <Text className="font-rsemi">X</Text>
                    <Text className="font-rregular">treinos</Text>
                </View>
                <View className="items-center">
                    <Text className="font-rsemi">X</Text>
                    <Text className="font-rregular">metas alcançadas</Text>
                </View>
                <View className="items-center">
                    <Text className="font-rsemi">X</Text>
                    <Text className="font-rregular">streaks</Text>
                </View>
            </View>
            <View className="w-5/6 h-2/5 bg-secondary rounded-3xl justify-evenly items-center">
                <Text className="text-white font-rsemi text-3xl">{monthName}</Text>
                <View className="flex-row w-72">
                    {
                        weeks[firstDay].map((day, index) => (
                            <View key={index} className="w-10 h-10 items-center">
                                <Text className="text-center font-rsemi text-lightgreen text-2xl">{day}</Text>
                            </View>
                        ))
                    }
                </View>
                <View className="flex-row flex-wrap w-72">
                    {
                        monthLength.map(day => {
                            return (
                                <View key={day} className="w-10 h-10 items-center">
                                    <Text className="font-rregular text-xl text-white">{day}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <MaterialCommunityIcons name="teddy-bear" size={144} color="black" />
        </SafeAreaView>
    );
}