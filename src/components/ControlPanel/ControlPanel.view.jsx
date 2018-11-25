import { PureComponent } from 'react';
import { Input } from 'antd';

export default class ControlPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: this.props.robotName };
  }

  onChange(event) {
    const name = event.target.value;
    this.setState({ name }, () => {
      this.props.actions.setName(name);
    });
  }

  title() {
    const { selectedPart, selectedSide } = this.props.state;
    if (!selectedPart) {
      return 'Click on a blue dottedLine area to select a part';
    }

    return ['Selected: ', selectedPart || '', selectedSide].join(' ');
  }

  render() {
    return (
      <div>
        <h2>{this.title()}</h2>
        <p>
          Set Robot name:
          <Input
            value={this.state.robotName}
            onChange={event => this.onChange(event)}
          />
        </p>
      </div>
    );
  }
}
