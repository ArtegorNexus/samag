import { Link } from 'react-router-dom'

function Header({ isDrawerOpened }) {
	const openDrawer = () => {
		isDrawerOpened(true);
	}

	return (
		<header className="header">
			<div className="header__body">
				<div className="header__row">
						<div className="header__left">
							<div className="header__icon">
								<Link to='/'><img src="../img/logo.png" alt="logo" width={40} height={40} /></Link>
							</div>
							<div className="header__text">
								<Link to='/'>
									<h3 className="header__title">react sneakers</h3>
									<div className="header__subtitle">Магазин лучших кроссовок</div>
								</Link>
							</div>
						</div>
					
					<div className="header__right">
						<div className="header__drawer" onClick={openDrawer}>
							<img src="../img/drawer-icon.svg" alt="drawer" />
							<p>1200 р.</p>
						</div>
						<Link to='/liked'>
							<div className="header__liked">
								<img src="../img/like.svg" alt="liked" />
							</div>
						</Link>
						<div className="header__user">
							<img src="../img/user.svg" alt="user" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header