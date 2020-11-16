import React from 'react'
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'A front end JS library.'
  },
  {
    title: 'Why use React?',
    content: 'It is a favorite among developers.'
  },
  {
    title: 'How do you use React?',
    content: 'By creating components.'
  }
]

export default () => {
  return (
    <h1>
      <Accordion items={items} />
    </h1>
  )
};
