import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../layouts/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { SolutionsPage } from '../pages/SolutionsPage'

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
      </Route>
    </Routes>
  )
}
