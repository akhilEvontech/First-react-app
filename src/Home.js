import React, { Component } from "react";
import "./styles/Header.css";
import Modal from "react-bootstrap4-modal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      count: 0,
      tags: ["tag1", "tag2", "tag3"]
    };
  }

  styles = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop: "10px"
  };
  render() {
    return (
      <div className="container text-left">
        <div className="text-left">{this.state.count}</div>
        <div style={this.styles} className={this.getClasses()}>
          {this.countDetail()}
        </div>

        <div
          className={this.getClasses()}
          style={{
            fontSize: 30,
            marginBottom: 10
          }}
        >
          {this.countDetail()}
        </div>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={this.showModal}>
          Show modal
        </button>
        <Modal
          visible={this.state.visible}
          dialogClassName="modal-lg"
          onClickBackdrop={this.hideModal}
        >
          <div className="modal-header">
            <h5 className="modal-title">Test modal</h5>
          </div>
          <div className="modal-body">Testing!</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.hideModal}
            >
              OK
            </button>
          </div>
        </Modal>
      </div>
    );
  }
  getClasses() {
    let classes = " countInfo ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  countDetail() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    //  we can also wright it like below
    // return this.state.count == 0 ? "Zero" : this.state.count;
  }
  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };
}
export default Home;
