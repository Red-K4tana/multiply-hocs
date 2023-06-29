
import WithTestComponent from "../hocs/WithTestComponent";


export const TestComponent = WithTestComponent( ({ list, setEnteredSearchValue, enteredSearchValue, setSortMode, sortMode, sortedItems}) => {

	return (
		<div className="App">
			<div className="form">
				<input
					type="search"
					value={enteredSearchValue}
					onChange={(e) => setEnteredSearchValue(e.target.value)}
					placeholder="search todo"
				/>
				<div className="form-radio">
					<input
						type="radio"
						name="sort"
						value="asc"
						checked={sortMode === "asc"}
						onChange={(e) => setSortMode(e.target.value)}
					/>{" "}
					A-Z
					<input
						type="radio"
						name="sort"
						value="desc"
						checked={sortMode === "desc"}
						onChange={(e) => setSortMode(e.target.value)}
					/>{" "}
					Z-A
				</div>
			</div>

			<ul>
				{sortedItems.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
} )
