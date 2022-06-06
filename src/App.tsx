import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
import QuestionsCard from "./components/QuestionsCard";
import {GlobalStyle, Wrapper} from "./App.style";

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

function App() {
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [number, setNumber] = useState(0);
    const [loading, setLoading] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    // console.log(questions)

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
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;
            if (correct) setScore(prev => prev + 1);
            const answerObj = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers((prev) => [...prev, answerObj]);
        };
    };
    const nextQuestion = () => {
        const nextQuestion = number + 1
        if ( nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion)
        }
    };

    console.log(questions)

    return (
        <>
            <GlobalStyle/>
        <Wrapper>
            <h1>React Quiz</h1>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className='buttonStart' onClick={startTrivia}>
                    Start
                </button>
            ) : null}
            {!gameOver ? <p className='score'>Score:</p> : null}
            {loading && <p>Loading questions...</p>}
            {!gameOver && !loading && (
                <QuestionsCard

                    question={questions[number].question}
                    answers={questions[number].answers}
                    callback={checkAnswer}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    questionNum={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                />
            )}
            {
                !gameOver && !loading && TOTAL_QUESTIONS - 1 !== number && userAnswers.length === number + 1 ?
                    <button className='buttonNext' onClick={nextQuestion}>
                        Next Questions
                    </button> : null
            }

        </Wrapper>
        </>
    );
}

export default App;
