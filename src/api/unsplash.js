import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID T1Jcu-C5Oa8fWNFLzzIilzCMLnj0mNKNd6O0NDhVZh8",
	},
});
