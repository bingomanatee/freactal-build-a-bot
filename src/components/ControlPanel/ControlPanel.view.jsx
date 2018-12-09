import { PureComponent } from 'react';
import { Input } from 'antd';
import Menu from '../Menu';

export default class ControlPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: props.state.robotName };
  }

  onChange(event) {
    const name = event.target.value;
    this.props.actions.setName(name);
    if (!this.isUnmounted) this.setState({ name }, () => {
    });
  }

  title() {
    const { selectedPart, selectedSide } = this.props.state;
    if (!selectedPart) {
      return 'Click on a blue dottedLine area to select a part';
    }

    return ['Selected: ', selectedPart || '', selectedSide].join(' ');
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    return (
      <div>
        <p>
          Set Robot name:
          <Input
            value={this.state.name}
            onChange={event => this.onChange(event)}
          />
        </p>
        <h2>{this.title()}</h2>
        {this.props.state.selectedPart && <Menu />}
      </div>
    );
  }
}
