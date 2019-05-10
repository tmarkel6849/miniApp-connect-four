import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    }
    this.toggleColor = this.toggleColor.bind(this);
    this.placeBoard = this.placeBoard.bind(this);
  }

  toggleColor() {
    let currentColor = this.state.color;
    this.setState({
      color: currentColor === 'black' ? 'red' : 'black'
    })
    return currentColor;
  }


  placeBoard(row, col) {
    console.log('Row: ', row);
    console.log('Col: ', col);
  }


  render() {
    return (
      <div>
        <Board placeBoard={this.placeBoard} toggleColor={this.toggleColor}/>
      </div>
    )
  }

}




const Board = (props) => (
  <div>
    <table>
      <tbody>
        <Row class={"row0"} placeBoard={props.placeBoard} toggleColor={props.toggleColor}/>
        <Row class={"row1"} placeBoard={props.placeBoard} toggleColor={props.toggleColor}/>
        <Row class={"row2"} placeBoard={props.placeBoard} toggleColor={props.toggleColor}/>
        <Row class={"row3"} placeBoard={props.placeBoard} toggleColor={props.toggleColor}/>
        <Row class={"row4"} placeBoard={props.placeBoard} toggleColor={props.toggleColor}/>
        <Row class={"row5"} placeBoard={props.placeBoard} toggleColor={props.toggleColor}/>
        <Row class={"row6"} placeBoard={props.placeBoard} toggleColor={props.toggleColor}/>
      </tbody>
    </table>
  </div>
)


const Row = (props) => (
  <tr className={`${props.class}`} onClick={(e)=>{props.placeBoard(e.currentTarget.classList[0].slice(-1), e.target.classList[0])}}>
    <td className="6" onClick={()=>{$(`.${props.class} .6`).css('background-color', props.toggleColor())}}></td>
    <td className="5" onClick={()=>{$(`.${props.class} .5`).css('background-color', props.toggleColor())}}></td>
    <td className="4" onClick={()=>{$(`.${props.class} .4`).css('background-color', props.toggleColor())}}></td>
    <td className="3" onClick={()=>{$(`.${props.class} .3`).css('background-color', props.toggleColor())}}></td>
    <td className="2" onClick={()=>{$(`.${props.class} .2`).css('background-color', props.toggleColor())}}></td>
    <td className="1" onClick={()=>{$(`.${props.class} .1`).css('background-color', props.toggleColor())}}></td>
    <td className="0" onClick={()=>{$(`.${props.class} .0`).css('background-color', props.toggleColor())}}></td>
  </tr>
);

 export default App;