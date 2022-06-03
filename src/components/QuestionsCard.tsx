import React from 'react';

type questionsCardType = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;   //string
    questionNum: number;
    totalQuestions: number;
}

const QuestionsCard: React.FC<questionsCardType> =
    ({
         question,
         answers,
         callback,
         userAnswer,
         questionNum,
         totalQuestions,
     }) => {

        return (
            <div>
                <p className='number'>
                    {questionNum} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: question }}/>
                <div>
                    {answers.map( answer => (
                        <div>
                            <button disabled={userAnswer} onClick={callback}></button>
                            <span dangerouslySetInnerHTML={{ __html: answer}}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

export default QuestionsCard