import React from 'react'

class Form extends React.Component{
  constructor(){
    super()this.state ={
      title: '',
      image: '',
      instuctions: '',
      id: null
    }
  }
  handleChange(e) =>{
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleCreate(this.state)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Title
        <input type="text" placeholder="title" id="title" value{this.state.title} onChange={this.handleChange}/>
        </label>
        <label>
        image
        <input type="text" placeholder="title" id="title" value{this.state.title} onChange={this.handleChange}/>
        </label>
        <label id="meal-form">
          post
          <textarea placeholder="write your words" id="instructions" value={this.state.instructions} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="share"/>
      </form>


    )
  }
}
export default Form
