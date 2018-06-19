/*
Navicat MySQL Data Transfer

Source Server         : webserver portable
Source Server Version : 50527
Source Host           : localhost:3330
Source Database       : scvs

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2015-12-29 11:31:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `registro_servicio`
-- ----------------------------
DROP TABLE IF EXISTS `registro_servicio`;
CREATE TABLE `registro_servicio` (
  `id_reg_serv` int(11) NOT NULL AUTO_INCREMENT,
  `precio` decimal(10,2) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `id_serv` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `cant` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_reg_serv`),
  KEY `Refarea_venta68` (`id_area`) USING BTREE,
  KEY `Refservicio69` (`id_serv`) USING BTREE,
  KEY `Refusuarios74` (`uid`) USING BTREE,
  CONSTRAINT `registro_servicio_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_venta` (`id_area`),
  CONSTRAINT `registro_servicio_ibfk_2` FOREIGN KEY (`id_serv`) REFERENCES `servicio` (`id_serv`),
  CONSTRAINT `registro_servicio_ibfk_3` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registro_servicio
-- ----------------------------
