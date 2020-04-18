// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Main from './components/Main.js'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    view: {
      page: 'home',
      pageTitle: 'home',
    }
  }
}

  // ==============
  // HANDLERS
  // ==============
  // handles the view state
  handleView = (view) => {
    // declare an empty variable
    let pageTitle = '';
    // decide the page title based on the handleView
    switch (view) {
      case 'home':
        pageTitle = 'home'
        break
      case 'addPost':
        pageTitle = 'Add'
        break
      case 'editPost':
        pageTitle = 'Edit'
        break
      default:
        break
    }
    // update the state
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
        <div>
          <Main view={this.state.view} handleView={this.handleView}/>
        </div>
    )
  }
}

export default App
