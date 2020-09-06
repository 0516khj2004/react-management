import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id': 1,
    'img': 'https://placeimg.com/64/64/1',
    'name': '구현진',
    'birthday': '960516',
    'gender': '여자',
    'job': '직딩',
  },
  {
    'id': 2,
    'img': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '960516',
    'gender': '여자',
    'job': '직딩',
  },
  {
    'id':3,
    'img': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '960516',
    'gender': '여자',
    'job': '직딩',
  },
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              key = {c.id}
              id = {c.id}
              img = {c.img}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          )
        })
      }
    </div>   
  );
}

export default App;
