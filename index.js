// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value) {
    const newDriver = Object.assign({}, driverObject, {[key]: value});
    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    driverObject[key] = value;
    return driverObject;
};

function deleteFromDriverByKey(driverObject, key) {
    const driverClone = Object.assign({}, driverObject)
    delete driverClone[key];
    return driverClone;
};

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driverObject[key];
    return driverObject;
};