import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { getNotes, deleteNote } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNotes();

    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getNotes();
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <div className="app-container">
              <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
              <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
              <NoteList notes={notes} onDelete={this.onDeleteHandler} />
              <div className="homepage__action">
                <Link to="/add" className="action">
                  <AiOutlinePlus />
                </Link>
              </div>
            </div>
          );
        }}
      </LocaleConsumer>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
