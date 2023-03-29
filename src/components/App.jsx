import user from '../data/user.json';
import { Profile } from './Profile/profile';
import data from '../data/data.json';
import { Statistics } from './Statistics/statistics';
import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList.js';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.js';

export const App = () => {
  return (
    <main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </main>
  );
};
