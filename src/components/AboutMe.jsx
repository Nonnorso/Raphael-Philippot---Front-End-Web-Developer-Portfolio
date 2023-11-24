import '../styles/AboutMe.scss'

export default function AboutMe() {
    return (
      <div className="profile-container">
        <img
        className="profile-pic"
          src="assets\Presentation\Photo-descripton.webp"
          alt="Raphaël Philippot"
          title="Raphaël Philippot"
        />
        <div className='profile-text'>
            <h2><span className="profile-initial">R</span>aphaël Philippot</h2>
            <p className="profile-description">
            Après plusieurs années en tant que vendeur, j'ai découvert ma passion
            pour le développement web et j'ai entrepris une reconversion à travers
            une formation complète.
            </p>
        </div>
      </div>
    );
  }