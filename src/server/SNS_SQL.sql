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

-- 이벤트 test.DELETE_USER_DATA_EVENT 구조 내보내기
DELIMITER //
CREATE EVENT `DELETE_USER_DATA_EVENT` ON SCHEDULE EVERY 1 DAY STARTS '2024-03-16 00:00:00' ON COMPLETION PRESERVE ENABLE DO DELETE FROM ECO_USER_DELETE WHERE DELETE_DATE <= NOW() - INTERVAL 6 MONTH//
DELIMITER ;

-- 이벤트 test.DELETE_USER_DATA_EVENT1 구조 내보내기
DELIMITER //
CREATE EVENT `DELETE_USER_DATA_EVENT1` ON SCHEDULE EVERY 1 DAY STARTS '2024-03-16 00:00:00' ON COMPLETION PRESERVE ENABLE DO DELETE FROM ECO_USER WHERE DELETE_DATE <= NOW() - INTERVAL 3 MONTH//
DELIMITER ;

-- 테이블 test.eco_addr 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_addr` (
  `ADDRNO` int NOT NULL AUTO_INCREMENT,
  `USERID` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ADDR` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `ADDRDETAIL` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ZIPCODE` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `NAME` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PHONE` varchar(20) NOT NULL,
  `ADDRREQUEST` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ADDRNAME` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ISDEFAULT` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'N',
  PRIMARY KEY (`ADDRNO`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_admin_qa 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_admin_qa` (
  `BOARDNO` int NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(100) DEFAULT NULL,
  `QA_CONTENTS` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `USERID` varchar(30) DEFAULT NULL,
  `DELETEYN` char(1) DEFAULT 'N',
  `DELETEDATE` datetime DEFAULT NULL,
  `CDATETIME` datetime DEFAULT NULL,
  `UDATETIME` datetime DEFAULT NULL,
  `SECRETYN` char(1) DEFAULT NULL,
  `ITEM_NO` int DEFAULT NULL,
  PRIMARY KEY (`BOARDNO`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_admin_qa_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_admin_qa_image` (
  `FILENO` int NOT NULL,
  `BOARDNO` int DEFAULT NULL,
  `FILEPATH` varchar(200) DEFAULT NULL,
  `FILENAME` varchar(200) DEFAULT NULL,
  `FILEORGNAME` varchar(200) DEFAULT NULL,
  `FILESIZE` varchar(20) DEFAULT NULL,
  `FILEETC` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_admin_review 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_admin_review` (
  `REVIEW_NO` int NOT NULL,
  `ITEM_NO` varchar(100) DEFAULT NULL,
  `USERID` varchar(20) DEFAULT NULL,
  `R_CONTENTS` varchar(200) DEFAULT NULL,
  `SCORE` decimal(5,2) DEFAULT NULL,
  `CDATETIME` datetime DEFAULT NULL,
  `UDATETIME` datetime DEFAULT NULL,
  `DELETEYN` char(1) DEFAULT 'N',
  `DELETEDATE` datetime DEFAULT NULL,
  PRIMARY KEY (`REVIEW_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_admin_review_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_admin_review_image` (
  `FILENO` int NOT NULL,
  `BOARDNO` int DEFAULT NULL,
  `FILEPATH` varchar(200) DEFAULT NULL,
  `FILENAME` varchar(200) DEFAULT NULL,
  `FILEORGNAME` varchar(200) DEFAULT NULL,
  `FILESIZE` varchar(20) DEFAULT NULL,
  `FILEETC` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`FILENO`),
  KEY `BOARDNO` (`BOARDNO`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_admin_review_imagefile 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_admin_review_imagefile` (
  `FILENO` int NOT NULL,
  `BOARDNO` int DEFAULT NULL,
  `FILEPATH` varchar(200) DEFAULT NULL,
  `FILENAME` varchar(200) DEFAULT NULL,
  `FILEORGNAME` varchar(200) DEFAULT NULL,
  `FILESIZE` varchar(20) DEFAULT NULL,
  `FILEETC` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_board 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_board` (
  `BOARDNO` int NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(100) DEFAULT NULL,
  `CONTENTS` varchar(1000) DEFAULT NULL,
  `USERID` varchar(30) DEFAULT NULL,
  `HITS` int DEFAULT '0',
  `DELETEYN` char(1) DEFAULT NULL,
  `DELETEDATE` datetime DEFAULT NULL,
  `KIND` varchar(20) DEFAULT NULL,
  `REPORTCNT` int DEFAULT '0',
  `CDATETIME` datetime DEFAULT NULL,
  `UDATETIME` datetime DEFAULT NULL,
  `KCAL` int DEFAULT NULL,
  PRIMARY KEY (`BOARDNO`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_board_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_board_image` (
  `FILENO` int NOT NULL AUTO_INCREMENT,
  `BOARDNO` int DEFAULT NULL,
  `FILEPATH` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `FILENAME` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `FILEORGNAME` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `FILESIZE` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `FILEETC` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `KIND` int DEFAULT NULL,
  PRIMARY KEY (`FILENO`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_cart 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_cart` (
  `CART_NO` int NOT NULL AUTO_INCREMENT,
  `USERID` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ITEM_NO` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CDATETIME` datetime NOT NULL,
  `IS_FAVORITE` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'N',
  `SELECTCNT` int DEFAULT '0',
  PRIMARY KEY (`CART_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=284 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_code 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_code` (
  `KIND` varchar(20) DEFAULT NULL,
  `NAME` varchar(50) DEFAULT NULL,
  `CODE` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_comment` (
  `COMMENTNO` int NOT NULL AUTO_INCREMENT,
  `BOARDNO` int DEFAULT NULL,
  `COMMENT` varchar(200) DEFAULT NULL,
  `USERID` varchar(30) DEFAULT NULL,
  `DELETEYN` char(1) DEFAULT NULL,
  `PCOMMENTNO` int DEFAULT NULL,
  `REGDATE` datetime DEFAULT NULL,
  `UPDATEDATE` datetime DEFAULT NULL,
  PRIMARY KEY (`COMMENTNO`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_famer_qa 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_famer_qa` (
  `BOARDNO` int NOT NULL,
  `TITLE` varchar(100) DEFAULT NULL,
  `CONTENTS` varchar(1000) DEFAULT NULL,
  `USERID` varchar(30) DEFAULT NULL,
  `DELETEYN` char(1) DEFAULT 'N',
  `DELETEDATE` datetime DEFAULT NULL,
  `CDATETIME` datetime DEFAULT NULL,
  `UDATETIME` datetime DEFAULT NULL,
  `SECRETYN` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_famer_qa_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_famer_qa_image` (
  `FILENO` int NOT NULL,
  `BOARDNO` int DEFAULT NULL,
  `FILEPATH` varchar(200) DEFAULT NULL,
  `FILENAME` varchar(200) DEFAULT NULL,
  `FILEORGNAME` varchar(200) DEFAULT NULL,
  `FILESIZE` varchar(20) DEFAULT NULL,
  `FILEETC` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`FILENO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_famer_review 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_famer_review` (
  `REVIEW_NO` int NOT NULL,
  `ITEM_NO` varchar(100) DEFAULT NULL,
  `USERID` varchar(20) DEFAULT NULL,
  `R_CONTENTS` varchar(200) DEFAULT NULL,
  `SCORE` decimal(5,2) DEFAULT NULL,
  `CDATETIME` datetime DEFAULT NULL,
  `UDATETIME` datetime DEFAULT NULL,
  `DELETEYN` char(1) DEFAULT 'N',
  `DELETEDATE` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_famer_review_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_famer_review_image` (
  `FILENO` int NOT NULL,
  `BOARDNO` int DEFAULT NULL,
  `FILEPATH` varchar(200) DEFAULT NULL,
  `FILENAME` varchar(200) DEFAULT NULL,
  `FILEORGNAME` varchar(200) DEFAULT NULL,
  `FILESIZE` varchar(20) DEFAULT NULL,
  `FILEETC` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_payment 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_payment` (
  `PAYMENT_NO` int NOT NULL AUTO_INCREMENT,
  `USER_ID` varchar(50) NOT NULL,
  `PAYMENT_KEY` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '카카오페이 결제시 생성된 코드',
  `USE_POINT` int NOT NULL DEFAULT '0' COMMENT '결제에 사용한 포인트',
  `REWARD_POINT` int NOT NULL DEFAULT '0' COMMENT '적립된 포인트',
  `SUM_PRICE` int NOT NULL COMMENT '실제 결제 가격(할인가+쿠폰가 다 적용된 거)',
  `PAYTIME` datetime DEFAULT NULL COMMENT '결제된 날짜(시간)',
  PRIMARY KEY (`PAYMENT_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_product 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_product` (
  `ITEM_NO` int NOT NULL AUTO_INCREMENT,
  `ITEM_NAME` varchar(100) NOT NULL,
  `PRICE` int NOT NULL DEFAULT (0),
  `S_RATE` float NOT NULL DEFAULT (0),
  `P_RATE` float NOT NULL DEFAULT (0),
  `CONTENTS` varchar(1000) NOT NULL,
  `TRANS_INFO` varchar(255) DEFAULT NULL,
  `SELLYN` char(1) NOT NULL,
  `CDATETIME` datetime NOT NULL,
  `UDATETIME` datetime NOT NULL,
  `CNT` int DEFAULT NULL,
  `CODE` varchar(50) DEFAULT NULL,
  `SELLCNT` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`ITEM_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_product_chart 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_product_chart` (
  `ITEM_NO` int NOT NULL,
  `VALUE` int DEFAULT '0',
  `MONTH` int DEFAULT NULL,
  CONSTRAINT `ECO_PRODUCT_CHART_chk_1` CHECK ((`MONTH` between 1 and 12))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_product_famer 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_product_famer` (
  `ITEM_NO` int NOT NULL AUTO_INCREMENT,
  `ITEM_NAME` varchar(100) NOT NULL,
  `PRICE` int NOT NULL DEFAULT (0),
  `S_RATE` float NOT NULL DEFAULT (0),
  `P_RATE` float NOT NULL DEFAULT (0),
  `CONTENTS` varchar(1000) NOT NULL,
  `TRANS_INFO` varchar(255) DEFAULT NULL,
  `SELLYN` char(1) NOT NULL,
  `CDATETIME` datetime NOT NULL,
  `UDATETIME` datetime NOT NULL,
  `CNT` int DEFAULT NULL,
  `CODE` varchar(50) DEFAULT NULL,
  `SELLCNT` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`ITEM_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_product_famer_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_product_famer_image` (
  `FILENO` int NOT NULL AUTO_INCREMENT,
  `BOARDNO` int DEFAULT NULL,
  `FILEPATH` varchar(200) NOT NULL,
  `FILENAME` varchar(200) NOT NULL,
  `FILEORGNAME` varchar(200) NOT NULL,
  `FILESIZE` varchar(20) NOT NULL,
  `FILEETC` varchar(20) NOT NULL,
  PRIMARY KEY (`FILENO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_product_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_product_image` (
  `FILENO` int NOT NULL AUTO_INCREMENT,
  `ITEM_NO` int DEFAULT NULL,
  `FILEPATH` varchar(200) DEFAULT NULL,
  `FILENAME` varchar(200) DEFAULT NULL,
  `FILEORGNAME` varchar(200) DEFAULT NULL,
  `FILESIZE` varchar(20) DEFAULT NULL,
  `FILEETC` varchar(20) DEFAULT NULL,
  `KIND` int DEFAULT NULL,
  PRIMARY KEY (`FILENO`)
) ENGINE=InnoDB AUTO_INCREMENT=285 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_user 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_user` (
  `USERID` varchar(20) NOT NULL,
  `USERPW` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `NICKNAME` varchar(20) DEFAULT NULL,
  `GENDER` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PHONE1` varchar(20) DEFAULT NULL,
  `PHONE2` varchar(20) DEFAULT NULL,
  `PHONE3` varchar(20) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `BIRTH` varchar(20) DEFAULT NULL,
  `USER_GRADE` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `AUTHYN` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `EVENTYN` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `LOGINCNT` int DEFAULT NULL,
  `POINT` int DEFAULT NULL,
  `TOTALPAY` int DEFAULT NULL,
  `USERTYPE` varchar(10) DEFAULT NULL,
  `CDATETIME` datetime DEFAULT NULL,
  `UDATETIME` datetime DEFAULT NULL,
  `START_DATE` datetime DEFAULT NULL,
  `END_DATE` datetime DEFAULT NULL,
  `DELETE_DATE` datetime DEFAULT NULL,
  PRIMARY KEY (`USERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_usergrade_bmi 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_usergrade_bmi` (
  `GRADEBMI` varchar(20) NOT NULL,
  `LOBMI` decimal(10,0) NOT NULL,
  `HIBMI` decimal(10,0) NOT NULL,
  `USERID` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`GRADEBMI`),
  KEY `USERID` (`USERID`),
  CONSTRAINT `ECO_USERGRADE_BMI_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `eco_user` (`USERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_usergrade_history 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_usergrade_history` (
  `GRADE` varchar(20) NOT NULL,
  `LOPRICE` decimal(10,0) NOT NULL,
  `HIPRICE` decimal(10,0) NOT NULL,
  `USERID` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`GRADE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_user_delete 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_user_delete` (
  `USERID` varchar(20) NOT NULL,
  `USERPW` varchar(100) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `NICKNAME` varchar(20) DEFAULT NULL,
  `GENDER` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PHONE1` varchar(20) DEFAULT NULL,
  `PHONE2` varchar(20) DEFAULT NULL,
  `PHONE3` varchar(20) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `BIRTH` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `USER_GRADE` varchar(20) DEFAULT NULL,
  `AUTHYN` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `EVENTYN` char(1) DEFAULT NULL,
  `LOGINCNT` int DEFAULT '0',
  `POINT` int DEFAULT NULL,
  `TOTALPAY` int DEFAULT NULL,
  `USERTYPE` varchar(10) DEFAULT NULL,
  `CDATETIME` datetime DEFAULT NULL,
  `UDATETIME` datetime DEFAULT NULL,
  `START_DATE` datetime DEFAULT NULL,
  `END_DATE` datetime DEFAULT NULL,
  `DELETE_DATE` datetime DEFAULT NULL,
  PRIMARY KEY (`USERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.eco_user_survey 구조 내보내기
CREATE TABLE IF NOT EXISTS `eco_user_survey` (
  `USERID` varchar(20) DEFAULT NULL,
  `USERWEIGHT` varchar(20) NOT NULL,
  `USERHEIGHT` varchar(20) NOT NULL,
  `USERKCAL` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.tbl_board 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_board` (
  `BOARDNO` int NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(50) DEFAULT NULL,
  `CONTENTS` varchar(50) DEFAULT NULL,
  `USERID` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `CDATETIME` datetime NOT NULL,
  PRIMARY KEY (`BOARDNO`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.tbl_sns_board 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_sns_board` (
  `BOARDID` int NOT NULL,
  `USERID` int DEFAULT NULL,
  `CONTENTS` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`BOARDID`),
  KEY `USERID` (`USERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

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

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 test.tbl_user 구조 내보내기
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `USERID` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PWD` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `USERNAME` varchar(50) DEFAULT NULL,
  `ADDR` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`USERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
