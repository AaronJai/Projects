import profilePic from './assets/minion.jpg'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            {/* <img src="{profilePic}" alt="profile picture" /> */}
            <h2 className='card-title'>Ajai</h2>
            <p className='card-description'>Hello I learning</p>
        </div>
    );
}

export default Card