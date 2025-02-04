import { useParams } from "react-router";

export const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  console.log(selectedLetters);
  

  return (
    <>
      <h2>Details</h2>
      <dl>
        <dt>Box Holder: {selectedBox.boxOwner}</dt>
        <dd></dd>
        <dt>Box Size: {selectedBox.boxSize}</dt>
        <dd></dd>
      </dl>
      <h2>Letters</h2>
      <dl>
        <dt>{selectedLetters.message}</dt>
      </dl>
    </>
  );
};

export default MailboxDetails;
