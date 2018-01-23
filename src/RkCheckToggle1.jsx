function Btn_Toggle(props) {
  return (
    <div>
      <button id="checkAll" onClick={props.pr_checkAll} disabled={props.pr_checkDisabled}>
        Check All
      </button> 
      <button id="unCheckAll" onClick={props.pr_unCheckAll}>
        Uncheck All
      </button>
    </div>
  );
}

function SelectedItems(props) {
  return (
    <div>
      <p>Selected: {props.pr_selectedItems}</p>
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
  componentDidMount() {
    // this.watch();
    // this.toggleCheck(true);
  }

  indexFinder(value, arr) {
    // returns index else undefined
    for (var key = 0; key < arr.length; key++) {
      if (arr[key] === value) {
        return key;
      }
    }
  };
  
  toggleSelected(event) {
    let selectedItems = this.state.selectedItems;

    if (event.target.checked) {
      console.log("checked push");
      
      // todo: check if existing
      if (this.indexFinder(event.target.value, selectedItems) !== undefined) {
        // console.log();
      } else {

      }

    } else {
      console.log("unchecked");
    }

    // this.setState({
    //   selectedItems: [selectedItems]
    // }); 
  }

  toggleCheck(checked) {
    // this.watch();
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

  // watcher
  watch() {
    // let btn_checkAll = document.getElementById("checkAll");
    // let btn_unCheckAll = document.getElementById("unCheckAll");
    // let items = this.state.items;
    // let selectedItems = this.state.selectedItems;

    // console.log(items.length + " " + selectedItems.length);

    // // for checkAllButton
    // if (selectedItems.length === items.length) {
    //   btn_checkAll.disabled = true;
    // } else {
    //   btn_checkAll.disabled = false;
    // }

    // // for unCheckAllButton
    // if (selectedItems.length === 0) {
    //   btn_unCheckAll.disabled = true;
    // } else {
    //   btn_unCheckAll.disabled = false;
    // }    
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