import React from 'react';
import { Card, Form, Input, Button } from '@alpaca/ui';

export const LoginPageView: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Form>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Password" />
          <Form.Group>
            <Button type="submit">Login</Button>
          </Form.Group>
        </Form>
      </Card.Content>
    </Card>
  );
}
