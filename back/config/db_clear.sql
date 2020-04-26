CREATE TABLE IF NOT EXISTS `users` (`id` int(11) NOT NULL AUTO_INCREMENT,
                                    `name` varchar(128) NOT NULL,
                                    `description` text NOT NULL,
                                    `created` datetime NOT NULL,
                                    `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                     PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;