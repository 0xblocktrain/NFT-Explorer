import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const SearchComponent = ({ wallet, setWallet }) => {

	const connectWallet = async () => {
		try {
			const { ethereum } = window;
			if (!ethereum) {
				alert("Get Metamask!");
				return;
			} else {
				const accounts = await ethereum.request({
					method: "eth_requestAccounts",
				});

				console.log("Connected ", accounts[0]);
				setWallet(accounts[0]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			{/* Search Input and Button */}
			<SearchInput setWallet={setWallet} />
			<p className="py-2">-------or-------</p>
			<button
				onClick={connectWallet}
				className="px-3 py-3 bg-blue-400 text-black font-bold rounded transform hover:scale-105"
			>
				Connect Wallet
			</button>
		</div>
	);
};

export default SearchComponent;
