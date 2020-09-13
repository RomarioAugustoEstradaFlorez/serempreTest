import React, { Fragment } from 'react'
import './styles.scss'
import { useNearItemsToShow } from '../../hooks/useNearItemsToShow'
import { useMouseBehaviour } from '../../hooks/useMouseBehaviour'
import Tabs from '../Tabs'
import Slider from '../Slider'

var Logo = require('../../assets/img/logo.png');
Logo = Logo.default;

export const ProductCard = (product) => {
	const [show, element] = useNearItemsToShow() // this get for the element instead
	const [over, setOver] = useMouseBehaviour();

	// var priceObj = formatNumber(product.price)
	// console.log(product);
	return (
		<article key={product.id} ref={element}
			onMouseEnter={() => setOver(true)}
			onMouseLeave={() => setOver(false)}>

			<Fragment>
				<div className="logo">
					<div className="g__row">
						<img className="img--responsive" src={Logo} />
					</div>
				</div>
				<div className="product-detail">

					<div className="g__row">

						<div className="g__col s12 m12 l6">
							<Slider data={product.pictures} />
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
								{product.styles.map((style, i) => {
									return (
										<div className="product-detail__box--medium" key={i}>
											<h4 className="product-detail__box--subtitle">{style.name}</h4>
											<p className="product-detail__box--desc">{style.description}</p>
										</div>
									)
								})}
							</div>

							<div className="g__row product-detail__box">
								<h1 className="product-detail__box--title">Would you like to add extended warranty coverage?</h1>
								{product.coverage.map((item, i) => {
									return (
										<div className="product-detail__box--full" key={i}>
											<h4 className="product-detail__box--subtitle">{item.name}</h4>
											<p className="product-detail__box--desc">{item.description}</p>
											<span className="product-detail__box--price">{item.price.ammount !== 0 ? `$ ${item.price.ammount}` : ""}</span>
										</div>
									)
								})}
							</div>

							<div className="g__row product-detail__box">
								<h1 className="product-detail__box--title">Features.</h1>
								{product.features.map((item, i) => {
									return (
										<div className="product-detail__box--full" key={i}>
											<h4 className="product-detail__box--subtitle no-margin">{item.name}</h4>
											<span className="product-detail__box--price">{item.price.ammount !== 0 ? `$ ${item.price.ammount}` : ""}</span>
										</div>
									)
								})}
							</div>

							<div className="g__row product-detail__table">
								<h1 className="product-detail__table--title">Specifications.</h1>

								<div className="g__row">
									<div className="g__col s12 m4 l4">
										<h4 className="product-detail__table--subtitle">Dimensions</h4>
									</div>
									<div className="g__col s12 m8 l8">
										<p className="product-detail__table--desc">{product.specifications.dimensions}</p>
									</div>
								</div>

								<div className="g__row">
									<div className="g__col s12 m4 l5">
										<h4 className="product-detail__table--subtitle">USB Standard</h4>
									</div>
									<div className="g__col s12 m8 l7">
										<p className="product-detail__table--desc">{product.specifications.usb_standard}</p>
									</div>
								</div>

								<div className="g__row">
									<div className="g__col s12 m4 l5">
										<h4 className="product-detail__table--subtitle">Power supply</h4>
									</div>
									<div className="g__col s12 m8 l7">
										<p className="product-detail__table--desc">{product.specifications.power_supply}</p>
									</div>
								</div>

								<div className="g__row">
									<div className="g__col s12 m6 l6">
										<h4 className="product-detail__table--subtitle">Frequency response (Microphone)</h4>
									</div>
									<div className="g__col s12 m6 l6">
										<p className="product-detail__table--desc">{product.specifications.frequency_response.microphone}</p>
									</div>
								</div>

								<div className="g__row">
									<div className="g__col s12 m4 l5">
										<h4 className="product-detail__table--subtitle">Frequency response</h4>
									</div>
									<div className="g__col s12 m8 l7">
										<p className="product-detail__table--desc">{product.specifications.frequency_response.normal}</p>
									</div>
								</div>

								<div className="g__row">
									<div className="g__col s12 m4 l5">
										<h4 className="product-detail__table--subtitle">Noise cancellation</h4>
									</div>
									<div className="g__col s12 m8 l7">
										<p className="product-detail__table--desc">{product.specifications.noise_cancellation}</p>
									</div>
								</div>


							</div>
						</div>

					</div>
				</div>

			</Fragment>
		</article >
	)
}