// TODO


class GroceryList extends React.Component{

  constructor(props) {
    super(props);

    // this.state = {
    //   hovered: false
    // }
  }

  // onListItemHover() {
  //   this.setState({
  //     hovered: this.state.hovered!
  //   })
  // }


  render(){


    return (<div>
      <ul>{
        this.props.item.map((item, i) =>
        <GroceryListItem  key={i} item = {item} />
        )}
      </ul>
    </div>);
  }



}



class GroceryListItem extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
  }

  onListItemHover() {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  render(){
    var style = {
      "font-weight": this.state.hovered ? 'bold' : 'normal'
    };

    return  (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }


}

ReactDOM.render(<GroceryList item = {['Banana', 'Orange', 'Flour']} />, document.getElementById("app"));