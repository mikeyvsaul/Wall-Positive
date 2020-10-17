import React, { Component } from 'react';

class AddMessagePage extends Component {
  state = {
    invalidForm: true,
    formData: {
      content: '',
      user: this.props.user._id,
      locationX: this.props.state.position[0],
      locationY: this.props.state.position[1],
      orientation: 0,
      size: 20,
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
      <>
        <h2>Add Message</h2>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Message</label>
            <input
              className="form-control"
              name="content"
              value={this.state.formData.content}
              onChange={this.handleChange}
              required
            />
            <label>Orientation</label>
            <select
              className="form-control"
              name="orientation"
              value={this.state.formData.orientation}
              onChange={this.handleChange}
            >
              <option value="36">Rotate 10% Clockwise</option>
              <option value="72">Rotate 20% Clockwise</option>
              <option value="108">Rotate 30% Clockwise</option>
              <option value="144">Rotate 40% Clockwise</option>
              <option value="180">Rotate 50% Clockwise</option>
              <option value="216">Rotate 60% Clockwise</option>
              <option value="252">Rotate 70% Clockwise</option>
              <option value="288">Rotate 80% Clockwise</option>
              <option value="324">Rotate 90% Clockwise</option>
            </select>
            <label>Font Size</label>
            <select
              className="form-control"
              name="size"
              value={this.state.formData.size}
              onChange={this.handleChange}
            >
              <option value="21">Level 1 Font Size</option>
              <option value="22">Level 2 Font Size</option>
              <option value="23">Level 3 Font Size</option>
              <option value="24">Level 4 Font Size</option>
              <option value="25">Level 5 Font Size</option>
              <option value="26">Level 6 Font Size</option>
              <option value="27">Level 7 Font Size</option>
              <option value="28">Level 8 Font Size</option>
              <option value="29">Level 9 Font Size</option>
              <option value="30">Level 10 Font Size</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Add Message
          </button>
        </form>
      </>
    );
  }
}

export default AddMessagePage;