-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.36 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- test 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `test`;

-- 테이블 test.tbl_sns_board 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_sns_board` (
  `BOARDID` int NOT NULL,
  `USERID` int DEFAULT NULL,
  `CONTENTS` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`BOARDID`),
  KEY `USERID` (`USERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 test.tbl_sns_board:~0 rows (대략적) 내보내기

-- 테이블 test.tbl_sns_images 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_sns_images` (
  `boardNo` int DEFAULT NULL,
  `filePath` varchar(150) DEFAULT NULL,
  `fileName` varchar(150) DEFAULT NULL,
  `fileOrgName` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 test.tbl_sns_images:~0 rows (대략적) 내보내기

-- 테이블 test.tbl_sns_user 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_sns_user` (
  `userid` varchar(10) NOT NULL,
  `userPwd` varchar(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `follower` int DEFAULT '0',
  `following` int DEFAULT '0',
  `profile` varchar(255) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 test.tbl_sns_user:~3 rows (대략적) 내보내기
INSERT INTO `tbl_sns_user` (`userid`, `userPwd`, `username`, `follower`, `following`, `profile`) VALUES
	('user1', '1234', '홍길동', 100, 150, '안녕하세요! 홍길동입니다. 만나서 반가워요.'),
	('user2', '1234', '사용자2', 200, 300, '안녕하세요, 사용자 2입니다. 제 프로필에 오신 것을 환영합니다.'),
	('user3', '1234', '사용자3', 50, 75, '안녕하세요! 사용자 3입니다. 연락해 주세요.');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
