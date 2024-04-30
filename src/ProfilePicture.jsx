
function ProfilePicture(){

    const imgurl = './src/assets/profile.jpg';

    const handleClick = (e) => e.target.style.display = "none";
    
    return(
        <img onClick={(e) => handleClick(e)}  className="img" src={imgurl} alt="profile-pic" />
    );
}

export default ProfilePicture