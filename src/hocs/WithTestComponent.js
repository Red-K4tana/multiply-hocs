import {useEffect, useState} from 'react';

const WithTestComponent = (Component) => {
	return (props) => {
		const {list, ...otherProps} = props

		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [enteredSearchValue, setEnteredSearchValue] = useState("");
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [activeSearchValue, setActiveSearchValue] = useState("");
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [sortMode, setSortMode] = useState(null);

		const availableItems = activeSearchValue
			? list.filter((item) => RegExp(activeSearchValue, "i").test(item.title))
			: list;

		const sortedItems = !sortMode
			? availableItems
			: availableItems.slice().sort((a, b) => {
				if (sortMode === "asc" && a.title > b.title) {
					return 1;
				} else if (sortMode === "asc") {
					return -1;
				} else if (sortMode === "desc" && a.title > b.title) {
					return -1;
				} else {
					return 1;
				}
			});
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			const handler = setTimeout(() => {
				setActiveSearchValue(enteredSearchValue);
			}, 300);

			return () => {
				clearTimeout(handler);
			};
		}, [enteredSearchValue]);

		return (
			<Component
				list={list}
				setEnteredSearchValue={setEnteredSearchValue}
				enteredSearchValue={enteredSearchValue}
				setSortMode={setSortMode}
				sortMode={sortMode}
				sortedItems={sortedItems}
				{...otherProps}
			/>
		);
	};
};

export default WithTestComponent