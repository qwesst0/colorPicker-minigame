import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    mainContent: {
        width: "100%",
    },

    diffContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    diffButton: {
        flex: 1,
        backgroundColor: "#222222",
        paddingVertical: 12,
        borderRadius: 8,
        marginHorizontal: 2,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#333333",
    },
    diffButtonActive: {
        backgroundColor: "#9d8f64",
        borderColor: "#9d8f64",
    },
    diffText: {
        color: "#888888",
        fontSize: 12,
        fontWeight: "bold",
        alignItems: "center",
    },
    diffTextActive: {
        color: "#141414",
    },

    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
        backgroundColor: "#1e1e1e",
        paddingHorizontal: 12,
        height: 48,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#2a2a2a",
    },
    scoreSlot: {
        width: 90,
        justifyContent: "center",
    },
    scoreText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    marginSlot: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    marginText: {
        color: "#aaa",
        fontSize: 16,
        fontWeight: "600",
    },
    timerSlot: {
        width: 90,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    timerContainer: {
        backgroundColor: "#2a2a2a",
        width: 62,
        height: 28,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    timerText: {
        color: "#ffe590",
        fontSize: 15,
        fontWeight: "bold",
    },

    comparisonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    box: {
        flex: 1,
        alignItems: "center",
        marginHorizontal: 5,
    },
    boxLabel: {
        color: "#aaaaaa",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 6,
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    colorBox: {
        width: "100%",
        height: 160,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#333333",
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center",
    },
    impossibleBox: {
        borderStyle: "dashed",
        borderColor: "#444444",
    },
    impossibleRgbText: {
        color: "#ffe590",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    controlsContainer: {
        backgroundColor: "#1e1e1e",
        borderRadius: 8,
        padding: 14,
        borderWidth: 2,
        borderColor: "#2a2a2a",
        marginBottom: 15,
    },
    slider: {
        flex: 1,
        height: 30,
        marginHorizontal: 8,
    },
    sliderRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 4,
    },
    sliderLabel: {
        fontSize: 20,
        fontWeight: "bold",
        width: 35,
    },
    sliderValue: {
        fontSize: 18,
        fontWeight: "bold",
        width: 35,
        textAlign: "right",
    },

    button: {
        backgroundColor: "#9d8f64",
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: "center",
    },
    checkButton: {
        backgroundColor: "#55ff55",
    },
    nextButton: {
        backgroundColor: "#5599ff",
    },
    buttonText: {
        color: "#141414",
        fontSize: 20,
        fontWeight: "bold",
    },

    messageSlot: {
        width: "100%",
        height: 110,
        alignItems: "center",
        marginTop: 15,
    },
    resultContainer: {
        width: "100%",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "transparent",
        padding: 8,
        justifyContent: "center",
    },
    resultText: {
        fontSize: 16,
        textAlign: "center",
    },
    resultError: {
        backgroundColor: "#261a1a",
        borderColor: "#4a2525",
    },
    resultSuccess: {
        backgroundColor: "#1a261a",
        borderColor: "#254a25",
    },
    resultTextError: {
        color: "#ff8888",
    },
    resultTextSuccess: {
        color: "#88ff88",
    },


    statsCard: {
        backgroundColor: "#1e1e1e",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#2a2a2a",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    statsTitle: {
        color: "#ffffff",
        fontSize: 42,
        fontWeight: "bold",
        letterSpacing: 4,
        textAlign: "center",
        marginBottom: 24,
        textTransform: "uppercase",

    },
    statRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 18,
        borderBottomWidth: 2,
        borderBottomColor: "#2a2a2a",
    },
    statLabel: {
        color: "#aaaaaa",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 2,
        marginEnd: 50
    },
    statValue: {
        color: "#ffe590",
        fontSize: 20,
        fontWeight: "bold",
    },
    resetButton: {
        marginTop: 30,
        width: "60%",
        backgroundColor: "#2a1a1a",
        borderColor: "#ff4444",
        borderWidth: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    resetButtonText: {
        color: "#ff6666",
        fontSize: 18,
        fontWeight: "bold",
    },
});