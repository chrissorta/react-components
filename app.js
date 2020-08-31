// TODO


var GroceryList = (props) => (
  <div>
    <ul>{
      props.item.map((item, i) =>
      <GroceryListItem  key={i} item = {item} />
      )}
    </ul>
  </div>

);

var GroceryListItem = (props) => (
<li>{props.item}</li>

);

var Bananas = () => (
  <li>Bananas</li>
);

var Oranges = () => (
  <li>Oranges</li>
);

ReactDOM.render(<GroceryList item = {['Banana', 'Orange', 'Flour']} />, document.getElementById("app"));