import styled from 'styled-components';
import { Form, Field} from 'formik'
export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid Lime;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: white;
  font-size: 20px;
`;

export const Input = styled(Field)`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const AddButton = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid Lime;
  color: green;
  font-size: 20px;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`;