import React,{Fragment} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ToggleActiveModal extends React.Component {
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
         Are you sure?
        </ModalHeader>
        <ModalBody  className="text-center">
          <h6 className="text-center mb-5">Do you want to toggle this??</h6>
          <button className="btn btn-login mr-5" onClick={this.handleSubmit}>
            Yes
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

export default ToggleActiveModal;
