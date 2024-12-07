import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Chip from "@mui/material/Chip";
import "../../styles/Notes/NotesBackground.css";

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function getCurrentFormattedDate() {
  const currentDate = new Date();
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return currentDate.toLocaleDateString("en-US", options);
}

export function BasicTabs() {
  const [value, setValue] = useState(0); // Controls which tab is displayed
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [listOfNotes, setListOfNotes] = useState([
    {
      id: 1,
      title: "Intro",
      content: "This is Pragalya",
      date: getCurrentFormattedDate(),
    },
    {
      id: 2,
      title: "Preface",
      content: "Know about the book",
      date: getCurrentFormattedDate(),
    },
  ]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [checkedNotes, setCheckedNotes] = useState({}); // Track which notes are checked

  const addNote = (event) => {
    event.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      content: text,
      date: getCurrentFormattedDate(),
    };
    setListOfNotes([...listOfNotes, newNote]);
    setTitle("");
    setText("");
  };

  const abort = (id) => {
    const filteredNotes = listOfNotes.filter((note) => note.id !== id);
    setListOfNotes(filteredNotes);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Handle checkbox change for archiving notes
  const handleCheckboxChange = (noteId) => {
    const isChecked = checkedNotes[noteId] || false;
    setCheckedNotes({
      ...checkedNotes,
      [noteId]: !isChecked, // Toggle checked state
    });
    
    if (!isChecked) {
      const noteToArchive = listOfNotes.find((note) => note.id === noteId);
      if (noteToArchive) {
        setArchivedNotes([...archivedNotes, noteToArchive]);
        setListOfNotes(listOfNotes.filter((note) => note.id !== noteId));
      }
    }
  };

  const handleEditOption = (noteId) => {
    const noteToEdit = listOfNotes.find((note) => note.id === noteId);
    if (noteToEdit) {
      setEditingNoteId(noteId);
      setEditedTitle(noteToEdit.title);
      setEditedContent(noteToEdit.content);
    }
  };

  const saveEditedNote = () => {
    setListOfNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingNoteId
          ? { ...note, title: editedTitle, content: editedContent, date: getCurrentFormattedDate() }
          : note
      )
    );
    setEditingNoteId(null);
    setEditedTitle("");
    setEditedContent("");
  };

  const revokeArchive = (noteId) => {
    const noteToRemove = archivedNotes.find((note) => note.id === noteId);
    if (noteToRemove) {
      setArchivedNotes(archivedNotes.filter((note) => note.id !== noteId));
      setListOfNotes([...listOfNotes, noteToRemove]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Archive" {...a11yProps(1)} />
          <Tab label="Personal" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <div className="NotesAll">
          <div className="text">
            <form onSubmit={addNote}>
              <input
                value={title}
                placeholder="Title"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
              <textarea
                value={text}
                placeholder="Enter your text"
                onChange={(event) => setText(event.target.value)}
                required
              />
              <button type="submit" className="button">
                Add Note
              </button>
            </form>
          </div>

          <div className="notes-grid">
            {listOfNotes.map((note) => (
              <div className="note-item" key={note.id}>
                {editingNoteId === note.id ? (
                  <div>
                    <input
                      value={editedTitle}
                      onChange={(event) => setEditedTitle(event.target.value)}
                      required
                    />
                    <textarea
                      value={editedContent}
                      onChange={(event) => setEditedContent(event.target.value)}
                      required
                    />
                    <button onClick={saveEditedNote}>
                      <SaveAltIcon />
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="notes-header">
                      <Checkbox
                        checked={!!checkedNotes[note.id]}
                        onChange={() => handleCheckboxChange(note.id)}
                        inputProps={{ 'aria-label': 'Archive Note' }}
                      />
                      <button onClick={() => handleEditOption(note.id)}>
                        <EditIcon />
                      </button>
                      <button onClick={() => abort(note.id)}>x</button>
                    </div>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                    <Chip
                      label={note.date}
                      color="success"
                      sx={{ position: "absolute", bottom: 0, ml: 26 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <div className="notes-grid">

          {archivedNotes.map((note) => (
            <div className="note-item" key={note.id}>
              <h2>{note.title}</h2>
              
              <p>{note.content}</p>
              <AutorenewIcon onClick={() => revokeArchive(note.id)} />
            </div>
          ))}
        </div>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <div>Personal Content</div>
      </CustomTabPanel>

    </Box>
  );
}
