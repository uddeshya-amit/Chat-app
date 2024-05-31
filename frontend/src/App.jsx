import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className="h-screen flex items-center justify-center bg-blue-200">
			<Routes>
				<Route
					path="/"
					element={authUser ? <Home /> : <Navigate to={"/login"} />}
				/>
				<Route
					path="/login"
					element={authUser ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={authUser ? <Navigate to="/" /> : <SignUp />}
				/>
			</Routes>
			<Toaster reverseOrder={true}  />
		</div>
	);
}

export default App;
