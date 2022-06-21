import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, MarvelPage} from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}

export default AppRouter
