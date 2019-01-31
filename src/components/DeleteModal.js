import React,{Fragment} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
  handleSubmit = () => {
    let data = this.state.modalData;
    if(this.state.modalData.isActive){
      data.isActive = false;
    }else{
        data.isActive = true;
    }
    this.props.handleEdit(data);
  };
  // handleSubmit = () =>  this.props.handleEdit(this.state.modalData);

  render() {
    if(this.state.modalData===null){
      return(null);
    }
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}>

        <ModalHeader className="text-center" toggle={this.props.toggle}>
         You are about to delete this order.
        </ModalHeader>
        <ModalBody  className="text-center">
          <h6 className="text-center mb-5">Do you want to delete {this.state.modalData.symbol} of type {this.state.modalData.orderType} order?</h6>
          <button className="btn btn-sell mr-5" onClick={this.handleSubmit}>
            Yes, Delete
          </button>
          <button className="btn btn-login" onClick={this.props.toggle}>
            No, Cancel
          </button>
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

export default EditModal;
