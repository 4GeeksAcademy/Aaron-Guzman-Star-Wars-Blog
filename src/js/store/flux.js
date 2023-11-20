const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPerson: async () => {

				try {

					const response = await fetch("https://swapi.dev/api/people/")
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, people: data.results });
						console.log(data)
					}

				}

				catch (error) {

					console.log("este es el error", (error))

				}
			},

			getPlanets: async () => {

				try {

					const response = await fetch("https://swapi.dev/api/planets/")
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, planets: data.results });
						console.log(data)
					}

				}

				catch (error) {

					console.log("este es el error", (error))

				}
			},

			addFavorite: (name) => {
				const store = getStore();
				const { favorites } = store;
				
			  	if (!favorites.includes(name)) {
				  setStore({ ...store, favorites: [...favorites, name] });
				}
			  },

			updateFavorites: (updateFavorites) => {
				const store = getStore();
				setStore({...store, favorites: updateFavorites})
			}
		}
	}
};

export default getState;