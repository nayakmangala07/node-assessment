const constants = {
    userTypes: {
        ADMIN: 10,
        SELLER: 20,
        SUPPORTER: 30,
        CUSTOMER: 40
    },
    permisions: {
        CREATE: 10,
        READ: 20,
        UPDATE: 30,
        DELETE: 40
    },
    STATUS_CODES: {
        SUCCESS: 200,
        OK: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
    }
}

module.exports = { constants }