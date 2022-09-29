import React from "react";

function Card({ imageUrl, title, price, onChecked, itemsToDrawer, itemsToLiked }) {
	const [isChecked, setChecked] = React.useState(false);
	const [isLiked, setIsLiked] = React.useState(false);
	
	const addToDrawer = () => {
		setChecked(!isChecked);
		onChecked(isChecked);
		itemsToDrawer({ title, imageUrl, price });
	}
	const toLike = () => {
		setIsLiked(!isLiked);
		itemsToLiked({ title, imageUrl, price})
	}

	return (
		<div className="sneakers__card card">
			<div className="card__body">
				<div className="card__top">
					<div className="card__heart">
						<img src={isLiked ? "../img/sneakers/like_sneak.svg" : "../img/sneakers/notliked_sneak.svg"} alt="like" onClick={toLike} />
					</div>
					<div className="card__image">
						<img src={imageUrl} alt="1" width={133} />
					</div>
					<div className="card__title">{title}</div>
				</div>
				<div className="card__bottom">
					<div className="card__bottom-left">
						<p>Цена:</p>
						<div className="card__price">{price} руб.</div>
					</div>
					<div className="card__bottom-right">
						<img src={isChecked ? "../img/btn-checked.svg" : "../img/btn-plus.svg"} alt="plusOrCheck" onClick={addToDrawer} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;