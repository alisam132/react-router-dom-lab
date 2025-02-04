import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  boxOwner: "",
  boxSize: "",
};

const MailboxForm = (props) => {
  const [mailboxForm, setMailboxForm] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(mailboxForm);
    setMailboxForm(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setMailboxForm({ ...mailboxForm, [target.name]: target.value });
  };

  return (
    <>
      <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="boxOwner">Enter Box Holder</label>
          <input
            type="text"
            id="boxOwner"
            name="boxOwner"
            value={mailboxForm.boxOwner}
            onChange={handleChange}
          />
          <label htmlFor="boxSize">Select a box size</label>
          <select name="boxSize" onChange={handleChange}>
            <option value="DEFAULT">Open this select menu</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default MailboxForm;
