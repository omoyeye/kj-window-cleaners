CREATE DATABASE IF NOT EXISTS `window` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `window`;

CREATE TABLE IF NOT EXISTS `bookings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `postcode` VARCHAR(10) NOT NULL,
    `property_type` ENUM('flat','terrace','semi-detached','detached','commercial') NOT NULL,
    `num_bedrooms` TINYINT UNSIGNED NOT NULL DEFAULT 1,
    `service_type` ENUM('exterior','interior','full') NOT NULL,
    `frequency` ENUM('one-off','weekly','bi-weekly','monthly') NOT NULL DEFAULT 'one-off',
    `preferred_date` DATE NOT NULL,
    `preferred_time` ENUM('morning','afternoon','any') NOT NULL DEFAULT 'any',
    `message` TEXT,
    `status` ENUM('pending','confirmed','completed','cancelled') NOT NULL DEFAULT 'pending',
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
