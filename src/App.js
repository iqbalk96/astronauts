import Dashboard from "./components/dashboard/main.dashboard"
import Albums from "./components/albums/main.albums"
import Posts from "./components/posts/main.posts"
import Users from "./components/users/main.users"
import Construction from "./components/construction/main.constructions"
import MainLayouts from "./components/layouts/main.layouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <MainLayouts>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Construction />} />
          </Routes>
        </MainLayouts>
      </Router>
    </>
  )
}

export default App
