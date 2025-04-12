import { Navigate, Route, Routes } from 'react-router-dom'
import { SocialNetworkRoutes } from '../social-network/routes/SocialNetworkRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={ <SocialNetworkRoutes /> } />
      </Routes>
    </>
  )
}
