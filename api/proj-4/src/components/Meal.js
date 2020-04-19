// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Meal extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article>
        <div className="meal-header">
          <img src={this.props.mealData.image} alt=""></img>
          <h1>{this.props.mealData.title}</h1>
        </div>
        <div>
          {this.props.mealData.instructions}
        </div>
        <div>
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

// =============================
// EXPORT
// =============================
export default Meal
