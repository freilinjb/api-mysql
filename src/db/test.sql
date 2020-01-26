-- CREATE DATABASE test_api_mysql;

-- USE test_api_mysql;

-- CREATE TABLE IF NOT EXISTS `users` (
--   id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
--   username varchar(50) COLLATE utf8_unicode_ci NOT NULL,
--   email varchar(100) COLLATE utf8_unicode_ci NOT NULL,
--   password varchar(250) COLLATE utf8_unicode_ci NOT NULL,
--   created_at timestamp DEFAULT CURRENT_TIMESTAMP,
--   updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY(id),
--   UNIQUE KEY `users_email_unique` (`email`)
--   ) ENGINE=INNODB DEFAULT CHARACTER set=utf8;

-- DESCRIBE `users`;