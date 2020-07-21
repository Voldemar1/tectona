import React from "react"

import "./ContactForm.scss"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className="contact-form">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xoqkyqgz"
          method="POST"
        >
          <h2>Форма обратной связи</h2>
          <div className="name-email">
            <div className="name">
              <label>Имя:</label>
              <input type="text" name="name" />
            </div>
            <div className="email">
              <label>Email-адрес:</label>
              <input type="email" name="email" />
            </div>
          </div>

          <div>
            <label>Сообщение:</label>
            <textarea type="text" name="message" />
          </div>

          {status === "SUCCESS" ? <p>Спасибо!</p> : <button>Отправить</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}

export default ContactForm
