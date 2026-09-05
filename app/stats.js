import {useCallback, useState} from "react";
import {View, Text, Alert, TouchableOpacity} from "react-native";
import { loadScores, init, clearScores } from "../db";
import { styles } from "../styles";
import {useFocusEffect} from "expo-router";

const difficulties = [
    { key: "easy", label: "Легко" },
    { key: "medium", label: "Нормально" },
    { key: "hard", label: "Сложно" },
    { key: "hardcore", label: "Хардкор" },
    { key: "impossible", label: "Невозможно" },
];

export default function StatsScreen() {
    const [scores, setScores] = useState({});

    const reset = () => {
        Alert.alert(
            "Сброс статистики",
            "Удалить все рекорды?\nЭто действие необратимо",
            [
                { text: "Отмена" },
                {
                    text: "Сбросить",
                    style: "destructive",
                    onPress: () => {
                        clearScores();
                        setScores({});
                    },
                },
            ]
        );
    };

    useFocusEffect(
        useCallback(() => {
            init();
            setScores(loadScores() || {});
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.statsTitle}>Статистика</Text>
            <View style={styles.statsCard}>
                {difficulties.map(({ key, label }, index) => (
                    <View style={[styles.statRow, index === difficulties.length - 1 && {borderBottomWidth: 0}]} key={key}>
                        <Text style={styles.statLabel}>{label}</Text>
                        <View style={styles.timerContainer}>
                            <Text style={styles.statValue}>{scores[key] ?? 0}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={reset}>
                <Text style={styles.resetButtonText}>Сбросить рекорды</Text>
            </TouchableOpacity>
        </View>
    );
}