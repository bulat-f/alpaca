import React from 'react'
import styled from 'styled-components'
import { Form, Input as SemanticInput, Label } from 'semantic-ui-react'

interface IProps {
  label: string;
}

const StyledInput = styled(SemanticInput)``

export const Input: React.FC<IProps> = ({ label, ...restProps }) => (
  <Form.Field>
    <Label>{label}</Label>
    <StyledInput {...restProps} />
  </Form.Field>
)