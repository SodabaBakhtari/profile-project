import './App.css'
import ProfilePage from './components/ProfilePage'
function App() {
  const user = {
    name: "Sodaba bakhtari",
    username: "@sodaba123",
    avatarImage: avatarImage,
    XP: 80,
    lastActive: "Dec 22 2025",
    streakDays: 2,
    longStreake: 2,
    recentBadgesText: "No badges earned yet.",


    parsonalInfo: {
      eamil: 's.bakhtari123@gmail.com',
      gender: 'famale',
      country: 'Afghanistan',
      "province of state": 'Kabul',
      "Date of birth": "4/10/2005",
      Languages: "Faesi, English, turkish",
    },

    accountDetails: {
      Role: "student",
    }
  }
  return (
    <div className='page'>
      <ProfilePage user = {user}></ProfilePage>
    </div>
  )
}

export default App
