import {PureComponent} from 'react';
import {Menu} from 'antd';
import _ from 'lodash';
import ReactSVG from 'react-svg';
import style from './Menu.module.css';

export default class MenuView extends PureComponent {
  constructor(props) {
    super(props);
  }

  get menuClicked() {
    return async (event) => {
      await this.props.actions.setPart(_.find(this.props.state.styles, {name: event.key}));
    };
  }

  render() {
    return (
      <div className={style.menuWrapper}>
        <div className={style.menuInner}>
          <Menu mode="horizontal" onClick={this.menuClicked}>
            {this.props.state.styles.map((style) => (<Menu.Item key={style.name}>
              <div className={style.itemWrapper}><ReactSVG wrapper="span"
                                                 src={`/icons/${style.name}Icon.svg`}/>
                <div style={style.label}><span>{style.title}</span></div>
              </div>
            </Menu.Item>))}
          </Menu>
        </div>
      </div>
    );
  }
}
