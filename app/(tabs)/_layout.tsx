import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#00000065',
            tabBarStyle: { backgroundColor: "#D6D984", height: "7%" }
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Início',
                tabBarIcon: ({ color }) => <FontAwesome6 size={32} name="house" color={color} />,
                headerShown: false,
                tabBarShowLabel: false,
            }} />
            <Tabs.Screen name='workoutPlan' options={{
                title: 'Treinos',
                tabBarIcon: ({ color }) => <FontAwesome6 size={32} name="dumbbell" color={color} />,
                headerShown: false,
                tabBarShowLabel: false,
            }} />
            <Tabs.Screen name='progress' options={{
                title: 'Progresso',
                tabBarIcon: ({ color }) => <FontAwesome5 size={38} name="chart-line" color={color} />,
                headerShown: false,
                tabBarShowLabel: false,
            }} />
            <Tabs.Screen name='profile' options={{
                title: 'Perfil',
                tabBarIcon: ({ color }) => <FontAwesome6 size={32} name="user-large" color={color} />,
                headerShown: false,
                tabBarShowLabel: false,
            }} />
        </Tabs>
    );
};

export default TabsLayout;