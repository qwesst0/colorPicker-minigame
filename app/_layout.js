import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#1a1a1a", borderTopColor: "#333333", borderTopWidth: 2, height: 60 },
                tabBarActiveTintColor: "#888666",
                tabBarInactiveTintColor: "#595959",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Игра",
                    tabBarLabel: "Игра",
                    tabBarLabelStyle: { fontSize: 18 },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="game-controller-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="stats"
                options={{
                    title: "Рекорды",
                    tabBarLabel: "Статистика",
                    tabBarLabelStyle: { fontSize: 18 },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="trophy-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}