var blueberries = {
    name: 'Blueberries',
    latin: 'Vaccinium Corymbosum',
    growsOnShrub: true,
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
    
};

var grapes = {
    name: 'Grapes',
    latin: 'Vitis Vinifera',
    growsOnShrub: false,
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g'
    
};
    
var redCurrant = {
    name: 'Red Currant',
    latin: 'Ribes Rubum',
    growsOnShrub: true,
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g'
    
};

var writeBerries = ( function (allBerries) {
    allBerries.forEach( function (thingamajig) {
    document.write('<dl>')

        document.write('<h1>' + thingamajig.name + '</h1>'); 

        document.write('<dt>Latin:</dt>'); 
        document.write('<dd>' + thingamajig.latin + '</dd>');

        document.write('<dt>Grows on shrubs:</dt>'); 
        document.write('<dd>' + thingamajig.growsOnShrub + '</dd>');

        document.write('<dt>Energy:</dt>'); 
        document.write('<dd>' + thingamajig.energy + '</dd>');

        document.write('<dt>Carbohydrates:</dt>'); 
        document.write('<dd>' + thingamajig.carbohydrates + '</dd>');

        document.write('<dt>Protein:</dt>'); 
        document.write('<dd>' + thingamajig.protein + '</dd>');
    
    document.write('</dl>'); 
    });
});

writeBerries( [blueberries, redCurrant, grapes] );