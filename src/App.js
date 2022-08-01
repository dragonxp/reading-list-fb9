import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
	const { user, isAuthReady } = useAuthContext()

	return (
		<div className="App">
			{isAuthReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
						<Route path='signup' element={!user ? <Signup /> : <Navigate to='/' />} />
						<Route path='login' element={!user ? <Login /> : <Navigate to='/' />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App
