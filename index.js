const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
    // UpdatesDriver  = { ...driver, ...{ [key]: value } }
    let UpdatesDriver = Object.assign({}, driver, {
        [key]: value
    });
    return (UpdatesDriver);
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value;

    return driver;
}

const deleteFromDriverByKey = (driver, key) => {
    let updatedDriver = {...driver }
    delete updatedDriver[key]
    return updatedDriver
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}