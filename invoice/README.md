## SALESFORCE
userType: employee
case0: customer acc & addresses

userType: manager
case1: customer acc, addresses, invoices

## API
case0: return invoice by month (req: customerId, month)
case1: return shop invoice (req: customerId, invoiceType=shop)
case2: return invoice by address (req: customerId, addressId)
case3: return all invoice (req: customerId)

userType: invoiceSys
case0: return invoice by month (required: customerId, month)
case1: return invoice by shop (required: customerId, month, filter=shop)

userType: customer (via webpage)
case2: return all invoice (required: customerId)
case3: create new invoice