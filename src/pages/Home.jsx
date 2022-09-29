import Card from "../components/Card";

function Home({
	items,
	searchValue,
	onChangeSearchInput,
	itemsToDrawer1,
	itemsToLiked1, }) {
	return (
		<main className="content">
			<div className="sneakers">
				<div className="sneakers__body">
					<div className="sneakers__top-row">
						<div className="sneakers__title">{searchValue ? `Результаты по запросу "${searchValue}"` : 'Все кроссовки'}</div>
						<input value={searchValue} placeholder="Поиск..." type="text" className="sneakers__finder" onChange={onChangeSearchInput} />
					</div>
					<div className="sneakers__row">
						{
							items
								.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
								.map(obj => (
									<Card
										title={obj.title}
										price={obj.price}
										imageUrl={obj.imageUrl}
										onChecked={(isChecked) => isChecked ? true : false}
										itemsToDrawer={(obj) => itemsToDrawer1(obj)}
										itemsToLiked={(obj) => itemsToLiked1(obj)}
									/>
								))
						}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home