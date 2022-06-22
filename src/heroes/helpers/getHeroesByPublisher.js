import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {
  const validatePublissher = ['DC Comics', 'Marvel Comics']

  if (!validatePublissher.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`)
  }

  return heroes.filter((heroe) => heroe?.publisher === publisher)
}
