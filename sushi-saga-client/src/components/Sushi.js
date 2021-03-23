import React from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  handleOnClick = price => {
    if (this.props.total > price ) {
      this.setState({
        eaten: true
      })
  
      this.props.addCost(price)
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" onClick={ () => {this.handleOnClick(this.props.sushi.price)} }>
          { 
            this.state.eaten ? null : <img src={ this.props.sushi.img_url } alt="sushi" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          { this.props.sushi.name } - ${ this.props.sushi.price }
        </h4>
      </div>
    )
  }
}

export default Sushi