import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is a component?',
      answer: 'A component is a reusable piece of UI in a React application.',
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension that looks similar to HTML and is used in React.',
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h2>FAQ</h2>
      {data.map((item, index) => (
        <div key={index} style={styles.item}>
          <div onClick={() => toggle(index)} style={styles.question}>
            {item.question}
          </div>
          {activeIndex === index && <div style={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
  },
  item: {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  answer: {
    marginTop: '8px',
    fontSize: '16px',
    color: '#555',
  },
};

export default Accordion;
