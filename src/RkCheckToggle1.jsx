function Btn_Toggle(props) {
  return (
    <div>
      <button onClick={props.pr_checkAll}>
        Check All
      </button> 
      <button onClick={props.pr_unCheckAll}>
        Uncheck All
      </button>
    </div>
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

  toggleCheck(checked) {
    let items = this.state.items;
    let selectedItems = this.state.selectedItems;
    
    let x = document.querySelectorAll("input");
    
    for (let i of x) {
      i.checked = checked;
    }

    // push / empty selectedItems
    if (checked) {
      selectedItems = [];
      for (let i in items) {
        selectedItems.push(items[i]);
      }      
    } else {
      selectedItems = [];
    }
    
    this.setState(prevState => ({
      selectedItems: selectedItems
    }));
  }

  render() {
    return (
      <div>

        <form>
          <CheckList pr_state={this.state.items}
          pr_onChange={this.toggleSelected} />       
        </form>
        
        <Btn_Toggle pr_checkAll={() => { this.toggleCheck(true) }}
        pr_unCheckAll={() => { this.toggleCheck(false) }} />
        
        <SelectedItems pr_selectedItems={this.state.selectedItems} />

      </div>
    )
  }
}