import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast"

function SearchBar() {
	const [search, setSearch] = useState("")
	const handleSubmit = (e)=>{
		e.preventDefault()
		toast.error("functionality still need to implement")
		
		return
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className="flex items-center gap-2">
				<div className="relative h-11 w-full min-w-[200px]">
					<input
						placeholder="Search"
						className="peer h-full w-full border-b border-gray-400 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
						onChange={(e)=> setSearch(e.target.value)}
					/>
				</div>

				<button type="submit" className="mt-4">
					<IoSearchSharp className="w-6 h-6 outline-none invert" />
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
