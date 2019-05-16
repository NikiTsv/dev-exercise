var expect = require('chai').expect;

//highest growth imports
const shouldIncludeCountry = require('../calculateGrowth').shouldIncludeCountry;
const getHighestAverageAnnualPopulationGrowth = require('../calculateGrowth').getHighestAverageAnnualPopulationGrowth;
const getAveragePopulationGrowthForCountry = require('../calculateGrowth').getAveragePopulationGrowthForCountry;
const calculateAverageUrbanAnnualPopulationGrowth = require('../calculateGrowth').calculateAverageUrbanAnnualPopulationGrowth;

//highest emissions year imports
const calculateEmissions = require('../calculateEmissions');
const calculateEmissionsTestData = require('./calculateEmissionsTestData');

// Calculate growth test data
var testRowNormal = {
    '0': 'FR',
    '1': 'AFG',
    '2': 'Urban population growth (annual %)',
    '24': '3.07923636502051',
    '25': '2.00512525553543',
    '26': '1.11247743026994',
    '27': '0.572054871996048',
    '28': '0.622466263725547',
    '29': '1.16710855647606',
    '30': '1.80765723626353',
    '31': '2.48777542063941',
    '32': '3.64260894708898',
    '33': '2.45807276181518',
}

var testRowWithMissingData = {
    '0': 'USA',
    '1': 'ABW',
    '2': 'Urban population growth (annual %)',
    '24': '0.164978425250874',
    '25': '0.748870345963056',
    '26': '1.24548380077705',
    '27': '',
    '28': '0.98666747994594',
    '29': '0.271131034028871',
    '30': '-0.638011071078139',
    '31': '-1.33331055584405',
    '32': '-1.25698399498588',
    '33': '-0.107364218990278',
}

var testRowWithDifferentIndicator = {
    '0': 'BG',
    '1': 'ABW2',
    '2': 'OtherIndicator',
    '24': '0.164978425250874',
    '25': '0.748870345963056',
    '26': '1.24548380077705',
    '27': '1.35458192426163',
    '28': '0.98666747994594',
    '29': '0.271131034028871',
    '30': '-0.638011071078139',
    '31': '-1.33331055584405',
    '32': '-1.25698399498588',
    '33': '-0.107364218990278',
}

var testRowAverage = {
    '0': 'UK',
    '1': 'AFG',
    '2': 'Urban population growth (annual %)',
    '24': '1',
    '25': '1',
    '26': '1',
    '27': '1',
    '28': '1',
    '29': '3',
    '30': '3',
    '31': '3',
    '32': '3',
    '33': '3',
}

var testRowHighestAverage = {
    '0': 'Highest growth country',
    '1': 'HGC',
    '2': 'Urban population growth (annual %)',
    '24': '1',
    '25': '1',
    '26': '1',
    '27': '1',
    '28': '1',
    '29': '5',
    '30': '5',
    '31': '5',
    '32': '5',
    '33': '5',
}



// Calculate growth tests
describe('calculateGrowth', function() {
    describe('#shouldIncludeCountry()', function() {
        it('should return false if country has missing data for any year', function() {
            const result = shouldIncludeCountry(testRowWithMissingData);
            expect(result).to.equal(false);
        });
    });

    describe('#shouldIncludeCountry()', function() {
        it('should return true if country has data for every year', function() {
            const result = shouldIncludeCountry(testRowNormal);
            expect(result).to.equal(true);
        });
    });

    describe('#getAveragePopulationGrowthForCountry()', function() {
        it('should calculate average growth correctly', function() {
            const result = getAveragePopulationGrowthForCountry(testRowAverage);
            expect(result).to.equal(2);
        });
    });

    describe('#getHighestAverageAnnualPopulationGrowth()', function() {
        it('should calculate highest growth correctly', function() {
            const testData = [testRowHighestAverage, testRowAverage];
            const result = getHighestAverageAnnualPopulationGrowth(testData);
            expect(result.name).to.equal('Highest growth country');
        });
    });
});


// Calculate emissions test data



// Calculate emissions tests
describe('calculateEmissions', function() {
    describe('#calculateEmissions()', function() {
        it('should calculate highest emissions correctly', function() {

            const result = calculateEmissions(calculateEmissionsTestData, getColumnNames());
            expect(result).to.equal('2014');
        });
    });
});

function getColumnNames () {
    return {
        '0': 'Country Name',
        '1': 'Country Code',
        '2': 'Indicator Name',
        '3': 'Indicator Code',
        '4': '1960',
        '5': '1961',
        '6': '1962',
        '7': '1963',
        '8': '1964',
        '9': '1965',
        '10': '1966',
        '11': '1967',
        '12': '1968',
        '13': '1969',
        '14': '1970',
        '15': '1971',
        '16': '1972',
        '17': '1973',
        '18': '1974',
        '19': '1975',
        '20': '1976',
        '21': '1977',
        '22': '1978',
        '23': '1979',
        '24': '1980',
        '25': '1981',
        '26': '1982',
        '27': '1983',
        '28': '1984',
        '29': '1985',
        '30': '1986',
        '31': '1987',
        '32': '1988',
        '33': '1989',
        '34': '1990',
        '35': '1991',
        '36': '1992',
        '37': '1993',
        '38': '1994',
        '39': '1995',
        '40': '1996',
        '41': '1997',
        '42': '1998',
        '43': '1999',
        '44': '2000',
        '45': '2001',
        '46': '2002',
        '47': '2003',
        '48': '2004',
        '49': '2005',
        '50': '2006',
        '51': '2007',
        '52': '2008',
        '53': '2009',
        '54': '2010',
        '55': '2011',
        '56': '2012',
        '57': '2013',
        '58': '2014',
        '59': '2015',
        '60': '2016',
        '61': '2017'
        };
}
