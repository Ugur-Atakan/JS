/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : hastane

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 29/03/2023 23:59:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Hastalar
-- ----------------------------
DROP TABLE IF EXISTS `Hastalar`;
CREATE TABLE `Hastalar` (
  `id` int DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `surname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `birthPlace` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `birthYear` int DEFAULT NULL,
  `hastaneid` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- ----------------------------
-- Records of Hastalar
-- ----------------------------
BEGIN;
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (1, 'Hande', 'Ersoy', 'Van', 1989, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (2, 'Ali', 'Altın', 'Mardin', 1994, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (3, 'Recep', 'Can', 'Artvin', 1974, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (4, 'Okan', 'Şahin', 'Malatya', 1973, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (5, 'Şafak', 'Çalışkan', 'Gümüşhane', 1981, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (6, 'Leyla', 'Gül', 'Şanlıurfa', 2009, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (7, 'Burak', 'Akyüz', 'Denizli', 2010, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (8, 'Kaan', 'Öztürk', 'Elazığ', 1970, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (9, 'Ümit', 'Güneş', 'Hatay', 2006, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (10, 'Kübra', 'Özdemir', 'Bilecik', 1979, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (11, 'Okan', 'Kaya', 'Nevşehir', 2006, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (12, 'Elif', 'Çetin', 'Malatya', 1972, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (13, 'Nihal', 'Can', 'Afyonkarahisar', 2011, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (14, 'Ebru', 'Tunç', 'İzmir', 2005, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (15, 'Elif', 'Özmen', 'Niğde', 1973, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (16, 'Nihal', 'Acar', 'Malatya', 1978, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (17, 'Kaan', 'Altın', 'Muğla', 1990, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (18, 'Ayşe', 'Yılmaz', 'Kars', 1997, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (19, 'Utku', 'Yıldız', 'Niğde', 2002, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (20, 'Onur', 'Kaplan', 'Bingöl', 1991, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (21, 'Selim', 'Özcan', 'Çanakkale', 2011, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (22, 'Utku', 'Özmen', 'Amasya', 1972, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (23, 'Onur', 'Yılmaz', 'Ordu', 1979, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (24, 'Levent', 'Bakır', 'Kütahya', 2013, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (25, 'Ümit', 'Koç', 'Kayseri', 1974, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (26, 'Nur', 'Özdemir', 'Trabzon', 2010, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (27, 'Veli', 'Güneş', 'Konya', 1999, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (28, 'Mehmet', 'Erol', 'Tunceli', 2011, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (29, 'Ayşe', 'Yılmaz', 'Sinop', 2015, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (30, 'Nihal', 'Erol', 'Balıkesir', 1976, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (31, 'Levent', 'Güçlü', 'Manisa', 1974, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (32, 'Mehmet', 'Doğan', 'Hatay', 2018, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (33, 'Can', 'Şahin', 'İzmir', 2009, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (34, 'Tolga', 'Gür', 'Kahramanmaraş', 1989, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (35, 'Fırat', 'Erol', 'Bitlis', 1991, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (36, 'Özkan', 'Kara', 'Elazığ', 1976, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (37, 'Can', 'Can', 'Samsun', 1989, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (38, 'Fatma', 'Gür', 'Mersin', 1992, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (39, 'Can', 'Küçük', 'Hakkari', 2007, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (40, 'Özge', 'Can', 'Tunceli', 1994, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (41, 'Pınar', 'Bulut', 'Bingöl', 2016, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (42, 'Leyla', 'Koç', 'Kastamonu', 2009, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (43, 'Okan', 'Şahin', 'Yozgat', 1993, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (44, 'Ali', 'Sarı', 'Kastamonu', 2020, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (45, 'Kaan', 'Çalışkan', 'Bingöl', 1978, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (46, 'Yaren', 'Şimşek', 'Bingöl', 1994, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (47, 'Yaren', 'Çetin', 'Siirt', 1976, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (48, 'Leyla', 'Güzel', 'Amasya', 1975, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (49, 'Gökçe', 'Yılmaz', 'Trabzon', 1985, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (50, 'Veli', 'Özkan', 'Çorum', 1974, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (51, 'Levent', 'Erdem', 'Hakkari', 2021, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (52, 'Ebru', 'Kılıç', 'Kahramanmaraş', 1973, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (53, 'Özkan', 'Kılıçarslan', 'Bursa', 1987, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (54, 'Fırat', 'Koç', 'Niğde', 1998, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (55, 'Zeynep', 'Çelik', 'Adıyaman', 1981, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (56, 'Mehmet', 'Gür', 'Diyarbakır', 1997, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (57, 'Okan', 'Özcan', 'Van', 1986, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (58, 'Selim', 'Altın', 'Aydın', 2010, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (59, 'Ege', 'Tunç', 'Nevşehir', 1971, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (60, 'Utku', 'Demir', 'Samsun', 2010, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (61, 'Leyla', 'Gül', 'Edirne', 1977, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (62, 'Leyla', 'Bakır', 'Rize', 1987, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (63, 'Emre', 'Tekin', 'Tekirdağ', 2014, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (64, 'Fatma', 'Keskin', 'Malatya', 1981, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (65, 'Yaren', 'Ateş', 'Artvin', 2003, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (66, 'Ayşe', 'Sönmez', 'Uşak', 1983, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (67, 'Jale', 'Şimşek', 'Bitlis', 2009, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (68, 'Hande', 'Öztürk', 'Malatya', 2012, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (69, 'Ümit', 'Kılıç', 'Gümüşhane', 1984, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (70, 'Yiğit', 'Sönmez', 'Ağrı', 1989, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (71, 'Selim', 'Özdemir', 'Eskişehir', 2003, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (72, 'Şebnem', 'Özcan', 'Amasya', 1986, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (73, 'Işıl', 'Erdem', 'Yozgat', 1987, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (74, 'Fırat', 'Çetin', 'Bilecik', 2009, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (75, 'Okan', 'Özcan', 'Artvin', 1971, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (76, 'Onur', 'Özkan', 'Kütahya', 1982, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (77, 'Fatma', 'Uçar', 'Isparta', 1991, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (78, 'Selim', 'Öztürk', 'Çankırı', 1972, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (79, 'Hande', 'Ateş', 'Nevşehir', 1998, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (80, 'Kaan', 'Ersoy', 'Sinop', 2011, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (81, 'Şeyma', 'Küçük', 'Bingöl', 1982, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (82, 'Gökçe', 'Uçar', 'Nevşehir', 2004, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (83, 'Ege', 'Demir', 'Yozgat', 1984, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (84, 'Yiğit', 'Gür', 'Muş', 2000, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (85, 'Özkan', 'Kaplan', 'Kırklareli', 1988, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (86, 'Irmak', 'Gül', 'Burdur', 1996, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (87, 'Seda', 'Kılıçarslan', 'Sivas', 2021, 2);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (88, 'Kübra', 'Özdemir', 'Erzincan', 2015, 3);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (89, 'Yiğit', 'Çetin', 'Elazığ', 1999, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (90, 'Gökçe', 'Demir', 'Elazığ', 2009, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (91, 'Leyla', 'Tekin', 'Uşak', 1998, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (92, 'Ümit', 'Ersoy', 'Kırklareli', 2010, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (93, 'Tolga', 'Sarı', 'Denizli', 1996, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (94, 'Şeyma', 'Çalışkan', 'Muğla', 1971, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (95, 'Ayşe', 'Çalışkan', 'Adıyaman', 1983, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (96, 'Ceren', 'Özmen', 'Adana', 2001, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (97, 'Leyla', 'Tekin', 'Kars', 1979, 1);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (98, 'Ümit', 'Acar', 'Adana', 1997, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (99, 'Seda', 'Gül', 'Bilecik', 1978, 0);
INSERT INTO `Hastalar` (`id`, `name`, `surname`, `birthPlace`, `birthYear`, `hastaneid`) VALUES (100, 'Özge', 'Acar', 'Kastamonu', 2014, 0);
COMMIT;

-- ----------------------------
-- Table structure for Hastaneler
-- ----------------------------
DROP TABLE IF EXISTS `Hastaneler`;
CREATE TABLE `Hastaneler` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- ----------------------------
-- Records of Hastaneler
-- ----------------------------
BEGIN;
INSERT INTO `Hastaneler` (`id`, `name`, `address`, `type`) VALUES (1, 'Etlik Şehir Hastanesi', 'Yenimahalle', 'Kamu');
INSERT INTO `Hastaneler` (`id`, `name`, `address`, `type`) VALUES (2, 'Bilkent Şehir Hastanesi', 'Çankaya', 'Kamu');
INSERT INTO `Hastaneler` (`id`, `name`, `address`, `type`) VALUES (3, 'Gülhane Eğitim ve Araştırma Hastanesi', 'Keçiören', 'Kamu');
INSERT INTO `Hastaneler` (`id`, `name`, `address`, `type`) VALUES (4, 'Memorial Hastanesi', 'Çankaya', 'Özel');
COMMIT;

-- ----------------------------
-- Table structure for Muayeneler
-- ----------------------------
DROP TABLE IF EXISTS `Muayeneler`;
CREATE TABLE `Muayeneler` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `hastaId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- ----------------------------
-- Records of Muayeneler
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for Receteler
-- ----------------------------
DROP TABLE IF EXISTS `Receteler`;
CREATE TABLE `Receteler` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` int DEFAULT NULL,
  `muayeneId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- ----------------------------
-- Records of Receteler
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
