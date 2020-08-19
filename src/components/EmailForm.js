import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class EmailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state) // listFields are optional if you are only capturing the email address.
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)
        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    const { email } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            placeholder="Email address"
            name="email"
            type="email"
            value={email}
            onChange={this.handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    )
  }
}
