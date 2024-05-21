import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({
		fullName,
		userName,
		password,
		confirmPassword,
		gender,
	}) => {
		const success = handelInputErrors({
			fullName,
			userName,
			password,
			confirmPassword,
			gender,
		});
		if (!success) return;

		setLoading(true);
		try {
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					fullName,
					userName,
					password,
					confirmPassword,
					gender,
				}),
			});
			const data = await response.json();
            console.log(data)
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("active-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
            console.log(error.message)
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handelInputErrors({
	fullName,
	userName,
	password,
	confirmPassword,
	gender,
}) {
	if (!fullName || !userName || !password || !confirmPassword || !gender) {
		toast.error("Some of the fields are empty");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Password don't match");
		return false;
	}
	if (password.length < 6) {
		toast.error("Password must be 8 characters long");
		return false;
	}
	return true;
}
