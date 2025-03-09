-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: user
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `my_custom_users`
--

DROP TABLE IF EXISTS `my_custom_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_custom_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_custom_users`
--

LOCK TABLES `my_custom_users` WRITE;
/*!40000 ALTER TABLE `my_custom_users` DISABLE KEYS */;
INSERT INTO `my_custom_users` VALUES (1,'ram','ram123@gmail.com','$2b$10$1ed1CBm8iUFX64VxMH9pnO27vufjdS2wFPcUPXAdRbz8VzFbNNunC','2025-03-08 04:33:12','2025-03-08 04:33:12'),(2,'raj','raj123@gmail.com','$2b$10$upiirE2NNrkFYImQdEkKcekCkng.60veBMVqIsLJsRLzwxKodnKj2','2025-03-08 10:11:26','2025-03-08 10:11:26'),(3,'ram123','ram1234@gmail.com','$2b$10$R/R8/Gt15/ZM2JPHDiWjBuusDXGuSeiWPeefpzPppeT/0JO0Mh3mi','2025-03-09 16:34:33','2025-03-09 16:34:33'),(4,'Shiva123','shiva123@gmail.com','$2b$10$E5vVbheEQtIHPxdUvP2QaehJEn.bZO7mKZkmuF4VsZ/dtwqGt11ie','2025-03-09 16:42:41','2025-03-09 16:42:41');
/*!40000 ALTER TABLE `my_custom_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-09 16:43:14
