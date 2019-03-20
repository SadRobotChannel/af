create table users
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


create table store_bookmarks 
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    bookmarks VARCHAR(300) NOT NULL,
    PRIMARY KEY(id) ,
    FOREIGN KEY(id) REFERENCES users(id)
);
