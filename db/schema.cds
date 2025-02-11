using { cuid, managed, sap.common.CodeList } from '@sap/cds/common';
namespace ux403; 

entity Customers : managed { 
key ID        : String;
firstName     : String;
lastName      : String;
name          : String = firstName ||' '|| lastName;
email         : EMailAddress;
phone         : PhoneNumber;

creditCardNo  : String(16) @assert.format: '^[1-9]\d{15}$';

}
type EMailAddress : String;
type PhoneNumber : String;