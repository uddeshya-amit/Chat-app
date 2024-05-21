import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function SignUp() {
	const [inputs, setInputs] = useState({
		fullName: "",
		userName: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});
	const { loading, signup } = useSignup();

	const handleGender = (gender) => {
		setInputs({ ...inputs, gender });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(inputs);
	};

	return (
		<div className="flex felx-col items-center justify-center min-w-96 m-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-slate-800">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Signup
					<span className="text-blue-500"> ChatterBox</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mt-2">
						<label className="label p-2">
							<span className="text-base label-text">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="eg. Bruce Wayne"
							className="w-full input input-border h-10"
							value={inputs.fullName}
							onChange={(e) =>
								setInputs({ ...inputs, fullName: e.target.value })
							}
						/>
					</div>
					<div className="mt-2">
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="eg. Bat_man"
							className="w-full input input-border h-10"
							value={inputs.userName}
							onChange={(e) =>
								setInputs({ ...inputs, userName: e.target.value })
							}
						/>
						{
							<GenderCheckbox
								onRadioChange={handleGender}
								selectedGender={inputs.gender}
							/>
						}
					</div>
					<div className="">
						<label className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter password"
							className="w-full input input-border h-10"
							value={inputs.password}
							onChange={(e) =>
								setInputs({ ...inputs, password: e.target.value })
							}
						/>
					</div>
					<div className="mt-2">
						<label className="label p-2">
							<span className="text-base label-text"> Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Confirm password"
							className="w-full input input-border h-10"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({ ...inputs, confirmPassword: e.target.value })
							}
						/>
					</div>

					<div>
						<button
							type="submit"
							className="btn btn-block mt-6"
							disabled={loading}>
							{loading ? <span className="loading loading-spinner"></span> : "Signup"}
						</button>
					</div>
					<div className="mt-4">
						<Link
							to={"/login"}
							href="#"
							className=" link-hover link-primary p-2 ">
							Already have an account?
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
