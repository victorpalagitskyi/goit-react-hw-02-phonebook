export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
      <ul style = {{fontSize: 40}}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <div>
            {' '}
            {contact.name}: {contact.number}
          </div>
          <button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
           style={{
          fontSize: 40,
          color: '#010101'
        }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
