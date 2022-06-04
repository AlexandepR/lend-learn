import {shuffleArray} from "./utils";

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export type QuestionsType = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}
export type QuestionState = QuestionsType & { answers: string[] }

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = (`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`)
    const data = await (await fetch(endpoint)).json();
    // console.log(data)
    // return data.results
    return data.results.map((question: QuestionsType) => ({
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
            ]),
        }));
};
