const React = require('react')

class Keypad extends React.Component {
  constructor() {
    super()

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput() {
    console.log('Entering password...')
  }

  render() {

    return(
      <div>
        <input type="password" onKeyUp={this.handleInput} />
      </div>
    )
  }
}

module.exports = Keypad
