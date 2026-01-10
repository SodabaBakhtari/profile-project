import TopHeader from "./TopHeader";
import StatCard from "./statCard";
import PersonalInfoCard from "./PersonalInfoCard";
import AccountDetailsCard from "./AccountDetailsCard";

export default function ProfilePage({user}){
    return(
      <div className="profile-page">
        <div className="layout">
          <TopHeader 
            name={user.name} 
            username={user.username} 
            avatarImage={user.avatarImage}
          />
        </div>
     
        <div className="statGrid">
          <StatCard
            title="XP"
            bigValue={user.xp}
            footerText={`Last active: ${user.lastActive}`}
          />
          <StatCard
            title="STREAK"
            bigValue={`${user.streakDays} days`}
            footerText={`Longest streak: ${user.longestStreak} days`}
            icon="🔥"
          />
          <StatCard
            title="RECENT BADGES"
            bigValue=""
            footerText={user.recentBadgesText}
            icon="✨"
          />
        </div>

        <div className="bottomGrid">
          <PersonalInfoCard info={user.personalInfo} />
          <AccountDetailsCard details={user.accountDetails} />
        </div>
      </div>
    )
}
