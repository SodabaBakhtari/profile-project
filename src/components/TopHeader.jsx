export default function TopHeader({name, username, avatarImage}){
    return(
        <header className="topHeader">
            <div className="topHeaderainner">
                <div className="avatarRing">
                    <div className="avatarCircle avatarImageWrapper">
                        <img src="{avatarImage}" alt={name} className="avatarImage" />
                    </div>
                </div>
                <div className="topHeaderContent">
                    <h1 className="profileNmae">{name}</h1>
                    <p className="profileHandle">{username}</p>

                    <div className="topHeaderButtons">
                        <button className="btnHeader primary">Edit Profile</button>
                        <button className="btnHeader ghost">Sign Out</button>
                    </div>
                </div>
            </div>
        </header>
    )
}