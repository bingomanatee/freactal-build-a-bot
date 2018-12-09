import { provideState, injectState, update } from '@wonderlandlabs/freactal-connect';
import MenuView from './Menu.view.jsx';

console.log('provideState', provideState, 'update:', update);
export default provideState([
  {
    styles: [
      {
        name: 'Const',
        title: 'ConstructorBot',
        hasSingle: true,
        singleTitle: 'Dozer Legs',
        sprites: {
          head: {
            x: 287,
            y: 45,
            w: 336,
            h: 272
          },
          leftarm: {
            x: 225,
            y: 305,
            w: 186,
            h: 533
          },
          rightarm: {
            x: 572,
            y: 312,
            w: 186,
            h: 533
          },
          torso: {
            x: 287,
            y: 295,
            w: 366,
            h: 456
          },
          leftleg: {
            x: 330,
            y: 695,
            w: 139,
            h: 509
          },
          rightleg: {
            x: 474,
            y: 695,
            w: 139,
            h: 509,
          }
        }
      },
      {
        name: 'Basic',
        title: 'TinBot',
        hasSingle: false,
        sprites: {
          head: {
            x: 394,
            y: 17,
            w: 228,
            h: 296
          },
          leftarm: {
            x: 255,
            y: 305,
            w: 136,
            h: 533
          },
          rightarm: {
            x: 604,
            y: 340,
            w: 136,
            h: 523
          },
          torso: {
            x: 300,
            y: 300,
            w: 330,
            h: 468
          },
          leftleg: {
            x: 330,
            y: 695,
            w: 139,
            h: 509
          },
          rightleg: {
            x: 474,
            y: 695,
            w: 139,
            h: 509,
          }
        }
      },
      {
        name: 'Aqua',
        title: 'AquaBot',
        hasSingle: true,
        singleTitle: 'Mermaid Legs',
        sprites: {
          head: {
            x: 325,
            y: 25,
            w: 304,
            h: 311
          },
          leftarm: {
            x: 241,
            y: 314,
            w: 136,
            h: 519
          },
          rightarm: {
            x: 572,
            y: 312,
            w: 136,
            h: 519
          },
          torso: {
            x: 308,
            y: 288,
            w: 327,
            h: 496
          },
          leftleg: {
            x: 330,
            y: 695,
            w: 137,
            h: 504
          },
          rightleg: {
            x: 474,
            y: 695,
            w: 137,
            h: 504,
          }
        }
      },
      {
        name: 'None',
        title: '(none)',
        hasSingle: false,
      },
    ],
  },
  {

  },
])(injectState(MenuView));
