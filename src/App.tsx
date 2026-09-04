import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import SmoothScroll from './components/layout/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </SmoothScroll>
  )
}

export default App