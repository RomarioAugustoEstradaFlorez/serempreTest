import React, { Fragment } from 'react'
import { MdTouchApp } from 'react-icons/md'
import { BiEqualizer } from 'react-icons/bi'
import { ImSoundcloud } from 'react-icons/im'
import './styles.scss'
import { Img } from './styles'

function SlideItem(props) {
  return (
    props.isActive === props.dataSlide
      ?
      <div className="item__slide active g__col s4 m4 l4">
        <Img onClick={props.onClick} data-slide={props.dataSlide} className="img--responsive" src={props.picture} />
      </div>
      :
      <div className="item__slide g__col s4 m4 l4">
        <Img onClick={props.onClick} data-slide={props.dataSlide} className="img--responsive" src={props.picture} />
      </div>
  )
}

function SlideContent(props) {
  return (
    <div style={props.style} className="item__content">
      <Img data-slide={props.dataSlide} className="img--responsive item__content--img" src={props.picture} />
    </div>
  )
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: "1" };
    this.changeActive = this.changeActive.bind(this)
  }

  changeActive(ev) {
    this.setState({ isActive: ev.target.getAttribute("data-slide") })
  }

  render() {
    var listItems = this.props.data.map((item) => {
      return (
        <SlideItem onClick={this.changeActive} key={item.id} isActive={this.state.isActive} dataSlide={item.id} picture={item.url} />
      )
    })
    var listContent = this.props.data.map((item) => {
      return (
        this.state.isActive === item.id
          ? <SlideContent key={item.id} dataSlide={item.id} picture={item.url} />
          : <SlideContent key={item.id} style={{ display: 'none' }} dataSlide={item.id} picture={item.url} />
      )
    }
    )
    return (
      <Fragment>
        <div className="g__col s12 m12 l5 slider">
          <div className="g__row">
            {listContent}
          </div>
          <div className="g__row">
            {listItems}
          </div>
          <div className="g__row">
            <div className="properties">
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
        </div>

      </Fragment>
    )
  }
}

export default Slider