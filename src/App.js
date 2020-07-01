import React, { Component } from 'react';
import About from './components/About'
import Employees from './components/Employees'
import staff from './data/staff.json'

import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      heroText: 'Execution is everything',
      about: {
        title: 'WHO WE ARE',
        text: 'We are a team of creatively diverse, driven, and innovative individuals working to achive the best we can'
      },
      mission: {
        title: 'OUR MISSION ',
        text: 'We want to give our clients the best and help their business suceed. Together we can make you inspire to growth to even more then where you are today.'
      },
      employees: []
    }
  }

  

  loadRandomArr() {
    let arrLength = 6
    let arr = [];
    while (arr.length < arrLength) {
      let r = Math.floor(Math.random() * 100) + 1;
      if (arr.indexOf(r) === -1) {
        arr.push(r)
      }
    }
    return arr
  }

  loadEmployees = () => {
    let employeesIndecies = this.loadRandomArr()
    let employeesArr = []
    for (let i = 0; i < employeesIndecies.length; i++) {
      let employee = staff[employeesIndecies[i]]
      employeesArr.push(employee)
    }

    this.setState({
      employees: employeesArr
    })
  }

  componentDidMount() {
    this.loadEmployees()
  }

  render() {

    const { employees, heroText, about, mission } = this.state
    return (
      <div className="container">
        <About heroText={heroText} about={about} mission={mission} />
        {employees &&    
             <Employees employees={employees} />
        }
      </div>
    );
  }
}

export default App;
