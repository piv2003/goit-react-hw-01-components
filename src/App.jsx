import user from './data/user.json';
import { Profile } from 'components/Profile/Profile.js';
import data from './data/data.json';
import { Statistics } from 'components/Statistics/Statistics.js';
import friends from './data/friends.json';
import { FriendList } from 'components/FriendList/FriendList.js';
import transactions from './data/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.js';

const { username, tag, location, avatar, stats } = user; //property destructuring

export const App = () => {
  return (
    <main>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      ></Profile>
      <Statistics title="upload stats" statisticalData={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </main>
  );
};
