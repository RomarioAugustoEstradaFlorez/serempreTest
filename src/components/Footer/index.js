import React, { Fragment } from 'react'
import './styles.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <footer className="footer">
          <div className="footer__container">
            <div className="g__row">
              <div className="g__col info s12 m6 l6">
                <div className="g__row">
                  <div className="g__col s12 m12 l6">
                    <h5 className="footer--title">Free Shipping</h5>
                    <p className="footer--desc">{this.props.freeShipping}</p>
                  </div>
                  <div className="g__col s12 m12 l6">
                    <h5 className="footer--title">2 years warranty</h5>
                    <p className="footer--desc">{this.props.warranty}</p>
                  </div>
                </div>
              </div>
              <div className="g__col s12 m6 l6">
                <div className="g__row">
                  <div className="g__col s12 m6 l8">
                    <p className="footer--price">$ {this.props.price.ammount}</p>
                    <a className="footer--link">Need financing? Learn more</a>
                  </div>
                  <div className="g__col s12 m6 l4">
                    <button className="button button__primary button--full">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fragment >
    )
  }
}

export default Footer