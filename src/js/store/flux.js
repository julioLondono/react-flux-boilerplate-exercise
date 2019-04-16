const getState = ({ getStore, setStore }) => {
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
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				},
				{
					title: "FOURTH",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			changeColor: (id, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const mappedDemo = store.demo.map((item, index) => {
					if (index === id) item.background = color;
					return item;
				});

				//reset the global store
				setStore({ demo: mappedDemo });
			},
			deleteItem: id => {
				alert("This action will remove this item");
				const store = getStore();

				const mappedDemo = store.demo.map((item, index) => {
					return item;
				});

				mappedDemo.splice(id, 1);

				console.log("mappedDemo=" + mappedDemo);
				setStore({ demo: mappedDemo });
			},
			resetColors: () => {
				const store = getStore();

				const mappedDemo = store.demo.map((item, index) => {
					item.background = item.initial;
					return item;
				});
				setStore({ demo: mappedDemo });
			},
			updateItem: (id, inputTitle, inputColor) => {
				// console.log("id=" + id);
				// console.log("inputTitle=" + inputTitle);
				// console.log("inputColor=" + inputColor);
				const store = getStore();

				const mappedDemo = store.demo.map((item, index) => {
					store.demo[id].title = inputTitle;
					store.demo[id].background = inputColor;

					return item;
				});

				setStore({ demo: mappedDemo });
			}
		}
	};
};

export default getState;
