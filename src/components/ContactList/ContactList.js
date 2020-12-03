// imort s from './ContactList.module.css';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
}
export default ContactList;