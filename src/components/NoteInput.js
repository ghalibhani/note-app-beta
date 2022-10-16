import React from "react";
import PropTypes from "prop-types";
import { BsCheckLg } from "react-icons/bs";
import { LocaleConsumer } from "../contexts/LocaleContext";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section className="add-new-page">
              <div className="add-new-page__input">
                <input className="add-new-page__input__title" placeholder={locale === "id" ? "Catatan Pribadi" : "Private Note"} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <input className="add-new-page__input__body" placeholder={locale === "id" ? "Isi catatan....." : "Note content....."} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
              </div>
              <div className="add-new-page__action">
                <button className="action" type="submit" onClick={this.onSubmitEventHandler}>
                  <BsCheckLg />
                </button>
              </div>
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
