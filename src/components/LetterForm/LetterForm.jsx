import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  mailboxId: "",
  recipient: "",
  message: "",
};

function LetterForm(props) {

  const [letterForm, setLetterForm] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addLetter(letterForm);
    setLetterForm(initialState);
    navigate("/mailboxes");
    console.log(letterForm);
    
  };

  const handleChange = ({ target }) => {
    setLetterForm({ ...letterForm, [target.name]: target.value });
  };




  return (
    <>
    <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="mailboxId">Select a mailbox </label>
          <select name="mailboxId" onChange={handleChange}>
            {props.mailboxes.map((mailbox) =>(
              <option key={mailbox._id} value={`${mailbox._id}`}>{`MailBox ${mailbox._id}`}</option>
            ))}            
          </select>
          <label htmlFor="recipient">Recipient</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={letterForm.recipient}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <input
            type="textarea"
            id="message"
            name="message"
            value={letterForm.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}

export default LetterForm;
