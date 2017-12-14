# APIAPP

This is an example of RESTful API CRUD demo using Node.js and MySql

**Database strucure**

```
CREATE TABLE IF NOT EXISTS `test` 
(`id`      int NOT NULL, 
 `user`     varchar(50) DEFAULT NULL, 
  PRIMARY KEY(`id`)) 
 ENGINE = InnoDB DEFAULT CHARSET = latin1;
```

Example below is given to test api in postman with specified url and parameters for all crud operations

**Get All**
![GetAll Api](https://raw.githubusercontent.com/komalsdg/apiapp/master/img/getall.jpg)



**Get By Id**
![Get By Id Api](https://raw.githubusercontent.com/komalsdg/apiapp/master/img/getbyid.jpg)



**Add**
![Add Api](https://raw.githubusercontent.com/komalsdg/apiapp/master/img/adduser.jpg)



**Edit**
![Edit Api](https://raw.githubusercontent.com/komalsdg/apiapp/master/img/putuser.jpg)



**Delete**
![Delete Api](https://raw.githubusercontent.com/komalsdg/apiapp/master/img/deleteuser.jpg)
