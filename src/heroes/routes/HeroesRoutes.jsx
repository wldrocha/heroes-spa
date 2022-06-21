import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { MarvelPage, DcPage, SearchPage, HeroePage } from '../index'
export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='heroe' element={<HeroePage />} />
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  )
}