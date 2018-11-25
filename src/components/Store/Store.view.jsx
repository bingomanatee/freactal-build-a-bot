import { PureComponent } from 'react';

export default class Store extends PureComponent {
  constructor(props) {
    super(props);
  }

  annotateSVG(svg) {
    const {actions} = this.props;
    const root = svgJS(svg);
    'Head,Torso'.split(',').forEach((part) => {
      root.select(`#Skeleton${part}Selector`)
        .on('click', function (event) {
          event.preventDefault();
          actions.selectPart('center', part.toLowerCase());
        });
    });

    'Leg,Arm'.split(',')
      .forEach((part) => {
        'Left,Right'.split(',')
          .forEach((side) => {
            root.select(`#Skeleton${side}${part}Selector`)
              .on('click', function (event) {
                event.preventDefault();
                actions.selectPart(side.toLowerCase(), part.toLowerCase());
              });
          });
      });
  }

  render() {
    const {state} = this.props;
    return (
      <section>
        <h1>Domo Arigato, {state.robotName}</h1>
        <ControlPanel />
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
      </section>
    );
    );
  }
}
