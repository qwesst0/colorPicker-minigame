import {useEffect, useState} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import { styles } from "../styles";

const difficulties = {
    easy:       { label: "Легко", tolerance: 80, time: 20 },
    medium:     { label: "Нормально", tolerance: 50, time: 15 },
    hard:       { label: "Сложно", tolerance: 30, time: 10 },
    hardcore:   { label: "Хардкор", tolerance: 15, time: 7 },
    impossible: { label: "Невозможно", tolerance: 5, time: 10 },
};
const sliders = [
    { key: "r", label: "R", color: "#ff0000" },
    { key: "g", label: "G", color: "#00ff00" },
    { key: "b", label: "B", color: "#0065ff" },
];

export default function App() {
    const [targetColor, setTargetColor] = useState({ r: 0, g: 0, b: 0 });
    const [userColor, setUserColor] = useState({ r: 128, g: 128, b: 128 });
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);

    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [roundWon, setRoundWon] = useState(false);

    const [difficulty, setDifficulty] = useState("medium");
    const isImpossible = difficulty === "impossible";
    const [resultMessage, setResultMessage] = useState(null);

    const generateNewTarget = (difficultyKey = difficulty) => {
        setTargetColor({
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256),
        });
        setUserColor({ r: 128, g: 128, b: 128 });
        setTimeLeft(difficulties[difficultyKey].time);
    };

    const startGame = () => { setScore(0); setGameOver(false); setRoundWon(false);
        setGameStarted(true); setResultMessage(null); generateNewTarget(difficulty); };
    const nextRound = () => { setRoundWon(false); setResultMessage(null); generateNewTarget(difficulty); };

    const checkColor = () => {
        const targetRgbStr = `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`;
        const userRgbStr = `rgb(${userColor.r}, ${userColor.g}, ${userColor.b})`;

        const currentTolerance = difficulties[difficulty].tolerance;
        const totalMiss =
            Math.abs(targetColor.r - userColor.r) +
            Math.abs(targetColor.g - userColor.g) +
            Math.abs(targetColor.b - userColor.b);

        const isSuccess = totalMiss <= currentTolerance;
        if (isSuccess) {
            setScore((prev) => prev + 1);
            setRoundWon(true);
        }
        else {
            setGameOver(true);
            setGameStarted(false);
        }
        setResultMessage({
            success: isSuccess,
            text: `${isSuccess ? "Совпало!" : "Не совпало!"}\nПромах: ${totalMiss} (допуск: ${currentTolerance})\nЦель: ${targetRgbStr}\nВаш: ${userRgbStr}`
        });
    };

    const selectDifficulty = (key) => { setDifficulty(key); setScore(0); setGameStarted(false);
        setGameOver(false); setRoundWon(false); setResultMessage(null); setTimeLeft(difficulties[key].time); };

    useEffect(() => { generateNewTarget() }, []);

    useEffect(() => {
        if (!gameStarted || gameOver || roundWon) return;

        const timer = setInterval(() => { setTimeLeft((prev) => Math.max(prev - 0.1, 0)); }, 100);
        return () => clearInterval(timer);
    }, [gameStarted, gameOver, roundWon]);

    useEffect(() => { if (timeLeft === 0 && gameStarted && !gameOver && !roundWon) checkColor(); },
        [timeLeft, gameStarted, gameOver, roundWon]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.mainContent}>
                    <View style={styles.diffContainer}>
                        {Object.keys(difficulties).map((key) => (
                            <TouchableOpacity style={[styles.diffButton, difficulty === key && styles.diffButtonActive]}
                                              key={key} onPress={() => selectDifficulty(key)}
                                              disabled={gameStarted && !gameOver}
                            >
                                <Text style={[styles.diffText, difficulty === key && styles.diffTextActive]}>
                                    {difficulties[key].label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.infoRow}>
                        <View style={styles.scoreSlot}>
                            <Text style={styles.scoreText}>Очки: {score}</Text>
                        </View>

                        <View style={styles.marginSlot}>
                            <Text style={styles.marginText}>Допуск: {difficulties[difficulty].tolerance}</Text>
                        </View>

                        <View style={styles.timerSlot}>
                            <View style={styles.timerContainer}>
                                <Text style={[styles.timerText, timeLeft <= 3 && {color: "#ff6666"}]}>
                                    {timeLeft.toFixed(1)}с
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.comparisonContainer}>
                        <View style={[styles.colorBox, (!gameStarted && !roundWon && !gameOver)
                                ? { backgroundColor: "#2a2a2a", justifyContent: "center", alignItems: "center" }
                                : { backgroundColor: `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})` }]
                        }>
                            {!gameStarted && !roundWon && !gameOver &&
                                (<Text style={{ fontSize: 130, color: "#888666", fontWeight: "bold" }}>?</Text>)}
                        </View>

                        <View style={[styles.colorBox,
                            {backgroundColor: isImpossible ? "#1a1a1a"
                                    : `rgb(${userColor.r}, ${userColor.g}, ${userColor.b})`},
                            isImpossible && styles.impossibleBox
                        ]}>
                            {isImpossible ? (
                                <Text style={styles.impossibleRgbText}>
                                    rgb({userColor.r}, {userColor.g}, {userColor.b})
                                </Text>
                            ) : null}
                        </View>
                    </View>

                    <View style={styles.controlsContainer}>
                        {sliders.map((item) => (
                            <View style={styles.sliderRow} key={item.key}>
                                <Text style={[styles.sliderLabel, {color: item.color}]}>{item.label}</Text>
                                <Slider style={styles.slider}
                                        onValueChange={(value) => setUserColor((prev) =>
                                            ({ ...prev, [item.key]: value | 0 }))}
                                        minimumValue={0} maximumValue={255} step={1}
                                        value={userColor[item.key]}
                                        minimumTrackTintColor={item.color} maximumTrackTintColor="#555555"
                                        thumbTintColor={item.color}
                                        disabled={!gameStarted || roundWon}
                                />
                                <Text style={styles.sliderValue}>{userColor[item.key] | 0}</Text>
                            </View>
                        ))}
                    </View>

                    {!gameStarted ? (
                        <TouchableOpacity style={styles.button} onPress={startGame}>
                            <Text style={styles.buttonText}>{gameOver ? "Заново" : "Старт"}</Text>
                        </TouchableOpacity>
                    ) : roundWon ? (
                        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={nextRound}>
                            <Text style={styles.buttonText}>Следующий раунд</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.button, styles.checkButton]} onPress={checkColor}>
                            <Text style={styles.buttonText}>Проверить</Text>
                        </TouchableOpacity>
                    )}

                    <View style={styles.messageSlot}>
                        <View style={[styles.resultContainer, resultMessage ?
                            (resultMessage.success ? styles.resultSuccess : styles.resultError) : undefined]}>
                            <Text style={[
                                styles.resultText, resultMessage ?
                                (resultMessage.success ? styles.resultTextSuccess : styles.resultTextError) : undefined
                            ]}>{resultMessage ? resultMessage.text : ""}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}