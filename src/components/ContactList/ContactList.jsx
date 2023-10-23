import { List, Item, Button } from './ContactList.styled';
export const ContactList = ({ contacts, onRemoveContact }) => (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка удаления контакта
            <Button
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );;
