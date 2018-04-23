### SUMMARY OF SCENARIOS
## Internal: overview of customers
userType: employee  (customerId)  (return: account, address)
userType: manager (customerId) (return: account, address, invoices)

## Websites: history of customer’s invoice
userType: customer (customerId, addressId) (return: per address)
userType: customer (customerId) (return: address + webshop)
userType: customer (POST: customerId) (create new user + invoice)

##  Invoicing System
userType: invoicingSys (customerId, currentMonth)
userType: invoicingSys (customerId, currentMonth, filter=shop)

INVOICES endpoint

|| POST | GET |
| - |:-:| :-:|
| employee | no | no |
| manager | no | yes |
| customer| yes | yes |
| invoicing system | no | yes |

CUSTOMER endpoint
|| GET |
| - | - |
| employee | yes | 
| manager | yes |