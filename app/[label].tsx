import { View, Text, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { workoutData } from '@/datasets/exercises';
import { IExercise } from '@/interfaces/IExercise';

export default function DynamicWorkout() {
    const { label, exercises } = useLocalSearchParams<{ label: string, exercises: string }>();

    const parsedExercises: number[] = JSON.parse(exercises!)

    const [exercisesCompleted, setExercisesCompleted] = useState<Array<number>>([])

    function filterExercises() {
        return workoutData.filter(wk => parsedExercises?.includes(wk.id))
    }

    const filteredExercises = filterExercises()

    function renderExercise({ item }: { item: IExercise }) {

        const foundExercise = exercisesCompleted.find(ex => ex == item.id);

        return (
            <View className='w-full h-24 bg-lightgreen rounded-2xl items-center justify-center p-2 mb-4 flex-row justify-around'>
                <Pressable className='w-12 h-12 items-center justify-center' onPress={() => { foundExercise ? setExercisesCompleted(exercisesCompleted.filter(ex => ex != item.id)) : setExercisesCompleted((pv) => [...pv, item.id]) }}>
                    {
                        foundExercise
                            ? <FontAwesome5 name="check-square" size={32} color="black" />
                            : <FontAwesome5 name="square" size={32} color="black" />
                    }
                </Pressable>
                <Text className='font-rsemi text-xl w-1/2 text-center'>{item.exercicio}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView className="flex-1 flex-column justify-evenly items-center">
            <View className="flex-row w-5/6 h-8 justify-between items-center">
                <TouchableOpacity className="h-12 w-10 items-center justify-center" onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left" size={32} color="black" />
                </TouchableOpacity>
                <Text className="font-rbold text-3xl">Treino {label}</Text>
                <Link asChild href={{
                    pathname:'workoutOptionsModal',
                    params:{label: label}
                }}>
                    <TouchableOpacity className="h-12 w-10 items-center justify-center">
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </TouchableOpacity>
                </Link>
            </View>
            <View className='w-5/6 h-4/6 justify-evenly items-center'>
                <FlatList
                    data={filteredExercises}
                    renderItem={renderExercise}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};