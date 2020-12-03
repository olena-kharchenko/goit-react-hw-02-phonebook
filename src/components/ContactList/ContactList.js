// imort s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
