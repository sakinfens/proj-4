import React from 'react'

import Meal from './Meal.js'
import Form from './Form.js'
import Header from './Header.js'
import '../App.css';


let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  console.log('this is for heroku');
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    }
  }

  fetchMeals = () => {
    fetch(`${baseUrl}/meals`)
    .then(data => data.json())
    .then(jData => {
      this.setState({
        meals: jData
      })
    }).catch(err => console.log(err))
  }

  handleCreate = (createData) => {
    fetch(`${baseUrl}/meals`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdMeal => {
      return createdMeal.json()
    }).then(jsonedMeal => {
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.meals = jsonedMeal
        return {
          meals: prevState.meals
        }
      })
    }).catch(err => console.log(err))
  }

  handleUpdate = (updateData) => {
    fetch(`${baseUrl}/meals/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(updatedMeal => {
      this.props.handleView('home')
      this.fetchMeals()
    }).catch(err => console.log(err))
  }

  handleDelete = (id) => {
    fetch(`${baseUrl}/meals/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(json => {
      this.setState(prevState => {
        const meals = prevState.meals.filter(meal => meal.id !== id)
        return { meals }
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchMeals()
  }

  render () {
    return (

      <main>
      <Header />
      <h1>{this.props.view.pageTitle}</h1>
      { this.props.view.page === 'home' ?
        this.state.meals.map((mealData) => (
        <Meal
          key={mealData.id}
          mealData={mealData}
          handleView={this.props.handleView}
          handleDelete={this.handleDelete}
        />
      ))
      : <Form
        handleCreate={this.handleCreate}
        formInputs={this.props.formInputs}
        handleUpdate={this.handleUpdate}
        view={this.props.view}
      />
    }
    <section>
      <h1>NAVIGATE</h1>
      <ul>
        <li onClick={() => {
          this.props.handleView('home')
        }}>home</li>
        <li onClick={() => {
          this.props.handleView('addMeal')
        }}>add post</li>
      </ul>
    </section>
      </main>
    )
  }
}


export default Main
