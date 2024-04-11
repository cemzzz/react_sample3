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
  `boardNo` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cdatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`boardNo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 test.tbl_sns_board:~5 rows (대략적) 내보내기
INSERT INTO `tbl_sns_board` (`boardNo`, `userId`, `content`, `cdatetime`) VALUES
	(21, 'user3', '등록 테스트', '2024-04-11 11:27:50'),
	(22, 'user3', '테스트 등록', '2024-04-11 11:36:00'),
	(23, 'user3', '한 번 더 테스트', '2024-04-11 11:50:18'),
	(24, 'user1', '이것도 등록', '2024-04-11 11:55:20'),
	(25, 'user3', '채소 게시글 등록 테스트', '2024-04-11 13:17:28'),
	(27, 'user2', '생막창과 삼겹살이 맛있는 #불막열삼합정점... 더 보기', '2024-04-11 15:36:40'),
	(30, 'user2', '귀여운 우사기 덕질~~~~', '2024-04-11 15:46:27'),
	(31, 'mimi', '그렇다면 난 치이카와 덕질~!', '2024-04-11 16:15:02'),
	(32, 'user1', '난 정말 예뻐~~ #미스코리아 대상', '2024-04-11 16:19:35'),
	(33, 'bibi', '다이어트 156일째.... #바프 #다이어트 #헬스', '2024-04-11 16:41:58');

-- 테이블 test.tbl_sns_images 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_sns_images` (
  `fileNo` int NOT NULL AUTO_INCREMENT,
  `boardNo` int DEFAULT NULL,
  `filePath` varchar(255) NOT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  `fileOrgName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`fileNo`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 test.tbl_sns_images:~5 rows (대략적) 내보내기
INSERT INTO `tbl_sns_images` (`fileNo`, `boardNo`, `filePath`, `fileName`, `fileOrgName`) VALUES
	(10, 21, 'img/', '240411112750_vegetable4.jpg', 'vegetable4.jpg'),
	(11, 22, 'img/', '240411113600_img1.jpg', 'img1.jpg'),
	(12, 23, 'img/', '240411115018_vegetable4.jpg', 'vegetable4.jpg'),
	(13, 24, 'img/', '240411115520_img.jpg', 'img.jpg'),
	(14, 25, 'img/', '240411131728_vegetable3.jpg', 'vegetable3.jpg'),
	(15, 26, 'img/', '240411153426_곱창.jpg', '곱창.jpg'),
	(16, 27, 'img/', '240411153640_gogogo.jpg', 'gogogo.jpg'),
	(17, 28, 'img/', '240411154257_USAUSA.jpg', 'USAUSA.jpg'),
	(18, 29, 'img/', '240411154320_USAUSA.jpg', 'USAUSA.jpg'),
	(19, 30, 'img/', '240411154627_USAUSA.jpg', 'USAUSA.jpg'),
	(20, 31, 'img/', '240411161502_hachi.png', 'hachi.png'),
	(21, 32, 'img/', '240411161935_beauty.jpg', 'beauty.jpg'),
	(22, 33, 'img/', '240411164158_manyfood.jpg', 'manyfood.jpg');

-- 테이블 test.tbl_sns_user 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_sns_user` (
  `userid` varchar(10) NOT NULL,
  `userPwd` varchar(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `follower` int DEFAULT '0',
  `following` int DEFAULT '0',
  `profile` varchar(255) NOT NULL,
  `profileImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 test.tbl_sns_user:~3 rows (대략적) 내보내기
INSERT INTO `tbl_sns_user` (`userid`, `userPwd`, `username`, `follower`, `following`, `profile`, `profileImage`) VALUES
	('bibi', '123456', '', 0, 0, '세계 최강의 사나이가 될 몸이시다', 'https://wimg.mk.co.kr/news/cms/202309/30/news-p.v1.20230930.e202dea5b30244fdb88348392c31289a_P1.jpeg'),
	('mimi', '1234', '예삐', 0, 0, '안녕하세요 예삐입니다.', 'https://i.namu.wiki/i/2xZhQPaKlDgvkrL_bkhgo4UpJswzK8Y59paeOh7GO3hcKBXTKm_lkDxBcePbMAZzT6A98h6YB0CLV1tanvz6_w.webp'),
	('user1', '1234', '마동석', 100, 150, '안녕하세요! 홍길동입니다. 만나서 반가워요.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8dsmjbmBWcREmiATXIAbJx-E2oB7lf0K1C3UuxB9_A&s'),
	('user2', '1234', '은가누', 200, 300, '안녕하세요, 사용자 2입니다. 제 프로필에 오신 것을 환영합니다.', 'https://img.wowtv.co.kr/wowtv_news/dnrs/20230323/2023032308145802122d3244b4fed182172185139.jpg'),
	('user3', '1234', '장원영', 50, 75, '안녕하세요! 사용자 3입니다. 연락해 주세요.', 'https://i.namu.wiki/i/_hZOlTayAgj4o2_poQRibNYekqbFl8YMTKW-sgiLguSDL47L_Zjcx5L2zaIwf7ZSasImsryUAHyjKM9-DqvlGw.webp');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
