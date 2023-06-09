import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Register from './pages/forms/Register'
import Login from './pages/forms/Login'
import PostDetails from './pages/post-details/PostDetails'
import PostsPage from './pages/posts-page/PostsPage'
import ForgotPassword from './pages/forms/ForgotPassword'
import ResetPassword from './pages/forms/ResetPassword'
import Profile from './pages/profile/Profile'
import CreatePost from './pages/create-post/CreatePost'
import AdminDashboard from './pages/admin/AdminDashboard'
import UsersTable from './pages/admin/UsersTable'
import PostsTable from './pages/admin/PostsTable'
import CategoriesTable from './pages/admin/CategoriesTable'
import { ToastContainer } from 'react-toastify'
import CommentsTable from './pages/admin/CommentsTable'
import Category from './pages/category/Category'
import NotFound from './pages/not-found/NotFound'
import { useSelector } from 'react-redux'
import VerifyEmail from './pages/verify-email/VerifyEmail'
import DispatcherDashboard from './pages/dispatcher/DispatcherDashboard'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ChatDispatcher from './pages/dispatcher/ChatDispatcher'
import TimeDispatcher from './pages/dispatcher/TimeDispatcher'
import MapDispatcher from './pages/dispatcher/MapDispatcher'
import RoutingDispatcher from './pages/dispatcher/RoutingDispatcher'
import SimulationDispatcher from './pages/dispatcher/SimulationDispatcher'
import AlertDispatcher from './pages/dispatcher/AlertDispatcher'
import ChatOperator from './pages/operator/ChatOperator'
import TimeOperator from './pages/operator/TimeOperator'
import MapOperator from './pages/operator/MapOperator'
import RoutingOperator from './pages/operator/RoutingOperator'
import SimulationOperator from './pages/operator/SimulationOperator'
import AlertOperator from './pages/operator/AlertOperator'
import ChatSecurity from './pages/security/ChatSecurity'
import TimeSecurity from './pages/security/TimeSecurity'
import MapSecurity from './pages/security/MapSecurity'
import RoutingSecurity from './pages/security/RoutingSecurity'
import SimulationSecurity from './pages/security/SimulationSecurity'
import AlertSecurity from './pages/security/AlertSecurity'
import ChatMaintenance from './pages/maintenance/ChatMaintenance'
import TimeMaintenance from './pages/maintenance/TimeMaintenance'
import MapMaintenance from './pages/maintenance/MapMaintenance'
import RoutingMaintenance from './pages/maintenance/RoutingMaintenance'
import SimulationMaintenance from './pages/maintenance/SimulationMaintenance'
import AlertMaintenance from './pages/maintenance/AlertMaintenance'
import MaintenanceDashboard from './pages/maintenance/MaintenanceDashboard'
import OperatorDashboard from './pages/operator/OperatorDashboard'
import SecurityDashboard from './pages/security/SecurityDashboard'

function App () {
  const { user } = useSelector(state => state.auth)
  return (
    <BrowserRouter>
      <ToastContainer theme='colored' position='top-center' />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/register'
          element={!user ? <Register /> : <Navigate to='/' />}
        />
        <Route
          path='/users/:userId/verify/:token'
          element={!user ? <VerifyEmail /> : <Navigate to='/' />}
        />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/reset-password/:userId/:token'
          element={<ResetPassword />}
        />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='posts'>
          <Route index element={<PostsPage />} />
          <Route path='create' element={<CreatePost />} />
          <Route path='details/:id' element={<PostDetails />} />
          <Route path='categories/:category' element={<Category />} />
        </Route>
        <Route path='admin-dashboard'>
          <Route
            index
            element={user?.isAdmin ? <AdminDashboard /> : <Navigate to='/' />}
          />
          <Route
            path='users-table'
            element={user?.isAdmin ? <UsersTable /> : <Navigate to='/' />}
          />
          <Route
            path='posts-table'
            element={user?.isAdmin ? <PostsTable /> : <Navigate to='/' />}
          />
          <Route
            path='categories-table'
            element={user?.isAdmin ? <CategoriesTable /> : <Navigate to='/' />}
          />
          <Route
            path='comments-table'
            element={user?.isAdmin ? <CommentsTable /> : <Navigate to='/' />}
          />
        </Route>

        <Route path='dispatcher'>
          <Route
            index
            element={user?.isDispatcher ? <DispatcherDashboard /> : <Navigate to='/' />}
          />
          <Route
            path='TimeDispatcher'
            element={user?.isDispatcher ? <TimeDispatcher /> : <Navigate to='/' />}
          />
          <Route
            path='RoutingDispatcher'
            element={user?.isDispatcher ? <RoutingDispatcher /> : <Navigate to='/' />}
          />
          <Route
            path='MapDispatcher'
            element={user?.isDispatcher ? <MapDispatcher /> : <Navigate to='/' />}
          />
          <Route
            path='ChatDispatcher'
            element={user?.isDispatcher ? <ChatDispatcher /> : <Navigate to='/' />}
          />
          <Route
            path='SimulationDispatcher'
            element={user?.isDispatcher ? <SimulationDispatcher /> : <Navigate to='/' />}
          />
          <Route
            path='AlertDispatcher'
            element={user?.isDispatcher ? <AlertDispatcher /> : <Navigate to='/' />}
          />
          
        </Route>

        <Route path='Maintenance'>
          <Route
            index
            element={user?.isMaintenanceAgent ? <MaintenanceDashboard /> : <Navigate to='/' />}
          />
          <Route
            path='TimeMaintenance'
            element={user?.isMaintenanceAgent ? <TimeMaintenance /> : <Navigate to='/' />}
          />
          <Route
            path='RoutingMaintenance'
            element={user?.isMaintenanceAgent ? <RoutingMaintenance /> : <Navigate to='/' />}
          />
          <Route
            path='MapMaintenance'
            element={user?.isMaintenanceAgent ? <MapMaintenance /> : <Navigate to='/' />}
          />
          <Route
            path='ChatMaintenance'
            element={user?.isMaintenanceAgent ? <ChatMaintenance /> : <Navigate to='/' />}
          />
          <Route
            path='SimulationMaintenance'
            element={user?.isMaintenanceAgent ? <SimulationMaintenance /> : <Navigate to='/' />}
          />
          <Route
            path='AlertMaintenance'
            element={user?.isMaintenanceAgent ? <AlertMaintenance /> : <Navigate to='/' />}
          />
          
        </Route>

        <Route path='Security'>
          <Route
            index
            element={user?.isSecurityAgent ? <SecurityDashboard /> : <Navigate to='/' />}
          />
          <Route
            path='TimeSecurity'
            element={user?.isSecurityAgent ? <TimeSecurity /> : <Navigate to='/' />}
          />
          <Route
            path='RoutingSecurity'
            element={user?.isSecurityAgent ? <RoutingSecurity /> : <Navigate to='/' />}
          />
          <Route
            path='MapSecurity'
            element={user?.isSecurityAgent ? <MapSecurity /> : <Navigate to='/' />}
          />
          <Route
            path='ChatSecurity'
            element={user?.isSecurityAgent ? <ChatSecurity /> : <Navigate to='/' />}
          />
          <Route
            path='SimulationSecurity'
            element={user?.isSecurityAgent ? <SimulationSecurity /> : <Navigate to='/' />}
          />
          <Route
            path='AlertSecurity'
            element={user?.isSecurityAgent ? <AlertSecurity /> : <Navigate to='/' />}
          />
          
        </Route>

        <Route path='Operator'>
          <Route
            index
            element={user?.isOperator ? <OperatorDashboard /> : <Navigate to='/' />}
          />
          <Route
            path='TimeOperator'
            element={user?.isOperator ? <TimeOperator /> : <Navigate to='/' />}
          />
          <Route
            path='RoutingOperator'
            element={user?.isOperator ? <RoutingOperator /> : <Navigate to='/' />}
          />
          <Route
            path='MapOperator'
            element={user?.isOperator ? <MapOperator /> : <Navigate to='/' />}
          />
          <Route
            path='ChatOperator'
            element={user?.isOperator ? <ChatOperator /> : <Navigate to='/' />}
          />
          <Route
            path='SimulationOperator'
            element={user?.isOperator ? <SimulationOperator /> : <Navigate to='/' />}
          />
          <Route
            path='AlertOperator'
            element={user?.isOperator ? <AlertOperator /> : <Navigate to='/' />}
          />
          
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
