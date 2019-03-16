/*
Navicat MySQL Data Transfer

Source Server         : MySql@localhost
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : qog

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-03-16 10:48:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for answer
-- ----------------------------
DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `surveyid` int(11) NOT NULL,
  `answertime` datetime NOT NULL,
  `content` longtext,
  `opA` varchar(255) DEFAULT NULL,
  `opB` varchar(255) DEFAULT NULL,
  `opC` varchar(255) DEFAULT NULL,
  `opD` varchar(255) DEFAULT NULL,
  `opE` varchar(255) DEFAULT NULL,
  `opF` varchar(255) DEFAULT NULL,
  `opG` varchar(255) DEFAULT NULL,
  `opH` varchar(255) DEFAULT NULL,
  `opI` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `surveyid` (`surveyid`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`),
  CONSTRAINT `answer_ibfk_2` FOREIGN KEY (`surveyid`) REFERENCES `survey` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1667 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of answer
-- ----------------------------
INSERT INTO `answer` VALUES ('93', '1', '1', 'radio', '136', '2017-05-20 20:17:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('94', '1', '2', 'check', '136', '2017-05-20 20:17:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('95', '1', '3', 'qa', '136', '2017-05-20 20:17:00', '是机谁开的房间', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('96', '1', '4', 'ftb', '136', '2017-05-20 20:17:00', '水电费', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('113', '48', '1', 'radio', '136', '2017-05-21 11:37:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('114', '48', '2', 'check', '136', '2017-05-21 11:37:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('115', '48', '3', 'qa', '136', '2017-05-21 11:37:00', '越来越漂亮', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('116', '48', '4', 'ftb', '136', '2017-05-21 11:37:00', '2000', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('117', '49', '1', 'radio', '136', '2017-05-21 11:37:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('118', '49', '2', 'check', '136', '2017-05-21 11:37:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('119', '49', '3', 'qa', '136', '2017-05-21 11:37:00', '越来越漂亮', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('120', '49', '4', 'ftb', '136', '2017-05-21 11:37:00', '2000', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('121', '50', '1', 'radio', '136', '2017-05-21 11:38:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('122', '50', '2', 'check', '136', '2017-05-21 11:38:00', 'opB,opD', null, 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('123', '50', '3', 'qa', '136', '2017-05-21 11:38:00', '越来越漂亮电饭锅', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('124', '50', '4', 'ftb', '136', '2017-05-21 11:38:00', '2100', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('125', '51', '1', 'radio', '136', '2017-05-21 11:38:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('126', '51', '2', 'check', '136', '2017-05-21 11:38:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('127', '51', '3', 'qa', '136', '2017-05-21 11:38:00', '越来越漂第三方饭锅', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('128', '51', '4', 'ftb', '136', '2017-05-21 11:38:00', '1500', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('129', '52', '1', 'radio', '136', '2017-05-21 11:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('130', '52', '2', 'check', '136', '2017-05-21 11:39:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('131', '52', '3', 'qa', '136', '2017-05-21 11:39:00', '越来越d是打发', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('132', '52', '4', 'ftb', '136', '2017-05-21 11:39:00', '1200', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('133', '53', '1', 'radio', '136', '2017-05-21 11:39:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('134', '53', '2', 'check', '136', '2017-05-21 11:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('135', '53', '3', 'qa', '136', '2017-05-21 11:39:00', '越来越打发d是打发', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('136', '53', '4', 'ftb', '136', '2017-05-21 11:39:00', '1200', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('137', '56', '1', 'radio', '136', '2017-05-21 11:40:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('138', '56', '2', 'check', '136', '2017-05-21 11:40:00', 'opA,opB', 'checked', 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('139', '56', '3', 'qa', '136', '2017-05-21 11:40:00', '越来越打发d是打发', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('140', '56', '4', 'ftb', '136', '2017-05-21 11:40:00', '1000', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('141', '3', '1', 'radio', '136', '2017-05-21 11:41:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('142', '3', '2', 'check', '136', '2017-05-21 11:41:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('143', '3', '3', 'qa', '136', '2017-05-21 11:41:00', '20135666限定符', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('144', '3', '4', 'ftb', '136', '2017-05-21 11:41:00', '336', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('145', '2', '1', 'radio', '136', '2017-05-21 11:42:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('146', '2', '2', 'check', '136', '2017-05-21 11:42:00', 'opB,opD', null, 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('147', '2', '3', 'qa', '136', '2017-05-21 11:42:00', '20135673限定符', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('148', '2', '4', 'ftb', '136', '2017-05-21 11:42:00', '336', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('149', '10', '1', 'radio', '136', '2017-05-21 11:42:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('150', '10', '2', 'check', '136', '2017-05-21 11:42:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('151', '10', '3', 'qa', '136', '2017-05-21 11:42:00', '20135673限定符撒的', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('152', '10', '4', 'ftb', '136', '2017-05-21 11:42:00', '336巅峰', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('153', '9', '1', 'radio', '136', '2017-05-21 11:43:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('154', '9', '2', 'check', '136', '2017-05-21 11:43:00', 'opA,opB', 'checked', 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('155', '9', '3', 'qa', '136', '2017-05-21 11:43:00', '20135673限定符撒的', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('156', '9', '4', 'ftb', '136', '2017-05-21 11:43:00', '336巅峰', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('157', '36', '1', 'radio', '136', '2017-05-21 11:44:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('158', '36', '2', 'check', '136', '2017-05-21 11:44:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('159', '36', '3', 'qa', '136', '2017-05-21 11:44:00', '20135673限定符撒的', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('160', '36', '4', 'ftb', '136', '2017-05-21 11:44:00', '336巅峰', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('161', '38', '1', 'radio', '136', '2017-05-21 11:45:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('162', '38', '2', 'check', '136', '2017-05-21 11:45:00', 'opA,opC,opD', 'checked', null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('163', '38', '3', 'qa', '136', '2017-05-21 11:45:00', '2014筛选出限定符撒的', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('164', '38', '4', 'ftb', '136', '2017-05-21 11:45:00', '336巅峰', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('165', '39', '1', 'radio', '136', '2017-05-21 11:45:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('166', '39', '2', 'check', '136', '2017-05-21 11:45:00', 'opA,opB', 'checked', 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('167', '39', '3', 'qa', '136', '2017-05-21 11:45:00', '2014筛选出限定符撒的', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('168', '39', '4', 'ftb', '136', '2017-05-21 11:45:00', '336巅峰', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('169', '40', '1', 'radio', '136', '2017-05-21 11:46:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('170', '40', '2', 'check', '136', '2017-05-21 11:46:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('171', '40', '3', 'qa', '136', '2017-05-21 11:46:00', '2014筛选出限定符撒的', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('172', '40', '4', 'ftb', '136', '2017-05-21 11:46:00', '开户行', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('173', '41', '1', 'radio', '136', '2017-05-21 11:47:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('174', '41', '2', 'check', '136', '2017-05-21 11:47:00', 'opA,opB,opD', 'checked', 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('175', '41', '3', 'qa', '136', '2017-05-21 11:47:00', '2014限定符撒的客家话', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('176', '41', '4', 'ftb', '136', '2017-05-21 11:47:00', '集合', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('177', '44', '1', 'radio', '136', '2017-05-21 11:48:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('178', '44', '2', 'check', '136', '2017-05-21 11:48:00', 'opA,opD', 'checked', null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('179', '44', '3', 'qa', '136', '2017-05-21 11:48:00', '2014限定符或接口的客家话', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('180', '44', '4', 'ftb', '136', '2017-05-21 11:48:00', '就火女', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('181', '45', '1', 'radio', '136', '2017-05-21 11:48:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('182', '45', '2', 'check', '136', '2017-05-21 11:48:00', 'opB,opD', null, 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('183', '45', '3', 'qa', '136', '2017-05-21 11:48:00', '2014限定就接口的客家话', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('184', '45', '4', 'ftb', '136', '2017-05-21 11:48:00', '哦浦路', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('185', '1', '1', 'radio', '141', '2017-05-21 13:48:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('186', '1', '2', 'check', '141', '2017-05-21 13:48:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('187', '1', '3', 'qa', '141', '2017-05-21 13:48:00', '?UI个脚后跟共和国', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('188', '1', '4', 'ftb', '141', '2017-05-21 13:48:00', '猛男计划', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('189', '1', '5', 'qa', '141', '2017-05-21 13:48:00', '离开你看李', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('190', '1', '6', 'qa', '141', '2017-05-21 13:48:00', '。可男可女', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('191', '3', '1', 'radio', '1143', '2017-05-23 16:26:00', 'opE', null, null, null, null, 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('192', '3', '2', 'radio', '1143', '2017-05-23 16:26:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('193', '3', '3', 'check', '1143', '2017-05-23 16:26:00', 'opE', null, null, null, null, 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('194', '3', '4', 'qa', '1143', '2017-05-23 16:26:00', '无', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('195', '1079', '1', 'radio', '1143', '2017-05-23 16:28:00', 'opE', null, null, null, null, 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('196', '1079', '2', 'radio', '1143', '2017-05-23 16:28:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('197', '1079', '3', 'check', '1143', '2017-05-23 16:28:00', 'opE', null, null, null, null, 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('198', '1079', '4', 'qa', '1143', '2017-05-23 16:28:00', '无', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('207', '1080', '1', 'radio', '141', '2017-05-23 18:38:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('208', '1080', '2', 'check', '141', '2017-05-23 18:38:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('209', '1080', '3', 'qa', '141', '2017-05-23 18:38:00', '感谢母校', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('210', '1080', '4', 'ftb', '141', '2017-05-23 18:38:00', '', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('211', '1080', '5', 'qa', '141', '2017-05-23 18:38:00', '', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('212', '1080', '6', 'qa', '141', '2017-05-23 18:38:00', '', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('213', '38', '1', 'radio', '141', '2017-05-23 18:51:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('214', '38', '2', 'check', '141', '2017-05-23 18:51:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('215', '38', '3', 'qa', '141', '2017-05-23 18:51:00', '赵日天', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('216', '38', '4', 'ftb', '141', '2017-05-23 18:51:00', '苍老师', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('217', '38', '5', 'qa', '141', '2017-05-23 18:51:00', '黑', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('218', '38', '6', 'qa', '141', '2017-05-23 18:51:00', '不错', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('223', '1081', '1', 'radio', '141', '2017-05-23 21:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('224', '1081', '2', 'check', '141', '2017-05-23 21:12:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('225', '1081', '3', 'qa', '141', '2017-05-23 21:12:00', '很不错啊', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('226', '1081', '4', 'ftb', '141', '2017-05-23 21:12:00', '', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('227', '1081', '5', 'qa', '141', '2017-05-23 21:12:00', '没有', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('228', '1081', '6', 'qa', '141', '2017-05-23 21:12:00', '很好', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1203', '1', '1', 'radio', '2148', '2017-05-26 09:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1204', '1', '2', 'radio', '2148', '2017-05-26 09:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1205', '1', '3', 'radio', '2148', '2017-05-26 09:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1206', '1', '4', 'radio', '2148', '2017-05-26 09:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1207', '1', '5', 'radio', '2148', '2017-05-26 09:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1208', '1', '6', 'radio', '2148', '2017-05-26 09:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1209', '1', '7', 'radio', '2148', '2017-05-26 09:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1210', '1', '8', 'qa', '2148', '2017-05-26 09:12:00', '老师与学生互动太少，课堂氛围有待提升。', null, null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1239', '1', '1', 'radio', '2147', '2017-05-26 10:40:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1240', '1', '2', 'radio', '2147', '2017-05-26 10:40:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1241', '1', '3', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1242', '1', '4', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1243', '1', '5', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1244', '1', '6', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1245', '1', '7', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1246', '1', '8', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1247', '1', '9', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1248', '1', '10', 'check', '2147', '2017-05-26 10:40:00', 'opI', null, null, null, null, null, null, null, null, 'checked');
INSERT INTO `answer` VALUES ('1249', '1', '11', 'radio', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1250', '1', '12', 'check', '2147', '2017-05-26 10:40:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1251', '1081', '1', 'radio', '2147', '2017-05-27 16:56:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1252', '1081', '2', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1253', '1081', '3', 'radio', '2147', '2017-05-27 16:56:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1254', '1081', '4', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1255', '1081', '5', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1256', '1081', '6', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1257', '1081', '7', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1258', '1081', '8', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1259', '1081', '9', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1260', '1081', '10', 'check', '2147', '2017-05-27 16:56:00', 'opB,opH', null, 'checked', null, null, null, null, null, 'checked', null);
INSERT INTO `answer` VALUES ('1261', '1081', '11', 'radio', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1262', '1081', '12', 'check', '2147', '2017-05-27 16:56:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1263', '1082', '1', 'radio', '2147', '2017-05-27 16:57:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1264', '1082', '2', 'radio', '2147', '2017-05-27 16:57:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1265', '1082', '3', 'radio', '2147', '2017-05-27 16:57:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1266', '1082', '4', 'radio', '2147', '2017-05-27 16:57:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1267', '1082', '5', 'radio', '2147', '2017-05-27 16:57:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1268', '1082', '6', 'radio', '2147', '2017-05-27 16:57:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1269', '1082', '7', 'radio', '2147', '2017-05-27 16:57:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1270', '1082', '8', 'radio', '2147', '2017-05-27 16:57:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1271', '1082', '9', 'radio', '2147', '2017-05-27 16:57:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1272', '1082', '10', 'check', '2147', '2017-05-27 16:57:00', 'opB,opC,opH,opI', null, 'checked', 'checked', null, null, null, null, 'checked', 'checked');
INSERT INTO `answer` VALUES ('1273', '1082', '11', 'radio', '2147', '2017-05-27 16:57:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1274', '1082', '12', 'check', '2147', '2017-05-27 16:57:00', 'opB,opD', null, 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1275', '1083', '1', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1276', '1083', '2', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1277', '1083', '3', 'radio', '2147', '2017-05-27 16:58:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1278', '1083', '4', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1279', '1083', '5', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1280', '1083', '6', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1281', '1083', '7', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1282', '1083', '8', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1283', '1083', '9', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1284', '1083', '10', 'check', '2147', '2017-05-27 16:58:00', 'opG,opH,opI', null, null, null, null, null, null, 'checked', 'checked', 'checked');
INSERT INTO `answer` VALUES ('1285', '1083', '11', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1286', '1083', '12', 'check', '2147', '2017-05-27 16:58:00', 'opC,opD', null, null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1287', '1084', '1', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1288', '1084', '2', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1289', '1084', '3', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1290', '1084', '4', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1291', '1084', '5', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1292', '1084', '6', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1293', '1084', '7', 'radio', '2147', '2017-05-27 16:58:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1294', '1084', '8', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1295', '1084', '9', 'radio', '2147', '2017-05-27 16:58:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1296', '1084', '10', 'check', '2147', '2017-05-27 16:58:00', 'opC,opE,opG,opH', null, null, 'checked', null, 'checked', null, 'checked', 'checked', null);
INSERT INTO `answer` VALUES ('1297', '1084', '11', 'radio', '2147', '2017-05-27 16:58:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1298', '1084', '12', 'check', '2147', '2017-05-27 16:58:00', 'opB,opC,opD', null, 'checked', 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1299', '1085', '1', 'radio', '2147', '2017-05-27 16:59:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1300', '1085', '2', 'radio', '2147', '2017-05-27 16:59:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1301', '1085', '3', 'radio', '2147', '2017-05-27 16:59:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1302', '1085', '4', 'radio', '2147', '2017-05-27 16:59:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1303', '1085', '5', 'radio', '2147', '2017-05-27 16:59:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1304', '1085', '6', 'radio', '2147', '2017-05-27 16:59:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1305', '1085', '7', 'radio', '2147', '2017-05-27 16:59:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1306', '1085', '8', 'radio', '2147', '2017-05-27 16:59:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1307', '1085', '9', 'radio', '2147', '2017-05-27 16:59:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1308', '1085', '10', 'check', '2147', '2017-05-27 16:59:00', 'opB,opE,opF,opG,opH', null, 'checked', null, null, 'checked', 'checked', 'checked', 'checked', null);
INSERT INTO `answer` VALUES ('1309', '1085', '11', 'radio', '2147', '2017-05-27 16:59:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1310', '1085', '12', 'check', '2147', '2017-05-27 16:59:00', 'opA,opC,opD', 'checked', null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1311', '1086', '1', 'radio', '2147', '2017-05-27 17:00:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1312', '1086', '2', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1313', '1086', '3', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1314', '1086', '4', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1315', '1086', '5', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1316', '1086', '6', 'radio', '2147', '2017-05-27 17:00:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1317', '1086', '7', 'radio', '2147', '2017-05-27 17:00:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1318', '1086', '8', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1319', '1086', '9', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1320', '1086', '10', 'check', '2147', '2017-05-27 17:00:00', 'opB,opD,opF,opG,opH', null, 'checked', null, 'checked', null, 'checked', 'checked', 'checked', null);
INSERT INTO `answer` VALUES ('1321', '1086', '11', 'radio', '2147', '2017-05-27 17:00:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1322', '1086', '12', 'check', '2147', '2017-05-27 17:00:00', 'opA,opB,opC', 'checked', 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1323', '1087', '1', 'radio', '2147', '2017-05-27 17:00:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1324', '1087', '2', 'radio', '2147', '2017-05-27 17:00:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1325', '1087', '3', 'radio', '2147', '2017-05-27 17:00:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1326', '1087', '4', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1327', '1087', '5', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1328', '1087', '6', 'radio', '2147', '2017-05-27 17:00:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1329', '1087', '7', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1330', '1087', '8', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1331', '1087', '9', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1332', '1087', '10', 'check', '2147', '2017-05-27 17:00:00', 'opB,opD,opF,opG,opH', null, 'checked', null, 'checked', null, 'checked', 'checked', 'checked', null);
INSERT INTO `answer` VALUES ('1333', '1087', '11', 'radio', '2147', '2017-05-27 17:00:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1334', '1087', '12', 'check', '2147', '2017-05-27 17:00:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1335', '1088', '1', 'radio', '2147', '2017-05-27 17:01:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1336', '1088', '2', 'radio', '2147', '2017-05-27 17:01:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1337', '1088', '3', 'radio', '2147', '2017-05-27 17:01:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1338', '1088', '4', 'radio', '2147', '2017-05-27 17:01:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1339', '1088', '5', 'radio', '2147', '2017-05-27 17:01:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1340', '1088', '6', 'radio', '2147', '2017-05-27 17:01:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1341', '1088', '7', 'radio', '2147', '2017-05-27 17:01:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1342', '1088', '8', 'radio', '2147', '2017-05-27 17:01:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1343', '1088', '9', 'radio', '2147', '2017-05-27 17:01:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1344', '1088', '10', 'check', '2147', '2017-05-27 17:01:00', 'opC,opD', null, null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1345', '1088', '11', 'radio', '2147', '2017-05-27 17:01:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1346', '1088', '12', 'check', '2147', '2017-05-27 17:01:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1347', '1089', '1', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1348', '1089', '2', 'radio', '2147', '2017-05-27 17:04:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1349', '1089', '3', 'radio', '2147', '2017-05-27 17:04:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1350', '1089', '4', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1351', '1089', '5', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1352', '1089', '6', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1353', '1089', '7', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1354', '1089', '8', 'radio', '2147', '2017-05-27 17:04:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1355', '1089', '9', 'radio', '2147', '2017-05-27 17:04:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1356', '1089', '10', 'check', '2147', '2017-05-27 17:04:00', 'opC,opE', null, null, 'checked', null, 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('1357', '1089', '11', 'radio', '2147', '2017-05-27 17:04:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1358', '1089', '12', 'check', '2147', '2017-05-27 17:04:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1359', '1090', '1', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1360', '1090', '2', 'radio', '2147', '2017-05-27 17:04:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1361', '1090', '3', 'radio', '2147', '2017-05-27 17:04:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1362', '1090', '4', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1363', '1090', '5', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1364', '1090', '6', 'radio', '2147', '2017-05-27 17:04:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1365', '1090', '7', 'radio', '2147', '2017-05-27 17:04:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1366', '1090', '8', 'radio', '2147', '2017-05-27 17:04:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1367', '1090', '9', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1368', '1090', '10', 'check', '2147', '2017-05-27 17:04:00', 'opB,opC,opE', null, 'checked', 'checked', null, 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('1369', '1090', '11', 'radio', '2147', '2017-05-27 17:04:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1370', '1090', '12', 'check', '2147', '2017-05-27 17:04:00', 'opA,opB,opC', 'checked', 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1371', '1091', '1', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1372', '1091', '2', 'radio', '2147', '2017-05-27 17:05:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1373', '1091', '3', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1374', '1091', '4', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1375', '1091', '5', 'radio', '2147', '2017-05-27 17:05:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1376', '1091', '6', 'radio', '2147', '2017-05-27 17:05:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1377', '1091', '7', 'radio', '2147', '2017-05-27 17:05:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1378', '1091', '8', 'radio', '2147', '2017-05-27 17:05:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1379', '1091', '9', 'radio', '2147', '2017-05-27 17:05:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1380', '1091', '10', 'check', '2147', '2017-05-27 17:05:00', 'opB,opD,opE', null, 'checked', null, 'checked', 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('1381', '1091', '11', 'radio', '2147', '2017-05-27 17:05:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1382', '1091', '12', 'check', '2147', '2017-05-27 17:05:00', 'opA,opC,opD', 'checked', null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1383', '1092', '1', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1384', '1092', '2', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1385', '1092', '3', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1386', '1092', '4', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1387', '1092', '5', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1388', '1092', '6', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1389', '1092', '7', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1390', '1092', '8', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1391', '1092', '9', 'radio', '2147', '2017-05-27 17:05:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1392', '1092', '10', 'check', '2147', '2017-05-27 17:05:00', 'opB,opC,opE,opF,opI', null, 'checked', 'checked', null, 'checked', 'checked', null, null, 'checked');
INSERT INTO `answer` VALUES ('1393', '1092', '11', 'radio', '2147', '2017-05-27 17:05:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1394', '1092', '12', 'check', '2147', '2017-05-27 17:05:00', 'opA,opC,opD', 'checked', null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1395', '1093', '1', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1396', '1093', '2', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1397', '1093', '3', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1398', '1093', '4', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1399', '1093', '5', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1400', '1093', '6', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1401', '1093', '7', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1402', '1093', '8', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1403', '1093', '9', 'radio', '2147', '2017-05-27 17:06:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1404', '1093', '10', 'check', '2147', '2017-05-27 17:06:00', 'opB,opC,opE,opF,opI', null, 'checked', 'checked', null, 'checked', 'checked', null, null, 'checked');
INSERT INTO `answer` VALUES ('1405', '1093', '11', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1406', '1093', '12', 'check', '2147', '2017-05-27 17:06:00', 'opA,opC,opD', 'checked', null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1407', '1080', '1', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1408', '1080', '2', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1409', '1080', '3', 'radio', '2147', '2017-05-27 17:06:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1410', '1080', '4', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1411', '1080', '5', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1412', '1080', '6', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1413', '1080', '7', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1414', '1080', '8', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1415', '1080', '9', 'radio', '2147', '2017-05-27 17:06:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1416', '1080', '10', 'check', '2147', '2017-05-27 17:06:00', 'opD,opE,opF,opH', null, null, null, 'checked', 'checked', 'checked', null, 'checked', null);
INSERT INTO `answer` VALUES ('1417', '1080', '11', 'radio', '2147', '2017-05-27 17:06:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1418', '1080', '12', 'check', '2147', '2017-05-27 17:06:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1419', '1079', '1', 'radio', '2147', '2017-05-27 17:07:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1420', '1079', '2', 'radio', '2147', '2017-05-27 17:07:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1421', '1079', '3', 'radio', '2147', '2017-05-27 17:07:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1422', '1079', '4', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1423', '1079', '5', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1424', '1079', '6', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1425', '1079', '7', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1426', '1079', '8', 'radio', '2147', '2017-05-27 17:07:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1427', '1079', '9', 'radio', '2147', '2017-05-27 17:07:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1428', '1079', '10', 'check', '2147', '2017-05-27 17:07:00', 'opD,opE,opF,opH', null, null, null, 'checked', 'checked', 'checked', null, 'checked', null);
INSERT INTO `answer` VALUES ('1429', '1079', '11', 'radio', '2147', '2017-05-27 17:07:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1430', '1079', '12', 'check', '2147', '2017-05-27 17:07:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1431', '1094', '1', 'radio', '2147', '2017-05-27 17:07:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1432', '1094', '2', 'radio', '2147', '2017-05-27 17:07:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1433', '1094', '3', 'radio', '2147', '2017-05-27 17:07:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1434', '1094', '4', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1435', '1094', '5', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1436', '1094', '6', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1437', '1094', '7', 'radio', '2147', '2017-05-27 17:07:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1438', '1094', '8', 'radio', '2147', '2017-05-27 17:07:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1439', '1094', '9', 'radio', '2147', '2017-05-27 17:07:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1440', '1094', '10', 'check', '2147', '2017-05-27 17:07:00', 'opD,opE,opF,opH', null, null, null, 'checked', 'checked', 'checked', null, 'checked', null);
INSERT INTO `answer` VALUES ('1441', '1094', '11', 'radio', '2147', '2017-05-27 17:07:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1442', '1094', '12', 'check', '2147', '2017-05-27 17:07:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1443', '1095', '1', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1444', '1095', '2', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1445', '1095', '3', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1446', '1095', '4', 'radio', '2147', '2017-05-27 17:08:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1447', '1095', '5', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1448', '1095', '6', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1449', '1095', '7', 'radio', '2147', '2017-05-27 17:08:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1450', '1095', '8', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1451', '1095', '9', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1452', '1095', '10', 'check', '2147', '2017-05-27 17:08:00', 'opA,opD,opE,opF', 'checked', null, null, 'checked', 'checked', 'checked', null, null, null);
INSERT INTO `answer` VALUES ('1453', '1095', '11', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1454', '1095', '12', 'check', '2147', '2017-05-27 17:08:00', 'opA,opB,opC', 'checked', 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1455', '3', '1', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1456', '3', '2', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1457', '3', '3', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1458', '3', '4', 'radio', '2147', '2017-05-27 17:08:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1459', '3', '5', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1460', '3', '6', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1461', '3', '7', 'radio', '2147', '2017-05-27 17:08:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1462', '3', '8', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1463', '3', '9', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1464', '3', '10', 'check', '2147', '2017-05-27 17:08:00', 'opA,opD,opE,opF', 'checked', null, null, 'checked', 'checked', 'checked', null, null, null);
INSERT INTO `answer` VALUES ('1465', '3', '11', 'radio', '2147', '2017-05-27 17:08:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1466', '3', '12', 'check', '2147', '2017-05-27 17:08:00', 'opA,opB,opC', 'checked', 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1467', '10', '1', 'radio', '2147', '2017-05-27 17:09:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1468', '10', '2', 'radio', '2147', '2017-05-27 17:09:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1469', '10', '3', 'radio', '2147', '2017-05-27 17:09:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1470', '10', '4', 'radio', '2147', '2017-05-27 17:09:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1471', '10', '5', 'radio', '2147', '2017-05-27 17:09:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1472', '10', '6', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1473', '10', '7', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1474', '10', '8', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1475', '10', '9', 'radio', '2147', '2017-05-27 17:09:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1476', '10', '10', 'check', '2147', '2017-05-27 17:09:00', 'opA,opD,opE,opF,opH,opI', 'checked', null, null, 'checked', 'checked', 'checked', null, 'checked', 'checked');
INSERT INTO `answer` VALUES ('1477', '10', '11', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1478', '10', '12', 'check', '2147', '2017-05-27 17:09:00', 'opA,opB,opC', 'checked', 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1479', '9', '1', 'radio', '2147', '2017-05-27 17:09:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1480', '9', '2', 'radio', '2147', '2017-05-27 17:09:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1481', '9', '3', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1482', '9', '4', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1483', '9', '5', 'radio', '2147', '2017-05-27 17:09:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1484', '9', '6', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1485', '9', '7', 'radio', '2147', '2017-05-27 17:09:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1486', '9', '8', 'radio', '2147', '2017-05-27 17:09:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1487', '9', '9', 'radio', '2147', '2017-05-27 17:09:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1488', '9', '10', 'check', '2147', '2017-05-27 17:09:00', 'opA,opD,opE,opF,opH,opI', 'checked', null, null, 'checked', 'checked', 'checked', null, 'checked', 'checked');
INSERT INTO `answer` VALUES ('1489', '9', '11', 'radio', '2147', '2017-05-27 17:09:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1490', '9', '12', 'check', '2147', '2017-05-27 17:09:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1491', '1072', '1', 'radio', '2147', '2017-05-27 17:10:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1492', '1072', '2', 'radio', '2147', '2017-05-27 17:10:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1493', '1072', '3', 'radio', '2147', '2017-05-27 17:10:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1494', '1072', '4', 'radio', '2147', '2017-05-27 17:10:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1495', '1072', '5', 'radio', '2147', '2017-05-27 17:10:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1496', '1072', '6', 'radio', '2147', '2017-05-27 17:10:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1497', '1072', '7', 'radio', '2147', '2017-05-27 17:10:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1498', '1072', '8', 'radio', '2147', '2017-05-27 17:10:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1499', '1072', '9', 'radio', '2147', '2017-05-27 17:10:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1500', '1072', '10', 'check', '2147', '2017-05-27 17:10:00', 'opA,opD,opE,opF,opH,opI', 'checked', null, null, 'checked', 'checked', 'checked', null, 'checked', 'checked');
INSERT INTO `answer` VALUES ('1501', '1072', '11', 'radio', '2147', '2017-05-27 17:10:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1502', '1072', '12', 'check', '2147', '2017-05-27 17:10:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1503', '1073', '1', 'radio', '2147', '2017-05-27 17:11:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1504', '1073', '2', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1505', '1073', '3', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1506', '1073', '4', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1507', '1073', '5', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1508', '1073', '6', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1509', '1073', '7', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1510', '1073', '8', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1511', '1073', '9', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1512', '1073', '10', 'check', '2147', '2017-05-27 17:11:00', 'opA,opD,opE,opF,opH,opI', 'checked', null, null, 'checked', 'checked', 'checked', null, 'checked', 'checked');
INSERT INTO `answer` VALUES ('1513', '1073', '11', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1514', '1073', '12', 'check', '2147', '2017-05-27 17:11:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1515', '1074', '1', 'radio', '2147', '2017-05-27 17:11:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1516', '1074', '2', 'radio', '2147', '2017-05-27 17:11:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1517', '1074', '3', 'radio', '2147', '2017-05-27 17:11:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1518', '1074', '4', 'radio', '2147', '2017-05-27 17:11:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1519', '1074', '5', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1520', '1074', '6', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1521', '1074', '7', 'radio', '2147', '2017-05-27 17:11:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1522', '1074', '8', 'radio', '2147', '2017-05-27 17:11:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1523', '1074', '9', 'radio', '2147', '2017-05-27 17:11:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1524', '1074', '10', 'check', '2147', '2017-05-27 17:11:00', 'opB,opC,opD,opE,opG', null, 'checked', 'checked', 'checked', 'checked', null, 'checked', null, null);
INSERT INTO `answer` VALUES ('1525', '1074', '11', 'radio', '2147', '2017-05-27 17:11:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1526', '1074', '12', 'check', '2147', '2017-05-27 17:11:00', 'opC,opD', null, null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1527', '1075', '1', 'radio', '2147', '2017-05-27 17:12:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1528', '1075', '2', 'radio', '2147', '2017-05-27 17:12:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1529', '1075', '3', 'radio', '2147', '2017-05-27 17:12:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1530', '1075', '4', 'radio', '2147', '2017-05-27 17:12:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1531', '1075', '5', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1532', '1075', '6', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1533', '1075', '7', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1534', '1075', '8', 'radio', '2147', '2017-05-27 17:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1535', '1075', '9', 'radio', '2147', '2017-05-27 17:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1536', '1075', '10', 'check', '2147', '2017-05-27 17:12:00', 'opB,opC,opD,opE,opG', null, 'checked', 'checked', 'checked', 'checked', null, 'checked', null, null);
INSERT INTO `answer` VALUES ('1537', '1075', '11', 'radio', '2147', '2017-05-27 17:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1538', '1075', '12', 'check', '2147', '2017-05-27 17:12:00', 'opC,opD', null, null, 'checked', 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1539', '1076', '1', 'radio', '2147', '2017-05-27 17:12:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1540', '1076', '2', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1541', '1076', '3', 'radio', '2147', '2017-05-27 17:12:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1542', '1076', '4', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1543', '1076', '5', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1544', '1076', '6', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1545', '1076', '7', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1546', '1076', '8', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1547', '1076', '9', 'radio', '2147', '2017-05-27 17:12:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1548', '1076', '10', 'check', '2147', '2017-05-27 17:12:00', 'opB,opD,opE,opG,opI', null, 'checked', null, 'checked', 'checked', null, 'checked', null, 'checked');
INSERT INTO `answer` VALUES ('1549', '1076', '11', 'radio', '2147', '2017-05-27 17:12:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1550', '1076', '12', 'check', '2147', '2017-05-27 17:12:00', 'opB,opD', null, 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1551', '1077', '1', 'radio', '2147', '2017-05-27 17:13:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1552', '1077', '2', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1553', '1077', '3', 'radio', '2147', '2017-05-27 17:13:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1554', '1077', '4', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1555', '1077', '5', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1556', '1077', '6', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1557', '1077', '7', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1558', '1077', '8', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1559', '1077', '9', 'radio', '2147', '2017-05-27 17:13:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1560', '1077', '10', 'check', '2147', '2017-05-27 17:13:00', 'opB,opD,opE,opG,opI', null, 'checked', null, 'checked', 'checked', null, 'checked', null, 'checked');
INSERT INTO `answer` VALUES ('1561', '1077', '11', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1562', '1077', '12', 'check', '2147', '2017-05-27 17:13:00', 'opB,opD', null, 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1563', '48', '1', 'radio', '2147', '2017-05-27 17:13:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1564', '48', '2', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1565', '48', '3', 'radio', '2147', '2017-05-27 17:13:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1566', '48', '4', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1567', '48', '5', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1568', '48', '6', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1569', '48', '7', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1570', '48', '8', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1571', '48', '9', 'radio', '2147', '2017-05-27 17:13:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1572', '48', '10', 'check', '2147', '2017-05-27 17:13:00', 'opB,opD,opE,opG,opI', null, 'checked', null, 'checked', 'checked', null, 'checked', null, 'checked');
INSERT INTO `answer` VALUES ('1573', '48', '11', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1574', '48', '12', 'check', '2147', '2017-05-27 17:13:00', 'opB,opD', null, 'checked', null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1575', '49', '1', 'radio', '2147', '2017-05-27 17:13:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1576', '49', '2', 'radio', '2147', '2017-05-27 17:13:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1577', '49', '3', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1578', '49', '4', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1579', '49', '5', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1580', '49', '6', 'radio', '2147', '2017-05-27 17:13:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1581', '49', '7', 'radio', '2147', '2017-05-27 17:13:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1582', '49', '8', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1583', '49', '9', 'radio', '2147', '2017-05-27 17:13:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1584', '49', '10', 'check', '2147', '2017-05-27 17:13:00', 'opD,opE,opG,opH', null, null, null, 'checked', 'checked', null, 'checked', 'checked', null);
INSERT INTO `answer` VALUES ('1585', '49', '11', 'radio', '2147', '2017-05-27 17:13:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1586', '49', '12', 'check', '2147', '2017-05-27 17:13:00', 'opA,opC', 'checked', null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1587', '50', '1', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1588', '50', '2', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1589', '50', '3', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1590', '50', '4', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1591', '50', '5', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1592', '50', '6', 'radio', '2147', '2017-05-27 17:14:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1593', '50', '7', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1594', '50', '8', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1595', '50', '9', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1596', '50', '10', 'check', '2147', '2017-05-27 17:14:00', 'opD,opE,opH', null, null, null, 'checked', 'checked', null, null, 'checked', null);
INSERT INTO `answer` VALUES ('1597', '50', '11', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1598', '50', '12', 'check', '2147', '2017-05-27 17:14:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1599', '51', '1', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1600', '51', '2', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1601', '51', '3', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1602', '51', '4', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1603', '51', '5', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1604', '51', '6', 'radio', '2147', '2017-05-27 17:14:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1605', '51', '7', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1606', '51', '8', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1607', '51', '9', 'radio', '2147', '2017-05-27 17:14:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1608', '51', '10', 'check', '2147', '2017-05-27 17:14:00', 'opB,opE,opH', null, 'checked', null, null, 'checked', null, null, 'checked', null);
INSERT INTO `answer` VALUES ('1609', '51', '11', 'radio', '2147', '2017-05-27 17:14:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1610', '51', '12', 'check', '2147', '2017-05-27 17:14:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1611', '52', '1', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1612', '52', '2', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1613', '52', '3', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1614', '52', '4', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1615', '52', '5', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1616', '52', '6', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1617', '52', '7', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1618', '52', '8', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1619', '52', '9', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1620', '52', '10', 'check', '2147', '2017-05-27 17:15:00', 'opB,opE,opH', null, 'checked', null, null, 'checked', null, null, 'checked', null);
INSERT INTO `answer` VALUES ('1621', '52', '11', 'radio', '2147', '2017-05-27 17:15:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1622', '52', '12', 'check', '2147', '2017-05-27 17:15:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1623', '53', '1', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1624', '53', '2', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1625', '53', '3', 'radio', '2147', '2017-05-27 17:15:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1626', '53', '4', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1627', '53', '5', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1628', '53', '6', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1629', '53', '7', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1630', '53', '8', 'radio', '2147', '2017-05-27 17:15:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1631', '53', '9', 'radio', '2147', '2017-05-27 17:15:00', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1632', '53', '10', 'check', '2147', '2017-05-27 17:15:00', 'opD,opE', null, null, null, 'checked', 'checked', null, null, null, null);
INSERT INTO `answer` VALUES ('1633', '53', '11', 'radio', '2147', '2017-05-27 17:15:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1634', '53', '12', 'check', '2147', '2017-05-27 17:15:00', 'opA,opB', 'checked', 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1635', '56', '1', 'radio', '2147', '2017-05-27 17:16:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1636', '56', '2', 'radio', '2147', '2017-05-27 17:16:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1637', '56', '3', 'radio', '2147', '2017-05-27 17:16:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1638', '56', '4', 'radio', '2147', '2017-05-27 17:16:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1639', '56', '5', 'radio', '2147', '2017-05-27 17:16:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1640', '56', '6', 'radio', '2147', '2017-05-27 17:16:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1641', '56', '7', 'radio', '2147', '2017-05-27 17:16:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1642', '56', '8', 'radio', '2147', '2017-05-27 17:16:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1643', '56', '9', 'radio', '2147', '2017-05-27 17:16:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1644', '56', '10', 'check', '2147', '2017-05-27 17:16:00', 'opE,opG', null, null, null, null, 'checked', null, 'checked', null, null);
INSERT INTO `answer` VALUES ('1645', '56', '11', 'radio', '2147', '2017-05-27 17:16:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1646', '56', '12', 'check', '2147', '2017-05-27 17:16:00', 'opA,opB', 'checked', 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1647', '1096', '1', 'radio', '2147', '2017-05-27 23:39:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1648', '1096', '2', 'radio', '2147', '2017-05-27 23:39:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1649', '1096', '3', 'radio', '2147', '2017-05-27 23:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1650', '1096', '4', 'radio', '2147', '2017-05-27 23:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1651', '1096', '5', 'radio', '2147', '2017-05-27 23:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1652', '1096', '6', 'radio', '2147', '2017-05-27 23:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1653', '1096', '7', 'radio', '2147', '2017-05-27 23:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1654', '1096', '8', 'radio', '2147', '2017-05-27 23:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1655', '1096', '9', 'radio', '2147', '2017-05-27 23:39:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1656', '1096', '10', 'check', '2147', '2017-05-27 23:39:00', 'opD,opI', null, null, null, 'checked', null, null, null, null, 'checked');
INSERT INTO `answer` VALUES ('1657', '1096', '11', 'radio', '2147', '2017-05-27 23:39:00', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1658', '1096', '12', 'check', '2147', '2017-05-27 23:39:00', 'opB,opC', null, 'checked', 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1659', '1', '1', 'radio', '2150', '2018-04-25 22:28:00', 'opA', 'checked', null, null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1660', '10', '1', 'radio', '2150', '2018-04-25 22:29:00', 'opB', null, 'checked', null, null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1661', '1', '1', 'radio', '1144', '2018-07-29 21:29:37', 'opF', null, null, null, null, null, 'checked', null, null, null);
INSERT INTO `answer` VALUES ('1663', '1', '1', 'radio', '1143', '2018-08-03 14:06:08', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1664', '1', '2', 'radio', '1143', '2018-08-03 14:06:08', 'opC', null, null, 'checked', null, null, null, null, null, null);
INSERT INTO `answer` VALUES ('1665', '1', '3', 'check', '1143', '2018-08-03 14:06:08', 'opD', null, null, null, 'checked', null, null, null, null, null);
INSERT INTO `answer` VALUES ('1666', '1', '4', 'qa', '1143', '2018-08-03 14:06:08', '好没建议', null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for navbar
-- ----------------------------
DROP TABLE IF EXISTS `navbar`;
CREATE TABLE `navbar` (
  `id` int(11) NOT NULL,
  `text` varchar(20) NOT NULL,
  `state` varchar(10) NOT NULL,
  `iconCls` varchar(20) NOT NULL,
  `url` varchar(50) NOT NULL,
  `nid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of navbar
-- ----------------------------
INSERT INTO `navbar` VALUES ('9', '问卷发布与回收', 'open', 'icon-publish', 'surveypublish', '2');
INSERT INTO `navbar` VALUES ('10', '用户管理', 'open', 'icon-user2', 'usermanage', '4');
INSERT INTO `navbar` VALUES ('1', '问卷中心', 'closed', 'icon-large-shapes', '', '0');
INSERT INTO `navbar` VALUES ('2', '问卷发布与回收', 'closed', 'icon-publish', '', '0');
INSERT INTO `navbar` VALUES ('3', '问卷统计', 'closed', 'icon-surveyspss', '', '0');
INSERT INTO `navbar` VALUES ('4', '用户管理', 'closed', 'icon-user', '', '0');
INSERT INTO `navbar` VALUES ('5', '问卷管理', 'open', 'icon-surveymanage', 'surveymanage', '1');
INSERT INTO `navbar` VALUES ('6', '问卷审核', 'open', 'icon-surveycheck', 'surveycheck', '1');
INSERT INTO `navbar` VALUES ('7', '用户答卷', 'open', 'icon-useranswer', 'answermanage', '3');
INSERT INTO `navbar` VALUES ('8', '答卷分析', 'open', 'icon-surveyanalysis', 'surveyanalysis', '3');

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext NOT NULL,
  `description` longtext,
  `surveyid` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `opA` longtext,
  `opB` longtext,
  `opC` longtext,
  `opD` longtext,
  `opE` longtext,
  `opF` longtext,
  `opG` longtext,
  `opH` longtext,
  `opI` longtext,
  PRIMARY KEY (`id`),
  KEY `surveyid` (`surveyid`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`surveyid`) REFERENCES `survey` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2114 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of question
-- ----------------------------
INSERT INTO `question` VALUES ('9', '你经常使用手机吗', '', '136', '1', '单选', '是的', '不是', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('10', '您比较在意手机的什么功能？', '', '136', '2', '多选', '音乐', '拍照', '通信', '游戏', '', '', '', '', '');
INSERT INTO `question` VALUES ('19', '弄哈', '惊世毒妃', '132', '1', '单选', '电饭锅', '电饭锅刚好', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('20', '#丰东股份', '鬼地方个', '132', '2', '单选', '电饭锅', '客户', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('24', '电饭锅#犯过的', '苟富贵', '132', '3', '填空', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('53', '您对手机的期望或建议', '', '136', '3', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('54', '你期望的价格#', '', '136', '4', '填空', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1057', '您对课程总体的感觉', '', '1143', '1', '单选', '非常好', '好', '一般', '差', '非常差', '', '', '', '');
INSERT INTO `question` VALUES ('1058', '您对英语课的感觉', '', '1143', '2', '单选', '喜欢', '凑活', '不喜欢', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1059', '最新换的课程', '', '1144', '1', '单选', '英语', '历史', '数学', '芜劣', 'C语言', 'Java', '网络工程', '', '');
INSERT INTO `question` VALUES ('1067', '你是考研还是找工作？', '', '125', '1', '单选', '考研', '找工作', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1068', '你的心仪的工作？', '', '125', '2', '多选', '设计师', '管理人员', '程序员', '人民教师', '国家公务员', '', '', '', '');
INSERT INTO `question` VALUES ('1069', '你对自己的现状满意吗？', '', '125', '3', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1070', '你期望的月薪是#', '', '125', '4', '填空', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1071', '你是否后悔来到理工', '', '141', '1', '单选', '是的', '不是', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1072', '你喜欢理工的哪个建筑', '', '141', '2', '多选', '图书馆', '体院馆', '宿舍公寓', '教学楼', '', '', '', '', '');
INSERT INTO `question` VALUES ('1073', '你怎么评价母校？谈谈您的建议', '', '141', '3', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1074', '你最喜爱的老师是#', '', '141', '4', '填空', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1075', '谈谈你在大学最开心的事', '', '141', '5', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1077', '你觉得学校的教学质量如何？', '', '141', '6', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1078', '你喜欢以下哪几种课程', '', '1143', '3', '多选', '物理', '数学', '政治', '历史', '英语', '', '', '', '');
INSERT INTO `question` VALUES ('1079', '您对我们课程设置的建议？', '', '1143', '4', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('1080', '您最喜欢上谁的课', '', '1146', '1', '单选', '于青', '孙俊青', '唐树刚', '其他', '', '', '', '', '');
INSERT INTO `question` VALUES ('2081', '您是应届毕业生吗？', '', '2147', '1', '单选', '是', '否', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2082', '您的性别？', '', '2147', '2', '单选', '男', '女', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2083', '您的学历？', '', '2147', '3', '单选', '大专', '本科', '研究生', '其他', '', '', '', '', '');
INSERT INTO `question` VALUES ('2084', '您对未来的就业有了明确的方向了吗？', '', '2147', '4', '单选', '有', '有目标，但不明确', '没有', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2085', '您会从事所选专业吗？', '', '2147', '5', '单选', '会', '不会', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2086', '如果专业不对口，你会选择跳槽吗？', '', '2147', '6', '单选', '会', '不会', '不知道', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2087', '你会选择就业还是继续学习？', '', '2147', '7', '单选', '就业', '继续学业', '自主创业', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2088', '你会选择留在所在城市还是？', '', '2147', '8', '单选', '回家乡就业', '留在所在城市', '其他', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2089', '你对工资（一个月）的要求是？', '', '2147', '9', '单选', '2500-3500', '3500-4500', '4500-5500', '5500以上', '', '', '', '', '');
INSERT INTO `question` VALUES ('2090', '你找工作考虑的因素？', '', '2147', '10', '多选', '薪酬和福利', '工作地点', '专业对口', '个人发展机会', '工作环境', '家长意见', '性格和兴趣', '稳定性', '其他');
INSERT INTO `question` VALUES ('2091', '你对自己的想从事职业了解吗？', '', '2147', '11', '单选', '非常清楚的了解', '了解', '不太了解', '一点都不了解', '', '', '', '', '');
INSERT INTO `question` VALUES ('2092', '你为毕业后的就业做过哪些准备？', '', '2147', '12', '多选', '通过兼职或者就业获取工作经验', '积极参加校内外的活动', '参加就业指导课程', '努力学好专业知识', '', '', '', '', '');
INSERT INTO `question` VALUES ('2093', '您对本课程所使用的教材是否满意？', '', '2148', '1', '单选', '很满意', '满意', '一般', '不满意', '', '', '', '', '');
INSERT INTO `question` VALUES ('2094', '你认为本科场提供的教学辅助资料？', '', '2148', '2', '单选', '足够', '较多', '一般', '太少', '', '', '', '', '');
INSERT INTO `question` VALUES ('2095', '你认为本课程的实际教学内容', '', '2148', '3', '单选', '很丰富', '较丰富', '一般', '很差', '', '', '', '', '');
INSERT INTO `question` VALUES ('2096', '你认为课程的理论教学和实践教学的比例如何？', '', '2148', '4', '单选', '合理', '不合理，理论课应该加大比例', '不合理，实践课应该加大比例', '其他', '', '', '', '', '');
INSERT INTO `question` VALUES ('2097', '你认为任课老师是否因材施教，注重对学生学习方法的引导', '', '2148', '5', '单选', '经常', '偶尔', '一般', '从不', '', '', '', '', '');
INSERT INTO `question` VALUES ('2098', '你认为该课程的上课气氛如何', '', '2148', '6', '单选', '很活跃', '比较活跃', '气氛比较闷', '总体一般', '', '', '', '', '');
INSERT INTO `question` VALUES ('2099', '学习了本门课，你的收获如何？', '', '2148', '7', '单选', '很大', '较大', '一般', '很小', '', '', '', '', '');
INSERT INTO `question` VALUES ('2100', '在教学改革中，你认为应该改进的最突出的问题是什么？请谈谈谈你的看法？', '', '2148', '8', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2101', '任课老师是否在教学中保持精神饱满，仪表端正，声音洪亮？', '', '2149', '1', '单选', '非常好', '较好', '一般', '较差', '', '', '', '', '');
INSERT INTO `question` VALUES ('2102', '任课老师在严谨治学，言传身教方面做得', '', '2149', '2', '单选', '非常好', '较好', '一般', '较差', '', '', '', '', '');
INSERT INTO `question` VALUES ('2103', '任课老师的教学组织能力？', '', '2149', '3', '单选', '非常好', '较好', '一般', '较差', '', '', '', '', '');
INSERT INTO `question` VALUES ('2104', '任课老师的专业知识方面？', '', '2149', '4', '单选', '非常好', '较好', '一般', '较差', '', '', '', '', '');
INSERT INTO `question` VALUES ('2105', '你认为任课教师在及时更新教学内容，介绍学科新动态、新发展、理论联系实际方面做得', '', '2149', '5', '单选', '非常好', '较好', '一般', '较差', '', '', '', '', '');
INSERT INTO `question` VALUES ('2106', '你认为任课教师在板书设计方面，能否做到讲写相宜，条理清晰，准确美观？', '', '2149', '6', '单选', '非常好', '较好', '一般', '较差', '', '', '', '', '');
INSERT INTO `question` VALUES ('2107', '你认为在课堂上，任课老师与同学的互动情况？', '', '2149', '7', '单选', '经常', '较多', '一般', '较少', '', '', '', '', '');
INSERT INTO `question` VALUES ('2108', '你对任课老师有什么建设性的要求或建议？请简要发表您的看法？', '', '2149', '8', '问答', '', '', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2109', '性别', '', '2150', '1', '单选', '男', '女', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2110', '测试数据库迁移', '', '132', '4', '单选', '成功', '失败', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2111', '测试', '', '132', '5', '单选', '成功', '成功', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2112', '会员卡', 'rhyj8', '2151', '1', '单选', '鼎折覆餗', 'jks个', '', '', '', '', '', '', '');
INSERT INTO `question` VALUES ('2113', '水电费', '更好', '2151', '2', '单选', '公交卡', '豆腐干哥哥', '电饭锅凤凰健康', '', '', '', '', '', '');

-- ----------------------------
-- Table structure for survey
-- ----------------------------
DROP TABLE IF EXISTS `survey`;
CREATE TABLE `survey` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext NOT NULL,
  `description` longtext NOT NULL,
  `createtime` datetime NOT NULL,
  `isable` varchar(50) NOT NULL,
  `publish` varchar(50) NOT NULL DEFAULT '已发布',
  `image` varchar(255) DEFAULT 'default.jpg',
  `userid` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `hit` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `survey_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2152 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of survey
-- ----------------------------
INSERT INTO `survey` VALUES ('125', '天津理工大学毕业生就业情况调查', '了解我校毕业生就业状况', '2017-05-03 12:53:00', '启用', '已发布', 'default.jpg', '3', '就业情况', '0');
INSERT INTO `survey` VALUES ('129', '天津理工大学英语四级考试报名', '统计报名人数的', '2017-05-03 12:49:00', '启用', '已发布', 'default.jpg', '1', '其他方面', '0');
INSERT INTO `survey` VALUES ('130', '信息与计算科学一班班委选举', '统计班委选举票数', '2017-05-03 12:52:00', '启用', '已发布', 'default.jpg', '1', '其他方面', '0');
INSERT INTO `survey` VALUES ('131', '360手机评测', '关于360最新手机的评测', '2017-05-03 12:46:00', '启用', '已回收', 'default.jpg', '1', '其他方面', '0');
INSERT INTO `survey` VALUES ('132', '优秀学生干部评选', '选取优秀的学生干部', '2018-08-02 11:04:30', '启用', '已发布', 'default.jpg', '1', '其他方面', '0');
INSERT INTO `survey` VALUES ('136', '手机市场需求调查问卷', '您对手机有什么需求呢，喜欢什么样子手机呢，为了了解您的需求，请您协助我们完成调查！', '2017-04-28 18:01:00', '启用', '已回收', 'default.jpg', '1', '其他方面', '0');
INSERT INTO `survey` VALUES ('139', '天津理工大学生活质量调查', '生活质量调查', '2017-05-09 12:25:00', '启用', '已发布', 'default.jpg', '1', '教学评价', '0');
INSERT INTO `survey` VALUES ('141', '天津理工毕业生对母校的评价', '了解毕业生的心声', '2017-05-20 17:17:00', '启用', '已发布', 'default.jpg', '3', '教学评价', '0');
INSERT INTO `survey` VALUES ('1143', '天津理工大学对课程的满意度调查', '了解毕业生对课程的满意程度', '2017-05-22 13:06:00', '启用', '已发布', 'default.jpg', '1', '课程评价', '1');
INSERT INTO `survey` VALUES ('1144', '各界学生最喜欢的课程', '了解学生最爱的课程', '2017-05-22 13:06:00', '启用', '已发布', 'default.jpg', '1', '课程评价', '6');
INSERT INTO `survey` VALUES ('1146', '毕业生对课教学的评价', '了解毕业生对课教学的评价', '2017-05-22 13:09:00', '启用', '已发布', 'default.jpg', '1', '教学评价', '0');
INSERT INTO `survey` VALUES ('2147', '关于应届毕业生就业状况的调查', '亲爱的同学您好，我们正在进行一项届毕业生就业的调查，想请您用几分钟填写一份问卷，感谢您的帮助！', '2017-05-26 09:15:00', '启用', '已发布', 'default.jpg', '1', '就业情况', '35');
INSERT INTO `survey` VALUES ('2148', '关于数学分析科目的评价', '为了了解学生对数学分析这门课程的评价和建议，为教学改革提供依据，我们进行一次调查，感谢您的支持！', '2017-05-26 09:11:00', '启用', '已发布', 'default.jpg', '1', '课程评价', '10');
INSERT INTO `survey` VALUES ('2149', '教师教学质量评价调查问卷', '本次问卷目的在于了解同学们对老师教学的意见与建议，感谢您的配合！', '2017-05-26 09:38:00', '启用', '已发布', 'default.jpg', '1', '教学评价', '12');
INSERT INTO `survey` VALUES ('2150', '测试问卷', '测试', '2018-04-25 22:27:00', '启用', '已发布', '6402018_04_25_22_27_20_528.jpg', '1', '课程评价', '2');
INSERT INTO `survey` VALUES ('2151', '你居然敢', '挂号费及', '2018-08-03 13:59:24', '启用', '可编辑', '2726e1008de432e46be2956b9079a7bd2018_08_03_20_19_19_461.jpg', '1', '课程评价', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studentid` int(11) NOT NULL DEFAULT '20135669',
  `name` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `registertime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `auth` varchar(100) DEFAULT '',
  `tel` varchar(20) DEFAULT '',
  `email` varchar(50) DEFAULT '',
  `sex` varchar(2) DEFAULT '',
  `graduation` varchar(4) NOT NULL DEFAULT '2013',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1112 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '20135669', 'zwh', '123456', '2017-06-03 09:29:00', '问卷发布与回收,问卷管理,问卷审核,用户答卷,答卷分析,用户管理', '13102103127', '2451222498@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('2', '20135673', '20135673', '20135673', '2017-06-03 09:29:00', null, '13102103127', '2451222502@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('3', '20135666', '20135666', '20135666', '2017-06-03 09:29:00', null, '13102103127', '2451222495@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('9', '20135668', '20135668', '20135668', '2017-06-03 09:29:00', null, '13102103127', '2451222497@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('10', '20135667', '20135667', '20135667', '2017-06-03 09:29:00', null, '13102103127', '2451222496@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('36', '20135700', '20135700', '20135700', '2017-05-11 14:19:00', '', '12644254586', '1231@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('38', '20140001', '20140001', '20140001', '2017-05-14 13:11:00', '', '12344569987', '134232323@qq.com', '男', '2018');
INSERT INTO `user` VALUES ('39', '20140002', '20140002', '20140002', '2017-05-14 13:12:00', '', '12345687884', '123456456@qq.com', '男', '2018');
INSERT INTO `user` VALUES ('40', '20140003', '20140003', '20140003', '2017-05-14 13:14:00', '', '12345689945', '212154464@qq.com', '男', '2018');
INSERT INTO `user` VALUES ('41', '20140004', '20140004', '20140004', '2017-05-14 13:15:00', '', '12313215123', '121234511@qq.com', '男', '2018');
INSERT INTO `user` VALUES ('44', '20140005', '20140005', '20140005', '2017-05-14 13:15:00', '', '12356659865', '123154564@qq.com', '男', '2018');
INSERT INTO `user` VALUES ('45', '20140006', '20140006', '20140006', '2017-05-14 13:22:00', '', '12356877426', '251234544@qq.com', '男', '2018');
INSERT INTO `user` VALUES ('48', '20120001', '20120001', '20120001', '2017-05-14 13:23:00', '', '12345678996', '451231555@qq.com', '男', '2016');
INSERT INTO `user` VALUES ('49', '20120002', '20120002', '20120002', '2017-05-14 13:23:00', '', '56599123113', '569426494@qq.com', '男', '2016');
INSERT INTO `user` VALUES ('50', '20120003', '20120003', '20120003', '2017-05-14 13:24:00', '', '22344989454', '123154499@qq.com', '男', '2016');
INSERT INTO `user` VALUES ('51', '20120004', '20120004', '20120004', '2017-05-14 13:25:00', '', '12345679994', '126497875@qq.com', '男', '2016');
INSERT INTO `user` VALUES ('52', '20120005', '20120005', '20120005', '2017-05-14 13:26:00', '', '12345645648', '263484654@qq.com', '男', '2016');
INSERT INTO `user` VALUES ('53', '20120006', '20120006', '20120006', '2017-05-14 13:27:00', '', '12345649699', '212156455@qq.com', '男', '2016');
INSERT INTO `user` VALUES ('56', '20120007', '20120007', '20120007', '2017-05-14 13:28:00', '', '12316484649', '123164589@qq.com', '男', '2016');
INSERT INTO `user` VALUES ('1057', '20130001', '李小龙', '123456', '2017-05-22 20:41:00', null, null, null, '女', '2017');
INSERT INTO `user` VALUES ('1072', '20110001', '20110001', '20110001', '2017-05-23 08:15:00', '', '12155566662', '2312315@qq.com', '男', '2015');
INSERT INTO `user` VALUES ('1073', '20110002', '20110002', '20110002', '2017-05-23 08:15:00', '', '12155566662', '2312315@qq.com', '男', '2015');
INSERT INTO `user` VALUES ('1074', '20110003', '20110003', '20110003', '2017-05-23 08:15:00', '', '12155566662', '2312315@qq.com', '男', '2015');
INSERT INTO `user` VALUES ('1075', '20110004', '20110004', '20110004', '2017-05-23 08:15:00', '', '12155566662', '', '男', '2015');
INSERT INTO `user` VALUES ('1076', '20110005', '20110005', '20110005', '2017-05-23 08:15:00', '', '12155566662', '2312315@qq.com', '男', '2015');
INSERT INTO `user` VALUES ('1077', '20110006', '20110006', '20110006', '2017-05-23 08:15:00', '', '', '', '男', '2015');
INSERT INTO `user` VALUES ('1078', '20110007', '20110007', '20110007', '2017-05-23 08:15:00', '', '', '', '男', '2015');
INSERT INTO `user` VALUES ('1079', '20135663', '20135663', '20135663', '2017-06-03 09:29:00', null, '13102103127', '2451222492@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1080', '20135662', '20135662', '20135662', '2017-06-03 09:29:00', null, '13102103127', '2451222491@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1081', '20135649', '20135649', '20135649', '2017-06-03 09:29:00', '', '13102103127', '2451222478@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1082', '20135650', '20135650', '20135650', '2017-06-03 09:29:00', '', '13102103127', '2451222479@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1083', '20135651', '20135651', '20135651', '2017-06-03 09:29:00', '', '13102103127', '2451222480@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1084', '20135652', '20135652', '20135652', '2017-06-03 09:29:00', '', '13102103127', '2451222481@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1085', '20135653', '20135653', '20135653', '2017-06-03 09:29:00', '', '13102103127', '2451222482@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1086', '20135654', '20135654', '20135654', '2017-06-03 09:29:00', '', '13102103127', '2451222483@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1087', '20135655', '20135655', '20135655', '2017-06-03 09:29:00', '', '13102103127', '2451222484@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1088', '20135656', '20135656', '20135656', '2017-06-03 09:29:00', '', '13102103127', '2451222485@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1089', '20135657', '20135657', '20135657', '2017-06-03 09:29:00', '', '13102103127', '2451222486@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1090', '20135658', '20135658', '20135658', '2017-06-03 09:29:00', '', '13102103127', '2451222487@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1091', '20135659', '20135659', '20135659', '2017-06-03 09:29:00', '', '13102103127', '2451222488@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1092', '20135660', '20135660', '20135660', '2017-06-03 09:29:00', '', '13102103127', '2451222489@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1093', '20135661', '20135661', '20135661', '2017-06-03 09:29:00', '', '13102103127', '2451222490@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1094', '20135664', '20135664', '20135664', '2017-06-03 09:29:00', '', '13102103127', '2451222493@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1095', '20135665', '20135665', '20135665', '2017-06-03 09:29:00', '', '13102103127', '2451222494@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1096', '20135670', '20135670', '20135670', '2017-06-03 09:29:00', '', '13102103127', '2451222499@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1097', '20135671', '20135671', '20135671', '2017-06-03 09:29:00', '', '13102103127', '2451222500@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1098', '20135672', '20135672', '20135672', '2017-06-03 09:29:00', '', '13102103127', '2451222501@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1099', '20135674', '20135674', '20135674', '2017-06-03 09:29:00', '', '13102103127', '2451222503@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1100', '20135675', '20135675', '20135675', '2017-06-03 09:29:00', '', '13102103127', '2451222504@qq.com', '男', '2017');
INSERT INTO `user` VALUES ('1101', '20135676', '20135676', '20135676', '2017-06-03 09:29:00', '', '13102103127', '2451222505@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1102', '20135677', '20135677', '20135677', '2017-06-03 09:29:00', '', '13102103127', '2451222506@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1103', '20135678', '20135678', '20135678', '2017-06-03 09:29:00', '', '13102103127', '2451222507@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1104', '20135679', '20135679', '20135679', '2017-06-03 09:29:00', '', '13102103127', '2451222508@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1105', '20135680', '20135680', '20135680', '2017-06-03 09:29:00', '', '13102103127', '2451222509@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1106', '20135681', '20135681', '20135681', '2017-06-03 09:29:00', '', '13102103127', '2451222510@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1107', '20135682', '20135682', '20135682', '2017-06-03 09:29:00', '', '13102103127', '2451222511@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1108', '20135683', '20135683', '20135683', '2017-06-03 09:29:00', '', '13102103127', '2451222512@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1109', '20135684', '20135684', '20135684', '2017-06-03 09:29:00', '', '13102103127', '2451222513@qq.com', '女', '2017');
INSERT INTO `user` VALUES ('1110', '20135685', '20135685', '20135685', '2017-06-03 09:29:00', '', '13102103127', '2451222514@qq.com', '女', '2017');
