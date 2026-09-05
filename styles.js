import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
        paddingHorizontal: 15,
        justifyContent: "center",
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
    colorBox: {
        width: "48.5%",
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
        width: 20,
    },
    sliderValue: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        width: 30,
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
});