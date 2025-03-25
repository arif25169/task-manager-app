-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: oly
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2025_02_27_204332_create_personal_access_tokens_table',1),(5,'2025_03_22_053840_create_tasks_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',6,'auth-token','58c9056598fe5d6b0eb0913f72e63c9d59800d26ea59f6dde88a54180db73b6f','[\"*\"]',NULL,NULL,'2025-03-22 10:32:43','2025-03-22 10:32:43'),(2,'App\\Models\\User',6,'auth-token','cce98cc848e5338239bce784cf82c661bd28d0c28fcadc47c482503e294b1df1','[\"*\"]',NULL,NULL,'2025-03-22 10:38:55','2025-03-22 10:38:55'),(3,'App\\Models\\User',6,'auth-token','aeb913b74884325b1d194e735ddcf77c31a5a15451e57728c204b4ba9c913751','[\"*\"]',NULL,NULL,'2025-03-22 10:40:36','2025-03-22 10:40:36'),(4,'App\\Models\\User',6,'auth-token','f5e316cda79991800694bfd39ce9a2645c87f3a31673e4c32d9f06f8a1609bd1','[\"*\"]',NULL,NULL,'2025-03-22 10:53:40','2025-03-22 10:53:40'),(5,'App\\Models\\User',6,'auth-token','9b45df5899cd4e8c89a8e570e5d6b876f07447c7f73eaef3a175fafc4ff31793','[\"*\"]',NULL,NULL,'2025-03-22 10:58:35','2025-03-22 10:58:35'),(6,'App\\Models\\User',6,'auth-token','cf2ce4e93575dce58e0dd038bd0500bbacba556432040a4216c7dcea09779875','[\"*\"]',NULL,NULL,'2025-03-22 12:20:40','2025-03-22 12:20:40'),(7,'App\\Models\\User',6,'auth-token','3da4245d5228159bc120a1b771431bdfcf4ee8757f984c0de483ce2c05f703c6','[\"*\"]',NULL,NULL,'2025-03-22 12:32:35','2025-03-22 12:32:35'),(8,'App\\Models\\User',6,'auth-token','c7a04a5700118ebe8f2d0788db03eb5133f62aee6313702a5ea8ade72eb56196','[\"*\"]',NULL,NULL,'2025-03-22 12:34:07','2025-03-22 12:34:07'),(9,'App\\Models\\User',6,'auth-token','0636d4f0c7b32ed3e97ea4d7c7e9cbf35b7e06cf4b36d1661570d1dc14dbf28c','[\"*\"]',NULL,NULL,'2025-03-22 12:36:11','2025-03-22 12:36:11'),(10,'App\\Models\\User',6,'auth-token','6ecba314e6a5524bc393fb98baafcc13f58a67d572ccd2bdb4ed045fe77a21b5','[\"*\"]',NULL,NULL,'2025-03-22 12:46:26','2025-03-22 12:46:26'),(11,'App\\Models\\User',6,'auth-token','ddbd2cacb50bc4d75da5f0cb455a3c68c8c0d03e1b0622799c6b8d316c7ac615','[\"*\"]',NULL,NULL,'2025-03-22 12:46:58','2025-03-22 12:46:58'),(12,'App\\Models\\User',6,'auth-token','c63f858c675c9f166babeda4e147ea2e1d2b51ce24cd3ce1bed9763d7e0dbc4a','[\"*\"]',NULL,NULL,'2025-03-22 12:47:29','2025-03-22 12:47:29'),(13,'App\\Models\\User',6,'auth-token','ef2dcee1f1214610c3402e4f5e9698dd8232cdaabfc53580299172c82b5d0da6','[\"*\"]',NULL,NULL,'2025-03-22 12:51:30','2025-03-22 12:51:30'),(14,'App\\Models\\User',6,'auth-token','f0cd362275273194c374a2dca5e556eaf2b960fe1387115c7259cee250f83bfa','[\"*\"]',NULL,NULL,'2025-03-22 12:53:18','2025-03-22 12:53:18'),(15,'App\\Models\\User',6,'auth-token','a4003315243c5e25ea4419ddf586df2fabeef9c201323dc69914295933d39285','[\"*\"]',NULL,NULL,'2025-03-22 13:29:35','2025-03-22 13:29:35'),(16,'App\\Models\\User',6,'auth-token','e870e1d037b84aca7cb3d99ce26c99830b208851665e32b95b3d9dffd53d5e0f','[\"*\"]',NULL,NULL,'2025-03-22 13:37:15','2025-03-22 13:37:15'),(17,'App\\Models\\User',6,'auth-token','dd2b2db7f25698a39a93d4e8eef951b74b85c9a16ab19aa0b0da5186e7b9e4bb','[\"*\"]','2025-03-23 00:39:01',NULL,'2025-03-22 23:17:31','2025-03-23 00:39:01'),(18,'App\\Models\\User',6,'auth-token','6a537e40a104f159517001d80a3f12482458880a878ed8cafc7845509766d17a','[\"*\"]','2025-03-25 08:53:12',NULL,'2025-03-23 00:33:23','2025-03-25 08:53:12'),(19,'App\\Models\\User',7,'auth-token','6bcfbe342db987aa22d867eb24183d5ba54d2de92cf08c9981dd59f9d79dafaa','[\"*\"]','2025-03-25 08:58:53',NULL,'2025-03-25 08:55:12','2025-03-25 08:58:53');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('To Do','In Progress','Done') COLLATE utf8mb4_unicode_ci NOT NULL,
  `due_date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (2,'Refactor Backend Code','Prepare budget report','To Do','2025-03-16 08:00:00','2025-03-11 03:20:00','2025-03-23 12:14:13'),(3,'Develop Mobile App Prototype','Client meeting preparation','Done','2025-03-14 03:00:00','2025-03-09 05:30:00','2025-03-14 05:00:00'),(5,'Update Privacy Policy','Write documentation draft','In Progress','2025-03-18 05:45:00','2025-03-13 01:55:00','2025-03-13 02:20:00'),(6,'Optimize SEO for Blog','Fix login bug','Done','2025-03-14 02:00:00','2025-03-08 04:00:00','2025-03-14 03:30:00'),(8,'Migrate Database to Cloud','Plan marketing campaign','In Progress','2025-03-22 11:30:00','2025-03-14 10:10:00','2025-03-14 10:40:00'),(9,'Train New Employees','Setup CI/CD pipeline','Done','2025-03-12 01:30:00','2025-03-07 06:00:00','2025-03-12 02:00:00'),(11,'Implement Dark Mode UI','Prepare presentation slides','In Progress','2025-03-19 04:15:00','2025-03-11 08:25:00','2025-03-11 08:50:00'),(12,'Automate Email Campaigns','Optimize database queries','Done','2025-03-13 08:20:00','2025-03-09 11:10:00','2025-03-13 09:00:00'),(14,'Analyze Customer Feedback','Develop API endpoints','In Progress','2025-03-23 14:00:00','2025-03-14 04:50:00','2025-03-14 05:10:00'),(15,'Create Onboarding Guide','Finalize UI design','Done','2025-03-14 07:00:00','2025-03-10 12:00:00','2025-03-14 07:30:00'),(17,'Write Test Cases','Write test cases','In Progress','2025-03-27 08:10:00','2025-03-19 10:20:00','2025-03-19 10:50:00'),(18,'Deploy Staging Environment','Deploy staging environment','Done','2025-03-11 04:30:00','2025-03-06 04:00:00','2025-03-11 05:00:00'),(20,'Fix UI Responsiveness Issues','Fix UI responsiveness issues','In Progress','2025-03-22 07:20:00','2025-03-15 08:10:00','2025-03-15 08:40:00'),(21,'Conduct User Testing','Review project proposal','To Do','2025-03-22 07:20:00','2025-03-15 08:10:00','2025-03-25 08:53:09');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'Arif','arif@gmail.com','2025-03-22 10:31:57','$2y$12$74JBp3OZqTnm8qr46jqbFOfxTg1ClMOi7rrHdbYetjXR1k6e6Ilam',NULL,'2025-03-22 10:31:57','2025-03-22 10:31:57'),(7,'Admin','admin@mail.com','2025-03-25 08:53:52','$2y$12$c9Un8YeePO6fnhDtDbB/u.droXGMviDNFiP68J.yPiFT4qRmvXN7K',NULL,'2025-03-25 08:53:52','2025-03-25 08:53:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-25 21:06:17
