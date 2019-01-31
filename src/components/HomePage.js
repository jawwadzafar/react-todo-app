import React, {Fragment} from 'react';

// import AllTodos from './AllTodos';
import Todo from './Todo';
import EditModal from './EditModal';
import NewTaskForm from './NewTaskForm';

class HomePage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
          modal: false,
          modalDelete:false,
          edit:null,
          todoItems: JSON.parse(localStorage.getItem('todos'))
        };
      }
      handleEdit =(modaldata)=>{
        this.toggle(null);
        // console.log(this.props)
        this.editTodo(modaldata);

        }
      toggle = (o)=> {
        console.log(o)
        this.setState({
          modal: !this.state.modal,
          edit:o,
        });
      }
      addItem = (newItems) =>{
        let oldItems;
        if (!this.state.todoItems)
          oldItems = []
        else
          oldItems = this.state.todoItems;
        oldItems.unshift({
          index: oldItems.length+1, 
          value: newItems.task,
          description:newItems.description,
          userid:localStorage.getItem('user'),
          done: false
        });
        localStorage.setItem('todos',JSON.stringify(oldItems));
        this.setState({todoItems: oldItems});
      }
      removeItem = (itemIndex) =>{
        let oldItems = this.state.todoItems;
        oldItems.splice(itemIndex, 1);
        localStorage.setItem('todos',JSON.stringify(oldItems));
        this.setState({todoItems: oldItems});
      }
      markTodoDone = (itemIndex) =>{
        let oldItems = this.state.todoItems;
        var todo = oldItems[itemIndex];
        oldItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? oldItems.push(todo) : oldItems.unshift(todo);
        localStorage.setItem('todos',JSON.stringify(oldItems));
        this.setState({todoItems: oldItems});  
      }

      editTodo = (newTodo)=>{
        console.log('-----',newTodo)
        let oldItems = this.state.todoItems;
        // var todo = oldItems[newTodo.index];
        oldItems[newTodo.index] = newTodo;
        localStorage.setItem('todos',JSON.stringify(oldItems));
        this.setState({todoItems: oldItems});  
      }

render(){
    return(

        <Fragment>
        <EditModal toggle={this.toggle} isOpen={this.state.modal} data={this.state.edit} handleEdit={this.handleEdit} />
            <div className="container mt-5">
            <div className="row mt-3">
            <div className="col-md-8 col-lg-9">
                  <div className="bg-white p-3">
            <h5 className="">Todo List</h5>
            <div className="form-box table-box">
            <Todo toggle={this.toggle} items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-4 m-mt-5">
            <NewTaskForm addItem={this.addItem}/>
            </div>
            </div>

            </div>

        </Fragment>
    )
}
}

export default HomePage;