import React from "react";

function Login() {
	return (
		<div className="flex felx-col items-center justify-center min-w-96 m-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-slate-800">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Login
					<span className="text-blue-500"> ChatterBox</span>
				</h1>

				<form>
					<div className="mt-2">
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full input input-border h-10"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter password"
							className="w-full input input-border h-10"
						/>
					</div>
                    
                    <div>
                        <button className="btn btn-block mt-4">
                            Login

                        </button>
                    </div>
                    <div className="mt-4">
                        <a href="/" className=" link-hover link-primary p-2 ">
                            Sign up
                        </a>
                    </div>
				</form>
			</div>
		</div>
	);
}

export default Login;