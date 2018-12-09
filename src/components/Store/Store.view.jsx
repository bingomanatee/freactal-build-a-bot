import {PureComponent} from 'react';
import svgJS from 'svg.js';
import ReactSVG from 'react-svg';
import ControlPanel from './../ControlPanel';
import style from './Store.module.css';

import PartView from './Part.view';

const SCALE = 0.333;

const PARTS = [
  'leftleg',
  'rightleg',
  'legunit',
  'rightarm',
  'torso',
  'head',
  'leftarm',
];

export default class Store extends PureComponent {
  annotateSVG(svg) {
    const {actions} = this.props;
    const root = svgJS(svg);
    'Head,Torso'.split(',')
      .forEach((part) => {
        root.select(`#Skeleton${part}Selector`)
          .on('click', (event) => {
            event.preventDefault();
            actions.selectPart('center', part.toLowerCase());
          });
      });

    'Leg,Arm'.split(',')
      .forEach((part) => {
        'Left,Right'.split(',')
          .forEach((side) => {
            root.select(`#Skeleton${side}${part}Selector`)
              .on('click', (event) => {
                event.preventDefault();
                actions.selectPart(side.toLowerCase(), part.toLowerCase());
              });
          });
      });
  }

  onClickPart(part) {
    let event;
    const actions = this.props.actions;
    switch(part) {
      case 'leftleg':
        event = () => actions.selectPart('left', 'leg');
        break;

      case 'rightleg':
        event = () => actions.selectPart('right', 'leg');
        break;
      case 'leftarm':
        event = () => actions.selectPart('left', 'arm');
        break;

      case 'rightarm':
        event = () => actions.selectPart('right', 'arm');
        break;

      case 'head':
        event = () => actions.selectPart('center', 'head');
        break;

      case 'torso':
        event = () => actions.selectPart('center', 'torso');
        break;
    }
    return event;
  }

  render() {
    const {state} = this.props;
    console.log('storeview state:', state);
    return (
      <section>
        <h1>Domo Arigato, {state.robotName}</h1>
        <ControlPanel/>
        <div className={style.robotView}>
          <ReactSVG
            src="bots/SkeletonBot.svg"
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
          {PARTS.map(name => {
            if (!state[name]) return null;
            console.log('drawing state name: ', state[name]);
            const coords = state[name].sprites[name];
            console.log({coords});
            return <PartView key={name} bodyPart={name}
                             onClick={this.onClickPart(name)}
                             scale={SCALE} {...state[name]} {...coords} />;
          })}
        </div>
      </section>
    );
  }
}
