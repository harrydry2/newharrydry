import React, { Component } from "react";
import "./style.sass";
import axios from "axios";

class Footer extends Component {
  state = {
    value: "",
    success: false,
    failure: false
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.value === "") {
      this.setState({
        failure: true,
        success: false
      });
      return;
    }
    const res = await axios.post("/api/savemail", { email: this.state.value });
    this.setState({
      failure: false,
      success: true,
      value: ""
    });
  };
  render() {
    const { value, success, failure } = this.state;
    return (
      <div className="footer">
        <div className="footer__quote">
          My 1 repeated learning in life: "There Are No Adults" Everyone's
          making it up as they go along. Figure it out yourself, and do it —
          Naval Ravikant
        </div>
        <div className="footer__subscribe">
          <div className="footer__subscribe-title">
            Fresh Viewpoint. Once a week. No Bullshit.
          </div>
          <form className="footer__subscribe-box" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Your Email Addresss"
              className="footer__subscribe-box-input"
              value={value}
              onChange={this.handleChange}
            />
            <button className="footer__subscribe-box-button" type="submit">
              Subscribe
            </button>
          </form>
          {success && <div className="footer__subscribe-success">Success</div>}
          {failure && (
            <div className="footer__subscribe-failure">Not an Email</div>
          )}
        </div>
      </div>
    );
  }
}
export default Footer;
