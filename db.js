import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('stats.db');
export const init = () => {
    if (!db) return;
    db.execSync(`
        CREATE TABLE IF NOT EXISTS highscores (
            difficulty TEXT PRIMARY KEY,
            score INTEGER
        );
    `);
};

export const loadScores = () => {
    if (!db) return;
    const scores = {}
    db.getAllSync('SELECT * FROM highscores').forEach(row => {
        scores[row.difficulty] = row.score; });
    return scores;
};

export const saveScore = (difficulty, score) => {
    if (!db) return;
    db.runSync('INSERT OR REPLACE INTO highscores (difficulty, score) VALUES (?, ?)', [difficulty, score]);
};

export const clearScores = () => {
    if (!db) return;
    db.execSync('DELETE FROM highscores;');
};