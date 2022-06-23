import { Link } from 'react-router-dom'

const CharactersByHero = ({ alterEgo, characters }) => {
  if (alterEgo !== characters) {
    return <p>{characters}</p>
  }
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego: alterEgo,
  first_appearance: firstAppearance,
  characters
}) => {
  const heroImgUrl = `/assets/heroes/${id}.jpg`
  return (
    <div className='col animate-fade-in'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImgUrl} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alterEgo}</p>
              {characters}
              <CharactersByHero alterEgo={alterEgo} characters={characters} />
              <p className='card-text'>
                <small className='text-muted'>{firstAppearance}</small>
              </p>
              <Link to={`/hero/${id}`}>ver más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
