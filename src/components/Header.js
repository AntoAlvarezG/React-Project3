export default function Header () {
    return (
        <nav>
            <img className="header--img" src="./images/troll-face.png" alt="troll face"/>
            <h1 onClick={() => window.location.reload()} className="header--title">Meme Generator</h1>
            <h4 className="header--text">React Course - Project 3</h4>
        </nav>
    )
}