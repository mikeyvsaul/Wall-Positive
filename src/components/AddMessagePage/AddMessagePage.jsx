import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class AddMessagePage extends Component {
  // Match formData to same key values in the Message model
  state = {
    invalidForm: true,
    formData: {
      content: '',
      user: this.props.user._id,
      locationX: this.props.state.position[0],
      locationY: this.props.state.position[1],
      orientation: 0,
      size: 22,
      color: '',
      font: '',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddMessage(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div className="AddMessagePage">
        <div className="container">
          <h2>Add Message</h2>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                name="content"
                value={this.state.formData.content}
                onChange={this.handleChange}
                required
              />
              <label>Message Orientation</label>
              <select
                className="form-control"
                name="orientation"
                value={this.state.formData.orientation}
                onChange={this.handleChange}
              >
                <option value="">No Rotation</option>
                <option value="36">Rotate 10% Clockwise</option>
                <option value="72">Rotate 20% Clockwise</option>
                <option value="108">Rotate 30% Clockwise</option>
                <option value="144">Rotate 40% Clockwise</option>
                <option value="180">Upside Down</option>
                <option value="324">Rotate 10% Counter Clockwise</option>
                <option value="288">Rotate 20% Counter Clockwise</option>
                <option value="252">Rotate 30% Counter Clockwise</option>
                <option value="216">Rotate 40% Counter Clockwise</option>
              </select>
              <label>Font Size</label>
              <select
                className="form-control"
                name="size"
                value={this.state.formData.size}
                onChange={this.handleChange}
              >
                <option value="22">Default Font Size</option>
                <option value="24">Level 1 Font Size</option>
                <option value="26">Level 2 Font Size</option>
                <option value="28">Level 3 Font Size</option>
                <option value="30">Level 4 Font Size</option>
                <option value="32">Level 5 Font Size</option>
                <option value="34">Level 6 Font Size</option>
                <option value="36">Level 7 Font Size</option>
                <option value="38">Level 8 Font Size</option>
                <option value="40">Level 9 Font Size</option>
                <option value="42">Level 10 Font Size</option>
              </select>
              <label>Message Color</label>
              <select
                className="form-control"
                name="color"
                value={this.state.formData.color}
                onChange={this.handleChange}
              >
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="pink">Pink</option>
              </select>
              <label>Message Font Type</label>
              <ul>
                <li style={{fontFamily: "Punk Kid", fontSize: 18}}>Punk Kid</li>
                <li style={{fontFamily: "shonen punk v2"}}>Shonen Punk V2</li>
                <li style={{fontFamily: "CFT masapunk", fontSize: 18}}>CFT Masapunk</li>
                <li style={{fontFamily: "colour me purple", fontSize: 16}}>Colour Me Purple</li>
                <li style={{fontFamily: "hackattack", fontSize: 19}}>Hackattack</li>
                <li style={{fontFamily: "discontinuo tfb", fontSize: 18, fontWeight: 'bold'}}>Discontinuo</li>
              </ul>
              <select
                className="form-control"
                name="font"
                value={this.state.formData.font}
                onChange={this.handleChange}
                required
              >
                <option value=""> - </option>
                <option value="punk kid">Punk Kid</option>
                <option value="shonen punk v2">Shonen Punk V2</option>
                <option value="CFT masapunk">CFT Masapunk</option>
                <option value="colour me purple">Colour Me Purple</option>
                <option value="hackattack">Hackattack</option>
                <option value="discontinuo tfb">Discontinuo</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              ADD MESSAGE
            </button>
            <NavLink exact to='/' className="btn-danger">CANCEL</NavLink>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMessagePage;