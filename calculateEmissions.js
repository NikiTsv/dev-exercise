const indicatorName = 'CO2 emissions (kt)';
const indicatorProp = '2';
const startYearProp = 4;
const endYearProp = 61;

const calculateEmissions =  (data, columns) => {
    let yearMap = {};
    let countriesWithEmissionsIndicator = data.filter(r=> r[indicatorProp] == indicatorName);

    for (let i = 0; i < data.length; i++) {
        const row = data[i];

        for (let index = startYearProp; index < endYearProp; index++) {
            let value = 0;
            const rawValue = row[index.toString()];

            if(rawValue!=''){
                value = parseFloat(rawValue);
            }

            const year = columns[index.toString()];

            if(!yearMap[year]) {
                yearMap[year] = value;
            }else {
                yearMap[year] += value;
            }
        }
    }

    let maxValue = 0;
    let maxYear = null;

    for(var prop in yearMap) {
        if(yearMap[prop] >= maxValue){
            maxValue = yearMap[prop];
            maxYear = prop;
        }
    }

    return maxYear;
}

module.exports = calculateEmissions;