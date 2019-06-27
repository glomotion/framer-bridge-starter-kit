import * as React from 'react'
import { Button } from './Button';
import { Input } from './Input';

export type Props = {}

export const App: React.FC<Props> = ({}) => (
  <div>
    <h1> !!!!!</h1>
    <Button>moo cow</Button>
    <Input placeholder="moo cow" />
  </div>
);