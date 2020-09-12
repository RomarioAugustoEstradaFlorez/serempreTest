import React, { Fragment } from 'react'
import './styles.scss'

function TabTitle(props) {
  return (
    props.isActive === props.dataTab
      ? <li onClick={props.onClick} className="tabs__item-title tabs__item-title--active" data-tab={props.dataTab}>{props.title}</li>
      : <li onClick={props.onClick} className="tabs__item-title" data-tab={props.dataTab}>{props.title}</li>
  )
}

function TabContent(props) {
  return (
    <p style={props.style} data-tab={props.dataTab}>{props.content}</p>
  )
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '1' };
    this.changeActive = this.changeActive.bind(this)
  }

  changeActive(ev) {
    this.setState({ isActive: ev.target.getAttribute("data-tab") })
  }

  render() {
    var listTitle = this.props.data.map((item) =>
      <TabTitle key={item.id} isActive={this.state.isActive} onClick={this.changeActive} dataTab={item.id} title={item.name} />
    )
    var listContent = this.props.data.map((item) => {
      return (
        this.state.isActive === item.id
          ? <TabContent key={item.id} dataTab={item.id} content={item.description} />
          : <TabContent key={item.id} style={{ display: 'none' }} dataTab={item.id} content={item.description} />
      )
    }
    )
    return (
      <Fragment>
        <ul className="tabs">
          {listTitle}
        </ul>
        <div className="tabs__content">
          {listContent}
        </div>
      </Fragment>
    )
  }
}

export default Tabs