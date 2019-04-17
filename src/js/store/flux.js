const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favourites: []
		},
		actions: {
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
			addToFavourites: () => {
				const store = getStore();
				// const newFav = store.people.filter((item) => {
				// 	return item.id == singleItemID
				// });
				console.log(this.props.match.theid);
				setStore({ store: store });
			}
		}
	};
};

export default getState;
