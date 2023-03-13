import { List, Item } from "./ContactList.styled"
import PropTypes from 'prop-types';


export const ContactList = ( { contacts, onDeleteContact }) => {
    return <List>
    {contacts.map(({id, name, number})=>{return <Item key={id}>{name}: {number}
    <button onClick={() => onDeleteContact(id)}>Delete</button></Item>})}
    </List>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        }).isRequired),
        onDeleteContact: PropTypes.func.isRequired,
  };