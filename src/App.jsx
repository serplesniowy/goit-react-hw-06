import React, { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import { nanoid } from 'nanoid'
import styles from './App.module.css'

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')


  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'))
    if (savedContacts && savedContacts.length > 0) {
      setContacts(savedContacts)
    } else { 
      setContacts(initialContacts)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number }
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, newContact]
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))
      return updatedContacts
    })
  }

  const deleteContact = (id) => {
    setContacts(prevContacts => {
      const updatedContacts = prevContacts.filter(contact => contact.id !== id)
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))
      return updatedContacts
    })
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  )
}

export default App
