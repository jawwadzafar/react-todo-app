import React, { Fragment } from "react";
class PlaceOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        task: "",
        description: ""
      },
      error: false,
      errorMsg: ""
    };
  }
  handleChange = e => {
    let userdata = { ...this.state.userdata };
    userdata[e.target.name] = e.target.value;
    this.setState({ userdata });
  };
  componentDidMount() {
    this.refs.itemName.focus();
  }
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.userdata.task){
      let userdata = { ...this.state.userdata };
      this.props.addItem(userdata)
      this.setState({
        userdata: {
          task: "",
          description: ""
        }
      })
    }

  };
  render() {
    return (
      <Fragment>
        <div className="bg-white">
        <form className="center-third p-2" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <h5 className="mt-2">Add A Todo</h5>
        </div>
                <div className="form-group">
                  <label className="small" htmlFor="task">Title</label>
                  <input
                  ref="itemName"
                    className="form-control"
                    name="task"
                    placeholder="task name"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.userdata.task}
                  />
                </div>
                <div className="form-group">
                  <label className="small" htmlFor="password">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="enter a description (optional)"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.userdata.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fund" />
                  <button
                    type="submit"
                    className="btn btn-login btn-lg btn-block"
                  >
                    Add Item
                  </button>
                </div>
              </form>
              </div>
      </Fragment>
    );
  }
}

export default PlaceOrderForm;
