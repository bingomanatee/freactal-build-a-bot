import { PureComponent } from 'react';

export default class Store extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: props.state.robotName };
  }

  onChange(event) {
    const name = event.target.value;
    this.setState({ name }, () => {
      this.props.actions.setName(name);
    });
  }

  render() {
    return (
      <section>
        <h1>Domo Arigato, {this.props.state.robotName}</h1>
        <p>
          Set Robot name:
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.onChange(event)}
          />
        </p>
      </section>
    );
  }
}
