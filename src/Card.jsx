import profilepic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilepic} className='card-image' alt="prfile-picture" />
            <h2 className='card-title'>Piyumx</h2>
            <p className='card-text'>Just started learning react</p>
        </div>
    );
}

export default Card