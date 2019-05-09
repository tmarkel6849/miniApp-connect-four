import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: [],
      row2: [],
      row3: [],
      row4: [],
      row5: [],
      row6: []
    }
    this.redPiece = this.redPiece.bind(this);
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    let currentColor = this.state.color;
    this.setState({
      color: currentColor === 'black' ? 'red' : 'black'
    })
    return currentColor;
  }

  redPiece(row, col) {
    this.setState({
      row: col
    })
  }

  blackPiece(row, col) {
    this.setState({
      row: col
    })
  }

  render() {
    return (
      <div>
        <Board toggleColor={this.toggleColor}/>
      </div>
    )
  }

}




const Board = (props) => (
  <div>
    <table>
      <tbody>
        <Row toggleColor={props.toggleColor}/>
      </tbody>
    </table>
  </div>
)

const Row = (props) => (
  <tr className="row1">
    <td className="1" onClick={()=>{$('.1').css('background-color', props.toggleColor())}}></td>
    <td className="2"></td>
    <td className="3"></td>
    <td className="4"></td>
    <td className="5"></td>
    <td className="6"></td>
    <td className="7"></td>
  </tr>
);

 export default App;