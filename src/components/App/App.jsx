
import user from 'user.json';
import friends from 'friends.json';
import items from 'transactions.json';
import data from 'data.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { Container } from './App.styled'
import { FriendList } from '../FriendList/FriendList'
import {TransactionHistory} from '../TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <Container>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} /> 
      <TransactionHistory items={items} />
    </Container>
  );
};
