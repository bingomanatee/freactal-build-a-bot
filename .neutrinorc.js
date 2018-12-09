module.exports = {
  use: [
    /*   ['@neutrinojs/airbnb',
         {
           eslint: {
             'rules': {
               'import/extensions': 0,
               'react/prop-types': 'off',
               'react/prefer-stateless-function': 'warn',
               'no-underscore-dangle': 'off',
               'object-shorthand': 'off',
               'func-names': 'off',
               'no-param-reassign': 'off',
               'class-methods-use-this': 'warn',
               'no-console': 'off',
               'no-plusplus': 'off',
               'no-unused-vars': 'warn',
               'prefer-destructuring': 'off',
               'prefer-template': 'warn',
               'max-len': ['warn', {'code': 120}]
             }
           }
         }
       ], */
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Build a Bot',
          links: [
            'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans'
            , '/css/antd.css'
          ]
        }
      }
    ],
    ['@neutrinojs/copy', {
      patterns: [
        {
          from: '**/*',
          to: '',
          context: __dirname + '/src/static/'
        },
        {
          from: '**/*.css',
          to: 'css',
          context: __dirname + '/src/css/'
        }
      ]
    }],
    ['@neutrinojs/jest', {
      testRegex: 'src/.*(_test|_spec|\\.test|\\.spec)\\.(js|jsx|vue|ts|tsx|mjs)$',
      'setupFiles': ['raf/polyfill'],
    }],
  ]
};
