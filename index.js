const employee = {
    name: "Sarah",
    streetAddress: "1234 Smith Lane",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee1 = {...employee};
    employee1[key] = value;
    return employee1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let employee1 = {...employee};
    delete employee1[key];
    return employee1;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

