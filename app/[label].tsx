import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import { workoutData } from '@/datasets/exercises';
import { IExercise } from '@/interfaces/IExercise';

export default function DynamicWorkout() {
    const { label, exercises } = useLocalSearchParams<{label: string, exercises: string}>();
    
    const parsedExercises = JSON.parse(exercises!)

    function filterExercises() {
        return workoutData.filter(wk => parsedExercises?.includes(wk.id))
    }

    const filteredExercises = filterExercises()

    function renderExercise({ item }: { item: IExercise }) {
        return (
            <View className='w-full h-24 bg-lightgreen rounded-2xl items-center justify-center p-2 mb-4'>
                <Text className='font-rsemi text-xl'>{item.exercicio}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView className="flex-1 flex-column justify-evenly items-center">
            <View className="flex-row w-5/6 h-8 justify-between items-center">
                <TouchableOpacity className="h-12 w-10 items-center justify-center" onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={32} color="black" />
                </TouchableOpacity>
                <Text className="font-rbold text-3xl">Treino {label}</Text>
                <TouchableOpacity className="h-12 w-10 items-center justify-center">
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View className='w-5/6 h-5/6 justify-evenly items-center'>
                <FlatList
                    data={filteredExercises}
                    renderItem={renderExercise}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};