import React, { Fragment } from "react";

function TodoList({items,removeItem,markTodoDone,toggle}){
  if(localStorage.getItem('todos')){
    let user = localStorage.getItem('user');
    let newItem = items.filter(e=>{ return e.userid == user});
    return (
      <ul className="list-group">
        {newItem.map((item, index) => (
          <TodoListItem
            key={index}
            item={item}
            index={index}
            removeItem={removeItem}
            markTodoDone={markTodoDone}
            toggle={toggle}
          />
        ))}
      </ul>
    );
  }
  return null;

}

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onClickClose = () => {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  };
  onClickDone = () => {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  };
  render() {
    let item = this.props.item;
    return (
      <li className="list-group-item todo">
        <div className={item.done?"todo-list done" : "todo-list undone"}>
          <span className={item.done? "fa fa-check-circle" :"fa fa-circle-o"} onClick={this.onClickDone} />
          {this.props.item.value}
          <button type="button" className="close mini-icon" onClick={this.onClickClose}><i className="fa fa-trash"></i></button>
          <button type="button" className="close mini-icon" onClick={(()=>this.props.toggle(item))}><i className="fa fa-edit"></i></button>
          <button type="button" className="close mini-icon" onClick={this.onClickClose}><i className="fa fa-eye"></i></button>
        </div>
      </li>
    );
  }
}

export default TodoList;
