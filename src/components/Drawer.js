import React from "react";

function Drawer({ isDrawerOpened, onRemove, itemsFromAppToDrawer = [] }) {

	const setDrawerFalse = (event) => {
		if (!event.target.closest('.drawer__body')) {
			isDrawerOpened(false)
		}
	}

	return (
		<div className="drawer" onClick={(event) => setDrawerFalse(event)}>
			<div className="drawer__body">
				<div className="drawer__top">
					<div className="drawer__title">Корзина</div>
					{
						itemsFromAppToDrawer.length > 0 ? (
							itemsFromAppToDrawer.map((obj) => (
								<div className="drawer__card card-drawer">
									<div className="card-drawer__body">
										<div className="card-drawer__image">
											<img src={obj.imageUrl} alt="1" width={70} height={70} />
										</div>
										<div className="card-drawer__text">
											<div className="card-drawer__title">{obj.title}</div>
											<div className="card-drawer__price">{obj.price + 'руб.'}</div>
										</div>
										<div className="card-drawer__delete" onClick={(id) => onRemove(obj.id)}>
											<img src="../img/sneakers/delete.svg" alt="del" />
										</div>
									</div>
								</div>
							))
						) : (
							<div className="no__items">Корзина пустая</div>
						)
					}
				</div>
				<div className="drawer__bottom">
					<div className="drawer__bottom-row">
						<p>Итого:</p>
						<div className="drawer__total">12999 руб.</div>
					</div>
					<div className="drawer__buy">
						<button>Оформить</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Drawer