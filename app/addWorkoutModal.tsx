import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { workoutLabels } from '@/constants/workoutLabels';

const AddWorkoutModal = () => {

  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)

  return (
    <View className='flex-1 justify-center items-center'>
      <Pressable onPress={() => router.back()} className='h-full w-full bg-black opacity-50 fixed'></Pressable>
      <View className='w-11/12 h-3/4 bg-primary rounded-3xl absolute items-center justify-around'>
        <View className="flex-row w-5/6 h-8 justify-between items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome6 name="arrow-left" size={32} color="#0d0d0d" />
          </TouchableOpacity>
          <Text className="font-rbold text-3xl text-textcolor">Novo treino</Text>
          <FontAwesome6 name="dumbbell" size={28} color="#0d0d0d" />
        </View>
        <View className='flex-row w-11/12 justify-around'>
          {
            workoutLabels.map((label, index) => {
              return (
                <Pressable onPress={() => setSelectedLabel(label)} key={index}>
                  <Text className={selectedLabel == label ? 'font-rbold text-5xl text-stronggreen' : 'font-rbold text-5xl text-secondary'}>{label}</Text>
                </Pressable>
              )
            })
          }
        </View>
      </View>
    </View>
  )
}

export default AddWorkoutModal;