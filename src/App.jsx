import './App.css';
import ProfilePage from './components/ProfilePage';
import avatarImage from './assets/avatar.jpg';

function App() {
  const user = {
    name: "Sodaba bakhtari",
    username: "@sodaba123",
    avatarImage: avatarImage,
    XP: 80,
    lastActive: "Dec 22 2025",
    streakDays: 2,
    longStreak: 2,
    recentBadgesText: "No badges earned yet.",


    personalInfo: {
      email: 's.bakhtari123@gmail.com',
      gender: 'famale', 
      country: 'Afghanistan',
      "province of state": 'Kabul',
      "Date of birth": "4/10/2005",
      Languages: "Faesi, English, turkish",
    },

    accountDetails: {
      Role: "student",
      Status: "Active",
      Verification: "Verified",
    }
  }
  return (
    <div className='page'>
      <ProfilePage user = {user}></ProfilePage>
    </div>
  )
}

export default App
