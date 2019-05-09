class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.placement = this.placement.bind(this);
  }

  placement() {

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

const Row = (props) = (
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





ReactDOM.render(<App />, document.getElementById('app'));