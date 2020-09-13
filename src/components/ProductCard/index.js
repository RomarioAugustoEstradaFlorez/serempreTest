import React, { Fragment } from 'react'
import './styles.scss'
import { Img } from './styles'
import { useNearItemsToShow } from '../../hooks/useNearItemsToShow'
import { useMouseBehaviour } from '../../hooks/useMouseBehaviour'
import Tabs from '../Tabs'

var Logo = require('../../assets/img/logo.png');
Logo = Logo.default;

export const ProductCard = (product) => {
	const [show, element] = useNearItemsToShow() // this get for the element instead
	const [over, setOver] = useMouseBehaviour();

	// var priceObj = formatNumber(product.price)
	// console.log(product);
	return (
		<article ref={element}
			onMouseEnter={() => setOver(true)}
			onMouseLeave={() => setOver(false)}>

			<Fragment>
				<div className="logo">
					<div className="g__row">
						<Img className="img--responsive" src={Logo} />
					</div>
				</div>
				<div className="product-detail">

					<div className="g__row">

						<div className="g__col s12 m12 l6">
							<div className="product-detail__thumbnail">
								<Img className="img--responsive product-detail__thumbnail--img" src={product.thumbnail} />
							</div>
							<div className="g__row">
								<div className="product-detail--item g__col s4 m4 l4">
									<Img className="img--responsive" src={product.pictures[1].url} />
								</div>
								<div className="product-detail--item g__col s4 m4 l4">
									<Img className="img--responsive" src={product.pictures[2].url} />
								</div>
								<div className="product-detail--item g__col s4 m4 l4">
									<Img className="img--responsive" src={product.pictures[3].url} />
								</div>
							</div>
						</div>

						<div className="g__col s12 m12 l6">
							<div className="product-detail__info">
								<p className="product-detail__info--condition">{product.condition}</p>

								<h1 className="product-detail__info--title">{product.title}</h1>
								<h2 className="product-detail__info--subtitle">{product.subtitle}</h2>

								<p className="product-detail__info--msg">STARTING AT</p>
								<p className="product-detail__info--price">
									$ {product.price.ammount}
								</p>

								<Tabs data={product.info_tabs} active={1} />
							</div>

							<div className="g__row product-detail__box">
								<h1 className="product-detail__box--title">Choose your finish.</h1>
								{product.styles.map(style => {
									return (
										<div className="product-detail__box--medium" >
											<h4 className="product-detail__box--subtitle">{style.name}</h4>
											<p className="product-detail__box--desc">{style.description}</p>
										</div>
									)
								})}
							</div>

							<div className="g__row product-detail__box">
								<h1 className="product-detail__box--title">Would you like to add extended warranty coverage.</h1>
								{product.coverage.map(item => {
									return (
										<div className="product-detail__box--full" >
											<h4 className="product-detail__box--subtitle">{item.name}</h4>
											<p className="product-detail__box--desc">{item.description}</p>
											<span className="product-detail__box--price">{item.price.ammount !== 0 ? `$ ${item.price.ammount}` : ""}</span>
										</div>
									)
								})}
							</div>

						</div>
					</div>
				</div>
			</Fragment>
		</article>
	)
}