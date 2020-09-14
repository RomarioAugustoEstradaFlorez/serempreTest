import React, { Fragment } from 'react'
import './styles.scss'
import { MdTouchApp } from 'react-icons/md'
import { BiEqualizer } from 'react-icons/bi'
import { ImSoundcloud } from 'react-icons/im'

import Tabs from '../Tabs'
import Slider from '../Slider'
import Footer from "../Footer"

var Logo = require('../../assets/img/logo.png');
Logo = Logo.default;

function StyleItem(props) {
	return (
		props.isActiveStyles === props.dataOption
			?
			<Fragment>
				<div className="product-detail__box--medium active" onClick={props.onClick} data-option={props.dataOption} data-type="style">
					<h4 className="product-detail__box--subtitle" data-option={props.dataOption} data-type="style">{props.data.name}</h4>
					<p className="product-detail__box--desc" data-option={props.dataOption} data-type="style">{props.data.description}</p>
				</div>
			</Fragment>
			:
			<Fragment>
				<div className="product-detail__box--medium" onClick={props.onClick} data-option={props.dataOption} data-type="style">
					<h4 className="product-detail__box--subtitle" data-option={props.dataOption} data-type="style">{props.data.name}</h4>
					<p className="product-detail__box--desc" data-option={props.dataOption} data-type="style">{props.data.description}</p>
				</div>
			</Fragment>
	)
}

function CoverageItem(props) {
	return (
		props.isActiveCoverage === props.dataOption
			?
			<Fragment>
				<div className="product-detail__box--full active" onClick={props.onClick} data-option={props.dataOption} data-type="coverage">
					<h4 className="product-detail__box--subtitle" data-option={props.dataOption} data-type="coverage">{props.data.name}</h4>
					<p className="product-detail__box--desc" data-option={props.dataOption} data-type="coverage">{props.data.description}</p>
					<span className="product-detail__box--price" data-option={props.dataOption} data-type="coverage">{props.data.price.ammount !== 0 ? `$ ${props.data.price.ammount}` : ""}</span>
				</div>
			</Fragment>
			:
			<Fragment>
				<div className="product-detail__box--full" onClick={props.onClick} data-option={props.dataOption} data-type="coverage">
					<h4 className="product-detail__box--subtitle" data-option={props.dataOption} data-type="coverage">{props.data.name}</h4>
					<p className="product-detail__box--desc" data-option={props.dataOption} data-type="coverage">{props.data.description}</p>
					<span className="product-detail__box--price" data-option={props.dataOption} data-type="coverage">{props.data.price.ammount !== 0 ? `$ ${props.data.price.ammount}` : ""}</span>
				</div>
			</Fragment>
	)
}
function FeatureItem(props) {
	return (
		props.isActiveFeature === props.dataOption
			?
			<Fragment>
				<div className="product-detail__box--full active" onClick={props.onClick} data-option={props.dataOption} data-type="features">
					<h4 className="product-detail__box--subtitle no-margin" data-option={props.dataOption} data-type="features">{props.data.name}</h4>
					<span className="product-detail__box--price" data-option={props.dataOption} data-type="features">{props.data.price.ammount !== 0 ? `$ ${props.data.price.ammount}` : ""}</span>
				</div>
			</Fragment>
			:
			<Fragment>
				<div className="product-detail__box--full" onClick={props.onClick} data-option={props.dataOption} data-type="features">
					<h4 className="product-detail__box--subtitle no-margin" data-option={props.dataOption} data-type="features">{props.data.name}</h4>
					<span className="product-detail__box--price" data-option={props.dataOption} data-type="features">{props.data.price.ammount !== 0 ? `$ ${props.data.price.ammount}` : ""}</span>
				</div>
			</Fragment>
	)
}

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isActiveStyles: "1", isActiveCoverage: "1", isActiveFeature: "1" };
		this.changeActive = this.changeActive.bind(this)
	}

	changeActive(ev) {
		if (ev.target.getAttribute("data-type") == "style") {
			this.setState({ isActiveStyles: ev.target.getAttribute("data-option") })
		}

		if (ev.target.getAttribute("data-type") == "coverage") {
			this.setState({ isActiveCoverage: ev.target.getAttribute("data-option") })
		}

		if (ev.target.getAttribute("data-type") == "features") {
			this.setState({ isActiveFeature: ev.target.getAttribute("data-option") })
		}
	}

	render() {
		var listStyles = this.props.styles.map((style, i) => {
			return (
				<StyleItem key={i} onClick={this.changeActive} isActiveStyles={this.state.isActiveStyles} dataOption={style.id} data={style} />
			)
		})

		var listCoverage = this.props.coverage.map((item, i) => {
			return (
				<CoverageItem key={i} onClick={this.changeActive} isActiveCoverage={this.state.isActiveCoverage} dataOption={item.id} data={item} />
			)
		})

		var listFeatures = this.props.features.map((item, i) => {
			return (
				<FeatureItem key={i} onClick={this.changeActive} isActiveFeature={this.state.isActiveFeature} dataOption={item.id} data={item} />
			)
		})
		return (
			<Fragment>
				<article key={this.props.id}>

					<div className="logo">
						<div className="g__row">
							<img className="img--responsive" src={Logo} />
						</div>
					</div>
					<div className="product-detail">

						<div className="g__row">

							<Slider data={this.props.pictures} properties={this.props.properties} />


							<div className="g__col s12 m12 l6 float-right">

								<div className="g__row ">
									<div className="product-detail__properties">
										{this.props.properties.map((property, i) => {
											return (
												<div key={i} className="g__col s12 m4 l4">
													{property.icon == "MdTouchApp" && <MdTouchApp />}
													{property.icon == "BiEqualizer" && <BiEqualizer />}
													{property.icon == "ImSoundcloud" && <ImSoundcloud />}
													<p>{property.name}</p>
												</div>
											)
										})}
									</div>
								</div>

								<div className="product-detail__info">
									<p className="product-detail__info--condition">{this.props.condition}</p>

									<h1 className="product-detail__info--title">{this.props.title}</h1>
									<h2 className="product-detail__info--subtitle">{this.props.subtitle}</h2>

									<p className="product-detail__info--msg">STARTING AT</p>
									<p className="product-detail__info--price">
										$ {this.props.price.ammount}
									</p>

									<Tabs data={this.props.info_tabs} active={1} />

								</div>

								<div className="g__row ">
									<div className="product-detail__properties--mobile-only">
										{this.props.properties.map((property, i) => {
											return (
												<div key={i} className="g__col s12 m4 l4">
													{property.icon == "MdTouchApp" && <MdTouchApp />}
													{property.icon == "BiEqualizer" && <BiEqualizer />}
													{property.icon == "ImSoundcloud" && <ImSoundcloud />}
													<p>{property.name}</p>
												</div>
											)
										})}
									</div>
								</div>


								<div className="g__row product-detail__box">
									<h1 className="product-detail__box--title">Choose your finish.</h1>
									{listStyles}
								</div>

								<div className="g__row product-detail__box">
									<h1 className="product-detail__box--title">Would you like to add extended warranty coverage?</h1>
									{listCoverage}
								</div>

								<div className="g__row product-detail__box">
									<h1 className="product-detail__box--title">Features.</h1>
									{listFeatures}
								</div>

								<div className="g__row product-detail__table">
									<h1 className="product-detail__table--title">Specifications.</h1>

									<div className="g__row">
										<div className="g__col s12 m4 l4">
											<h4 className="product-detail__table--subtitle">Dimensions</h4>
										</div>
										<div className="g__col s12 m8 l8">
											<p className="product-detail__table--desc">{this.props.specifications.dimensions}</p>
										</div>
									</div>

									<div className="g__row">
										<div className="g__col s12 m4 l5">
											<h4 className="product-detail__table--subtitle">USB Standard</h4>
										</div>
										<div className="g__col s12 m8 l7">
											<p className="product-detail__table--desc">{this.props.specifications.usb_standard}</p>
										</div>
									</div>

									<div className="g__row">
										<div className="g__col s12 m4 l5">
											<h4 className="product-detail__table--subtitle">Power supply</h4>
										</div>
										<div className="g__col s12 m8 l7">
											<p className="product-detail__table--desc">{this.props.specifications.power_supply}</p>
										</div>
									</div>

									<div className="g__row">
										<div className="g__col s12 m6 l6">
											<h4 className="product-detail__table--subtitle">Frequency response (Microphone)</h4>
										</div>
										<div className="g__col s12 m6 l6">
											<p className="product-detail__table--desc">{this.props.specifications.frequency_response.microphone}</p>
										</div>
									</div>

									<div className="g__row">
										<div className="g__col s12 m4 l5">
											<h4 className="product-detail__table--subtitle">Frequency response</h4>
										</div>
										<div className="g__col s12 m8 l7">
											<p className="product-detail__table--desc">{this.props.specifications.frequency_response.normal}</p>
										</div>
									</div>

									<div className="g__row">
										<div className="g__col s12 m4 l5">
											<h4 className="product-detail__table--subtitle">Noise cancellation</h4>
										</div>
										<div className="g__col s12 m8 l7">
											<p className="product-detail__table--desc">{this.props.specifications.noise_cancellation}</p>
										</div>
									</div>


								</div>
							</div>

						</div>
					</div>

				</article >

				<Footer price={this.props.price} freeShipping={this.props.free_shipping} warranty={this.props.warranty} />
			</Fragment>
		)
	}
}

export default ProductCard