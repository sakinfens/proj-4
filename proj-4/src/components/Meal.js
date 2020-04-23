
import React from 'react'

class Meal extends React.Component {

  render () {
    return (
      <article className="meal">
        <div>
          <img src={this.props.mealData.image} alt=""></img>
        </div>
        <div className="divide">
          <div>
            <h1>{this.props.mealData.title}</h1>
            <p>{this.props.mealData.instructions}</p>
          </div>
          <ul>
            <li onClick={() => {
              this.props.handleView('editMeal');
            }}>edit meal</li>
            <li onClick={() => {
              this.props.handleDelete('editPost', this.props.mealData.id)
            }}>delete meal</li>
          </ul>
          </div>
      </article>
    )
  }
}

export default Meal
