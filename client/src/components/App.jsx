import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.placement = this.placement.bind(this);
  }

  placement() {

  }

  render() {
    return (
      <div>Hello from react component</div>
    )
  }

}




const Board = (props) => (
  <div>
    <table>
    {datas.map(data => {
      <Row someData={data}/>
    })}
    </table>
  </div>
)

const Row = (props) => (
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
);

 export default App;