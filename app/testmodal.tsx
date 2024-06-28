import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Testmodal() {
    return (
        <View className='flex-1 justify-center items-center'>
            <Pressable onPress={() => router.back()} className='h-full w-full bg-black opacity-50 fixed'></Pressable>
            <View className='w-5/6 h-2/4 bg-primary rounded-3xl absolute items-center justify-around'>
                <View className="flex-row w-5/6 h-9 justify-between">
                    <TouchableOpacity onPress={() => router.back()}>
                        <FontAwesome6 name="arrow-left" size={32} color="black" />
                    </TouchableOpacity>
                    <Text className="font-rbold text-3xl">Créditos</Text>
                    <MaterialCommunityIcons name="teddy-bear" size={40} color="black" />
                </View>
                <View className='items-center'>
                    <Text className='text-xl font-rsemi'>Bruno Litrenta</Text>
                    <Text className='text-xl font-rsemi'>Cauã Lopes</Text>
                    <Text className='text-xl font-rsemi'>Guilherme Heinrich</Text>
                </View>
            </View>
        </View>
    )
}