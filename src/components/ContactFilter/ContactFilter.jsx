import {Div, Label, Input } from './ContactFilterStyled';


export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Div>
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChangeFilter} />
    </Label>
  </Div>
  );
};
