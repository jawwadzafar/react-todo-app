import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: this.props.data,
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      modalData: props.data,
    });
  }
  handleChange = e => {
    let modalData = { ...this.state.modalData };
    modalData[e.target.name] = e.target.value;
    this.setState({ modalData });
  };
  handleSubmit = () => {this.props.handleEdit(this.state.modalData);};

  render() {
    if(this.state.modalData===null){
      return(null);
    }
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}>

        {/* <ModalHeader toggle={this.props.toggle}>
          Edit Quanity for <b>{this.state.modalData.symbol}</b>
        </ModalHeader> */}
        <ModalBody>
          <p>Edit Todo</p>
          <form className="" onSubmit={this.handleSubmit}>
          <div className="form-group">
                  <label className="small" htmlFor="title">Title</label>
                  <input
                  ref="itemName"
                    className="form-control"
                    name="title"
                    placeholder="task name"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.modalData.title}
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
                    value={this.state.modalData.description}
                  />
                </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-submit" onClick={this.handleSubmit}>
            Submit
          </button>{" "}
          <button className="btn btn-login" onClick={()=>this.props.toggle(null)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default EditModal;
