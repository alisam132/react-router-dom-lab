import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox Lists</h2>
      <ul>
        {props.mailboxes.map((currentMailboxes) => (
          <li key={currentMailboxes._id}>
            <Link to={`/mailboxes/${currentMailboxes._id}`}>{`MailBox ${currentMailboxes._id}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
