import React from 'react'
import Contact from './Contact'
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.contactList}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </div>
  )
}

export default ContactList
