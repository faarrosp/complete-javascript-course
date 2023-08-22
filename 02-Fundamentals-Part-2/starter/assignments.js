'use strict';

// Assignment LECTURE Functions

function describeCountry(country, population, capitalCity){
    const msg = `${country} has ${population} million people and its capital is ${capitalCity}`
    return msg;
};

const descChile = describeCountry('Chile', 20, 'Santiago');
const descArgentina = describeCountry('Argentina', 40, 'Buenos Aires');
const descBrasil = describeCountry('Brasil', 130, 'Brasilia');

console.log(descChile, descArgentina, descBrasil)