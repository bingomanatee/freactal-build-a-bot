import { PureComponent } from 'react';
import svgJS from 'svg.js';
import ReactSVG from 'react-svg';
import ControlPanel from './../ControlPanel';

const SCALE = 0.5;

export default class Store extends PureComponent {
  annotateSVG(svg) {
    const { actions, state } = this.props;
    const root = svgJS(svg);
    state.styles.forEach((style) => {
      let part = root.select(`#${style.name}`);
      let text = root.select(`#${style.name}Text`);
      this.makeButton(part, text);

      if (style.hasSingle) {
        part = root.select(`#${style.name}`);
        text = root.select(`#${style.name}Text`);
        this.makeButton(part, text);
      }
    });
  }

  makeButton(bg, text) {
    svgJS(bg).alpha(0.1);
  }

  render() {
    const { state } = this.props;
    return (
      <section>
        <h1>Domo Arigato, {state.robotName}</h1>
        <ControlPanel />
        <ReactSVG
          src="bots/Menu.svg"
          evalScripts="always"
          fallback={() => <span>Error!</span>}
          loading={() => <span>Loading</span>}
          onInjected={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            this.annotateSVG(svg);
          }}
          renumerateIRIElements={false}
          svgStyle={{
            width: 955 * SCALE,
            height: 1393 * SCALE,
          }}
          onClick={() => {
            console.log('wrapper onClick');
          }}
        />
      </section>
    );
  }
}
