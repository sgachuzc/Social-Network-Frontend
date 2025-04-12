import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "../components"
import { FeedPage, UserPage } from "../pages"

export const SocialNetworkRoutes = () => {
  return (
    <div className="social_network_container">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/my-feed" element={ <FeedPage/> } />
          <Route path="/my-user" element={ <UserPage/> } />
          <Route path="/" element={ <Navigate to={ "/my-feed" } /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
