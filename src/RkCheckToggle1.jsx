function Btn_Checkall(props) {
  return (
    <button onClick={props.pr_onClick}>
      Check All
    </button>
  );
}

function Btn_UnCheckAll(props) {
  return (
    <button onClick={props.pr_onClick}>
      Uncheck All
    </button>
  );
}

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
    <span className="checkToggle1-01">
      <input type="checkbox" id={i} value={i} onChange={props.pr_onChange} />
      <label htmlFor={i} className="checkToggle1-01_bg">
        <span className="checkToggle1-01_switch">
          &nbsp;
        </span>
      </label>   
      <label htmlFor={i} className="checkToggle1-01_vlabel">
          {i}
      </label>   
    </span>
    )}   
    </div>
  );
}

export default class RkCheckToggle1 extends React.Component {
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
    console.log(event.target.id);
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

  checkAll() {
    console.log("checkall");
  }

  unCheckAll() {
    console.log("uncheckall");
  }

  render() {
    return (
      <div>

        <form>
          <CheckList pr_state={this.state.items}
          pr_onChange={this.toggleSelected} />       
        </form>

        <Btn_Checkall pr_onClick={() => { this.checkAll() }} />
        <Btn_UnCheckAll pr_onClick={() => { this.unCheckAll() }} />

        <SelectedItems pr_selectedItems={this.state.selectedItems} />

      </div>
    )
  }
}