
function ProfilePicture() {
    const imageUrl = './src/assets/minion.jpeg'

    // const handleClick = () => console.log("G");
    // return(<img onClick={handleClick} src={imageUrl}></img>);

    // hides image when clicking
    const handleClick = (e) => e.target.style.display = "none";
    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);

}

export default ProfilePicture