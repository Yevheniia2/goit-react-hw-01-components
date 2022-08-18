import Profile from "./Profile/profile.js";
import data from "./Profile/profile.json";

import SectionStatistics from './Statistics/sectionStatistics';
import Statistics from "./Statistics/statistics.js";
import statData from './Statistics/statistics.json';

import SectionFriends from "./Friends/sectionFriends.js";
import FriendList from "./Friends/friendList.js";
import friends from './Friends/friends.json';

import SectionTransactions from "./Transactions/sectionTransactions.js";
import Transactions from "./Transactions/transactions.js";
import transactions from './Transactions/transactions.json';

export default function App() {
  return (
    <>
    <div>
      <Profile 
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
    />
    </div>
    <div>
      <SectionStatistics
        title="Upload stats"
      >
        <Statistics stats={statData} />  
      </SectionStatistics>
    </div>
    <div>
      <SectionFriends>
        <FriendList friends={friends} />
      </SectionFriends>
    </div>
    <div>
      <SectionTransactions>
        <Transactions items={transactions} />
      </SectionTransactions>
    </div>
    </>
  );
}
