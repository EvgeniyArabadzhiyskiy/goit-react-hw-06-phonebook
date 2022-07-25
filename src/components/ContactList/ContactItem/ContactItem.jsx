import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { UserName, UserNumber } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <div>
      <Box
        mb={3}
        display="flex"
        justifyContent="space-around"
        textAlign="left"
        as="li"
      >
        <UserName>{name}:</UserName>
        <UserNumber>{number}</UserNumber>
        <Button onClick={onDeleteContact}>Delete</Button>
      </Box>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
