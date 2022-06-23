import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroePage = () => {
  const { id } = useParams()

  const hero = useMemo(() => getHeroById(id), [id])

  if (!hero) return <Navigate to='/marvel' />

  return (
    <>
      <h1>{hero?.superhero}</h1>
    </>
  )
}
