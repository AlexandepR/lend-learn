import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
import QuestionsCard from "./components/QuestionsCard";
import {log} from "util";

const TOTAL_QUESTIONS = 10

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

function App() {
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [number, setNumber] = useState(0)
    const [loading, setLoading] = useState(false)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0)
        setLoading(false)
    };
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    };
    const nextQuestion = () => {
    };

    return (
        <div className="App">
            <h1>React Quiz</h1>
            <button className='buttonStart' onClick={startTrivia}>
                Start
            </button>
            <p className='score'>Score:</p>
            {loading ? <p>Loading questions...</p> : ''}
            {/*<QuestionsCard*/}
            {/*    question={questions[number].question}*/}
            {/*    answers={questions[number].answers}*/}
            {/*    callback={checkAnswer}*/}
            {/*    userAnswer={userAnswers ? userAnswers[number] : undefined}*/}
            {/*    questionNum={number + 1}*/}
            {/*    totalQuestions={TOTAL_QUESTIONS}*/}
            {/*/>*/}
            <button className='buttonNext' onClick={nextQuestion}>
                Next Questions
            </button>
        </div>
    );
}

export default App;
