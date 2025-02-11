using { ux403 as my } from '../db/schema';

service ProcessorService { 
   

    @readonly
    entity Customers as projection on my.Customers;
}