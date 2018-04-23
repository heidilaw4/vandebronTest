var ExpressPermission = require('express-permissions');

// TODO - add middleware for determining origin of the request
// userTypes:
// 0 manager - GET
// 1 employee - GET
// 2 invoiceSys - GET
// 3 customer - GET, POST