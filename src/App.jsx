import { Route, Routes } from "react-router";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm"
import MailboxList from "./components/MailboxForm/MailboxList"
import MailboxDetails from "./components/MailboxForm/MailboxDetails"
import LetterForm from "./components/LetterForm/LetterForm"

const App = () => {

  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const addBox = (newMailBox) => {
    newMailBox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailBox])

  }
  const addLetter = (newletter) => {
    setLetters([...letters, newletter])

  }

  return (
    <>
    <NavBar/>

    <Routes>
      <Route path={"/"} element={<main><h1>Post Office</h1></main>}/>
      <Route path={"/mailboxes"} element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path={"/new-mailbox"} element={<MailboxForm addBox={addBox}/>}/>
      <Route path={"/new-letter"} element={<LetterForm addLetter={addLetter} mailboxes={mailboxes}/>}/>
      <Route path={"/mailboxes/:mailboxId"} element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>}/>
    </Routes>
    
    </>


  )
};

export default App;
