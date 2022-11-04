import React, { useState } from 'react'

const SearchInput = ({ setWallet }) => {

    const [inputField, setInputField] = useState("")

	const submitHandler = (e) => {
		e.preventDefault();
		if (inputField.length === 42) {
			// console.log(inputField);
            setWallet(inputField)
		} else {
			console.log("Enter a valid wallet address");
		}
	};

    return (
        <form
            onSubmit={(e) => submitHandler(e)}
            className="flex justify-center items-center gap-4 pt-0 min-w-[600px]"
        >
            {/* Search Input */}
            <input
                type="text"
                placeholder="Enter a wallet address"
                onChange={(e) => setInputField(e.target.value)}
                className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
            <button
                type="submit"
                className="px-3 py-3 bg-green-300 text-black font-bold rounded transform hover:scale-105"
            >
                Search
            </button>
        </form>
    )
}

export default SearchInput