import { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const hero = useMemo(() => getHeroById(id), [id])

  const onNavigateBack = ()=> {
    navigate(-1)
  }

  if (!hero) return <Navigate to='/marvel' />

  return (
    <div className='row mt-5'>
      <h2>{hero?.superhero}</h2>
      <div className='col-4'>
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt=''
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b>
            {hero?.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b>
            {hero?.publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appeareance:</b>
            {hero?.first_appearance}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>Back</button>
      </div>
    </div>
  )
}
