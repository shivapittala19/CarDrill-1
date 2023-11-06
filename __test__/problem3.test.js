const inventory = require('../inventory')
const carOrder = require('../root/Problem3')

console.log(carOrder(inventory))

describe('Problem1 Function', () => {
    it('should return car details in alphabetical order', () => {
        const result = carOrder(inventory)
        expect(result).toEqual(
            [
                '300m',           '4000cs quattro',       '525',
                '6 series',       'accord',               'aerio',
                'bravada',        'camry',                'cavalier',
                'ciera',          'defender ice edition', 'e-class',
                'econoline e250', 'escalade',             'escort',
                'esprit',         'evora',                'express 1500',
                'familia',        'fortwo',               'g35',
                'galant',         'gto',                  'intrepid',
                'jetta',          'lss',                  'magnum',
                'miata mx-5',     'montero sport',        'mr2',
                'mustang',        'navigator',            'prizm',
                'q',              'q7',                   'r-class',
                'ram van 1500',   'ram van 3500',         'riolet',
                'sebring',        'skylark',              'talon',
                'topaz',          'town car',             'tt',
                'windstar',       'wrangler',             'wrangler',
                'xc70',           'yukon'
              ]
        );
    });
});