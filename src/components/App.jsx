
import user from '../user.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

const x = data[0]
console.log(x)

export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={x} />
    </div>
  );
};
