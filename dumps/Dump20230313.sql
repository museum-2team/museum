-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: inyeong.crhyg1f1qb0s.ap-northeast-2.rds.amazonaws.com    Database: museum
-- ------------------------------------------------------
-- Server version	8.0.28

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `board_mst`
--

DROP TABLE IF EXISTS `board_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_mst` (
  `board_id` int NOT NULL AUTO_INCREMENT,
  `board_title` varchar(45) NOT NULL,
  `board_description` varchar(255) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`board_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_mst`
--

LOCK TABLES `board_mst` WRITE;
/*!40000 ALTER TABLE `board_mst` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection_image`
--

DROP TABLE IF EXISTS `collection_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection_image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `collection_name` varchar(45) NOT NULL,
  `origin_name` varchar(45) NOT NULL,
  `save_name` varchar(45) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection_image`
--

LOCK TABLES `collection_image` WRITE;
/*!40000 ALTER TABLE `collection_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `collection_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection_mst`
--

DROP TABLE IF EXISTS `collection_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection_mst` (
  `collection_id` int NOT NULL AUTO_INCREMENT,
  `collection_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `author` varchar(45) DEFAULT NULL,
  `location` varchar(45) NOT NULL,
  `collection_size` varchar(45) NOT NULL,
  `year_of_manufacture` varchar(45) DEFAULT NULL,
  `material` varchar(45) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`collection_id`),
  UNIQUE KEY `paintiong_code_UNIQUE` (`collection_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection_mst`
--

LOCK TABLES `collection_mst` WRITE;
/*!40000 ALTER TABLE `collection_mst` DISABLE KEYS */;
/*!40000 ALTER TABLE `collection_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `painting_image`
--

DROP TABLE IF EXISTS `painting_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `painting_image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `painting_code` varchar(45) NOT NULL,
  `save_name` varchar(45) NOT NULL,
  `origin_name` varchar(45) NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `painting_image`
--

LOCK TABLES `painting_image` WRITE;
/*!40000 ALTER TABLE `painting_image` DISABLE KEYS */;
INSERT INTO `painting_image` VALUES (3,'1','b591bfd9b21d4b2087143b4991502381.png','img1.png'),(4,'123','1ad05e7d82f6455cb1427b75994a4c89.jpg','검은화면2.jpg'),(5,'9','772a70a2715d4d5199915597355736fd.jpg','검은화면2.jpg'),(6,'s','d78a314eb7ea4f30ae0c1e9c53186c34.jpg','KakaoTalk_20230225_134627917.jpg'),(7,'1111','eeec59d9acf44dd69e3d7f1c21c93ed9.jpg','검은화면2.jpg');
/*!40000 ALTER TABLE `painting_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `painting_like`
--

DROP TABLE IF EXISTS `painting_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `painting_like` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `painting_like`
--

LOCK TABLES `painting_like` WRITE;
/*!40000 ALTER TABLE `painting_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `painting_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `painting_mst`
--

DROP TABLE IF EXISTS `painting_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `painting_mst` (
  `painting_id` int NOT NULL AUTO_INCREMENT,
  `painting_code` varchar(45) NOT NULL,
  `painting_title_name` varchar(45) NOT NULL,
  `exhibition_works` varchar(45) NOT NULL,
  `viewing_time` varchar(45) NOT NULL,
  `painting_name` varchar(45) DEFAULT NULL,
  `author` varchar(45) DEFAULT NULL,
  `painting_size` varchar(45) DEFAULT NULL,
  `year_of_manufacture` varchar(45) DEFAULT NULL,
  `material` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`painting_id`),
  UNIQUE KEY `book_cood_UNIQUE` (`painting_code`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `painting_mst`
--

LOCK TABLES `painting_mst` WRITE;
/*!40000 ALTER TABLE `painting_mst` DISABLE KEYS */;
INSERT INTO `painting_mst` VALUES (6,'1','2','4','3','5','6','7','8','9'),(8,'9','8','6','7','5','4','3','2','1'),(9,'s','s','s','s','s','s','s','s','s'),(10,'1111','테스트','1','2023-03-11','2','3','4','5','6');
/*!40000 ALTER TABLE `painting_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_dtl`
--

DROP TABLE IF EXISTS `role_dtl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_dtl` (
  `role_dtl_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  `create_data` datetime NOT NULL,
  `update_data` datetime NOT NULL,
  PRIMARY KEY (`role_dtl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_dtl`
--

LOCK TABLES `role_dtl` WRITE;
/*!40000 ALTER TABLE `role_dtl` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_dtl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_mst`
--

DROP TABLE IF EXISTS `role_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_mst` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  `create_data` datetime NOT NULL,
  `update_data` datetime NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_mst`
--

LOCK TABLES `role_mst` WRITE;
/*!40000 ALTER TABLE `role_mst` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_mst`
--

DROP TABLE IF EXISTS `user_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_mst` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_mst`
--

LOCK TABLES `user_mst` WRITE;
/*!40000 ALTER TABLE `user_mst` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'museum'
--

--
-- Dumping routines for database 'museum'
--
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-13 19:38:30
