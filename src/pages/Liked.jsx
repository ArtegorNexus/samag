import Card from "../components/Card";

function Liked({ items, itemsToDrawer1, itemsToLiked1 }) {
	return (
		<main className="content">
			<div className="sneakers__row">
						{
							items.map(obj => (
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
		</main>

	)
}

export default Liked