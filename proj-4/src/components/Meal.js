import React from 'react'
class Meal extends React.Component{
  render() {
    return (
      <div>
        <img src ={this.props.postData.image} alt=""/>
        <h1>{this.props.pstData.title}</h1>
        <p>{this.props.postData.instructions}</p>
      </div>
      <ul>
        <li onClick()={()=>{
          this.props.handleView('editPost', this.props.mealData)
        }}>edit meal</li>
        <li onClick()={()=>{
          this.props.handleDelete('editPost', this.props.mealData.id)
        }}>delete meal</li>
      </ul>
    )
  }
}

export default Meal;
