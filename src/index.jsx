import "./styles/main.scss";

function SelectedItems(props) {
  return (
    <div>
      <p>Selected: [{props.pr_selectedItems}]</p>
    </div>
  );
}

function CheckList(props) {
  return (
    <div>
    {props.pr_state.map((i, index) =>
      <div className="input-group">
      <label>{i}</label>
      <input type="checkbox" value={i} onChange={props.pr_onChange} />
      </div>
    )}   
    </div>
  );
}

class RkCheckToggle1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        "item1",
        "item2"
      ],
      selectedItems: []
    }

    // binders
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  // methods
  toggleSelected(event) {
    const selectedItems = this.state.selectedItems;
    let index;

    if (event.target.checked) {
      selectedItems.push(event.target.value)
    } else {
      index = selectedItems.indexOf(event.target.value)
      selectedItems.splice(index, 1)
    }

    this.setState({ 
      selectedItems: selectedItems 
    })
  }

  render() {
    return (
      <div>

        <form>
          <CheckList pr_state={this.state.items}
          pr_onChange={this.toggleSelected} />       
        </form>

        <SelectedItems pr_selectedItems={this.state.selectedItems} />

      </div>
    )
  }
}

ReactDOM.render(
  <RkCheckToggle1 />,
  document.getElementById('root')
);