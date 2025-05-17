// App.jsx
import { BrowserRouter, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AcademicForm from './pages/AcademicForm';
import InternshipForm from './pages/InternshipForm';
import CertificateForm from './pages/CertificateForm';
import SkillForm from './pages/SkillForm';
import ViewAcademic from './pages/ViewAcademic';
import ViewInternship from './pages/ViewInternship';
import ViewCertificate from './pages/ViewCertificate';
import ViewSkill from './pages/ViewSkill';
import ProtectedRoute from './components/ProtectedRoute';
import AppNavbar from './components/Navbar';

// This layout now wraps the Outlet — it reacts to routing correctly
const Layout = () => {
  const location = useLocation();
  const hideNavbar = ['/login', '/register'].includes(location.pathname);
  return (
    <>
      {!hideNavbar && <AppNavbar />}
      <Outlet />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />

      {/* Wrap routes in Layout */}
      <Route element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/academic" element={<AcademicForm />} />
          <Route path="/internship" element={<InternshipForm />} />
          <Route path="/certificate" element={<CertificateForm />} />
          <Route path="/skill" element={<SkillForm />} />
          <Route path="/view/academic" element={<ViewAcademic />} />
          <Route path="/view/internship" element={<ViewInternship />} />
          <Route path="/view/certificate" element={<ViewCertificate />} />
          <Route path="/view/skill" element={<ViewSkill />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
