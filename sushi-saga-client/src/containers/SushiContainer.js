import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    idxStart: 0,
    idxEnd: 4
  }

  renderSushi = () => {
    return this.props.sushis.slice(this.state.idxStart, this.state.idxEnd)
  }

  nextSushi = () => {
    this.setState(prevState => ({
      idxStart: prevState.idxStart + 4,
      idxEnd: prevState.idxEnd + 4
    }))
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          { !!this.props.sushis ? this.renderSushi().map(sushi => <Sushi key={ sushi.id } sushi={ sushi } addCost={ this.props.addCost } total={ this.props.total } />) : 'Loading...' }
          <MoreButton nextSushi={ this.nextSushi } />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer