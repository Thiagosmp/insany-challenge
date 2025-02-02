import React, { useState } from 'react'
import { ContentQuestionExpand, Response } from './styles'

const QuestionsFrequent = [
  "Quais recursos ainda posso acessar nas novas Páginas?",
  "Como faço para abrir a minha nova Página?",
  "Há algum conteúdo que não migrará com a minha Página?",
  "Como as pessoas encontrarão a minha nova Página?",
  "O que é o Feed? Como faço para configurá-lo?",
]



const QuestionFrequentExpand = () => {
  const [activeIndex, setActiveIndex] = useState(null as null | number);

  const toggleMore = (index : number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ContentQuestionExpand>
      {QuestionsFrequent.map((question, index) => (
        <div key={index} className="content">
          <div className="questions">
            <div>
              <span>{index < 9 ? "0" + (index + 1) : index + 1}</span>
              <h3>{question}</h3>
            </div>
            <button onClick={() => toggleMore(index)}>
              {activeIndex === index ? "-" : "+"}
            </button>
          </div>

          <Response $active={activeIndex === index}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, diam id placerat elementum, nunc tortor
              ultricies lorem, nec varius eros ipsum et dolor.
            </p>
          </Response>
        </div>
      ))}
    </ContentQuestionExpand>
  )
}

export default QuestionFrequentExpand