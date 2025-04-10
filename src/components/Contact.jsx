import React from 'react'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <span>
          <FontAwesomeIcon icon={faUser} /> {contact.name}
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} /> {contact.number}
        </span>
      </div>
      <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
    </div>
  )
}

export default Contact
