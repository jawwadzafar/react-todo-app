import React,{Fragment} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ViewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: this.props.data,
    };
    console.log(this.state)
  }
  componentWillReceiveProps(props) {
    this.setState({
      modalData: props.data,
    });
  }

  render() {
    if(this.state.modalData===null){
      return(null);
    }
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}>

        <ModalBody>
          <p>View Todo</p>
          <form className="" onSubmit={this.handleSubmit}>
          <div className="form-group">
                  <label className="small" htmlFor="title">Title</label>
                  <input
                  ref="itemName"
                    className="form-control"
                    name="title"
                    placeholder="task name"
                    type="text"
                    disabled={true}
                    value={this.state.modalData.title}
                  />
                </div>
                <div className="form-group">
                  <label className="small" htmlFor="password">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="...seems like you didn't put any description"
                    type="text"
                    disabled={true}
                    value={this.state.modalData.description}
                  />
                </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-login" onClick={()=>this.props.toggle(null)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ViewModal;
