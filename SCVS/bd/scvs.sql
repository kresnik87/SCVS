/*
Navicat MySQL Data Transfer

Source Server         : portable
Source Server Version : 50527
Source Host           : localhost:3330
Source Database       : scvs

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2016-02-24 10:48:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `almacen`
-- ----------------------------
DROP TABLE IF EXISTS `almacen`;
CREATE TABLE `almacen` (
  `id_alm` int(11) NOT NULL AUTO_INCREMENT,
  `nomb_alm` text,
  PRIMARY KEY (`id_alm`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of almacen
-- ----------------------------
INSERT INTO `almacen` VALUES ('1', 'Almacen Central');

-- ----------------------------
-- Table structure for `area_venta`
-- ----------------------------
DROP TABLE IF EXISTS `area_venta`;
CREATE TABLE `area_venta` (
  `id_area` int(11) NOT NULL AUTO_INCREMENT,
  `nomb_area` text,
  PRIMARY KEY (`id_area`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of area_venta
-- ----------------------------
INSERT INTO `area_venta` VALUES ('3', 'Tecno-One Tienda');
INSERT INTO `area_venta` VALUES ('4', 'Esmeralda-Liusbel');
INSERT INTO `area_venta` VALUES ('5', 'Tecno-One Taller');
INSERT INTO `area_venta` VALUES ('6', 'Andy-Camaguey');

-- ----------------------------
-- Table structure for `componentes_rep`
-- ----------------------------
DROP TABLE IF EXISTS `componentes_rep`;
CREATE TABLE `componentes_rep` (
  `id_prod` int(11) NOT NULL,
  `id_tipo_prod` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `Reftipo_producto45` (`id_tipo_prod`) USING BTREE,
  CONSTRAINT `componentes_rep_ibfk_1` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `componentes_rep_ibfk_2` FOREIGN KEY (`id_tipo_prod`) REFERENCES `tipo_producto` (`id_tipo_prod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of componentes_rep
-- ----------------------------

-- ----------------------------
-- Table structure for `estado_prod`
-- ----------------------------
DROP TABLE IF EXISTS `estado_prod`;
CREATE TABLE `estado_prod` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `estado` text,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of estado_prod
-- ----------------------------
INSERT INTO `estado_prod` VALUES ('1', 'Perfecto Estado');
INSERT INTO `estado_prod` VALUES ('2', 'Buen estado');
INSERT INTO `estado_prod` VALUES ('3', 'Regular');
INSERT INTO `estado_prod` VALUES ('4', 'Mal Estado');

-- ----------------------------
-- Table structure for `inventario_alm`
-- ----------------------------
DROP TABLE IF EXISTS `inventario_alm`;
CREATE TABLE `inventario_alm` (
  `id_inv_alm` int(11) NOT NULL AUTO_INCREMENT,
  `p_costo` decimal(10,2) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `id_alm` int(11) DEFAULT NULL,
  `id_estado` int(11) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_inv_alm`),
  KEY `Refalmacen48` (`id_alm`) USING BTREE,
  KEY `Refestado_prod50` (`id_estado`) USING BTREE,
  KEY `Refproducto58` (`id_prod`) USING BTREE,
  CONSTRAINT `inventario_alm_ibfk_1` FOREIGN KEY (`id_alm`) REFERENCES `almacen` (`id_alm`),
  CONSTRAINT `inventario_alm_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado_prod` (`id_estado`),
  CONSTRAINT `inventario_alm_ibfk_3` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`)
) ENGINE=InnoDB AUTO_INCREMENT=309 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of inventario_alm
-- ----------------------------
INSERT INTO `inventario_alm` VALUES ('5', '3.00', '6.00', '2', '1', '1', '79');
INSERT INTO `inventario_alm` VALUES ('6', '4.00', '24.00', '6', '1', '1', '80');
INSERT INTO `inventario_alm` VALUES ('22', '5.00', '30.00', '6', '1', '1', '96');
INSERT INTO `inventario_alm` VALUES ('86', '25.00', '25.00', '1', '1', '1', '159');
INSERT INTO `inventario_alm` VALUES ('87', '4.00', '16.00', '4', '1', '1', '160');
INSERT INTO `inventario_alm` VALUES ('89', '15.00', '30.00', '2', '1', '1', '162');
INSERT INTO `inventario_alm` VALUES ('90', '7.00', '21.00', '3', '1', '1', '163');
INSERT INTO `inventario_alm` VALUES ('98', '4.00', '8.00', '2', '1', '1', '173');
INSERT INTO `inventario_alm` VALUES ('101', '4.00', '40.00', '10', '1', '1', '176');
INSERT INTO `inventario_alm` VALUES ('104', '4.00', '32.00', '8', '1', '1', '178');
INSERT INTO `inventario_alm` VALUES ('105', '4.00', '16.00', '4', '1', '1', '179');
INSERT INTO `inventario_alm` VALUES ('107', '125.00', '375.00', '3', '1', '1', '124');
INSERT INTO `inventario_alm` VALUES ('113', '110.00', '220.00', '2', '1', '1', '181');
INSERT INTO `inventario_alm` VALUES ('117', '110.00', '110.00', '1', '1', '1', '130');
INSERT INTO `inventario_alm` VALUES ('120', '65.00', '195.00', '3', '1', '1', '127');
INSERT INTO `inventario_alm` VALUES ('123', '9.80', '107.80', '11', '1', '1', '153');
INSERT INTO `inventario_alm` VALUES ('127', '10.00', '10.00', '1', '1', '1', '185');
INSERT INTO `inventario_alm` VALUES ('129', '6.00', '12.00', '2', '1', '1', '81');
INSERT INTO `inventario_alm` VALUES ('131', '4.00', '12.00', '3', '1', '1', '97');
INSERT INTO `inventario_alm` VALUES ('137', '2.00', '10.00', '5', '1', '1', '137');
INSERT INTO `inventario_alm` VALUES ('138', '2.00', '12.00', '6', '1', '1', '138');
INSERT INTO `inventario_alm` VALUES ('140', '2.00', '2.00', '1', '1', '1', '214');
INSERT INTO `inventario_alm` VALUES ('141', '8.00', '24.00', '3', '1', '1', '41');
INSERT INTO `inventario_alm` VALUES ('142', '2.00', '4.00', '2', '1', '1', '215');
INSERT INTO `inventario_alm` VALUES ('143', '4.00', '28.00', '7', '1', '1', '64');
INSERT INTO `inventario_alm` VALUES ('144', '7.00', '35.00', '5', '1', '1', '216');
INSERT INTO `inventario_alm` VALUES ('145', '3.00', '9.00', '3', '1', '1', '217');
INSERT INTO `inventario_alm` VALUES ('146', '2.00', '12.00', '6', '1', '1', '35');
INSERT INTO `inventario_alm` VALUES ('162', '105.00', '105.00', '1', '1', '1', '183');
INSERT INTO `inventario_alm` VALUES ('164', '5.00', '15.00', '3', '1', '1', '236');
INSERT INTO `inventario_alm` VALUES ('165', '8.00', '16.00', '2', '1', '1', '237');
INSERT INTO `inventario_alm` VALUES ('167', '15.00', '75.00', '5', '1', '1', '238');
INSERT INTO `inventario_alm` VALUES ('168', '2.00', '48.00', '24', '1', '1', '156');
INSERT INTO `inventario_alm` VALUES ('169', '2.00', '8.00', '4', '1', '1', '149');
INSERT INTO `inventario_alm` VALUES ('171', '2.00', '4.00', '2', '1', '1', '139');
INSERT INTO `inventario_alm` VALUES ('174', '2.00', '26.00', '13', '1', '1', '151');
INSERT INTO `inventario_alm` VALUES ('175', '2.00', '6.00', '3', '1', '1', '146');
INSERT INTO `inventario_alm` VALUES ('176', '2.00', '24.00', '12', '1', '1', '147');
INSERT INTO `inventario_alm` VALUES ('177', '2.00', '4.00', '2', '1', '1', '148');
INSERT INTO `inventario_alm` VALUES ('180', '4.00', '40.00', '10', '1', '1', '89');
INSERT INTO `inventario_alm` VALUES ('181', '4.00', '8.00', '2', '1', '1', '86');
INSERT INTO `inventario_alm` VALUES ('182', '6.00', '12.00', '2', '1', '1', '84');
INSERT INTO `inventario_alm` VALUES ('183', '6.00', '60.00', '10', '1', '1', '92');
INSERT INTO `inventario_alm` VALUES ('185', '5.00', '10.00', '2', '1', '1', '135');
INSERT INTO `inventario_alm` VALUES ('186', '3.00', '9.00', '3', '1', '1', '100');
INSERT INTO `inventario_alm` VALUES ('196', '3.00', '12.00', '4', '1', '1', '11');
INSERT INTO `inventario_alm` VALUES ('200', '4.00', '4.00', '1', '1', '1', '245');
INSERT INTO `inventario_alm` VALUES ('201', '3.00', '15.00', '5', '1', '1', '92');
INSERT INTO `inventario_alm` VALUES ('205', '5.00', '150.00', '30', '1', '1', '104');
INSERT INTO `inventario_alm` VALUES ('208', '4.00', '28.00', '7', '1', '1', '175');
INSERT INTO `inventario_alm` VALUES ('211', '4.00', '76.00', '19', '1', '1', '72');
INSERT INTO `inventario_alm` VALUES ('212', '4.00', '24.00', '6', '1', '1', '172');
INSERT INTO `inventario_alm` VALUES ('215', '4.00', '8.00', '2', '1', '1', '170');
INSERT INTO `inventario_alm` VALUES ('216', '4.00', '4.00', '1', '1', '1', '169');
INSERT INTO `inventario_alm` VALUES ('217', '4.00', '4.00', '1', '1', '1', '197');
INSERT INTO `inventario_alm` VALUES ('218', '4.00', '4.00', '1', '1', '1', '196');
INSERT INTO `inventario_alm` VALUES ('219', '4.00', '4.00', '1', '1', '1', '190');
INSERT INTO `inventario_alm` VALUES ('220', '4.00', '4.00', '1', '1', '1', '191');
INSERT INTO `inventario_alm` VALUES ('221', '4.00', '8.00', '2', '1', '1', '187');
INSERT INTO `inventario_alm` VALUES ('223', '4.00', '4.00', '1', '1', '1', '198');
INSERT INTO `inventario_alm` VALUES ('224', '4.00', '8.00', '2', '1', '1', '199');
INSERT INTO `inventario_alm` VALUES ('225', '4.00', '4.00', '1', '1', '1', '200');
INSERT INTO `inventario_alm` VALUES ('226', '4.00', '4.00', '1', '1', '1', '203');
INSERT INTO `inventario_alm` VALUES ('227', '4.00', '4.00', '1', '1', '1', '204');
INSERT INTO `inventario_alm` VALUES ('228', '4.00', '4.00', '1', '1', '1', '202');
INSERT INTO `inventario_alm` VALUES ('229', '4.00', '4.00', '1', '1', '1', '201');
INSERT INTO `inventario_alm` VALUES ('233', '4.00', '4.00', '1', '1', '1', '194');
INSERT INTO `inventario_alm` VALUES ('234', '4.00', '4.00', '1', '1', '1', '195');
INSERT INTO `inventario_alm` VALUES ('235', '4.00', '4.00', '1', '1', '1', '193');
INSERT INTO `inventario_alm` VALUES ('236', '4.00', '4.00', '1', '1', '1', '192');
INSERT INTO `inventario_alm` VALUES ('237', '4.00', '4.00', '1', '1', '1', '189');
INSERT INTO `inventario_alm` VALUES ('238', '4.00', '4.00', '1', '1', '1', '188');
INSERT INTO `inventario_alm` VALUES ('239', '4.00', '32.00', '8', '1', '1', '252');
INSERT INTO `inventario_alm` VALUES ('240', '4.00', '4.00', '1', '1', '1', '253');
INSERT INTO `inventario_alm` VALUES ('244', '2.50', '5.00', '2', '1', '1', '257');
INSERT INTO `inventario_alm` VALUES ('246', '105.00', '210.00', '2', '1', '1', '184');
INSERT INTO `inventario_alm` VALUES ('247', '105.00', '210.00', '2', '1', '1', '184');
INSERT INTO `inventario_alm` VALUES ('251', '1.80', '18.00', '10', '1', '1', '149');
INSERT INTO `inventario_alm` VALUES ('252', '95.00', '190.00', '2', '1', '1', '115');
INSERT INTO `inventario_alm` VALUES ('254', '67.00', '67.00', '1', '1', '1', '261');
INSERT INTO `inventario_alm` VALUES ('258', '110.00', '110.00', '1', '1', '1', '181');
INSERT INTO `inventario_alm` VALUES ('261', '4.00', '116.00', '29', '1', '1', '82');
INSERT INTO `inventario_alm` VALUES ('262', '4.00', '12.00', '3', '1', '1', '91');
INSERT INTO `inventario_alm` VALUES ('263', '6.00', '12.00', '2', '1', '1', '242');
INSERT INTO `inventario_alm` VALUES ('267', '4.00', '4.00', '1', '1', '1', '246');
INSERT INTO `inventario_alm` VALUES ('268', '2.80', '224.00', '80', '1', '1', '10');
INSERT INTO `inventario_alm` VALUES ('285', '110.00', '220.00', '2', '1', '1', '125');
INSERT INTO `inventario_alm` VALUES ('287', '100.00', '900.00', '9', '1', '1', '131');
INSERT INTO `inventario_alm` VALUES ('289', '115.00', '805.00', '7', '1', '1', '121');
INSERT INTO `inventario_alm` VALUES ('290', '105.00', '735.00', '7', '1', '1', '184');
INSERT INTO `inventario_alm` VALUES ('291', '110.00', '440.00', '4', '1', '1', '181');
INSERT INTO `inventario_alm` VALUES ('292', '110.00', '220.00', '2', '1', '1', '130');
INSERT INTO `inventario_alm` VALUES ('293', '65.00', '65.00', '1', '1', '1', '127');
INSERT INTO `inventario_alm` VALUES ('294', '1.70', '374.00', '220', '1', '1', '155');
INSERT INTO `inventario_alm` VALUES ('295', '5.00', '100.00', '20', '1', '1', '152');
INSERT INTO `inventario_alm` VALUES ('296', '2.70', '567.00', '210', '1', '1', '10');
INSERT INTO `inventario_alm` VALUES ('298', '105.00', '105.00', '1', '1', '1', '183');
INSERT INTO `inventario_alm` VALUES ('300', '95.00', '665.00', '7', '1', '1', '115');
INSERT INTO `inventario_alm` VALUES ('301', '95.00', '2375.00', '25', '1', '1', '133');
INSERT INTO `inventario_alm` VALUES ('302', '6.00', '48.00', '8', '1', '1', '275');
INSERT INTO `inventario_alm` VALUES ('303', '0.00', '0.00', '3', '1', '1', '276');
INSERT INTO `inventario_alm` VALUES ('306', '1.70', '153.00', '90', '1', '1', '155');
INSERT INTO `inventario_alm` VALUES ('308', '100.00', '100.00', '1', '1', '1', '273');

-- ----------------------------
-- Table structure for `inventario_area`
-- ----------------------------
DROP TABLE IF EXISTS `inventario_area`;
CREATE TABLE `inventario_area` (
  `id_inv_area` int(11) NOT NULL AUTO_INCREMENT,
  `p_venta` decimal(10,2) DEFAULT NULL,
  `p_venta_cantidad` decimal(10,2) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `id_estado` int(11) DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `p_costo` decimal(10,2) DEFAULT NULL,
  `importe_costo` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_inv_area`),
  KEY `Refestado_prod47` (`id_estado`) USING BTREE,
  KEY `Refarea_venta49` (`id_area`) USING BTREE,
  KEY `Refproducto57` (`id_prod`) USING BTREE,
  CONSTRAINT `inventario_area_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_venta` (`id_area`),
  CONSTRAINT `inventario_area_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado_prod` (`id_estado`),
  CONSTRAINT `inventario_area_ibfk_3` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`)
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of inventario_area
-- ----------------------------
INSERT INTO `inventario_area` VALUES ('15', '20.00', '0.00', '4', '64.00', '1', '3', '153', '10.00', '40.00');
INSERT INTO `inventario_area` VALUES ('31', '8.00', '0.00', '1', '10.00', '1', '3', '88', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('38', '6.00', '0.00', '7', '42.00', '1', '3', '155', '2.00', '14.00');
INSERT INTO `inventario_area` VALUES ('40', '10.00', '0.00', '4', '40.00', '1', '3', '135', '5.00', '20.00');
INSERT INTO `inventario_area` VALUES ('43', '10.00', '0.00', '7', '70.00', '1', '3', '79', '3.00', '21.00');
INSERT INTO `inventario_area` VALUES ('44', '10.00', '0.00', '5', '50.00', '1', '3', '92', '6.00', '30.00');
INSERT INTO `inventario_area` VALUES ('45', '10.00', '0.00', '5', '50.00', '1', '3', '85', '6.00', '30.00');
INSERT INTO `inventario_area` VALUES ('46', '10.00', '0.00', '3', '30.00', '1', '3', '96', '5.00', '15.00');
INSERT INTO `inventario_area` VALUES ('47', '10.00', '0.00', '9', '90.00', '1', '3', '110', '3.00', '27.00');
INSERT INTO `inventario_area` VALUES ('48', '10.00', '0.00', '11', '110.00', '1', '3', '100', '3.00', '33.00');
INSERT INTO `inventario_area` VALUES ('49', '10.00', '0.00', '11', '110.00', '1', '3', '95', '3.00', '33.00');
INSERT INTO `inventario_area` VALUES ('51', '10.00', '0.00', '5', '50.00', '1', '3', '98', '4.00', '20.00');
INSERT INTO `inventario_area` VALUES ('53', '10.00', '0.00', '9', '72.00', '1', '3', '109', '4.00', '36.00');
INSERT INTO `inventario_area` VALUES ('54', '10.00', '0.00', '3', '30.00', '1', '3', '108', '3.00', '9.00');
INSERT INTO `inventario_area` VALUES ('56', '10.00', '0.00', '4', '40.00', '1', '3', '82', '4.00', '16.00');
INSERT INTO `inventario_area` VALUES ('58', '10.00', '0.00', '1', '10.00', '1', '3', '77', '3.00', '3.00');
INSERT INTO `inventario_area` VALUES ('59', '10.00', '0.00', '3', '30.00', '1', '3', '103', '3.00', '9.00');
INSERT INTO `inventario_area` VALUES ('60', '10.00', '0.00', '1', '10.00', '1', '3', '113', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('61', '10.00', '0.00', '4', '40.00', '1', '3', '81', '6.00', '24.00');
INSERT INTO `inventario_area` VALUES ('62', '10.00', '0.00', '4', '40.00', '1', '3', '90', '3.00', '12.00');
INSERT INTO `inventario_area` VALUES ('63', '10.00', '0.00', '12', '144.00', '1', '3', '104', '5.00', '60.00');
INSERT INTO `inventario_area` VALUES ('64', '10.00', '0.00', '3', '30.00', '1', '3', '86', '5.00', '15.00');
INSERT INTO `inventario_area` VALUES ('66', '10.00', '0.00', '2', '20.00', '1', '3', '101', '0.00', '0.00');
INSERT INTO `inventario_area` VALUES ('67', '10.00', '0.00', '2', '20.00', '1', '3', '80', '4.00', '8.00');
INSERT INTO `inventario_area` VALUES ('68', '10.00', '0.00', '7', '70.00', '1', '3', '210', '3.00', '21.00');
INSERT INTO `inventario_area` VALUES ('69', '10.00', '0.00', '2', '20.00', '1', '3', '97', '4.00', '8.00');
INSERT INTO `inventario_area` VALUES ('70', '10.00', '0.00', '1', '10.00', '1', '3', '111', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('71', '15.00', '0.00', '3', '45.00', '1', '3', '211', '5.00', '15.00');
INSERT INTO `inventario_area` VALUES ('72', '10.00', '0.00', '10', '100.00', '1', '3', '6', '7.00', '70.00');
INSERT INTO `inventario_area` VALUES ('73', '5.00', '0.00', '2', '10.00', '1', '3', '151', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('74', '5.00', '0.00', '7', '35.00', '1', '3', '149', '3.00', '21.00');
INSERT INTO `inventario_area` VALUES ('75', null, null, null, '0.00', null, null, null, null, '0.00');
INSERT INTO `inventario_area` VALUES ('78', '15.00', '0.00', '2', '30.00', '1', '3', '7', '9.00', '18.00');
INSERT INTO `inventario_area` VALUES ('79', '10.00', '0.00', '3', '15.00', '1', '3', '212', '3.00', '9.00');
INSERT INTO `inventario_area` VALUES ('80', '10.00', '0.00', '2', '20.00', '1', '3', '213', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('81', '5.00', '0.00', '2', '12.00', '1', '3', '137', '2.00', '4.00');
INSERT INTO `inventario_area` VALUES ('82', '5.00', '0.00', '2', '12.00', '1', '3', '138', '2.00', '4.00');
INSERT INTO `inventario_area` VALUES ('83', '8.00', '0.00', '1', '8.00', '1', '3', '141', '3.00', '3.00');
INSERT INTO `inventario_area` VALUES ('84', '10.00', '0.00', '2', '20.00', '1', '3', '214', '2.00', '4.00');
INSERT INTO `inventario_area` VALUES ('86', '5.00', '0.00', '7', '35.00', '1', '3', '215', '2.00', '14.00');
INSERT INTO `inventario_area` VALUES ('87', '15.00', '0.00', '1', '15.00', '1', '3', '64', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('88', '15.00', '0.00', '1', '15.00', '1', '3', '216', '7.00', '7.00');
INSERT INTO `inventario_area` VALUES ('89', '8.00', '0.00', '2', '16.00', '1', '3', '217', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('90', '3.00', '0.00', '2', '6.00', '1', '3', '218', '1.00', '2.00');
INSERT INTO `inventario_area` VALUES ('91', '2.00', '0.00', '6', '6.00', '1', '3', '219', '1.00', '6.00');
INSERT INTO `inventario_area` VALUES ('92', '5.00', '0.00', '1', '3.00', '1', '3', '35', '2.00', '2.00');
INSERT INTO `inventario_area` VALUES ('93', '3.00', '0.00', '5', '15.00', '1', '3', '146', '2.00', '10.00');
INSERT INTO `inventario_area` VALUES ('94', '30.00', '0.00', '1', '30.00', '1', '3', '157', '20.00', '20.00');
INSERT INTO `inventario_area` VALUES ('95', '30.00', '0.00', '2', '60.00', '1', '3', '161', '15.00', '30.00');
INSERT INTO `inventario_area` VALUES ('97', null, null, null, '0.00', null, null, null, null, '0.00');
INSERT INTO `inventario_area` VALUES ('98', null, null, null, '0.00', null, null, null, null, '0.00');
INSERT INTO `inventario_area` VALUES ('99', '120.00', '0.00', '1', '120.00', '1', '3', '222', '100.00', '100.00');
INSERT INTO `inventario_area` VALUES ('100', null, null, null, '0.00', null, null, null, null, '0.00');
INSERT INTO `inventario_area` VALUES ('101', '15.00', '0.00', '1', '15.00', '1', '3', '223', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('102', '12.00', '0.00', '1', '12.00', '1', '3', '224', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('103', '12.00', '0.00', '2', '24.00', '1', '3', '225', '5.00', '10.00');
INSERT INTO `inventario_area` VALUES ('104', '12.00', '0.00', '4', '40.00', '1', '3', '226', '5.00', '20.00');
INSERT INTO `inventario_area` VALUES ('105', '12.00', '0.00', '2', '24.00', '1', '3', '227', '5.00', '10.00');
INSERT INTO `inventario_area` VALUES ('108', '12.00', '0.00', '1', '12.00', '1', '3', '230', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('109', '12.00', '0.00', '1', '12.00', '1', '3', '231', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('110', '12.00', '0.00', '1', '12.00', '1', '3', '232', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('112', '10.00', '0.00', '2', '20.00', '1', '3', '78', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('113', '10.00', '0.00', '2', '20.00', '1', '3', '114', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('114', '10.00', '0.00', '2', '20.00', '1', '3', '136', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('115', '10.00', '0.00', '1', '10.00', '1', '3', '239', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('116', '10.00', '0.00', '1', '10.00', '1', '3', '240', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('117', '10.00', '0.00', '2', '20.00', '1', '3', '241', '4.00', '8.00');
INSERT INTO `inventario_area` VALUES ('118', '10.00', '0.00', '1', '10.00', '1', '3', '245', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('120', '10.00', '0.00', '3', '15.00', '1', '3', '11', '3.00', '9.00');
INSERT INTO `inventario_area` VALUES ('124', '125.00', '0.00', '1', '50.00', '1', '4', '125', '110.00', '110.00');
INSERT INTO `inventario_area` VALUES ('127', '120.00', '0.00', '1', '120.00', '1', '4', '183', '105.00', '105.00');
INSERT INTO `inventario_area` VALUES ('130', '115.00', '0.00', '1', '115.00', '1', '4', '131', '100.00', '100.00');
INSERT INTO `inventario_area` VALUES ('131', '130.00', '0.00', '1', '130.00', '1', '4', '121', '115.00', '115.00');
INSERT INTO `inventario_area` VALUES ('132', '15.00', '0.00', '2', '30.00', '1', '4', '144', '13.00', '26.00');
INSERT INTO `inventario_area` VALUES ('133', '10.00', '0.00', '6', '60.00', '1', '3', '89', '4.00', '24.00');
INSERT INTO `inventario_area` VALUES ('134', '10.00', '0.00', '2', '20.00', '1', '3', '88', '5.00', '10.00');
INSERT INTO `inventario_area` VALUES ('148', '85.00', '0.00', '1', '80.00', '1', '3', '129', '67.00', '67.00');
INSERT INTO `inventario_area` VALUES ('149', '10.00', '0.00', '1', '10.00', '1', '3', '260', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('154', '100.00', '0.00', '1', '100.00', '1', '3', '262', '100.00', '100.00');
INSERT INTO `inventario_area` VALUES ('155', '100.00', '0.00', '1', '100.00', '1', '3', '263', '70.00', '70.00');
INSERT INTO `inventario_area` VALUES ('158', '125.00', '0.00', '1', '125.00', '1', '3', '131', '100.00', '100.00');
INSERT INTO `inventario_area` VALUES ('159', '12.00', '0.00', '1', '12.00', '1', '3', '84', '6.00', '6.00');
INSERT INTO `inventario_area` VALUES ('160', '10.00', '0.00', '4', '40.00', '1', '3', '84', '3.00', '12.00');
INSERT INTO `inventario_area` VALUES ('161', '10.00', '0.00', '5', '50.00', '1', '3', '244', '3.00', '15.00');
INSERT INTO `inventario_area` VALUES ('162', '10.00', '0.00', '3', '30.00', '1', '3', '243', '4.00', '12.00');
INSERT INTO `inventario_area` VALUES ('163', '10.00', '0.00', '1', '6.00', '1', '3', '91', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('164', '12.00', '0.00', '2', '24.00', '1', '3', '242', '6.00', '12.00');
INSERT INTO `inventario_area` VALUES ('165', '10.00', '0.00', '1', '10.00', '1', '3', '102', '3.00', '3.00');
INSERT INTO `inventario_area` VALUES ('166', '10.00', '0.00', '2', '20.00', '1', '3', '247', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('167', '10.00', '0.00', '2', '20.00', '1', '3', '248', '3.00', '6.00');
INSERT INTO `inventario_area` VALUES ('168', '10.00', '0.00', '1', '10.00', '1', '3', '249', '3.00', '3.00');
INSERT INTO `inventario_area` VALUES ('169', '8.00', '0.00', '19', '152.00', '1', '3', '152', '5.00', '95.00');
INSERT INTO `inventario_area` VALUES ('170', '6.00', '0.00', '12', '72.00', '1', '3', '10', '2.80', '32.40');
INSERT INTO `inventario_area` VALUES ('171', '5.00', '0.00', '13', '0.00', '1', '3', '264', '0.00', '0.00');
INSERT INTO `inventario_area` VALUES ('172', '8.00', '0.00', '6', '48.00', '1', '3', '140', '3.00', '18.00');
INSERT INTO `inventario_area` VALUES ('173', '25.00', '0.00', '1', '25.00', '1', '3', '238', '15.00', '15.00');
INSERT INTO `inventario_area` VALUES ('174', '20.00', '0.00', '1', '20.00', '1', '3', '158', '15.00', '15.00');
INSERT INTO `inventario_area` VALUES ('175', '10.00', '0.00', '4', '40.00', '1', '3', '106', '4.00', '16.00');
INSERT INTO `inventario_area` VALUES ('176', '130.00', '0.00', '2', '260.00', '1', '3', '184', '105.00', '210.00');
INSERT INTO `inventario_area` VALUES ('178', '135.00', '0.00', '1', '135.00', '1', '3', '121', '115.00', '115.00');
INSERT INTO `inventario_area` VALUES ('179', '85.00', '0.00', '2', '170.00', '1', '3', '127', '65.00', '130.00');
INSERT INTO `inventario_area` VALUES ('180', '120.00', '0.00', '2', '240.00', '1', '3', '133', '95.00', '190.00');
INSERT INTO `inventario_area` VALUES ('181', '120.00', '0.00', '3', '360.00', '1', '3', '115', '95.00', '285.00');
INSERT INTO `inventario_area` VALUES ('183', '120.00', '0.00', '1', '102.00', '1', '3', '273', '100.00', '100.00');
INSERT INTO `inventario_area` VALUES ('184', '130.00', '0.00', '1', '130.00', '1', '3', '181', '110.00', '110.00');
INSERT INTO `inventario_area` VALUES ('186', '115.00', '0.00', '3', '345.00', '1', '6', '181', '110.00', '330.00');
INSERT INTO `inventario_area` VALUES ('187', '120.00', '0.00', '2', '240.00', '1', '6', '121', '115.00', '230.00');
INSERT INTO `inventario_area` VALUES ('188', '100.00', '0.00', '3', '300.00', '1', '6', '133', '95.00', '285.00');
INSERT INTO `inventario_area` VALUES ('189', '95.00', '0.00', '1', '95.00', '1', '6', '115', '95.00', '95.00');
INSERT INTO `inventario_area` VALUES ('190', '115.00', '0.00', '1', '115.00', '1', '6', '125', '110.00', '110.00');
INSERT INTO `inventario_area` VALUES ('191', '115.00', '0.00', '1', '115.00', '1', '6', '130', '110.00', '110.00');
INSERT INTO `inventario_area` VALUES ('192', '2.00', '0.00', '150', '300.00', '1', '6', '155', '1.80', '270.00');
INSERT INTO `inventario_area` VALUES ('193', '115.00', '0.00', '2', '230.00', '1', '6', '183', '105.00', '210.00');
INSERT INTO `inventario_area` VALUES ('194', '135.00', '0.00', '1', '135.00', '1', '3', '274', '110.00', '110.00');
INSERT INTO `inventario_area` VALUES ('195', '130.00', '0.00', '1', '130.00', '1', '3', '183', '105.00', '105.00');
INSERT INTO `inventario_area` VALUES ('197', '10.00', '0.00', '1', '10.00', '1', '3', '236', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('198', '12.00', '0.00', '4', '48.00', '1', '3', '276', '0.00', '0.00');
INSERT INTO `inventario_area` VALUES ('199', '10.00', '0.00', '1', '10.00', '1', '3', '277', '0.00', '0.00');
INSERT INTO `inventario_area` VALUES ('200', '125.00', '0.00', '1', '125.00', '1', '4', '181', '110.00', '110.00');
INSERT INTO `inventario_area` VALUES ('201', '130.00', '0.00', '2', '260.00', '1', '4', '121', '115.00', '230.00');
INSERT INTO `inventario_area` VALUES ('202', '115.00', '0.00', '1', '115.00', '1', '4', '273', '100.00', '100.00');
INSERT INTO `inventario_area` VALUES ('203', '110.00', '0.00', '3', '330.00', '1', '4', '133', '95.00', '285.00');
INSERT INTO `inventario_area` VALUES ('204', '108.00', '0.00', '2', '216.00', '1', '4', '115', '95.00', '190.00');
INSERT INTO `inventario_area` VALUES ('205', '130.00', '0.00', '2', '260.00', '1', '4', '125', '110.00', '220.00');
INSERT INTO `inventario_area` VALUES ('206', '15.00', '0.00', '2', '30.00', '1', '5', '233', '5.00', '10.00');
INSERT INTO `inventario_area` VALUES ('207', '20.00', '0.00', '1', '20.00', '1', '5', '234', '5.00', '5.00');
INSERT INTO `inventario_area` VALUES ('208', '30.00', '0.00', '1', '30.00', '1', '5', '266', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('209', '25.00', '0.00', '2', '50.00', '1', '5', '235', '5.00', '10.00');
INSERT INTO `inventario_area` VALUES ('210', '25.00', '0.00', '2', '50.00', '1', '5', '267', '4.00', '8.00');
INSERT INTO `inventario_area` VALUES ('211', '15.00', '0.00', '2', '30.00', '1', '5', '265', '4.00', '8.00');
INSERT INTO `inventario_area` VALUES ('212', '15.00', '0.00', '1', '15.00', '1', '5', '271', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('213', '20.00', '0.00', '1', '20.00', '1', '5', '268', '10.00', '10.00');
INSERT INTO `inventario_area` VALUES ('214', '15.00', '0.00', '1', '15.00', '1', '5', '269', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('215', '12.00', '0.00', '1', '12.00', '1', '5', '272', '4.00', '4.00');
INSERT INTO `inventario_area` VALUES ('216', '10.00', '0.00', '2', '20.00', '1', '5', '174', '4.00', '8.00');
INSERT INTO `inventario_area` VALUES ('217', '10.00', '0.00', '21', '210.00', '1', '5', '177', '4.00', '84.00');
INSERT INTO `inventario_area` VALUES ('218', '105.00', '0.00', '1', '105.00', '1', '6', '273', '100.00', '100.00');
INSERT INTO `inventario_area` VALUES ('219', '2.70', '0.00', '50', '135.00', '1', '6', '10', '2.70', '135.00');

-- ----------------------------
-- Table structure for `inv_medios_basicos`
-- ----------------------------
DROP TABLE IF EXISTS `inv_medios_basicos`;
CREATE TABLE `inv_medios_basicos` (
  `id_inv_alm` int(11) NOT NULL,
  `fecha_entrada` date DEFAULT NULL,
  PRIMARY KEY (`id_inv_alm`),
  CONSTRAINT `inv_medios_basicos_ibfk_1` FOREIGN KEY (`id_inv_alm`) REFERENCES `inventario_alm` (`id_inv_alm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of inv_medios_basicos
-- ----------------------------

-- ----------------------------
-- Table structure for `inv_prod_venta`
-- ----------------------------
DROP TABLE IF EXISTS `inv_prod_venta`;
CREATE TABLE `inv_prod_venta` (
  `id_inv_alm` int(11) NOT NULL,
  `tipo_compra` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_inv_alm`),
  CONSTRAINT `inv_prod_venta_ibfk_1` FOREIGN KEY (`id_inv_alm`) REFERENCES `inventario_alm` (`id_inv_alm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of inv_prod_venta
-- ----------------------------
INSERT INTO `inv_prod_venta` VALUES ('5', '0');
INSERT INTO `inv_prod_venta` VALUES ('6', '0');
INSERT INTO `inv_prod_venta` VALUES ('22', '0');
INSERT INTO `inv_prod_venta` VALUES ('86', '0');
INSERT INTO `inv_prod_venta` VALUES ('87', '0');
INSERT INTO `inv_prod_venta` VALUES ('89', '0');
INSERT INTO `inv_prod_venta` VALUES ('90', '0');
INSERT INTO `inv_prod_venta` VALUES ('98', '0');
INSERT INTO `inv_prod_venta` VALUES ('101', '0');
INSERT INTO `inv_prod_venta` VALUES ('104', '0');
INSERT INTO `inv_prod_venta` VALUES ('105', '0');
INSERT INTO `inv_prod_venta` VALUES ('123', '0');
INSERT INTO `inv_prod_venta` VALUES ('127', '0');
INSERT INTO `inv_prod_venta` VALUES ('129', '0');
INSERT INTO `inv_prod_venta` VALUES ('131', '0');
INSERT INTO `inv_prod_venta` VALUES ('137', '0');
INSERT INTO `inv_prod_venta` VALUES ('138', '0');
INSERT INTO `inv_prod_venta` VALUES ('140', '0');
INSERT INTO `inv_prod_venta` VALUES ('142', '0');
INSERT INTO `inv_prod_venta` VALUES ('143', '0');
INSERT INTO `inv_prod_venta` VALUES ('144', '0');
INSERT INTO `inv_prod_venta` VALUES ('145', '0');
INSERT INTO `inv_prod_venta` VALUES ('146', '0');
INSERT INTO `inv_prod_venta` VALUES ('164', '0');
INSERT INTO `inv_prod_venta` VALUES ('165', '0');
INSERT INTO `inv_prod_venta` VALUES ('167', '0');
INSERT INTO `inv_prod_venta` VALUES ('168', '0');
INSERT INTO `inv_prod_venta` VALUES ('169', '0');
INSERT INTO `inv_prod_venta` VALUES ('171', '0');
INSERT INTO `inv_prod_venta` VALUES ('174', '0');
INSERT INTO `inv_prod_venta` VALUES ('175', '0');
INSERT INTO `inv_prod_venta` VALUES ('176', '0');
INSERT INTO `inv_prod_venta` VALUES ('177', '0');
INSERT INTO `inv_prod_venta` VALUES ('180', '0');
INSERT INTO `inv_prod_venta` VALUES ('181', '0');
INSERT INTO `inv_prod_venta` VALUES ('182', '0');
INSERT INTO `inv_prod_venta` VALUES ('183', '0');
INSERT INTO `inv_prod_venta` VALUES ('185', '0');
INSERT INTO `inv_prod_venta` VALUES ('186', '0');
INSERT INTO `inv_prod_venta` VALUES ('196', '0');
INSERT INTO `inv_prod_venta` VALUES ('200', '0');
INSERT INTO `inv_prod_venta` VALUES ('201', '0');
INSERT INTO `inv_prod_venta` VALUES ('205', '0');
INSERT INTO `inv_prod_venta` VALUES ('208', '0');
INSERT INTO `inv_prod_venta` VALUES ('211', '0');
INSERT INTO `inv_prod_venta` VALUES ('212', '0');
INSERT INTO `inv_prod_venta` VALUES ('215', '0');
INSERT INTO `inv_prod_venta` VALUES ('216', '0');
INSERT INTO `inv_prod_venta` VALUES ('217', '0');
INSERT INTO `inv_prod_venta` VALUES ('218', '0');
INSERT INTO `inv_prod_venta` VALUES ('219', '0');
INSERT INTO `inv_prod_venta` VALUES ('220', '0');
INSERT INTO `inv_prod_venta` VALUES ('221', '0');
INSERT INTO `inv_prod_venta` VALUES ('223', '0');
INSERT INTO `inv_prod_venta` VALUES ('224', '0');
INSERT INTO `inv_prod_venta` VALUES ('225', '0');
INSERT INTO `inv_prod_venta` VALUES ('226', '0');
INSERT INTO `inv_prod_venta` VALUES ('227', '0');
INSERT INTO `inv_prod_venta` VALUES ('228', '0');
INSERT INTO `inv_prod_venta` VALUES ('229', '0');
INSERT INTO `inv_prod_venta` VALUES ('233', '0');
INSERT INTO `inv_prod_venta` VALUES ('234', '0');
INSERT INTO `inv_prod_venta` VALUES ('235', '0');
INSERT INTO `inv_prod_venta` VALUES ('236', '0');
INSERT INTO `inv_prod_venta` VALUES ('237', '0');
INSERT INTO `inv_prod_venta` VALUES ('238', '0');
INSERT INTO `inv_prod_venta` VALUES ('239', '0');
INSERT INTO `inv_prod_venta` VALUES ('240', '0');
INSERT INTO `inv_prod_venta` VALUES ('244', '0');
INSERT INTO `inv_prod_venta` VALUES ('261', '0');
INSERT INTO `inv_prod_venta` VALUES ('262', '0');
INSERT INTO `inv_prod_venta` VALUES ('263', '0');
INSERT INTO `inv_prod_venta` VALUES ('267', '0');
INSERT INTO `inv_prod_venta` VALUES ('268', '0');
INSERT INTO `inv_prod_venta` VALUES ('287', '0');
INSERT INTO `inv_prod_venta` VALUES ('289', '0');
INSERT INTO `inv_prod_venta` VALUES ('290', '0');
INSERT INTO `inv_prod_venta` VALUES ('291', '0');
INSERT INTO `inv_prod_venta` VALUES ('293', '0');
INSERT INTO `inv_prod_venta` VALUES ('294', '0');
INSERT INTO `inv_prod_venta` VALUES ('295', '0');
INSERT INTO `inv_prod_venta` VALUES ('296', '0');
INSERT INTO `inv_prod_venta` VALUES ('298', '0');
INSERT INTO `inv_prod_venta` VALUES ('300', '0');
INSERT INTO `inv_prod_venta` VALUES ('301', '0');
INSERT INTO `inv_prod_venta` VALUES ('302', '0');
INSERT INTO `inv_prod_venta` VALUES ('303', '0');
INSERT INTO `inv_prod_venta` VALUES ('306', '0');
INSERT INTO `inv_prod_venta` VALUES ('308', '0');

-- ----------------------------
-- Table structure for `log_alm`
-- ----------------------------
DROP TABLE IF EXISTS `log_alm`;
CREATE TABLE `log_alm` (
  `id_log` int(11) NOT NULL AUTO_INCREMENT,
  `cant` int(11) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `tipo_compra` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_estado` int(11) DEFAULT NULL,
  `id_alm` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `id_mov` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_log`),
  KEY `Refestado_prod51` (`id_estado`) USING BTREE,
  KEY `Refalmacen52` (`id_alm`) USING BTREE,
  KEY `Refusuarios55` (`uid`) USING BTREE,
  KEY `Refproducto59` (`id_prod`) USING BTREE,
  KEY `Reftipo_mov72` (`id_mov`) USING BTREE,
  CONSTRAINT `log_alm_ibfk_1` FOREIGN KEY (`id_alm`) REFERENCES `almacen` (`id_alm`),
  CONSTRAINT `log_alm_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado_prod` (`id_estado`),
  CONSTRAINT `log_alm_ibfk_3` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `log_alm_ibfk_4` FOREIGN KEY (`id_mov`) REFERENCES `tipo_mov` (`id_mov`),
  CONSTRAINT `log_alm_ibfk_5` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=668 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log_alm
-- ----------------------------
INSERT INTO `log_alm` VALUES ('4', '6', '33.00', '0', '2015-12-09', '1', '1', '1', '79', '1');
INSERT INTO `log_alm` VALUES ('5', '2', '6.00', '0', '2015-12-09', '1', '1', '1', '79', '1');
INSERT INTO `log_alm` VALUES ('6', '8', '32.00', '0', '2015-12-09', '1', '1', '1', '80', '1');
INSERT INTO `log_alm` VALUES ('11', '5', '28.00', '0', '2015-12-09', '1', '1', '1', '85', '1');
INSERT INTO `log_alm` VALUES ('13', '4', '20.00', '0', '2015-12-09', '1', '1', '1', '88', '1');
INSERT INTO `log_alm` VALUES ('22', '9', '45.00', '0', '2015-12-09', '1', '1', '1', '96', '1');
INSERT INTO `log_alm` VALUES ('23', '5', '20.00', '0', '2015-12-09', '1', '1', '1', '97', '1');
INSERT INTO `log_alm` VALUES ('27', '2', '0.00', '0', '2015-12-09', '1', '1', '1', '101', '1');
INSERT INTO `log_alm` VALUES ('42', '1', '3.00', '0', '2015-12-09', '1', '1', '1', '79', '1');
INSERT INTO `log_alm` VALUES ('46', '1', '4.00', '0', '2015-12-09', '1', '1', '1', '111', '1');
INSERT INTO `log_alm` VALUES ('49', '1', '4.00', '0', '2015-12-09', '1', '1', '1', '112', '1');
INSERT INTO `log_alm` VALUES ('50', '1', '4.00', '0', '2015-12-09', '1', '1', '1', '113', '1');
INSERT INTO `log_alm` VALUES ('53', '2', '6.00', '0', '2015-12-09', '1', '1', '1', '78', '1');
INSERT INTO `log_alm` VALUES ('56', '2', '6.00', '0', '2015-12-09', '1', '1', '1', '114', '1');
INSERT INTO `log_alm` VALUES ('57', '2', '6.00', '0', '2015-12-09', '1', '1', '1', '136', '1');
INSERT INTO `log_alm` VALUES ('86', '4', '10.00', '0', '2015-12-23', '1', '1', '1', '149', '1');
INSERT INTO `log_alm` VALUES ('89', '1', '3.00', '0', '2015-12-23', '1', '1', '1', '139', '1');
INSERT INTO `log_alm` VALUES ('98', '1', '20.00', '0', '2015-12-23', '1', '1', '1', '157', '1');
INSERT INTO `log_alm` VALUES ('99', '1', '25.00', '0', '2015-12-23', '1', '1', '1', '159', '1');
INSERT INTO `log_alm` VALUES ('100', '4', '16.00', '0', '2015-12-23', '1', '1', '1', '160', '1');
INSERT INTO `log_alm` VALUES ('101', '1', '15.00', '0', '2015-12-23', '1', '1', '1', '161', '1');
INSERT INTO `log_alm` VALUES ('102', '2', '30.00', '0', '2015-12-23', '1', '1', '1', '162', '1');
INSERT INTO `log_alm` VALUES ('103', '7', '49.00', '0', '2015-12-23', '1', '1', '1', '163', '1');
INSERT INTO `log_alm` VALUES ('115', '1', '4.00', '0', '2015-12-26', '1', '1', '1', '171', '1');
INSERT INTO `log_alm` VALUES ('117', '2', '8.00', '0', '2015-12-26', '1', '1', '1', '173', '1');
INSERT INTO `log_alm` VALUES ('120', '10', '40.00', '0', '2015-12-26', '1', '1', '1', '176', '1');
INSERT INTO `log_alm` VALUES ('121', '22', '88.00', '0', '2015-12-26', '1', '1', '1', '177', '1');
INSERT INTO `log_alm` VALUES ('123', '8', '32.00', '0', '2015-12-26', '1', '1', '1', '178', '1');
INSERT INTO `log_alm` VALUES ('124', '4', '16.00', '0', '2015-12-26', '1', '1', '1', '179', '1');
INSERT INTO `log_alm` VALUES ('126', '14', '1750.00', '0', '2015-12-26', '1', '1', '1', '124', '1');
INSERT INTO `log_alm` VALUES ('132', '9', '990.00', '0', '2015-12-26', '1', '1', '1', '181', '1');
INSERT INTO `log_alm` VALUES ('136', '6', '660.00', '0', '2015-12-26', '1', '1', '1', '130', '1');
INSERT INTO `log_alm` VALUES ('138', '18', '1980.00', '0', '2015-12-26', '1', '1', '1', '125', '1');
INSERT INTO `log_alm` VALUES ('139', '6', '390.00', '0', '2015-12-26', '1', '1', '1', '127', '1');
INSERT INTO `log_alm` VALUES ('141', '201', '1005.00', '0', '2015-12-26', '1', '1', '1', '152', '1');
INSERT INTO `log_alm` VALUES ('144', '1', '110.00', '0', '2015-12-26', '1', '1', '1', '130', '2');
INSERT INTO `log_alm` VALUES ('150', '3', '330.00', '0', '2015-12-26', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('151', '1', '125.00', '0', '2015-12-26', '1', '1', '1', '124', '2');
INSERT INTO `log_alm` VALUES ('159', '1', '110.00', '0', '2015-12-26', '1', '1', '1', '181', '2');
INSERT INTO `log_alm` VALUES ('165', '21', '105.00', '0', '2015-12-28', '1', '1', '1', '152', '2');
INSERT INTO `log_alm` VALUES ('168', '1', '10.00', '0', '2015-12-28', '1', '1', '1', '185', '1');
INSERT INTO `log_alm` VALUES ('170', '2', '14.00', '0', '2015-12-26', '1', '1', '1', '163', '2');
INSERT INTO `log_alm` VALUES ('171', '1', '2.00', '0', '2015-12-29', '1', '1', '1', '205', '1');
INSERT INTO `log_alm` VALUES ('174', '1', '5.00', '0', '2015-12-26', '1', '1', '1', '152', '1');
INSERT INTO `log_alm` VALUES ('175', '1', '2.00', '0', '2015-12-26', '1', '1', '1', '205', '2');
INSERT INTO `log_alm` VALUES ('180', '2', '14.00', '0', '2015-12-26', '1', '1', '1', '163', '2');
INSERT INTO `log_alm` VALUES ('182', '1', '5.00', '0', '2015-12-26', '1', '1', '1', '152', '1');
INSERT INTO `log_alm` VALUES ('183', '1', '10.00', '0', '2015-12-26', '1', '1', '1', '153', '1');
INSERT INTO `log_alm` VALUES ('185', '1', '10.00', '0', '2015-12-26', '1', '1', '1', '153', '2');
INSERT INTO `log_alm` VALUES ('186', '1', '5.00', '0', '2015-12-26', '1', '1', '1', '152', '2');
INSERT INTO `log_alm` VALUES ('188', '1', '120.00', '0', '2015-12-26', '1', '1', '1', '206', '1');
INSERT INTO `log_alm` VALUES ('190', '1', '5.00', '0', '2015-12-26', '1', '1', '1', '152', '1');
INSERT INTO `log_alm` VALUES ('191', '1', '120.00', '0', '2015-12-26', '1', '1', '1', '206', '2');
INSERT INTO `log_alm` VALUES ('193', '1', '5.00', '0', '2015-12-26', '1', '1', '1', '152', '2');
INSERT INTO `log_alm` VALUES ('195', '1', '2.00', '0', '2015-12-28', '1', '1', '1', '137', '1');
INSERT INTO `log_alm` VALUES ('196', '1', '3.00', '0', '2015-12-28', '1', '1', '1', '140', '1');
INSERT INTO `log_alm` VALUES ('197', '1', '1.00', '0', '2015-12-28', '1', '1', '1', '35', '1');
INSERT INTO `log_alm` VALUES ('198', '1', '2.00', '0', '2015-12-28', '1', '1', '1', '137', '2');
INSERT INTO `log_alm` VALUES ('199', '1', '1.00', '0', '2015-12-28', '1', '1', '1', '35', '2');
INSERT INTO `log_alm` VALUES ('200', '1', '3.00', '0', '2015-12-28', '1', '1', '1', '140', '2');
INSERT INTO `log_alm` VALUES ('201', '4', '20.00', '0', '2015-12-28', '1', '1', '1', '88', '2');
INSERT INTO `log_alm` VALUES ('203', '1', '8.00', '0', '2015-12-29', '1', '1', '1', '207', '1');
INSERT INTO `log_alm` VALUES ('204', '1', '8.00', '0', '2015-12-29', '1', '1', '1', '207', '2');
INSERT INTO `log_alm` VALUES ('205', '2', '250.00', '0', '2015-12-29', '1', '1', '1', '124', '2');
INSERT INTO `log_alm` VALUES ('208', '1', '8.00', '0', '2015-12-29', '1', '1', '1', '207', '1');
INSERT INTO `log_alm` VALUES ('209', '1', '8.00', '0', '2015-12-29', '1', '1', '1', '207', '2');
INSERT INTO `log_alm` VALUES ('214', '1', '120.00', '0', '2016-01-04', '1', '1', '1', '208', '1');
INSERT INTO `log_alm` VALUES ('215', '1', '120.00', '0', '2016-01-04', '1', '1', '1', '208', '2');
INSERT INTO `log_alm` VALUES ('219', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '209', '1');
INSERT INTO `log_alm` VALUES ('220', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '209', '2');
INSERT INTO `log_alm` VALUES ('221', '6', '18.00', '0', '2016-01-04', '1', '1', '1', '79', '2');
INSERT INTO `log_alm` VALUES ('222', '1', '3.00', '0', '2016-01-04', '1', '1', '1', '79', '2');
INSERT INTO `log_alm` VALUES ('224', '5', '30.00', '0', '2016-01-04', '1', '1', '1', '85', '2');
INSERT INTO `log_alm` VALUES ('225', '3', '15.00', '0', '2016-01-04', '1', '1', '1', '96', '2');
INSERT INTO `log_alm` VALUES ('229', '5', '20.00', '0', '2016-01-04', '1', '1', '1', '97', '2');
INSERT INTO `log_alm` VALUES ('240', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '113', '2');
INSERT INTO `log_alm` VALUES ('242', '6', '36.00', '0', '2016-01-04', '1', '1', '1', '81', '1');
INSERT INTO `log_alm` VALUES ('243', '4', '24.00', '0', '2016-01-04', '1', '1', '1', '81', '2');
INSERT INTO `log_alm` VALUES ('248', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '112', '2');
INSERT INTO `log_alm` VALUES ('249', '2', '0.00', '0', '2016-01-04', '1', '1', '1', '101', '2');
INSERT INTO `log_alm` VALUES ('250', '2', '8.00', '0', '2016-01-04', '1', '1', '1', '80', '2');
INSERT INTO `log_alm` VALUES ('254', '5', '20.00', '0', '2016-01-04', '1', '1', '1', '97', '1');
INSERT INTO `log_alm` VALUES ('255', '7', '21.00', '0', '2016-01-04', '1', '1', '1', '210', '1');
INSERT INTO `log_alm` VALUES ('256', '7', '21.00', '0', '2016-01-04', '1', '1', '1', '210', '2');
INSERT INTO `log_alm` VALUES ('257', '2', '8.00', '0', '2016-01-04', '1', '1', '1', '97', '2');
INSERT INTO `log_alm` VALUES ('260', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '111', '2');
INSERT INTO `log_alm` VALUES ('261', '3', '15.00', '0', '2016-01-04', '1', '1', '1', '211', '1');
INSERT INTO `log_alm` VALUES ('262', '3', '15.00', '0', '2016-01-04', '1', '1', '1', '211', '2');
INSERT INTO `log_alm` VALUES ('265', '4', '12.00', '0', '2016-01-04', '1', '1', '1', '149', '2');
INSERT INTO `log_alm` VALUES ('267', '1', '2.00', '0', '2016-01-04', '1', '1', '1', '205', '2');
INSERT INTO `log_alm` VALUES ('268', '1', '3.00', '0', '2016-01-04', '1', '1', '1', '139', '2');
INSERT INTO `log_alm` VALUES ('269', '6', '54.00', '0', '2016-01-04', '1', '1', '1', '7', '1');
INSERT INTO `log_alm` VALUES ('271', '4', '12.00', '0', '2016-01-04', '1', '1', '1', '213', '1');
INSERT INTO `log_alm` VALUES ('272', '13', '26.00', '0', '2016-01-04', '1', '1', '1', '137', '1');
INSERT INTO `log_alm` VALUES ('273', '11', '22.00', '0', '2016-01-04', '1', '1', '1', '138', '1');
INSERT INTO `log_alm` VALUES ('277', '3', '6.00', '0', '2016-01-04', '1', '1', '1', '214', '1');
INSERT INTO `log_alm` VALUES ('278', '5', '40.00', '0', '2016-01-04', '1', '1', '1', '41', '1');
INSERT INTO `log_alm` VALUES ('279', '9', '18.00', '0', '2016-01-04', '1', '1', '1', '215', '1');
INSERT INTO `log_alm` VALUES ('280', '8', '32.00', '0', '2016-01-04', '1', '1', '1', '64', '1');
INSERT INTO `log_alm` VALUES ('281', '6', '42.00', '0', '2016-01-04', '1', '1', '1', '216', '1');
INSERT INTO `log_alm` VALUES ('282', '5', '15.00', '0', '2016-01-04', '1', '1', '1', '217', '1');
INSERT INTO `log_alm` VALUES ('283', '14', '28.00', '0', '2016-01-04', '1', '1', '1', '35', '1');
INSERT INTO `log_alm` VALUES ('284', '1', '15.00', '0', '2016-01-04', '1', '1', '1', '161', '1');
INSERT INTO `log_alm` VALUES ('286', '6', '54.00', '0', '2016-01-04', '1', '1', '1', '7', '2');
INSERT INTO `log_alm` VALUES ('288', '4', '12.00', '0', '2016-01-04', '1', '1', '1', '213', '2');
INSERT INTO `log_alm` VALUES ('289', '3', '6.00', '0', '2016-01-04', '1', '1', '1', '137', '2');
INSERT INTO `log_alm` VALUES ('290', '3', '6.00', '0', '2016-01-04', '1', '1', '1', '138', '2');
INSERT INTO `log_alm` VALUES ('292', '2', '4.00', '0', '2016-01-04', '1', '1', '1', '214', '2');
INSERT INTO `log_alm` VALUES ('293', '2', '16.00', '0', '2016-01-04', '1', '1', '1', '41', '2');
INSERT INTO `log_alm` VALUES ('294', '7', '14.00', '0', '2016-01-04', '1', '1', '1', '215', '2');
INSERT INTO `log_alm` VALUES ('295', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '64', '2');
INSERT INTO `log_alm` VALUES ('296', '1', '7.00', '0', '2016-01-04', '1', '1', '1', '216', '2');
INSERT INTO `log_alm` VALUES ('297', '2', '6.00', '0', '2016-01-04', '1', '1', '1', '217', '2');
INSERT INTO `log_alm` VALUES ('298', '2', '2.00', '0', '2016-01-04', '1', '1', '1', '218', '1');
INSERT INTO `log_alm` VALUES ('299', '9', '9.00', '0', '2016-01-04', '1', '1', '1', '219', '1');
INSERT INTO `log_alm` VALUES ('300', '2', '2.00', '0', '2016-01-04', '1', '1', '1', '218', '2');
INSERT INTO `log_alm` VALUES ('301', '9', '9.00', '0', '2016-01-04', '1', '1', '1', '219', '2');
INSERT INTO `log_alm` VALUES ('302', '3', '6.00', '0', '2016-01-04', '1', '1', '1', '35', '2');
INSERT INTO `log_alm` VALUES ('304', '1', '20.00', '0', '2016-01-04', '1', '1', '1', '157', '2');
INSERT INTO `log_alm` VALUES ('305', '2', '30.00', '0', '2016-01-04', '1', '1', '1', '161', '2');
INSERT INTO `log_alm` VALUES ('306', '1', '120.00', '0', '2016-01-04', '1', '1', '1', '221', '1');
INSERT INTO `log_alm` VALUES ('307', '1', '100.00', '0', '2016-01-04', '1', '1', '1', '222', '1');
INSERT INTO `log_alm` VALUES ('308', '1', '120.00', '0', '2016-01-04', '1', '1', '1', '221', '2');
INSERT INTO `log_alm` VALUES ('311', '1', '100.00', '0', '2016-01-04', '1', '1', '1', '222', '2');
INSERT INTO `log_alm` VALUES ('313', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '223', '1');
INSERT INTO `log_alm` VALUES ('314', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '224', '1');
INSERT INTO `log_alm` VALUES ('315', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '225', '1');
INSERT INTO `log_alm` VALUES ('316', '5', '25.00', '0', '2016-01-04', '1', '1', '1', '226', '1');
INSERT INTO `log_alm` VALUES ('317', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '227', '1');
INSERT INTO `log_alm` VALUES ('318', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '228', '1');
INSERT INTO `log_alm` VALUES ('319', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '229', '1');
INSERT INTO `log_alm` VALUES ('320', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '230', '1');
INSERT INTO `log_alm` VALUES ('321', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '231', '1');
INSERT INTO `log_alm` VALUES ('322', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '232', '1');
INSERT INTO `log_alm` VALUES ('323', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '223', '2');
INSERT INTO `log_alm` VALUES ('324', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '224', '2');
INSERT INTO `log_alm` VALUES ('325', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '225', '2');
INSERT INTO `log_alm` VALUES ('326', '5', '25.00', '0', '2016-01-04', '1', '1', '1', '226', '2');
INSERT INTO `log_alm` VALUES ('327', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '227', '2');
INSERT INTO `log_alm` VALUES ('328', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '228', '2');
INSERT INTO `log_alm` VALUES ('329', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '229', '2');
INSERT INTO `log_alm` VALUES ('330', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '230', '2');
INSERT INTO `log_alm` VALUES ('331', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '231', '2');
INSERT INTO `log_alm` VALUES ('332', '1', '5.00', '0', '2016-01-04', '1', '1', '1', '232', '2');
INSERT INTO `log_alm` VALUES ('333', '17', '1785.00', '0', '2016-01-04', '1', '1', '1', '183', '1');
INSERT INTO `log_alm` VALUES ('336', '4', '20.00', '0', '2016-01-04', '1', '1', '1', '236', '1');
INSERT INTO `log_alm` VALUES ('337', '5', '40.00', '0', '2016-01-04', '1', '1', '1', '237', '1');
INSERT INTO `log_alm` VALUES ('338', '3', '39.00', '0', '2016-01-04', '1', '1', '1', '144', '1');
INSERT INTO `log_alm` VALUES ('339', '9', '135.00', '0', '2016-01-04', '1', '1', '1', '238', '1');
INSERT INTO `log_alm` VALUES ('340', '47', '94.00', '0', '2016-01-04', '1', '1', '1', '156', '1');
INSERT INTO `log_alm` VALUES ('341', '34', '68.00', '0', '2016-01-04', '1', '1', '1', '149', '1');
INSERT INTO `log_alm` VALUES ('342', '7', '21.00', '0', '2016-01-04', '1', '1', '1', '142', '1');
INSERT INTO `log_alm` VALUES ('343', '2', '4.00', '0', '2016-01-04', '1', '1', '1', '139', '1');
INSERT INTO `log_alm` VALUES ('345', '39', '105.30', '0', '2016-01-04', '1', '1', '1', '10', '1');
INSERT INTO `log_alm` VALUES ('346', '13', '26.00', '0', '2016-01-04', '1', '1', '1', '151', '1');
INSERT INTO `log_alm` VALUES ('347', '3', '6.00', '0', '2016-01-04', '1', '1', '1', '146', '1');
INSERT INTO `log_alm` VALUES ('348', '12', '24.00', '0', '2016-01-04', '1', '1', '1', '147', '1');
INSERT INTO `log_alm` VALUES ('349', '2', '4.00', '0', '2016-01-04', '1', '1', '1', '148', '1');
INSERT INTO `log_alm` VALUES ('353', '19', '76.00', '0', '2016-01-04', '1', '1', '1', '89', '1');
INSERT INTO `log_alm` VALUES ('354', '2', '8.00', '0', '2016-01-04', '1', '1', '1', '86', '1');
INSERT INTO `log_alm` VALUES ('356', '10', '60.00', '0', '2016-01-04', '1', '1', '1', '92', '1');
INSERT INTO `log_alm` VALUES ('357', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '88', '1');
INSERT INTO `log_alm` VALUES ('358', '2', '10.00', '0', '2016-01-04', '1', '1', '1', '135', '1');
INSERT INTO `log_alm` VALUES ('359', '13', '39.00', '0', '2016-01-04', '1', '1', '1', '100', '1');
INSERT INTO `log_alm` VALUES ('362', '4', '12.00', '0', '2016-01-04', '1', '1', '1', '84', '1');
INSERT INTO `log_alm` VALUES ('364', '2', '6.00', '0', '2016-01-04', '1', '1', '1', '78', '2');
INSERT INTO `log_alm` VALUES ('365', '2', '6.00', '0', '2016-01-04', '1', '1', '1', '114', '2');
INSERT INTO `log_alm` VALUES ('367', '2', '6.00', '0', '2016-01-04', '1', '1', '1', '136', '2');
INSERT INTO `log_alm` VALUES ('380', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '245', '1');
INSERT INTO `log_alm` VALUES ('388', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '245', '2');
INSERT INTO `log_alm` VALUES ('389', '10', '20.00', '0', '2016-01-05', '1', '1', '1', '149', '2');
INSERT INTO `log_alm` VALUES ('390', '1', '105.00', '0', '2016-01-05', '1', '1', '1', '183', '2');
INSERT INTO `log_alm` VALUES ('391', '14', '42.00', '0', '2016-01-04', '1', '1', '1', '11', '1');
INSERT INTO `log_alm` VALUES ('392', '5', '15.00', '0', '2016-01-04', '1', '1', '1', '11', '2');
INSERT INTO `log_alm` VALUES ('395', '2', '12.00', '0', '2016-01-04', '1', '1', '1', '242', '1');
INSERT INTO `log_alm` VALUES ('396', '5', '15.00', '0', '2016-01-04', '1', '1', '1', '244', '1');
INSERT INTO `log_alm` VALUES ('397', '3', '12.00', '0', '2016-01-04', '1', '1', '1', '243', '1');
INSERT INTO `log_alm` VALUES ('398', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '245', '1');
INSERT INTO `log_alm` VALUES ('404', '6', '18.00', '0', '2016-01-04', '1', '1', '1', '92', '1');
INSERT INTO `log_alm` VALUES ('408', '30', '150.00', '0', '2016-01-04', '1', '1', '1', '104', '1');
INSERT INTO `log_alm` VALUES ('409', '8', '24.00', '0', '2016-01-04', '1', '1', '1', '140', '1');
INSERT INTO `log_alm` VALUES ('411', '7', '28.00', '0', '2016-01-04', '1', '1', '1', '175', '1');
INSERT INTO `log_alm` VALUES ('412', '24', '96.00', '0', '2016-01-04', '1', '1', '1', '250', '1');
INSERT INTO `log_alm` VALUES ('414', '19', '76.00', '0', '2016-01-04', '1', '1', '1', '72', '1');
INSERT INTO `log_alm` VALUES ('415', '6', '24.00', '0', '2016-01-04', '1', '1', '1', '172', '1');
INSERT INTO `log_alm` VALUES ('416', '3', '12.00', '0', '2016-01-04', '1', '1', '1', '174', '1');
INSERT INTO `log_alm` VALUES ('418', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '251', '1');
INSERT INTO `log_alm` VALUES ('419', '2', '8.00', '0', '2016-01-04', '1', '1', '1', '170', '1');
INSERT INTO `log_alm` VALUES ('420', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '169', '1');
INSERT INTO `log_alm` VALUES ('421', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '197', '1');
INSERT INTO `log_alm` VALUES ('423', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '196', '1');
INSERT INTO `log_alm` VALUES ('424', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '190', '1');
INSERT INTO `log_alm` VALUES ('425', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '191', '1');
INSERT INTO `log_alm` VALUES ('426', '2', '8.00', '0', '2016-01-04', '1', '1', '1', '187', '1');
INSERT INTO `log_alm` VALUES ('428', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '198', '1');
INSERT INTO `log_alm` VALUES ('429', '2', '8.00', '0', '2016-01-04', '1', '1', '1', '199', '1');
INSERT INTO `log_alm` VALUES ('430', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '200', '1');
INSERT INTO `log_alm` VALUES ('431', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '203', '1');
INSERT INTO `log_alm` VALUES ('432', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '204', '1');
INSERT INTO `log_alm` VALUES ('433', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '202', '1');
INSERT INTO `log_alm` VALUES ('434', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '201', '1');
INSERT INTO `log_alm` VALUES ('438', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '194', '1');
INSERT INTO `log_alm` VALUES ('439', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '195', '1');
INSERT INTO `log_alm` VALUES ('440', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '193', '1');
INSERT INTO `log_alm` VALUES ('441', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '192', '1');
INSERT INTO `log_alm` VALUES ('442', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '189', '1');
INSERT INTO `log_alm` VALUES ('443', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '188', '1');
INSERT INTO `log_alm` VALUES ('444', '8', '32.00', '0', '2016-01-04', '1', '1', '1', '252', '1');
INSERT INTO `log_alm` VALUES ('445', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '253', '1');
INSERT INTO `log_alm` VALUES ('448', '1', '13.00', '0', '2016-01-04', '1', '1', '1', '144', '2');
INSERT INTO `log_alm` VALUES ('449', '1', '150.00', '0', '2016-01-06', '1', '1', '1', '256', '1');
INSERT INTO `log_alm` VALUES ('450', '1', '150.00', '0', '2016-01-06', '1', '1', '1', '256', '2');
INSERT INTO `log_alm` VALUES ('452', '2', '220.00', '0', '2016-01-06', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('454', '1', '110.00', '0', '2016-01-06', '1', '1', '1', '181', '2');
INSERT INTO `log_alm` VALUES ('455', '1', '105.00', '0', '2016-01-06', '1', '1', '1', '183', '2');
INSERT INTO `log_alm` VALUES ('463', '2', '26.00', '0', '2016-01-06', '1', '1', '1', '144', '2');
INSERT INTO `log_alm` VALUES ('464', '4', '16.00', '0', '2016-01-07', '1', '1', '1', '89', '2');
INSERT INTO `log_alm` VALUES ('465', '2', '10.00', '0', '2016-01-07', '1', '1', '1', '88', '2');
INSERT INTO `log_alm` VALUES ('466', '2', '5.00', '0', '2016-01-07', '1', '1', '1', '257', '1');
INSERT INTO `log_alm` VALUES ('468', '4', '440.00', '0', '2016-01-04', '1', '1', '1', '130', '1');
INSERT INTO `log_alm` VALUES ('470', '4', '420.00', '0', '2016-01-04', '1', '1', '1', '183', '1');
INSERT INTO `log_alm` VALUES ('474', '1', '105.00', '0', '2016-01-04', '1', '1', '1', '184', '1');
INSERT INTO `log_alm` VALUES ('475', '1', '105.00', '0', '2016-01-04', '1', '1', '1', '184', '1');
INSERT INTO `log_alm` VALUES ('476', '2', '210.00', '0', '2016-01-04', '1', '1', '1', '184', '1');
INSERT INTO `log_alm` VALUES ('477', '12', '60.00', '0', '2016-01-04', '1', '1', '1', '152', '1');
INSERT INTO `log_alm` VALUES ('481', '2', '220.00', '0', '2016-01-04', '1', '1', '1', '181', '2');
INSERT INTO `log_alm` VALUES ('482', '2', '210.00', '0', '2016-01-04', '1', '1', '1', '183', '2');
INSERT INTO `log_alm` VALUES ('483', '6', '660.00', '0', '2016-01-04', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('490', '1', '110.00', '0', '2016-01-04', '1', '1', '1', '125', '1');
INSERT INTO `log_alm` VALUES ('491', '10', '18.00', '0', '2016-01-04', '1', '1', '1', '149', '1');
INSERT INTO `log_alm` VALUES ('494', '1', '110.00', '0', '2016-01-09', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('495', '2', '220.00', '0', '2016-01-09', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('498', '9', '24.30', '0', '2016-01-11', '1', '1', '1', '10', '2');
INSERT INTO `log_alm` VALUES ('500', '1', '120.00', '0', '2016-01-12', '1', '1', '1', '259', '1');
INSERT INTO `log_alm` VALUES ('501', '1', '120.00', '0', '2016-01-12', '1', '1', '1', '259', '2');
INSERT INTO `log_alm` VALUES ('505', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '260', '1');
INSERT INTO `log_alm` VALUES ('506', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '260', '2');
INSERT INTO `log_alm` VALUES ('507', '3', '201.00', '0', '2016-01-13', '1', '1', '1', '261', '1');
INSERT INTO `log_alm` VALUES ('508', '2', '134.00', '0', '2016-01-13', '1', '1', '1', '261', '2');
INSERT INTO `log_alm` VALUES ('509', '24', '96.00', '0', '2016-01-04', '1', '1', '1', '250', '2');
INSERT INTO `log_alm` VALUES ('510', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '251', '2');
INSERT INTO `log_alm` VALUES ('511', '1', '4.00', '0', '2016-01-04', '1', '1', '1', '171', '2');
INSERT INTO `log_alm` VALUES ('512', '1', '100.00', '0', '2016-01-15', '1', '1', '1', '262', '1');
INSERT INTO `log_alm` VALUES ('513', '1', '100.00', '0', '2016-01-15', '1', '1', '1', '262', '2');
INSERT INTO `log_alm` VALUES ('514', '1', '70.00', '0', '2016-01-06', '1', '1', '1', '263', '1');
INSERT INTO `log_alm` VALUES ('515', '1', '70.00', '0', '2016-01-08', '1', '1', '1', '263', '2');
INSERT INTO `log_alm` VALUES ('516', '1', '3.00', '0', '2016-01-15', '1', '1', '1', '142', '2');
INSERT INTO `log_alm` VALUES ('517', '1', '3.00', '0', '2016-01-04', '1', '1', '1', '102', '1');
INSERT INTO `log_alm` VALUES ('521', '1', '110.00', '0', '2016-01-15', '1', '1', '1', '181', '1');
INSERT INTO `log_alm` VALUES ('523', '1', '100.00', '0', '2016-01-16', '1', '1', '1', '131', '1');
INSERT INTO `log_alm` VALUES ('524', '1', '110.00', '0', '2016-01-16', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('525', '1', '100.00', '0', '2016-01-16', '1', '1', '1', '131', '2');
INSERT INTO `log_alm` VALUES ('526', '29', '116.00', '0', '2016-01-16', '1', '1', '1', '82', '1');
INSERT INTO `log_alm` VALUES ('527', '1', '6.00', '0', '2016-01-16', '1', '1', '1', '84', '2');
INSERT INTO `log_alm` VALUES ('528', '4', '12.00', '0', '2016-01-16', '1', '1', '1', '84', '2');
INSERT INTO `log_alm` VALUES ('529', '5', '15.00', '0', '2016-01-16', '1', '1', '1', '244', '2');
INSERT INTO `log_alm` VALUES ('530', '3', '12.00', '0', '2016-01-16', '1', '1', '1', '243', '2');
INSERT INTO `log_alm` VALUES ('531', '5', '20.00', '0', '2016-01-16', '1', '1', '1', '91', '1');
INSERT INTO `log_alm` VALUES ('532', '2', '8.00', '0', '2016-01-16', '1', '1', '1', '91', '2');
INSERT INTO `log_alm` VALUES ('533', '2', '12.00', '0', '2016-01-16', '1', '1', '1', '242', '2');
INSERT INTO `log_alm` VALUES ('534', '2', '12.00', '0', '2016-01-16', '1', '1', '1', '242', '1');
INSERT INTO `log_alm` VALUES ('535', '10', '30.00', '0', '2016-01-16', '1', '1', '1', '100', '2');
INSERT INTO `log_alm` VALUES ('536', '2', '6.00', '0', '2016-01-16', '1', '1', '1', '247', '1');
INSERT INTO `log_alm` VALUES ('537', '3', '9.00', '0', '2016-01-16', '1', '1', '1', '248', '1');
INSERT INTO `log_alm` VALUES ('538', '1', '3.00', '0', '2016-01-16', '1', '1', '1', '249', '1');
INSERT INTO `log_alm` VALUES ('540', '1', '3.00', '0', '2016-01-16', '1', '1', '1', '102', '2');
INSERT INTO `log_alm` VALUES ('541', '2', '6.00', '0', '2016-01-16', '1', '1', '1', '247', '2');
INSERT INTO `log_alm` VALUES ('542', '3', '9.00', '0', '2016-01-16', '1', '1', '1', '248', '2');
INSERT INTO `log_alm` VALUES ('543', '1', '3.00', '0', '2016-01-16', '1', '1', '1', '249', '2');
INSERT INTO `log_alm` VALUES ('544', '1', '4.00', '0', '2016-01-16', '1', '1', '1', '246', '1');
INSERT INTO `log_alm` VALUES ('545', '100', '280.00', '0', '2016-01-16', '1', '1', '1', '10', '1');
INSERT INTO `log_alm` VALUES ('546', '11', '55.00', '0', '2016-01-16', '1', '1', '1', '152', '2');
INSERT INTO `log_alm` VALUES ('547', '20', '56.00', '0', '2016-01-16', '1', '1', '1', '10', '2');
INSERT INTO `log_alm` VALUES ('556', '6', '18.00', '0', '2016-01-16', '1', '1', '1', '140', '2');
INSERT INTO `log_alm` VALUES ('559', '2', '4.00', '0', '2016-01-16', '1', '1', '1', '137', '2');
INSERT INTO `log_alm` VALUES ('560', '2', '4.00', '0', '2016-01-16', '1', '1', '1', '137', '1');
INSERT INTO `log_alm` VALUES ('561', '5', '15.00', '0', '2016-01-16', '1', '1', '1', '11', '2');
INSERT INTO `log_alm` VALUES ('562', '1', '15.00', '0', '2016-01-11', '1', '1', '1', '238', '2');
INSERT INTO `log_alm` VALUES ('563', '2', '30.00', '0', '2016-01-16', '1', '1', '1', '238', '2');
INSERT INTO `log_alm` VALUES ('564', '1', '15.00', '0', '2016-01-16', '1', '1', '1', '158', '1');
INSERT INTO `log_alm` VALUES ('565', '1', '15.00', '0', '2016-01-16', '1', '1', '1', '158', '2');
INSERT INTO `log_alm` VALUES ('566', '2', '10.00', '0', '2016-01-16', '1', '1', '1', '233', '1');
INSERT INTO `log_alm` VALUES ('567', '1', '5.00', '0', '2016-01-16', '1', '1', '1', '234', '1');
INSERT INTO `log_alm` VALUES ('568', '1', '4.00', '0', '2016-01-16', '1', '1', '1', '266', '1');
INSERT INTO `log_alm` VALUES ('569', '2', '10.00', '0', '2016-01-16', '1', '1', '1', '235', '1');
INSERT INTO `log_alm` VALUES ('570', '2', '8.00', '0', '2016-01-16', '1', '1', '1', '267', '1');
INSERT INTO `log_alm` VALUES ('571', '2', '8.00', '0', '2016-01-16', '1', '1', '1', '265', '1');
INSERT INTO `log_alm` VALUES ('572', '1', '4.00', '0', '2016-01-16', '1', '1', '1', '271', '1');
INSERT INTO `log_alm` VALUES ('573', '1', '10.00', '0', '2016-01-16', '1', '1', '1', '268', '1');
INSERT INTO `log_alm` VALUES ('574', '1', '4.00', '0', '2016-01-16', '1', '1', '1', '269', '1');
INSERT INTO `log_alm` VALUES ('575', '1', '4.00', '0', '2016-01-16', '1', '1', '1', '269', '1');
INSERT INTO `log_alm` VALUES ('576', '1', '4.00', '0', '2016-01-16', '1', '1', '1', '272', '1');
INSERT INTO `log_alm` VALUES ('577', '5', '20.00', '0', '2016-01-18', '1', '1', '1', '106', '1');
INSERT INTO `log_alm` VALUES ('579', '5', '20.00', '0', '2016-01-16', '1', '1', '1', '106', '2');
INSERT INTO `log_alm` VALUES ('580', '5', '550.00', '0', '2016-01-19', '1', '1', '1', '125', '1');
INSERT INTO `log_alm` VALUES ('581', '5', '475.00', '0', '2016-01-19', '1', '1', '1', '133', '1');
INSERT INTO `log_alm` VALUES ('582', '5', '500.00', '0', '2016-01-19', '1', '1', '1', '131', '1');
INSERT INTO `log_alm` VALUES ('583', '5', '500.00', '0', '2016-01-19', '1', '1', '1', '273', '1');
INSERT INTO `log_alm` VALUES ('584', '5', '575.00', '0', '2016-01-19', '1', '1', '1', '121', '1');
INSERT INTO `log_alm` VALUES ('585', '5', '525.00', '0', '2016-01-19', '1', '1', '1', '184', '1');
INSERT INTO `log_alm` VALUES ('586', '5', '550.00', '0', '2016-01-19', '1', '1', '1', '181', '1');
INSERT INTO `log_alm` VALUES ('587', '4', '440.00', '0', '2016-01-19', '1', '1', '1', '130', '1');
INSERT INTO `log_alm` VALUES ('588', '3', '195.00', '0', '2016-01-19', '1', '1', '1', '127', '1');
INSERT INTO `log_alm` VALUES ('589', '200', '360.00', '0', '2016-01-19', '1', '1', '1', '155', '1');
INSERT INTO `log_alm` VALUES ('590', '80', '400.00', '0', '2016-01-19', '1', '1', '1', '152', '1');
INSERT INTO `log_alm` VALUES ('591', '300', '810.00', '0', '2016-01-19', '1', '1', '1', '10', '1');
INSERT INTO `log_alm` VALUES ('592', '1', '105.00', '0', '2016-01-19', '1', '1', '1', '184', '2');
INSERT INTO `log_alm` VALUES ('593', '1', '110.00', '0', '2016-01-19', '1', '1', '1', '130', '2');
INSERT INTO `log_alm` VALUES ('594', '1', '115.00', '0', '2016-01-19', '1', '1', '1', '121', '2');
INSERT INTO `log_alm` VALUES ('595', '2', '130.00', '0', '2016-01-19', '1', '1', '1', '127', '2');
INSERT INTO `log_alm` VALUES ('596', '2', '190.00', '0', '2016-01-19', '1', '1', '1', '133', '2');
INSERT INTO `log_alm` VALUES ('599', '2', '220.00', '0', '2016-01-19', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('600', '2', '200.00', '0', '2016-01-19', '1', '1', '1', '273', '2');
INSERT INTO `log_alm` VALUES ('601', '1', '110.00', '0', '2016-01-19', '1', '1', '1', '181', '2');
INSERT INTO `log_alm` VALUES ('602', '3', '300.00', '0', '2016-01-21', '1', '1', '1', '273', '2');
INSERT INTO `log_alm` VALUES ('603', '3', '330.00', '0', '2016-01-20', '1', '1', '1', '181', '2');
INSERT INTO `log_alm` VALUES ('604', '2', '230.00', '0', '2016-01-20', '1', '1', '1', '121', '2');
INSERT INTO `log_alm` VALUES ('605', '3', '285.00', '0', '2016-01-20', '1', '1', '1', '133', '2');
INSERT INTO `log_alm` VALUES ('608', '1', '110.00', '0', '2016-01-20', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('609', '1', '110.00', '0', '2016-01-20', '1', '1', '1', '130', '2');
INSERT INTO `log_alm` VALUES ('610', '160', '288.00', '0', '2016-01-20', '1', '1', '1', '155', '2');
INSERT INTO `log_alm` VALUES ('611', '6', '630.00', '0', '2016-01-19', '1', '1', '1', '183', '1');
INSERT INTO `log_alm` VALUES ('612', '4', '420.00', '0', '2016-01-19', '1', '1', '1', '183', '2');
INSERT INTO `log_alm` VALUES ('613', '1', '110.00', '0', '2016-01-21', '1', '1', '1', '274', '1');
INSERT INTO `log_alm` VALUES ('614', '1', '110.00', '0', '2016-01-21', '1', '1', '1', '274', '2');
INSERT INTO `log_alm` VALUES ('615', '7', '805.00', '0', '2016-01-21', '1', '1', '1', '121', '1');
INSERT INTO `log_alm` VALUES ('616', '4', '440.00', '0', '2016-01-21', '1', '1', '1', '181', '1');
INSERT INTO `log_alm` VALUES ('617', '5', '500.00', '0', '2016-01-21', '1', '1', '1', '131', '1');
INSERT INTO `log_alm` VALUES ('619', '4', '420.00', '0', '2016-01-21', '1', '1', '1', '184', '1');
INSERT INTO `log_alm` VALUES ('620', '7', '665.00', '0', '2016-01-21', '1', '1', '1', '115', '1');
INSERT INTO `log_alm` VALUES ('621', '29', '2755.00', '0', '2016-01-21', '1', '1', '1', '133', '1');
INSERT INTO `log_alm` VALUES ('622', '1', '105.00', '0', '2016-01-21', '1', '1', '1', '183', '2');
INSERT INTO `log_alm` VALUES ('623', '1', '95.00', '0', '2016-01-21', '1', '1', '1', '133', '2');
INSERT INTO `log_alm` VALUES ('624', '1', '115.00', '0', '2016-01-21', '1', '1', '1', '121', '2');
INSERT INTO `log_alm` VALUES ('625', '9', '54.00', '0', '2016-01-21', '1', '1', '1', '275', '1');
INSERT INTO `log_alm` VALUES ('626', '1', '6.00', '0', '2016-01-21', '1', '1', '1', '275', '2');
INSERT INTO `log_alm` VALUES ('627', '1', '5.00', '0', '2016-01-21', '1', '1', '1', '236', '2');
INSERT INTO `log_alm` VALUES ('628', '10', '0.00', '0', '2016-01-21', '1', '1', '1', '276', '1');
INSERT INTO `log_alm` VALUES ('629', '1', '0.00', '0', '2016-01-21', '1', '1', '1', '277', '1');
INSERT INTO `log_alm` VALUES ('631', '4', '0.00', '0', '2016-01-21', '1', '1', '1', '276', '2');
INSERT INTO `log_alm` VALUES ('632', '1', '0.00', '0', '2016-01-21', '1', '1', '1', '277', '2');
INSERT INTO `log_alm` VALUES ('633', '90', '153.00', '0', '2016-01-21', '1', '1', '1', '155', '1');
INSERT INTO `log_alm` VALUES ('636', '1', '110.00', '0', '2016-01-20', '1', '1', '1', '181', '1');
INSERT INTO `log_alm` VALUES ('637', '2', '230.00', '0', '2016-01-20', '1', '1', '1', '121', '1');
INSERT INTO `log_alm` VALUES ('638', '1', '100.00', '0', '2016-01-20', '1', '1', '1', '273', '1');
INSERT INTO `log_alm` VALUES ('639', '1', '105.00', '0', '2016-01-20', '1', '1', '1', '184', '1');
INSERT INTO `log_alm` VALUES ('640', '3', '285.00', '0', '2016-01-20', '1', '1', '1', '133', '1');
INSERT INTO `log_alm` VALUES ('641', '2', '190.00', '0', '2016-01-20', '1', '1', '1', '115', '1');
INSERT INTO `log_alm` VALUES ('642', '2', '220.00', '0', '2016-01-20', '1', '1', '1', '125', '1');
INSERT INTO `log_alm` VALUES ('643', '1', '110.00', '0', '2016-01-20', '1', '1', '1', '181', '2');
INSERT INTO `log_alm` VALUES ('644', '2', '230.00', '0', '2016-01-20', '1', '1', '1', '121', '2');
INSERT INTO `log_alm` VALUES ('645', '1', '100.00', '0', '2016-01-20', '1', '1', '1', '273', '2');
INSERT INTO `log_alm` VALUES ('646', '1', '105.00', '0', '2016-01-20', '1', '1', '1', '184', '2');
INSERT INTO `log_alm` VALUES ('647', '3', '285.00', '0', '2016-01-20', '1', '1', '1', '133', '2');
INSERT INTO `log_alm` VALUES ('648', '2', '190.00', '0', '2016-01-20', '1', '1', '1', '115', '2');
INSERT INTO `log_alm` VALUES ('649', '2', '220.00', '0', '2016-01-20', '1', '1', '1', '125', '2');
INSERT INTO `log_alm` VALUES ('650', '2', '10.00', '0', '2016-01-15', '1', '1', '1', '233', '2');
INSERT INTO `log_alm` VALUES ('651', '1', '5.00', '0', '2016-01-15', '1', '1', '1', '234', '2');
INSERT INTO `log_alm` VALUES ('652', '1', '4.00', '0', '2016-01-15', '1', '1', '1', '266', '2');
INSERT INTO `log_alm` VALUES ('653', '2', '10.00', '0', '2016-01-16', '1', '1', '1', '235', '2');
INSERT INTO `log_alm` VALUES ('654', '2', '8.00', '0', '2016-01-15', '1', '1', '1', '267', '2');
INSERT INTO `log_alm` VALUES ('655', '2', '8.00', '0', '2016-01-15', '1', '1', '1', '265', '2');
INSERT INTO `log_alm` VALUES ('656', '1', '4.00', '0', '2016-01-15', '1', '1', '1', '271', '2');
INSERT INTO `log_alm` VALUES ('657', '1', '10.00', '0', '2016-01-15', '1', '1', '1', '268', '2');
INSERT INTO `log_alm` VALUES ('658', '2', '8.00', '0', '2016-01-15', '1', '1', '1', '269', '2');
INSERT INTO `log_alm` VALUES ('659', '1', '4.00', '0', '2016-01-15', '1', '1', '1', '272', '2');
INSERT INTO `log_alm` VALUES ('660', '3', '12.00', '0', '2016-01-15', '1', '1', '1', '174', '2');
INSERT INTO `log_alm` VALUES ('661', '22', '88.00', '0', '2016-01-15', '1', '1', '1', '177', '2');
INSERT INTO `log_alm` VALUES ('662', '5', '20.00', '0', '2016-01-22', '1', '1', '1', '89', '2');
INSERT INTO `log_alm` VALUES ('663', '20', '100.00', '0', '2016-01-23', '1', '1', '1', '152', '2');
INSERT INTO `log_alm` VALUES ('664', '3', '300.00', '0', '2016-01-23', '1', '1', '1', '273', '1');
INSERT INTO `log_alm` VALUES ('665', '2', '200.00', '0', '2016-01-23', '1', '1', '1', '273', '2');
INSERT INTO `log_alm` VALUES ('666', '50', '135.00', '0', '2016-01-23', '1', '1', '1', '10', '2');
INSERT INTO `log_alm` VALUES ('667', '200', '340.00', '0', '2016-01-23', '1', '1', '1', '155', '1');

-- ----------------------------
-- Table structure for `log_area`
-- ----------------------------
DROP TABLE IF EXISTS `log_area`;
CREATE TABLE `log_area` (
  `id_log` int(11) NOT NULL AUTO_INCREMENT,
  `cant` int(11) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `id_estado` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `id_mov` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_log`),
  KEY `Refarea_venta53` (`id_area`) USING BTREE,
  KEY `Refestado_prod54` (`id_estado`) USING BTREE,
  KEY `Refusuarios56` (`uid`) USING BTREE,
  KEY `Refproducto60` (`id_prod`) USING BTREE,
  KEY `Reftipo_mov71` (`id_mov`) USING BTREE,
  CONSTRAINT `log_area_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_venta` (`id_area`),
  CONSTRAINT `log_area_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado_prod` (`id_estado`),
  CONSTRAINT `log_area_ibfk_3` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `log_area_ibfk_4` FOREIGN KEY (`id_mov`) REFERENCES `tipo_mov` (`id_mov`),
  CONSTRAINT `log_area_ibfk_5` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=267 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log_area
-- ----------------------------
INSERT INTO `log_area` VALUES ('1', '1', '140.00', '2015-12-26', '3', '1', '1', '130', '1');
INSERT INTO `log_area` VALUES ('3', '1', '85.00', '2015-12-26', '3', '1', '1', '182', '1');
INSERT INTO `log_area` VALUES ('9', '1', '160.00', '2015-12-26', '3', '1', '1', '124', '1');
INSERT INTO `log_area` VALUES ('11', '2', '250.00', '2015-12-26', '3', '1', '1', '134', '1');
INSERT INTO `log_area` VALUES ('19', '5', '100.00', '2015-12-28', '3', '1', '1', '153', '1');
INSERT INTO `log_area` VALUES ('22', '1', '8.00', '2015-12-26', '3', '1', '1', '82', '1');
INSERT INTO `log_area` VALUES ('23', '2', '24.00', '2015-12-26', '3', '1', '1', '163', '1');
INSERT INTO `log_area` VALUES ('24', '1', '6.00', '2015-12-26', '3', '1', '1', '205', '1');
INSERT INTO `log_area` VALUES ('26', '1', '25.00', '2015-12-26', '3', '1', '1', '153', '1');
INSERT INTO `log_area` VALUES ('28', '1', '8.00', '2015-12-26', '3', '1', '1', '82', '1');
INSERT INTO `log_area` VALUES ('29', '2', '24.00', '2015-12-26', '3', '1', '1', '163', '1');
INSERT INTO `log_area` VALUES ('31', '1', '25.00', '2015-12-26', '3', '1', '1', '153', '1');
INSERT INTO `log_area` VALUES ('33', '1', '150.00', '2015-12-26', '3', '1', '1', '206', '1');
INSERT INTO `log_area` VALUES ('37', '1', '6.00', '2015-12-28', '3', '1', '1', '137', '1');
INSERT INTO `log_area` VALUES ('38', '1', '3.00', '2015-12-28', '3', '1', '1', '35', '1');
INSERT INTO `log_area` VALUES ('39', '1', '8.00', '2015-12-28', '3', '1', '1', '140', '1');
INSERT INTO `log_area` VALUES ('40', '4', '32.00', '2015-12-28', '3', '1', '1', '88', '1');
INSERT INTO `log_area` VALUES ('41', '1', '10.00', '2015-12-28', '3', '1', '1', '90', '1');
INSERT INTO `log_area` VALUES ('42', '1', '10.00', '2015-12-29', '3', '1', '1', '207', '1');
INSERT INTO `log_area` VALUES ('43', '2', '300.00', '2015-12-29', '3', '1', '1', '124', '1');
INSERT INTO `log_area` VALUES ('44', '1', '2.00', '2015-12-29', '3', '1', '1', '146', '1');
INSERT INTO `log_area` VALUES ('45', '1', '2.00', '2015-12-29', '3', '1', '1', '146', '1');
INSERT INTO `log_area` VALUES ('46', '1', '10.00', '2015-12-29', '3', '1', '1', '207', '1');
INSERT INTO `log_area` VALUES ('47', '20', '120.00', '2015-12-30', '3', '1', '1', '155', '1');
INSERT INTO `log_area` VALUES ('48', '1', '8.00', '2015-12-30', '3', '1', '1', '89', '1');
INSERT INTO `log_area` VALUES ('49', '1', '150.00', '2016-01-04', '3', '1', '1', '208', '1');
INSERT INTO `log_area` VALUES ('50', '2', '20.00', '2016-01-04', '3', '1', '1', '135', '1');
INSERT INTO `log_area` VALUES ('52', '1', '10.00', '2016-01-04', '3', '1', '1', '209', '1');
INSERT INTO `log_area` VALUES ('53', '6', '60.00', '2016-01-04', '3', '1', '1', '79', '1');
INSERT INTO `log_area` VALUES ('54', '1', '10.00', '2016-01-04', '3', '1', '1', '79', '1');
INSERT INTO `log_area` VALUES ('55', '5', '50.00', '2016-01-04', '3', '1', '1', '92', '1');
INSERT INTO `log_area` VALUES ('56', '5', '50.00', '2016-01-04', '3', '1', '1', '85', '1');
INSERT INTO `log_area` VALUES ('57', '3', '30.00', '2016-01-04', '3', '1', '1', '96', '1');
INSERT INTO `log_area` VALUES ('58', '2', '20.00', '2016-01-04', '3', '1', '1', '110', '1');
INSERT INTO `log_area` VALUES ('59', '1', '10.00', '2016-01-04', '3', '1', '1', '100', '1');
INSERT INTO `log_area` VALUES ('60', '7', '70.00', '2016-01-04', '3', '1', '1', '95', '1');
INSERT INTO `log_area` VALUES ('62', '3', '30.00', '2016-01-04', '3', '1', '1', '98', '1');
INSERT INTO `log_area` VALUES ('63', '2', '20.00', '2016-01-04', '3', '1', '1', '89', '1');
INSERT INTO `log_area` VALUES ('64', '6', '60.00', '2016-01-04', '3', '1', '1', '109', '1');
INSERT INTO `log_area` VALUES ('65', '2', '20.00', '2016-01-04', '3', '1', '1', '108', '1');
INSERT INTO `log_area` VALUES ('66', '5', '50.00', '2016-01-04', '3', '1', '1', '83', '1');
INSERT INTO `log_area` VALUES ('67', '4', '40.00', '2016-01-04', '3', '1', '1', '82', '1');
INSERT INTO `log_area` VALUES ('68', '1', '10.00', '2016-01-04', '3', '1', '1', '106', '1');
INSERT INTO `log_area` VALUES ('69', '3', '30.00', '2016-01-04', '3', '1', '1', '106', '1');
INSERT INTO `log_area` VALUES ('70', '2', '20.00', '2016-01-04', '3', '1', '1', '77', '1');
INSERT INTO `log_area` VALUES ('71', '3', '30.00', '2016-01-04', '3', '1', '1', '103', '1');
INSERT INTO `log_area` VALUES ('72', '1', '10.00', '2016-01-04', '3', '1', '1', '113', '1');
INSERT INTO `log_area` VALUES ('74', '4', '40.00', '2016-01-04', '3', '1', '1', '81', '1');
INSERT INTO `log_area` VALUES ('75', '4', '40.00', '2016-01-04', '3', '1', '1', '90', '1');
INSERT INTO `log_area` VALUES ('76', '13', '130.00', '2016-01-04', '3', '1', '1', '104', '1');
INSERT INTO `log_area` VALUES ('77', '2', '20.00', '2016-01-04', '3', '1', '1', '135', '1');
INSERT INTO `log_area` VALUES ('78', '3', '30.00', '2016-01-04', '3', '1', '1', '86', '1');
INSERT INTO `log_area` VALUES ('79', '1', '10.00', '2016-01-04', '3', '1', '1', '112', '1');
INSERT INTO `log_area` VALUES ('80', '2', '20.00', '2016-01-04', '3', '1', '1', '101', '1');
INSERT INTO `log_area` VALUES ('81', '2', '20.00', '2016-01-04', '3', '1', '1', '80', '1');
INSERT INTO `log_area` VALUES ('82', '5', '50.00', '2016-01-04', '3', '1', '1', '110', '1');
INSERT INTO `log_area` VALUES ('83', '7', '70.00', '2016-01-04', '3', '1', '1', '210', '1');
INSERT INTO `log_area` VALUES ('84', '2', '20.00', '2016-01-04', '3', '1', '1', '97', '1');
INSERT INTO `log_area` VALUES ('85', '2', '20.00', '2016-01-04', '3', '1', '1', '98', '1');
INSERT INTO `log_area` VALUES ('86', '2', '20.00', '2016-01-04', '3', '1', '1', '109', '1');
INSERT INTO `log_area` VALUES ('87', '1', '10.00', '2016-01-04', '3', '1', '1', '111', '1');
INSERT INTO `log_area` VALUES ('88', '3', '45.00', '2016-01-04', '3', '1', '1', '211', '1');
INSERT INTO `log_area` VALUES ('89', '6', '60.00', '2016-01-04', '3', '1', '1', '6', '1');
INSERT INTO `log_area` VALUES ('90', '2', '10.00', '2016-01-04', '3', '1', '1', '151', '1');
INSERT INTO `log_area` VALUES ('91', '4', '20.00', '2016-01-04', '3', '1', '1', '149', '1');
INSERT INTO `log_area` VALUES ('93', '1', '10.00', '2016-01-04', '3', '1', '1', '205', '1');
INSERT INTO `log_area` VALUES ('94', '1', '5.00', '2016-01-04', '3', '1', '1', '139', '1');
INSERT INTO `log_area` VALUES ('95', '6', '90.00', '2016-01-04', '3', '1', '1', '7', '1');
INSERT INTO `log_area` VALUES ('96', '4', '40.00', '2016-01-04', '3', '1', '1', '212', '1');
INSERT INTO `log_area` VALUES ('97', '4', '40.00', '2016-01-04', '3', '1', '1', '213', '1');
INSERT INTO `log_area` VALUES ('98', '3', '15.00', '2016-01-04', '3', '1', '1', '137', '1');
INSERT INTO `log_area` VALUES ('99', '3', '15.00', '2016-01-04', '3', '1', '1', '138', '1');
INSERT INTO `log_area` VALUES ('100', '2', '16.00', '2016-01-04', '3', '1', '1', '141', '1');
INSERT INTO `log_area` VALUES ('101', '2', '20.00', '2016-01-04', '3', '1', '1', '214', '1');
INSERT INTO `log_area` VALUES ('102', '2', '30.00', '2016-01-04', '3', '1', '1', '41', '1');
INSERT INTO `log_area` VALUES ('103', '7', '35.00', '2016-01-04', '3', '1', '1', '215', '1');
INSERT INTO `log_area` VALUES ('104', '1', '15.00', '2016-01-04', '3', '1', '1', '64', '1');
INSERT INTO `log_area` VALUES ('105', '1', '15.00', '2016-01-04', '3', '1', '1', '216', '1');
INSERT INTO `log_area` VALUES ('106', '2', '16.00', '2016-01-04', '3', '1', '1', '217', '1');
INSERT INTO `log_area` VALUES ('107', '2', '6.00', '2016-01-04', '3', '1', '1', '218', '1');
INSERT INTO `log_area` VALUES ('108', '9', '9.00', '2016-01-04', '3', '1', '1', '219', '1');
INSERT INTO `log_area` VALUES ('109', '3', '15.00', '2016-01-04', '3', '1', '1', '35', '1');
INSERT INTO `log_area` VALUES ('110', '5', '15.00', '2016-01-04', '3', '1', '1', '146', '1');
INSERT INTO `log_area` VALUES ('111', '1', '30.00', '2016-01-04', '3', '1', '1', '157', '1');
INSERT INTO `log_area` VALUES ('112', '2', '60.00', '2016-01-04', '3', '1', '1', '161', '1');
INSERT INTO `log_area` VALUES ('113', '1', '150.00', '2016-01-04', '3', '1', '1', '221', '1');
INSERT INTO `log_area` VALUES ('116', '1', '120.00', '2016-01-04', '3', '1', '1', '222', '1');
INSERT INTO `log_area` VALUES ('118', '1', '15.00', '2016-01-04', '3', '1', '1', '223', '1');
INSERT INTO `log_area` VALUES ('119', '1', '12.00', '2016-01-04', '3', '1', '1', '224', '1');
INSERT INTO `log_area` VALUES ('120', '2', '24.00', '2016-01-04', '3', '1', '1', '225', '1');
INSERT INTO `log_area` VALUES ('121', '5', '60.00', '2016-01-04', '3', '1', '1', '226', '1');
INSERT INTO `log_area` VALUES ('122', '2', '24.00', '2016-01-04', '3', '1', '1', '227', '1');
INSERT INTO `log_area` VALUES ('123', '2', '24.00', '2016-01-04', '3', '1', '1', '228', '1');
INSERT INTO `log_area` VALUES ('124', '1', '12.00', '2016-01-04', '3', '1', '1', '229', '1');
INSERT INTO `log_area` VALUES ('125', '1', '12.00', '2016-01-04', '3', '1', '1', '230', '1');
INSERT INTO `log_area` VALUES ('126', '1', '12.00', '2016-01-04', '3', '1', '1', '231', '1');
INSERT INTO `log_area` VALUES ('127', '1', '12.00', '2016-01-04', '3', '1', '1', '232', '1');
INSERT INTO `log_area` VALUES ('129', '2', '20.00', '2016-01-04', '3', '1', '1', '78', '1');
INSERT INTO `log_area` VALUES ('130', '2', '20.00', '2016-01-04', '3', '1', '1', '114', '1');
INSERT INTO `log_area` VALUES ('131', '2', '20.00', '2016-01-04', '3', '1', '1', '110', '1');
INSERT INTO `log_area` VALUES ('132', '2', '20.00', '2016-01-04', '3', '1', '1', '136', '1');
INSERT INTO `log_area` VALUES ('133', '1', '10.00', '2016-01-04', '3', '1', '1', '108', '1');
INSERT INTO `log_area` VALUES ('134', '1', '10.00', '2016-01-04', '3', '1', '1', '239', '1');
INSERT INTO `log_area` VALUES ('135', '1', '10.00', '2016-01-04', '3', '1', '1', '240', '1');
INSERT INTO `log_area` VALUES ('136', '2', '20.00', '2016-01-04', '3', '1', '1', '241', '1');
INSERT INTO `log_area` VALUES ('137', '2', '20.00', '2016-01-04', '3', '1', '1', '103', '1');
INSERT INTO `log_area` VALUES ('138', '2', '20.00', '2016-01-04', '3', '1', '1', '109', '1');
INSERT INTO `log_area` VALUES ('139', '1', '10.00', '2016-01-04', '3', '1', '1', '106', '1');
INSERT INTO `log_area` VALUES ('140', '1', '10.00', '2016-01-04', '3', '1', '1', '245', '1');
INSERT INTO `log_area` VALUES ('141', '10', '50.00', '2016-01-05', '3', '1', '1', '149', '1');
INSERT INTO `log_area` VALUES ('142', '1', '150.00', '2016-01-05', '3', '1', '1', '183', '1');
INSERT INTO `log_area` VALUES ('143', '5', '50.00', '2016-01-04', '3', '1', '1', '11', '1');
INSERT INTO `log_area` VALUES ('144', '1', '15.00', '2016-01-04', '3', '1', '1', '144', '1');
INSERT INTO `log_area` VALUES ('145', '1', '200.00', '2016-01-06', '3', '1', '1', '256', '1');
INSERT INTO `log_area` VALUES ('146', '2', '220.00', '2016-01-06', '4', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('147', '2', '250.00', '2016-01-06', '4', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('148', '1', '75.00', '2016-01-06', '3', '1', '1', '182', '1');
INSERT INTO `log_area` VALUES ('149', '1', '125.00', '2016-01-06', '4', '1', '1', '181', '1');
INSERT INTO `log_area` VALUES ('150', '1', '120.00', '2016-01-06', '4', '1', '1', '183', '1');
INSERT INTO `log_area` VALUES ('152', '1', '110.00', '2016-01-06', '4', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('154', '1', '110.00', '2016-01-06', '4', '1', '1', '131', '1');
INSERT INTO `log_area` VALUES ('155', '1', '130.00', '2016-01-06', '4', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('156', '2', '30.00', '2016-01-06', '4', '1', '1', '144', '1');
INSERT INTO `log_area` VALUES ('157', '4', '40.00', '2016-01-07', '3', '1', '1', '89', '1');
INSERT INTO `log_area` VALUES ('158', '2', '20.00', '2016-01-07', '3', '1', '1', '88', '1');
INSERT INTO `log_area` VALUES ('159', '1', '6.00', '2016-01-04', '3', '1', '1', '155', '1');
INSERT INTO `log_area` VALUES ('160', '5', '500.00', '2016-01-04', '6', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('161', '3', '285.00', '2016-01-04', '6', '1', '1', '115', '1');
INSERT INTO `log_area` VALUES ('162', '2', '230.00', '2016-01-04', '6', '1', '1', '181', '1');
INSERT INTO `log_area` VALUES ('163', '2', '230.00', '2016-01-04', '6', '1', '1', '183', '1');
INSERT INTO `log_area` VALUES ('164', '6', '675.00', '2016-01-04', '6', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('165', '60', '120.00', '2016-01-04', '6', '1', '1', '155', '1');
INSERT INTO `log_area` VALUES ('166', '1', '100.00', '2016-01-04', '6', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('167', '1', '120.00', '2016-01-09', '4', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('168', '1', '115.00', '2016-01-09', '4', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('169', '2', '280.00', '2016-01-09', '3', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('170', '2', '170.00', '2016-01-09', '3', '1', '1', '129', '1');
INSERT INTO `log_area` VALUES ('171', '1', '140.00', '2016-01-09', '3', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('173', '1', '130.00', '2016-01-11', '4', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('174', '1', '180.00', '2016-01-12', '3', '1', '1', '259', '1');
INSERT INTO `log_area` VALUES ('175', '4', '340.00', '2016-01-12', '3', '1', '1', '129', '1');
INSERT INTO `log_area` VALUES ('176', '1', '10.00', '2016-01-04', '3', '1', '1', '260', '1');
INSERT INTO `log_area` VALUES ('177', '2', '170.00', '2016-01-13', '3', '1', '1', '261', '1');
INSERT INTO `log_area` VALUES ('181', '1', '100.00', '2016-01-15', '3', '1', '1', '262', '1');
INSERT INTO `log_area` VALUES ('182', '1', '100.00', '2016-01-08', '3', '1', '1', '263', '1');
INSERT INTO `log_area` VALUES ('184', '1', '6.00', '2016-01-15', '3', '1', '1', '142', '1');
INSERT INTO `log_area` VALUES ('185', '1', '140.00', '2016-01-16', '3', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('186', '1', '125.00', '2016-01-16', '3', '1', '1', '131', '1');
INSERT INTO `log_area` VALUES ('187', '1', '12.00', '2016-01-16', '3', '1', '1', '84', '1');
INSERT INTO `log_area` VALUES ('188', '4', '40.00', '2016-01-16', '3', '1', '1', '84', '1');
INSERT INTO `log_area` VALUES ('190', '5', '50.00', '2016-01-16', '3', '1', '1', '244', '1');
INSERT INTO `log_area` VALUES ('191', '3', '30.00', '2016-01-16', '3', '1', '1', '243', '1');
INSERT INTO `log_area` VALUES ('192', '2', '20.00', '2016-01-16', '3', '1', '1', '91', '1');
INSERT INTO `log_area` VALUES ('193', '2', '24.00', '2016-01-16', '3', '1', '1', '242', '1');
INSERT INTO `log_area` VALUES ('194', '10', '100.00', '2016-01-16', '3', '1', '1', '100', '1');
INSERT INTO `log_area` VALUES ('195', '7', '70.00', '2016-01-16', '3', '1', '1', '95', '1');
INSERT INTO `log_area` VALUES ('196', '1', '10.00', '2016-01-16', '3', '1', '1', '102', '1');
INSERT INTO `log_area` VALUES ('197', '2', '20.00', '2016-01-16', '3', '1', '1', '247', '1');
INSERT INTO `log_area` VALUES ('198', '3', '30.00', '2016-01-16', '3', '1', '1', '248', '1');
INSERT INTO `log_area` VALUES ('199', '1', '10.00', '2016-01-16', '3', '1', '1', '249', '1');
INSERT INTO `log_area` VALUES ('200', '11', '88.00', '2016-01-16', '3', '1', '1', '152', '1');
INSERT INTO `log_area` VALUES ('201', '20', '120.00', '2016-01-16', '3', '1', '1', '10', '1');
INSERT INTO `log_area` VALUES ('202', '14', '84.00', '2016-01-16', '3', '1', '1', '264', '1');
INSERT INTO `log_area` VALUES ('203', '1', '6.00', '2016-01-16', '3', '1', '1', '155', '1');
INSERT INTO `log_area` VALUES ('204', '10', '100.00', '2016-01-16', '3', '1', '1', '6', '1');
INSERT INTO `log_area` VALUES ('205', '6', '48.00', '2016-01-16', '3', '1', '1', '140', '1');
INSERT INTO `log_area` VALUES ('206', '1', '8.00', '2016-01-16', '3', '1', '1', '141', '1');
INSERT INTO `log_area` VALUES ('207', '2', '10.00', '2016-01-16', '3', '1', '1', '137', '1');
INSERT INTO `log_area` VALUES ('208', '5', '50.00', '2016-01-16', '3', '1', '1', '11', '1');
INSERT INTO `log_area` VALUES ('209', '1', '25.00', '2016-01-11', '3', '1', '1', '238', '1');
INSERT INTO `log_area` VALUES ('210', '2', '50.00', '2016-01-16', '3', '1', '1', '238', '1');
INSERT INTO `log_area` VALUES ('211', '1', '20.00', '2016-01-16', '3', '1', '1', '158', '1');
INSERT INTO `log_area` VALUES ('212', '5', '50.00', '2016-01-16', '3', '1', '1', '106', '1');
INSERT INTO `log_area` VALUES ('214', '1', '130.00', '2016-01-19', '3', '1', '1', '184', '1');
INSERT INTO `log_area` VALUES ('215', '1', '130.00', '2016-01-19', '3', '1', '1', '130', '1');
INSERT INTO `log_area` VALUES ('216', '1', '135.00', '2016-01-19', '3', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('217', '2', '170.00', '2016-01-19', '3', '1', '1', '127', '1');
INSERT INTO `log_area` VALUES ('218', '2', '240.00', '2016-01-19', '3', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('219', '3', '360.00', '2016-01-19', '3', '1', '1', '115', '1');
INSERT INTO `log_area` VALUES ('220', '2', '280.00', '2016-01-19', '3', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('221', '2', '240.00', '2016-01-19', '3', '1', '1', '273', '1');
INSERT INTO `log_area` VALUES ('222', '1', '130.00', '2016-01-19', '3', '1', '1', '181', '1');
INSERT INTO `log_area` VALUES ('223', '3', '315.00', '2016-01-21', '6', '1', '1', '273', '1');
INSERT INTO `log_area` VALUES ('224', '3', '345.00', '2016-01-20', '6', '1', '1', '181', '1');
INSERT INTO `log_area` VALUES ('225', '2', '240.00', '2016-01-20', '6', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('226', '3', '300.00', '2016-01-20', '6', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('229', '1', '95.00', '2016-01-20', '6', '1', '1', '115', '1');
INSERT INTO `log_area` VALUES ('230', '1', '115.00', '2016-01-20', '6', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('231', '1', '115.00', '2016-01-20', '6', '1', '1', '130', '1');
INSERT INTO `log_area` VALUES ('233', '160', '320.00', '2016-01-20', '6', '1', '1', '155', '1');
INSERT INTO `log_area` VALUES ('234', '4', '460.00', '2016-01-19', '6', '1', '1', '183', '1');
INSERT INTO `log_area` VALUES ('235', '1', '135.00', '2016-01-21', '3', '1', '1', '274', '1');
INSERT INTO `log_area` VALUES ('236', '1', '130.00', '2016-01-21', '3', '1', '1', '183', '1');
INSERT INTO `log_area` VALUES ('237', '1', '120.00', '2016-01-21', '3', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('238', '1', '135.00', '2016-01-21', '3', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('239', '1', '10.00', '2016-01-21', '3', '1', '1', '275', '1');
INSERT INTO `log_area` VALUES ('240', '1', '10.00', '2016-01-21', '3', '1', '1', '236', '1');
INSERT INTO `log_area` VALUES ('241', '4', '48.00', '2016-01-21', '3', '1', '1', '276', '1');
INSERT INTO `log_area` VALUES ('242', '1', '10.00', '2016-01-21', '3', '1', '1', '277', '1');
INSERT INTO `log_area` VALUES ('243', '5', '25.00', '2016-01-21', '3', '1', '1', '264', '1');
INSERT INTO `log_area` VALUES ('244', '1', '125.00', '2016-01-20', '4', '1', '1', '181', '1');
INSERT INTO `log_area` VALUES ('245', '2', '260.00', '2016-01-20', '3', '1', '1', '121', '1');
INSERT INTO `log_area` VALUES ('246', '1', '115.00', '2016-01-20', '3', '1', '1', '273', '1');
INSERT INTO `log_area` VALUES ('247', '1', '130.00', '2016-01-20', '3', '1', '1', '184', '1');
INSERT INTO `log_area` VALUES ('248', '3', '330.00', '2016-01-20', '3', '1', '1', '133', '1');
INSERT INTO `log_area` VALUES ('249', '2', '216.00', '2016-01-20', '3', '1', '1', '115', '1');
INSERT INTO `log_area` VALUES ('250', '2', '260.00', '2016-01-20', '3', '1', '1', '125', '1');
INSERT INTO `log_area` VALUES ('251', '2', '30.00', '2016-01-15', '5', '1', '1', '233', '1');
INSERT INTO `log_area` VALUES ('252', '1', '20.00', '2016-01-15', '5', '1', '1', '234', '1');
INSERT INTO `log_area` VALUES ('253', '1', '30.00', '2016-01-15', '5', '1', '1', '266', '1');
INSERT INTO `log_area` VALUES ('254', '2', '50.00', '2016-01-16', '5', '1', '1', '235', '1');
INSERT INTO `log_area` VALUES ('255', '2', '50.00', '2016-01-15', '5', '1', '1', '267', '1');
INSERT INTO `log_area` VALUES ('256', '2', '30.00', '2016-01-15', '5', '1', '1', '265', '1');
INSERT INTO `log_area` VALUES ('257', '1', '15.00', '2016-01-15', '5', '1', '1', '271', '1');
INSERT INTO `log_area` VALUES ('258', '1', '20.00', '2016-01-15', '5', '1', '1', '268', '1');
INSERT INTO `log_area` VALUES ('259', '2', '30.00', '2016-01-15', '5', '1', '1', '269', '1');
INSERT INTO `log_area` VALUES ('260', '1', '12.00', '2016-01-15', '5', '1', '1', '272', '1');
INSERT INTO `log_area` VALUES ('261', '3', '30.00', '2016-01-15', '5', '1', '1', '174', '1');
INSERT INTO `log_area` VALUES ('262', '22', '220.00', '2016-01-15', '5', '1', '1', '177', '1');
INSERT INTO `log_area` VALUES ('263', '5', '50.00', '2016-01-22', '3', '1', '1', '89', '1');
INSERT INTO `log_area` VALUES ('264', '20', '160.00', '2016-01-23', '3', '1', '1', '152', '1');
INSERT INTO `log_area` VALUES ('265', '2', '210.00', '2016-01-23', '6', '1', '1', '273', '1');
INSERT INTO `log_area` VALUES ('266', '50', '135.00', '2016-01-23', '6', '1', '1', '10', '1');

-- ----------------------------
-- Table structure for `log_inv_mbasicos`
-- ----------------------------
DROP TABLE IF EXISTS `log_inv_mbasicos`;
CREATE TABLE `log_inv_mbasicos` (
  `id_log` int(11) NOT NULL AUTO_INCREMENT,
  `cant` int(11) DEFAULT NULL,
  `importe` float(8,0) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `id_estado` int(11) DEFAULT NULL,
  `id_mov` int(11) DEFAULT NULL,
  `id_alm` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_log`),
  KEY `Refusuarios78` (`uid`) USING BTREE,
  KEY `Refproducto79` (`id_prod`) USING BTREE,
  KEY `Refestado_prod80` (`id_estado`) USING BTREE,
  KEY `Reftipo_mov81` (`id_mov`) USING BTREE,
  KEY `Refalmacen82` (`id_alm`) USING BTREE,
  CONSTRAINT `log_inv_mbasicos_ibfk_1` FOREIGN KEY (`id_alm`) REFERENCES `almacen` (`id_alm`),
  CONSTRAINT `log_inv_mbasicos_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado_prod` (`id_estado`),
  CONSTRAINT `log_inv_mbasicos_ibfk_3` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `log_inv_mbasicos_ibfk_4` FOREIGN KEY (`id_mov`) REFERENCES `tipo_mov` (`id_mov`),
  CONSTRAINT `log_inv_mbasicos_ibfk_5` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log_inv_mbasicos
-- ----------------------------

-- ----------------------------
-- Table structure for `notificaciones`
-- ----------------------------
DROP TABLE IF EXISTS `notificaciones`;
CREATE TABLE `notificaciones` (
  `id_notif` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `name_user` text,
  `asunto` text,
  `contenido` text,
  PRIMARY KEY (`id_notif`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notificaciones
-- ----------------------------

-- ----------------------------
-- Table structure for `perfil`
-- ----------------------------
DROP TABLE IF EXISTS `perfil`;
CREATE TABLE `perfil` (
  `uid` int(11) NOT NULL,
  `nombre` text,
  `apellidos` text,
  `telefono` text,
  `foto` text,
  `direccion` text,
  `sexo` char(10) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  PRIMARY KEY (`uid`),
  CONSTRAINT `perfil_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of perfil
-- ----------------------------
INSERT INTO `perfil` VALUES ('1', 'Jeyser', 'Aguilar', '53559363', 'Kaspersky.png', 'San Clemente e/ Desenganno y Camposanto 371 A', 'M', '27', '1987-08-04');
INSERT INTO `perfil` VALUES ('4', '', '', '', '', '', '', '0', '0000-00-00');
INSERT INTO `perfil` VALUES ('5', 'Roberto', 'Badía Ramírez', '53413298', 'LOGO.jpg', 'Calle Padre Felipe Edif. 14 Apto #7 Rpto La Caridad.', 'M', '28', '1987-09-06');
INSERT INTO `perfil` VALUES ('6', '', '', '', '', '', '', '0', '0000-00-00');

-- ----------------------------
-- Table structure for `producto`
-- ----------------------------
DROP TABLE IF EXISTS `producto`;
CREATE TABLE `producto` (
  `id_prod` int(11) NOT NULL AUTO_INCREMENT,
  `nomb_prod` text,
  `p_costo` decimal(10,2) DEFAULT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_prod`)
) ENGINE=InnoDB AUTO_INCREMENT=278 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of producto
-- ----------------------------
INSERT INTO `producto` VALUES ('1', 'Memorias 8GB', '4.00', '8GB ADATA');
INSERT INTO `producto` VALUES ('5', 'Memorias 16GB', '8.00', '16GB ADATA');
INSERT INTO `producto` VALUES ('6', 'Memorias 8GB usb3', '6.00', '8GB USB3');
INSERT INTO `producto` VALUES ('7', 'Memorias 16GB usb3', '9.00', '16GB USB 3');
INSERT INTO `producto` VALUES ('8', 'Carteritas', '3.00', 'Carteritas de cuero');
INSERT INTO `producto` VALUES ('9', 'MicroSD 4GB', '2.00', '4GB ADATA');
INSERT INTO `producto` VALUES ('10', 'MicroSD 8GB', '2.70', '8GB ADATA');
INSERT INTO `producto` VALUES ('11', 'Estuche de Cuero', '3.00', 'Protectores de Cuero');
INSERT INTO `producto` VALUES ('12', 'Silicona', '5.00', 'Cover de Silicona para telefonos');
INSERT INTO `producto` VALUES ('13', 'Bumper', '5.00', 'Bumper de IPHONE');
INSERT INTO `producto` VALUES ('14', 'Estuche', '5.00', 'Estuche de 7\"');
INSERT INTO `producto` VALUES ('15', 'Estuche Taurus', '7.00', 'Estuche de 12\"');
INSERT INTO `producto` VALUES ('16', 'Estuche 11\"', '7.00', 'Estuche de 11\"');
INSERT INTO `producto` VALUES ('17', 'Estuche 14\"', '7.00', 'Estuche de 14\"');
INSERT INTO `producto` VALUES ('18', 'Estuche de Ipad', '10.00', 'Estuche para IPAD');
INSERT INTO `producto` VALUES ('19', 'DDR 3 4GB', '25.00', '4GB DDR 3 ADATA');
INSERT INTO `producto` VALUES ('20', 'DDR 3 2GB', '20.00', '2GB DDR 3 ADATA');
INSERT INTO `producto` VALUES ('21', 'DDR 2 1GB', '10.00', '1GB DDR 2');
INSERT INTO `producto` VALUES ('22', 'DDR 3 Laptop 4GB', '15.00', '4GB DDR 3 Laptop');
INSERT INTO `producto` VALUES ('23', 'DDR3 Laptop 2GB', '10.00', '2GB DDR 3 Laptop');
INSERT INTO `producto` VALUES ('26', 'Samsung S2', '150.00', 'SAMSUNG S2 Hercules');
INSERT INTO `producto` VALUES ('27', 'Nokia X3', '35.00', 'Nokia X3');
INSERT INTO `producto` VALUES ('30', null, null, null);
INSERT INTO `producto` VALUES ('32', 'Tablet Dell 3730', '188.00', 'Tablet Dell 7 pulgadas Android 4.4.2');
INSERT INTO `producto` VALUES ('33', 'LED LG 20 pulgadas', '105.00', 'LG LED 20 pulgadas 20M35A-B');
INSERT INTO `producto` VALUES ('34', 'Micro G3220 3Ghz', '78.00', '4ta Gen CPU G3220 3Ghz');
INSERT INTO `producto` VALUES ('35', 'Pad Mouse', '2.00', 'Pad Mouse con Apoyadera');
INSERT INTO `producto` VALUES ('36', 'WD 1TB USB3', '80.00', 'Externo 1TB HDD USB3 WD Elements');
INSERT INTO `producto` VALUES ('37', 'TOSHIBA 1TB 7200RPM', '66.00', '1TB 3.5 pulgadas 7200 RPM');
INSERT INTO `producto` VALUES ('38', 'DVD-RW 24x', '20.00', 'DVD-RW 24x LG interno');
INSERT INTO `producto` VALUES ('39', 'H81M-A Asus', '74.00', 'ASUS H81M-A LGA 1150');
INSERT INTO `producto` VALUES ('40', 'H81M-C Asus', '81.00', 'ASUS H81M-C LGA 1150');
INSERT INTO `producto` VALUES ('41', 'Mouse Mini Optico', '8.00', 'Mouse USB Mini Optico');
INSERT INTO `producto` VALUES ('42', 'EVGA 210 1GB', '42.00', 'EVGA 210 1GB DDR3');
INSERT INTO `producto` VALUES ('43', 'Cartucho CANON Negro', '19.00', 'CANON Negro PG-210  MP250');
INSERT INTO `producto` VALUES ('44', 'Cartucho CANON Color', '24.00', 'CANON Color CL-211 MP250');
INSERT INTO `producto` VALUES ('45', 'Kit de Accesorios', '8.00', 'Kit HV-A29');
INSERT INTO `producto` VALUES ('46', 'Sopladora', '21.00', 'Sopladora 500w 1300RPM');
INSERT INTO `producto` VALUES ('47', 'Tarjeta Lectora de Memoria', '4.00', 'CR-578');
INSERT INTO `producto` VALUES ('48', 'Bluetooth USB', '3.00', 'BL-13');
INSERT INTO `producto` VALUES ('49', 'Cable USB Impresora', '1.00', '1.5 mts');
INSERT INTO `producto` VALUES ('50', 'Fuente ATX-750W', '11.00', 'ATX 750W');
INSERT INTO `producto` VALUES ('51', 'Estuche P/ Laptop', '4.00', 'Estuche P/ Laptop 14 pulgadas');
INSERT INTO `producto` VALUES ('52', 'Estuche P/Laptop', '5.00', 'Estuche P/Laptop 15.5 pulgadas');
INSERT INTO `producto` VALUES ('53', 'Estuche P/Laptop', '3.00', 'Estuche P/Laptop 11 pulgadas');
INSERT INTO `producto` VALUES ('54', 'Estuche P/Tablet', '2.00', 'Estuche de 7 pulgadas Negro');
INSERT INTO `producto` VALUES ('55', 'Estuche P/Tablet Fucsia', '2.00', 'Estuche de 7 pulgadas Fucsia');
INSERT INTO `producto` VALUES ('56', 'Estuche P/Tablet Azul', '2.00', 'Estuche de 7 pulgadas Azul');
INSERT INTO `producto` VALUES ('57', 'Estuche P/Tablet Rojo', '2.00', 'Estuche 7 pulgadas Rojo');
INSERT INTO `producto` VALUES ('58', 'Parlantes', '5.00', 'Speaker de PC usb');
INSERT INTO `producto` VALUES ('59', 'Parlantes Niutek', '4.00', 'Speaker NIUTEK MS-214');
INSERT INTO `producto` VALUES ('60', 'Parlantes Omega', '4.00', 'Speaker OMEGA SP-210BK');
INSERT INTO `producto` VALUES ('61', 'Parlantes Genius', '5.00', 'Speaker GENIUS SP-S110');
INSERT INTO `producto` VALUES ('62', 'Parlantes Bluetooth', '13.00', 'Parlantes Mini Bluetooth');
INSERT INTO `producto` VALUES ('63', 'Cable VGA', '3.00', 'VGA 1.5 mts');
INSERT INTO `producto` VALUES ('64', 'Cable HDMI', '4.00', 'Cable HDMI 1.8mts');
INSERT INTO `producto` VALUES ('65', 'Micas Plasticas', '1.00', 'Micas Plasticas XPERIA Z2');
INSERT INTO `producto` VALUES ('66', 'Mica Z1', '1.00', 'Micas Plasticas para XPERIA Z1');
INSERT INTO `producto` VALUES ('67', 'Mica IPHONE 4G', '1.00', 'Micas Plasticas para IPHONE');
INSERT INTO `producto` VALUES ('68', 'Micas XPERIA Z', '1.00', 'Mica Sony XPERIA');
INSERT INTO `producto` VALUES ('69', 'Micas S5', '1.00', 'Micas Plasticas SM S5');
INSERT INTO `producto` VALUES ('70', 'Micas SM I9500', '1.00', 'Micas Plasticas SM I9500/S4');
INSERT INTO `producto` VALUES ('71', 'Mica Vidrio IPHONE', '6.00', 'Mica de Vidrio IPHONE 6');
INSERT INTO `producto` VALUES ('72', 'Mica Cristal Samsung S5', '4.00', 'Mica de Cristal');
INSERT INTO `producto` VALUES ('73', 'Estuche Latex', '2.00', 'SM I9100 S2 Color Skin');
INSERT INTO `producto` VALUES ('74', 'Estuche Latex IPHONE', '1.00', 'IPHONE 4G Skin New Forro');
INSERT INTO `producto` VALUES ('75', 'Corta Chip', '7.00', 'Equipo Corta Chip');
INSERT INTO `producto` VALUES ('76', 'Estacion de Trabajo', '73.00', 'Estacion de Trabajo para Electronica');
INSERT INTO `producto` VALUES ('77', 'Cover LG L70', '3.00', 'Silicona de LG L70');
INSERT INTO `producto` VALUES ('78', 'Cover LG Leon', '3.00', 'Silicona de LG Leon');
INSERT INTO `producto` VALUES ('79', 'Cover Note 4', '3.00', 'Silicona de Samsung Note 4');
INSERT INTO `producto` VALUES ('80', 'Cover Alcatel Pop C7', '4.00', 'Silicona Alcatel Pop C7');
INSERT INTO `producto` VALUES ('81', 'Cover LG G3', '6.00', 'Silicona LG G3');
INSERT INTO `producto` VALUES ('82', 'Cover Blu Dash 2', '4.00', 'Silicona BLU');
INSERT INTO `producto` VALUES ('83', 'Cover Blu Dash 1', '3.00', 'Silicona Blu Dash 1');
INSERT INTO `producto` VALUES ('84', 'Cover Galaxy S6', '3.00', 'Silicona Samsung S6');
INSERT INTO `producto` VALUES ('85', 'Cover Note 2', '6.00', 'Silicona Samsung Note 2');
INSERT INTO `producto` VALUES ('86', 'Cover Alcatel Evolved 2', '4.00', 'Silicona Alcatel Evolved');
INSERT INTO `producto` VALUES ('87', 'Cover Galaxy G386', '5.00', 'Silicona Samsung G386');
INSERT INTO `producto` VALUES ('88', 'Cover Blu 5.0K', '5.00', 'Silicona BLU 5.0K');
INSERT INTO `producto` VALUES ('89', 'Cover Blu Studio G', '4.00', 'Silicona BLU Studio G');
INSERT INTO `producto` VALUES ('90', 'Cover S3 Mini', '3.00', 'Silicona Samsung S3 Mini');
INSERT INTO `producto` VALUES ('91', 'Cover Alcatel Fierce 2', '4.00', 'Silicona Alcatel Fierce 2');
INSERT INTO `producto` VALUES ('92', 'Cover Iphone 6+', '3.00', 'Silicona Iphone 6+');
INSERT INTO `producto` VALUES ('93', 'Cover Blu 5.0C', '4.00', 'Silicona Blu 5.0C');
INSERT INTO `producto` VALUES ('94', 'Cover Blu 3.5', '4.00', 'Silicona Blu 3.5');
INSERT INTO `producto` VALUES ('95', 'Cover Iphone 5', '3.00', 'Silicona Iphone 5');
INSERT INTO `producto` VALUES ('96', 'Cover Alcatel Open C', '5.00', 'Silicona Alcatel Open C');
INSERT INTO `producto` VALUES ('97', 'Cover Alcatel Idol Mini', '4.00', 'Silicona Alcatel Idol Mini');
INSERT INTO `producto` VALUES ('98', 'Cover Galaxy S3', '4.00', 'Silicona Samsung S3');
INSERT INTO `producto` VALUES ('99', 'Cover LG F60', '5.00', 'Silicona LG F60');
INSERT INTO `producto` VALUES ('100', 'Cover Iphone 6', '3.00', 'Silicona Iphone 6');
INSERT INTO `producto` VALUES ('101', 'Cover Blu 5.0+', '0.00', 'Silicona Blu 5.0+');
INSERT INTO `producto` VALUES ('102', 'Cover Iphone 4', '3.00', 'Silicona Iphone 4');
INSERT INTO `producto` VALUES ('103', 'Cover LG L90', '3.00', 'Silicona LG L90');
INSERT INTO `producto` VALUES ('104', 'Cover Alcatel Pop C1', '5.00', 'Silicona Alcatel Pop C1');
INSERT INTO `producto` VALUES ('105', 'Cover Blu 4.0K', '7.00', 'Silicona Blu 4.0K');
INSERT INTO `producto` VALUES ('106', 'Cover Galaxy S5', '4.00', 'Silicona Samsung S5');
INSERT INTO `producto` VALUES ('107', 'Cover Galaxy Ace 4', '3.00', 'Silicona Samsung Ace 4');
INSERT INTO `producto` VALUES ('108', 'Cover Galaxy Grand Neo', '3.00', 'Silicona Galaxy Grand Neo');
INSERT INTO `producto` VALUES ('109', 'Cover Galaxy S4', '4.00', 'Silicona Samsung S4');
INSERT INTO `producto` VALUES ('110', 'Cover Galaxy S6 Edge', '3.00', 'Silicona Samsung Galaxy S6 Edge');
INSERT INTO `producto` VALUES ('111', 'Cover Galaxy S2', '4.00', 'Silicona Samsung S2');
INSERT INTO `producto` VALUES ('112', 'Cover Alcatel OT C3', '4.00', 'Silicona Alcatel C3');
INSERT INTO `producto` VALUES ('113', 'Cover LG G2', '4.00', 'Silicona LG G2');
INSERT INTO `producto` VALUES ('114', 'Cover Galaxy S6 Edge+', '3.00', 'Silicona Samsung S6 Edge+');
INSERT INTO `producto` VALUES ('115', 'Blu Studio G', '95.00', 'Blu Studio G');
INSERT INTO `producto` VALUES ('116', 'Alcatel Evolved 2', '90.00', 'Alcatel Evolved 2');
INSERT INTO `producto` VALUES ('117', 'Galaxy Trend Lite', '75.00', 'Samsung Trend Lite');
INSERT INTO `producto` VALUES ('118', 'LG L70', '140.00', 'LG L70');
INSERT INTO `producto` VALUES ('119', 'Motorola Moto E', '130.00', 'Motorola Moto E');
INSERT INTO `producto` VALUES ('120', 'Alcatel 2032', '40.00', 'Alcatel 2032 Teclas');
INSERT INTO `producto` VALUES ('121', 'Alcatel Fierce 2', '115.00', 'Alcatel Fierce 2');
INSERT INTO `producto` VALUES ('122', 'Zte Z992', '80.00', 'ZTE Z992');
INSERT INTO `producto` VALUES ('123', 'Blackberry Curve', '45.00', 'Blackberry Curve');
INSERT INTO `producto` VALUES ('124', 'LG L90', '125.00', 'LG L90');
INSERT INTO `producto` VALUES ('125', 'Blu 5+5', '110.00', 'Blu 5+5');
INSERT INTO `producto` VALUES ('126', 'Blu 5.0 CE', '90.00', 'Blu 5.0 CE');
INSERT INTO `producto` VALUES ('127', 'BLU 4.0K', '65.00', 'BLU 4.0K');
INSERT INTO `producto` VALUES ('128', 'BLU Neo 4.0', '70.00', 'BLU Neo 4.0');
INSERT INTO `producto` VALUES ('129', 'BLU Dash Music', '67.00', 'BLU Dash 1');
INSERT INTO `producto` VALUES ('130', 'BLU S2', '110.00', 'BLU S2');
INSERT INTO `producto` VALUES ('131', 'Alcatel Fierce 1', '100.00', 'Alcatel Fierce 1');
INSERT INTO `producto` VALUES ('132', 'Blu 5.0C', '90.00', 'Blu 5.0C');
INSERT INTO `producto` VALUES ('133', 'Blu Dash M', '95.00', 'BLU Dash M');
INSERT INTO `producto` VALUES ('134', 'BLU Dash 5.5', '100.00', 'Blu Dash 5.5');
INSERT INTO `producto` VALUES ('135', 'Cover Alcatel Pop C5', '5.00', 'Silicona Alcatel C5');
INSERT INTO `producto` VALUES ('136', 'Cover Note 5', '3.00', 'Silicona Note 5');
INSERT INTO `producto` VALUES ('137', 'Cable Datos Usb Moderno', '2.00', 'Cable Usb Moderno para telefonos');
INSERT INTO `producto` VALUES ('138', 'Cable Iphone 5', '2.00', 'Cable Iphone 5');
INSERT INTO `producto` VALUES ('139', 'Cable Iphone 4', '2.00', 'Cable Iphone 4');
INSERT INTO `producto` VALUES ('140', 'Cargador Usb Moderno', '3.00', 'Cargador Usb Moderno');
INSERT INTO `producto` VALUES ('141', 'Cargador Plug Fino', '3.00', 'Cargador de Nokias viejos');
INSERT INTO `producto` VALUES ('142', 'Arau00f1itas', '3.00', 'Cargador de Baterias directo');
INSERT INTO `producto` VALUES ('143', 'Cable HDMI', '5.00', 'Cable HDMI');
INSERT INTO `producto` VALUES ('144', 'Mando Playstation 2', '13.00', 'Mandos para Playsation 2');
INSERT INTO `producto` VALUES ('145', 'Audifonos Genericos', '2.00', 'Audifonos Minijack 3.5');
INSERT INTO `producto` VALUES ('146', 'Cover Mando Xbox 360', '2.00', 'Cover para Mandos Xbox 360');
INSERT INTO `producto` VALUES ('147', 'Cover Mando PS4', '2.00', 'Cover Mando PS4');
INSERT INTO `producto` VALUES ('148', 'Cover Mando Xbox One', '2.00', 'Cover Mando Xbox One');
INSERT INTO `producto` VALUES ('149', 'Audifonos de Colores', '1.80', 'Audifonos de Colores');
INSERT INTO `producto` VALUES ('150', 'Cables Datos Luminicos', '3.00', 'Cable de Datos Luminicos');
INSERT INTO `producto` VALUES ('151', 'Adaptador Memory Stick', '2.00', 'Adaptador Memory Stick');
INSERT INTO `producto` VALUES ('152', 'MicroSD 16GB', '5.00', 'MicroSD 16GB');
INSERT INTO `producto` VALUES ('153', 'MicroSD 32GB', '10.00', 'MicroSD 32GB');
INSERT INTO `producto` VALUES ('154', 'MicroSD 64GB', '35.00', 'MicroSD 64GB');
INSERT INTO `producto` VALUES ('155', 'Manos Libres Samsung', '1.70', 'Manos Libres Samsung ');
INSERT INTO `producto` VALUES ('156', 'Jostick', '2.00', 'Jostick para los mandos');
INSERT INTO `producto` VALUES ('157', 'Camara Move PS3', '20.00', 'Camara Move PS3');
INSERT INTO `producto` VALUES ('158', 'Juego de Destornilladores', '15.00', 'Juego de Destornilladores');
INSERT INTO `producto` VALUES ('159', 'Adaptador de Red PS2', '25.00', 'Adaptador de Red');
INSERT INTO `producto` VALUES ('160', 'Cable Video PSP', '4.00', 'Cable Video');
INSERT INTO `producto` VALUES ('161', 'Kinect Xbox 360', '15.00', 'Kinect');
INSERT INTO `producto` VALUES ('162', 'Pieles para Consola', '15.00', 'Skin');
INSERT INTO `producto` VALUES ('163', 'Cable Xbox 360', '7.00', 'Cable Mando Xbox');
INSERT INTO `producto` VALUES ('164', 'Rollo Cinta Led', '25.00', 'Cintas LED');
INSERT INTO `producto` VALUES ('165', 'Reloj Invicta', '115.00', 'Reloj Invicta');
INSERT INTO `producto` VALUES ('166', 'Memory Card', '7.00', 'Memory Card');
INSERT INTO `producto` VALUES ('167', 'Cautin', '15.00', 'Cautin para soldar');
INSERT INTO `producto` VALUES ('168', 'Mica Cristal Iphone 6+', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('169', 'Mica Cristal Iphone 6', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('170', 'Mica Cristal Sony Z3', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('171', 'Mica Cristal Iphone 5/5S', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('172', 'Mica Cristal Samsung S4', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('173', 'Mica Cristal Samsung S6', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('174', 'Mica Cristal LG L90', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('175', 'Mica Cristal LG G3', '4.00', 'Screen Protector Cristal');
INSERT INTO `producto` VALUES ('176', 'Mica Cristal Samsung S2', '4.00', 'Mica de Cristal');
INSERT INTO `producto` VALUES ('177', 'Mica de Cristal LG L70', '4.00', 'Mica de Cristal');
INSERT INTO `producto` VALUES ('178', 'Mica de Cristal Note 3', '4.00', 'Mica de Cristal');
INSERT INTO `producto` VALUES ('179', 'Mica de Cristal ACE 4', '4.00', 'Mica de Cristal');
INSERT INTO `producto` VALUES ('180', 'Mica Cristal Grand Duos', '4.00', 'Mica de Cristal');
INSERT INTO `producto` VALUES ('181', 'Huawei Y536', '110.00', 'Huawei Y536');
INSERT INTO `producto` VALUES ('182', 'Blu Dash JR', '65.00', 'Blu Dash JR');
INSERT INTO `producto` VALUES ('183', 'Samsung Lite T399', '105.00', 'Samsung T399');
INSERT INTO `producto` VALUES ('184', 'Blu 5.5C', '105.00', 'BLU 5.5C');
INSERT INTO `producto` VALUES ('185', 'Pantalla S3', '10.00', 'Pantalla para Samsung S3');
INSERT INTO `producto` VALUES ('186', 'Mica Cristal P7', '4.00', 'Mica Cristal Huawei P7 ');
INSERT INTO `producto` VALUES ('187', 'Mica Cristal Samsung A3', '4.00', 'Mica Cristal Samsung A3');
INSERT INTO `producto` VALUES ('188', 'Mica Cristal G6', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('189', 'Mica Cristal G7', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('190', 'Mica Cristal N530', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('191', 'Mica Cristal N630', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('192', 'Mica Cristal Y550', '4.00', 'Mica Cristal Huawei Y550');
INSERT INTO `producto` VALUES ('193', 'Mica Cristal Y330', '4.00', 'Mica Cristal Y330');
INSERT INTO `producto` VALUES ('194', 'Mica Cristal E4 Sony', '4.00', 'Mica Cristal Sony E4');
INSERT INTO `producto` VALUES ('195', 'Mica Cristal E3 Sony', '4.00', 'Mica Cristal Sony E3');
INSERT INTO `producto` VALUES ('196', 'Mica Cristal Samsung J1', '4.00', 'Mica Cristal Samsung J1');
INSERT INTO `producto` VALUES ('197', 'Mica Cristal Samsung G360', '4.00', 'Mica Cristal Samsung G360');
INSERT INTO `producto` VALUES ('198', 'Mica Cristal Samsung G350', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('199', 'Mica Cristal Samsung A7', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('200', 'Mica Cristal Sony Z1', '4.00', 'Mica Cristal ');
INSERT INTO `producto` VALUES ('201', 'Mica Cristal Z3 Mini', '4.00', 'Mica Cristal Sony Z3mini');
INSERT INTO `producto` VALUES ('202', 'Mica Cristal Iphone 4', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('203', 'Mica Cristal Sony Z2', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('204', 'Mica Cristal Sony Z1 Compact', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('205', 'Manos Libres Iphone', '2.00', 'Manos Libre Iphone Copia');
INSERT INTO `producto` VALUES ('206', 'Tablet Blu', '120.00', 'Tablet Blu');
INSERT INTO `producto` VALUES ('207', 'Gafas de Hombre', '8.00', 'Gafas de Sol');
INSERT INTO `producto` VALUES ('208', 'Tablet Samsung Tab 3', '120.00', 'Samsunt Tab 3');
INSERT INTO `producto` VALUES ('209', 'Cover Tablet Samsung Tab 3', '5.00', 'Cover Samsung Tab 3');
INSERT INTO `producto` VALUES ('210', 'Cover Alcatel Idol 2', '3.00', 'Cover Alcatel Idol 2');
INSERT INTO `producto` VALUES ('211', 'Cover Tablet Samsung Tab 2', '5.00', 'Cover Tablet Samsung Tab 2');
INSERT INTO `producto` VALUES ('212', 'Lector Tarjeta USB', '3.00', 'Lector de Tarjeta USB');
INSERT INTO `producto` VALUES ('213', 'Cable OTG', '3.00', 'Cable OTG');
INSERT INTO `producto` VALUES ('214', 'Cable Samsung Tab 2', '2.00', 'Cable Samsung Tab 2');
INSERT INTO `producto` VALUES ('215', 'Cable Video AV', '2.00', 'Cable Audio y Video');
INSERT INTO `producto` VALUES ('216', 'Cable USB 3.0', '7.00', 'Cable USB 3.0');
INSERT INTO `producto` VALUES ('217', 'Lampara LED USB', '3.00', 'Lampara LED USB');
INSERT INTO `producto` VALUES ('218', 'Forro Mando TV', '1.00', 'Forro Mando TV');
INSERT INTO `producto` VALUES ('219', 'Colgante de Telefono', '1.00', 'Colgante para Telefonos');
INSERT INTO `producto` VALUES ('220', 'Adaptador para PC de mando XBOX', '3.00', 'Sensor para mandos xbox 360 para ponerlos en pc');
INSERT INTO `producto` VALUES ('221', 'Tablet TRIO', '120.00', 'Tablet Trio 16gb memoria interna');
INSERT INTO `producto` VALUES ('222', 'Tablet Coby', '100.00', 'Tablet Coby');
INSERT INTO `producto` VALUES ('223', 'Bateria S5', '5.00', 'Bateria Samsung S5');
INSERT INTO `producto` VALUES ('224', 'Bateria Samsung 9600', '5.00', 'Bateria Samsung 9600');
INSERT INTO `producto` VALUES ('225', 'Bateria Samsung 2000 mah', '5.00', 'Bateria Samsung');
INSERT INTO `producto` VALUES ('226', 'Bateria Nokia BL-5C', '5.00', 'BL-5C');
INSERT INTO `producto` VALUES ('227', 'Bateria Nokia BP-4L', '5.00', 'BP-4L');
INSERT INTO `producto` VALUES ('228', 'Bateria Nokia BP-6M', '5.00', 'BP-6M');
INSERT INTO `producto` VALUES ('229', 'Bateria Nokia BL-4U', '5.00', 'BL-4U');
INSERT INTO `producto` VALUES ('230', 'Bateria Samsung 5830', '5.00', 'Samsung 5830');
INSERT INTO `producto` VALUES ('231', 'Bateria BB 9530', '5.00', 'BB 9530');
INSERT INTO `producto` VALUES ('232', 'Bateria BB 9500', '5.00', 'BB 9500');
INSERT INTO `producto` VALUES ('233', 'Bateria Iphone 3GS', '5.00', 'Bateria Iphone 3GS');
INSERT INTO `producto` VALUES ('234', 'Bateria Iphone 4', '5.00', 'Bateria Iphone 4');
INSERT INTO `producto` VALUES ('235', 'Bateria Iphone 5', '5.00', 'Bateria Iphone 5');
INSERT INTO `producto` VALUES ('236', 'Estuche PSP', '5.00', 'Estuche PSP');
INSERT INTO `producto` VALUES ('237', 'Cover Tablet con Teclado', '8.00', 'Cover Tablet con Teclado 7 pulgadas');
INSERT INTO `producto` VALUES ('238', 'Mando Play 2 Clase A', '15.00', 'Mando Copia Play 2 Clase A');
INSERT INTO `producto` VALUES ('239', 'Cover Xperia M2 Aqua', '4.00', 'Sony Xperia M2 Aqua');
INSERT INTO `producto` VALUES ('240', 'Cover Xperia Z3', '4.00', 'Sony Xperia Z3');
INSERT INTO `producto` VALUES ('241', 'Cover Motorola XT1028', '3.00', 'XT 1028');
INSERT INTO `producto` VALUES ('242', 'Cover LG L70 Full Protect', '6.00', 'LG L70 FP');
INSERT INTO `producto` VALUES ('243', 'Cover S5 Mini', '4.00', 'Samsung Mini S5');
INSERT INTO `producto` VALUES ('244', 'Cover S4 Mini', '3.00', 'Cover Mini S4');
INSERT INTO `producto` VALUES ('245', 'Cover Samsung S5830', '4.00', 'Samsung S5830');
INSERT INTO `producto` VALUES ('246', 'Cover Mando Play 3', '4.00', 'Cover Mando Play 3');
INSERT INTO `producto` VALUES ('247', 'Cover Huawei G7', '3.00', 'Cover Huawei G7');
INSERT INTO `producto` VALUES ('248', 'Cover Huawei Y530', '3.00', 'Cover Huawei Y530');
INSERT INTO `producto` VALUES ('249', 'Cover Huawei Y330', '3.00', 'Cover Huawei Y330');
INSERT INTO `producto` VALUES ('250', 'Mica Cristal LG L70', '4.00', 'Mica Cristal LG L70');
INSERT INTO `producto` VALUES ('251', 'Mica Cristal Note 5', '4.00', 'Mica Cristal Note 5');
INSERT INTO `producto` VALUES ('252', 'Mica Cristal Note 3', '4.00', 'Mica Cristal');
INSERT INTO `producto` VALUES ('253', 'Mica Cristal Ace 4', '4.00', 'Mica Cristal ACE 4');
INSERT INTO `producto` VALUES ('254', 'Pantalla y Tactil Iphone 5', '10.00', 'Pantalla y Tactil de Iphone');
INSERT INTO `producto` VALUES ('255', 'Pantalla y Tactil de Iphone 5S', '10.00', 'Pantalla y Tactil Iphone 5S');
INSERT INTO `producto` VALUES ('256', 'Tablet Samsung TAB E', '150.00', 'Samsung TAB E');
INSERT INTO `producto` VALUES ('257', 'Mica Cristal Samsung S3', '2.50', 'Mica Cristal Samsung S3');
INSERT INTO `producto` VALUES ('258', 'Mica Cristal Samsung S3 Mini', '2.50', 'Mica Cristal Samsung S3');
INSERT INTO `producto` VALUES ('259', 'Tablet Samsung Tab 2', '120.00', 'Samsung Tab 2');
INSERT INTO `producto` VALUES ('260', 'Cover Blu Life Play', '4.00', 'Cover Blu');
INSERT INTO `producto` VALUES ('261', 'Blu Advance 4.0L', '67.00', 'Blu Advance');
INSERT INTO `producto` VALUES ('262', 'Blu Star 4.5', '100.00', 'Blu Star 4.5');
INSERT INTO `producto` VALUES ('263', 'PlayStation 2', '70.00', 'PlayStation 2');
INSERT INTO `producto` VALUES ('264', 'Manos Libre Blu', '0.00', 'Manos Libre Blu');
INSERT INTO `producto` VALUES ('265', 'Bateria Blu Neo', '4.00', 'Bateria Blu');
INSERT INTO `producto` VALUES ('266', 'Bateria Iphone 6', '4.00', 'Bateria Iphone 6');
INSERT INTO `producto` VALUES ('267', 'Bateria Iphone 5S', '4.00', 'Bateria Iphone');
INSERT INTO `producto` VALUES ('268', 'Bateria Samsung Note 3', '10.00', 'Bateria Samsung');
INSERT INTO `producto` VALUES ('269', 'Bateria Samsung 1500mah', '4.00', 'Bateria Samsung');
INSERT INTO `producto` VALUES ('270', 'Bateria Samsung Chiquita', '4.00', 'Bateria Samsung');
INSERT INTO `producto` VALUES ('271', 'Bateria Blu Dash Music', '4.00', 'Bateria Blu');
INSERT INTO `producto` VALUES ('272', 'Bateria Nokia BP-3L', '4.00', 'Bateria Nokia');
INSERT INTO `producto` VALUES ('273', 'Zte Z998', '100.00', 'Zte z998');
INSERT INTO `producto` VALUES ('274', 'Blu Dash X', '110.00', 'Blu Dash X');
INSERT INTO `producto` VALUES ('275', 'Porta Telefonos para Carro', '6.00', 'Portador de Celulares para Carro');
INSERT INTO `producto` VALUES ('276', 'Cover Alcatel Fierce 1 FP', '0.00', 'Cover Alcatel Fierce 1');
INSERT INTO `producto` VALUES ('277', 'Cover Huawei Y536', '0.00', 'Cover Huawei Y536');

-- ----------------------------
-- Table structure for `registro_deudas`
-- ----------------------------
DROP TABLE IF EXISTS `registro_deudas`;
CREATE TABLE `registro_deudas` (
  `id_reg_deu` int(11) NOT NULL AUTO_INCREMENT,
  `nomb_cliente` text,
  `ci` text,
  `cant` float(8,0) DEFAULT NULL,
  `telefono` text,
  `id_prod` int(11) DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_reg_deu`),
  KEY `Refproducto88` (`id_prod`) USING BTREE,
  KEY `Refarea_venta89` (`id_area`) USING BTREE,
  CONSTRAINT `registro_deudas_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_venta` (`id_area`),
  CONSTRAINT `registro_deudas_ibfk_2` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registro_deudas
-- ----------------------------

-- ----------------------------
-- Table structure for `registro_roturas`
-- ----------------------------
DROP TABLE IF EXISTS `registro_roturas`;
CREATE TABLE `registro_roturas` (
  `id_reg_rot` int(11) NOT NULL AUTO_INCREMENT,
  `motivos` text,
  `fecha` date DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `p_costo` decimal(11,2) DEFAULT NULL,
  PRIMARY KEY (`id_reg_rot`),
  KEY `Refarea_venta67` (`id_area`) USING BTREE,
  KEY `Refproducto70` (`id_prod`) USING BTREE,
  KEY `Refusuarios75` (`uid`) USING BTREE,
  CONSTRAINT `registro_roturas_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_venta` (`id_area`),
  CONSTRAINT `registro_roturas_ibfk_2` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `registro_roturas_ibfk_3` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registro_roturas
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registro_servicio
-- ----------------------------
INSERT INTO `registro_servicio` VALUES ('3', '10.00', '10.00', '2015-12-26', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('4', '2.00', '2.00', '2015-12-26', '5', '13', '1', '1');
INSERT INTO `registro_servicio` VALUES ('6', '5.00', '5.00', '2015-12-28', '5', '20', '1', '1');
INSERT INTO `registro_servicio` VALUES ('7', '5.00', '5.00', '2015-12-28', '5', '14', '1', '1');
INSERT INTO `registro_servicio` VALUES ('8', '5.00', '5.00', '2015-12-28', '5', '21', '1', '1');
INSERT INTO `registro_servicio` VALUES ('9', '2.00', '2.00', '2015-12-29', '5', '16', '1', '1');
INSERT INTO `registro_servicio` VALUES ('10', '2.00', '2.00', '2015-12-29', '5', '13', '1', '1');
INSERT INTO `registro_servicio` VALUES ('11', '0.80', '0.80', '2015-12-30', '3', '4', '5', '1');
INSERT INTO `registro_servicio` VALUES ('12', '0.80', '1.60', '2015-12-30', '3', '8', '5', '2');
INSERT INTO `registro_servicio` VALUES ('13', '0.40', '0.40', '2015-12-30', '3', '8', '5', '1');
INSERT INTO `registro_servicio` VALUES ('14', '0.40', '0.40', '2015-12-30', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('15', '2.00', '2.00', '2015-12-30', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('16', '6.00', '6.00', '2015-12-30', '3', '22', '5', '1');
INSERT INTO `registro_servicio` VALUES ('17', '0.16', '0.16', '2015-12-30', '3', '23', '5', '1');
INSERT INTO `registro_servicio` VALUES ('18', '0.20', '0.20', '2016-01-05', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('19', '0.80', '1.60', '2016-01-05', '3', '12', '5', '2');
INSERT INTO `registro_servicio` VALUES ('20', '0.80', '0.80', '2016-01-05', '3', '8', '5', '1');
INSERT INTO `registro_servicio` VALUES ('21', '0.16', '0.16', '2016-01-05', '3', '4', '5', '1');
INSERT INTO `registro_servicio` VALUES ('22', '2.00', '2.00', '2016-01-05', '3', '1', '5', '1');
INSERT INTO `registro_servicio` VALUES ('23', '0.12', '0.12', '2016-01-05', '3', '7', '5', '1');
INSERT INTO `registro_servicio` VALUES ('24', '0.40', '0.40', '2016-01-05', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('25', '0.80', '0.80', '2016-01-05', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('26', '4.20', '4.20', '2016-01-05', '3', '24', '5', '1');
INSERT INTO `registro_servicio` VALUES ('27', '0.40', '0.80', '2016-01-05', '3', '7', '5', '2');
INSERT INTO `registro_servicio` VALUES ('28', '1.00', '1.00', '2016-01-05', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('29', '2.40', '2.40', '2016-01-05', '3', '8', '5', '1');
INSERT INTO `registro_servicio` VALUES ('30', '2.80', '2.80', '2016-01-05', '3', '24', '5', '1');
INSERT INTO `registro_servicio` VALUES ('31', '0.60', '0.60', '2016-01-05', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('32', '0.40', '0.40', '2016-01-05', '3', '11', '5', '1');
INSERT INTO `registro_servicio` VALUES ('33', '10.00', '10.00', '2015-12-30', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('34', '10.00', '10.00', '2015-12-30', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('36', '10.00', '10.00', '2015-12-30', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('37', '10.00', '10.00', '2016-01-04', '5', '20', '1', '1');
INSERT INTO `registro_servicio` VALUES ('38', '5.00', '5.00', '2016-01-06', '5', '25', '4', '1');
INSERT INTO `registro_servicio` VALUES ('39', '0.40', '2.80', '2016-01-06', '3', '8', '5', '7');
INSERT INTO `registro_servicio` VALUES ('40', '2.00', '2.00', '2016-01-06', '3', '22', '5', '1');
INSERT INTO `registro_servicio` VALUES ('41', '0.40', '0.80', '2016-01-06', '3', '7', '5', '2');
INSERT INTO `registro_servicio` VALUES ('42', '0.80', '1.60', '2016-01-06', '3', '12', '5', '2');
INSERT INTO `registro_servicio` VALUES ('43', '0.20', '0.20', '2016-01-06', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('44', '5.00', '5.00', '2016-01-06', '3', '22', '5', '1');
INSERT INTO `registro_servicio` VALUES ('45', '0.40', '0.40', '2016-01-06', '3', '11', '5', '1');
INSERT INTO `registro_servicio` VALUES ('46', '0.40', '0.80', '2016-01-06', '3', '7', '5', '2');
INSERT INTO `registro_servicio` VALUES ('47', '0.20', '0.60', '2016-01-06', '3', '10', '5', '3');
INSERT INTO `registro_servicio` VALUES ('48', '5.00', '5.00', '2016-01-05', '5', '26', '1', '1');
INSERT INTO `registro_servicio` VALUES ('49', '5.00', '5.00', '2016-01-05', '5', '21', '1', '1');
INSERT INTO `registro_servicio` VALUES ('50', '10.00', '20.00', '2016-01-05', '5', '2', '1', '2');
INSERT INTO `registro_servicio` VALUES ('51', '3.00', '3.00', '2016-01-06', '5', '14', '1', '1');
INSERT INTO `registro_servicio` VALUES ('52', '16.00', '16.00', '2016-01-06', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('54', '0.40', '1.60', '2016-01-07', '3', '7', '5', '4');
INSERT INTO `registro_servicio` VALUES ('55', '1.00', '1.00', '2016-01-07', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('56', '1.00', '1.00', '2016-01-07', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('57', '0.20', '0.40', '2016-01-07', '3', '10', '5', '2');
INSERT INTO `registro_servicio` VALUES ('58', '1.00', '1.00', '2016-01-07', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('59', '0.40', '2.40', '2016-01-07', '3', '8', '5', '6');
INSERT INTO `registro_servicio` VALUES ('60', '1.00', '1.00', '2016-01-07', '3', '1', '5', '1');
INSERT INTO `registro_servicio` VALUES ('61', '0.40', '2.00', '2016-01-08', '3', '8', '5', '5');
INSERT INTO `registro_servicio` VALUES ('62', '3.00', '6.00', '2016-01-08', '3', '1', '5', '2');
INSERT INTO `registro_servicio` VALUES ('63', '0.20', '0.80', '2016-01-08', '3', '10', '5', '4');
INSERT INTO `registro_servicio` VALUES ('64', '0.80', '1.60', '2016-01-08', '3', '23', '5', '2');
INSERT INTO `registro_servicio` VALUES ('65', '0.80', '2.40', '2016-01-08', '3', '4', '5', '3');
INSERT INTO `registro_servicio` VALUES ('66', '0.40', '0.40', '2016-01-08', '3', '11', '5', '1');
INSERT INTO `registro_servicio` VALUES ('67', '1.00', '1.00', '2016-01-08', '3', '27', '5', '1');
INSERT INTO `registro_servicio` VALUES ('68', '0.40', '0.40', '2016-01-08', '3', '7', '5', '1');
INSERT INTO `registro_servicio` VALUES ('69', '0.20', '0.20', '2016-01-08', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('71', '0.40', '0.40', '2016-01-08', '3', '12', '5', '1');
INSERT INTO `registro_servicio` VALUES ('72', '0.40', '6.00', '2016-01-08', '3', '6', '5', '15');
INSERT INTO `registro_servicio` VALUES ('73', '1.00', '2.00', '2016-01-06', '5', '27', '1', '2');
INSERT INTO `registro_servicio` VALUES ('74', '5.00', '5.00', '2016-01-06', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('75', '5.00', '5.00', '2016-01-06', '5', '16', '1', '1');
INSERT INTO `registro_servicio` VALUES ('79', '15.00', '15.00', '2016-01-07', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('80', '10.00', '10.00', '2016-01-07', '5', '15', '1', '1');
INSERT INTO `registro_servicio` VALUES ('88', '0.40', '8.00', '2016-01-09', '3', '8', '5', '20');
INSERT INTO `registro_servicio` VALUES ('89', '0.80', '0.80', '2016-01-09', '3', '29', '5', '1');
INSERT INTO `registro_servicio` VALUES ('90', '0.80', '0.80', '2016-01-09', '3', '4', '5', '1');
INSERT INTO `registro_servicio` VALUES ('91', '0.40', '0.40', '2016-01-09', '3', '11', '5', '1');
INSERT INTO `registro_servicio` VALUES ('92', '5.00', '5.00', '2016-01-09', '3', '30', '5', '1');
INSERT INTO `registro_servicio` VALUES ('93', '0.20', '0.40', '2016-01-09', '3', '10', '5', '2');
INSERT INTO `registro_servicio` VALUES ('94', '0.80', '0.80', '2016-01-09', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('95', '0.20', '0.40', '2016-01-09', '3', '10', '5', '2');
INSERT INTO `registro_servicio` VALUES ('96', '0.40', '0.40', '2016-01-09', '3', '29', '5', '1');
INSERT INTO `registro_servicio` VALUES ('97', '1.00', '1.00', '2016-01-09', '3', '28', '5', '1');
INSERT INTO `registro_servicio` VALUES ('98', '1.00', '1.00', '2016-01-10', '3', '28', '5', '1');
INSERT INTO `registro_servicio` VALUES ('99', '1.00', '1.00', '2016-01-07', '5', '5', '1', '1');
INSERT INTO `registro_servicio` VALUES ('100', '3.00', '3.00', '2016-01-08', '5', '16', '1', '1');
INSERT INTO `registro_servicio` VALUES ('101', '1.00', '2.00', '2016-01-08', '5', '5', '1', '2');
INSERT INTO `registro_servicio` VALUES ('102', '10.00', '10.00', '2016-01-08', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('103', '5.00', '5.00', '2016-01-08', '5', '16', '1', '1');
INSERT INTO `registro_servicio` VALUES ('104', '2.00', '2.00', '2016-01-08', '5', '14', '1', '1');
INSERT INTO `registro_servicio` VALUES ('105', '10.00', '10.00', '2016-01-09', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('106', '10.00', '10.00', '2016-01-09', '5', '15', '1', '1');
INSERT INTO `registro_servicio` VALUES ('107', '5.00', '10.00', '2016-01-09', '5', '20', '1', '2');
INSERT INTO `registro_servicio` VALUES ('108', '10.00', '10.00', '2016-01-09', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('109', '4.00', '4.00', '2016-01-11', '5', '31', '1', '1');
INSERT INTO `registro_servicio` VALUES ('110', '3.50', '3.50', '2016-01-11', '5', '3', '1', '1');
INSERT INTO `registro_servicio` VALUES ('111', '10.00', '10.00', '2016-01-11', '5', '20', '1', '1');
INSERT INTO `registro_servicio` VALUES ('112', '5.00', '5.00', '2016-01-11', '5', '15', '1', '1');
INSERT INTO `registro_servicio` VALUES ('119', '10.00', '10.00', '2016-01-12', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('120', '1.00', '1.00', '2016-01-12', '5', '27', '1', '1');
INSERT INTO `registro_servicio` VALUES ('121', '2.00', '2.00', '2016-01-12', '5', '11', '1', '1');
INSERT INTO `registro_servicio` VALUES ('122', '10.00', '20.00', '2016-01-12', '5', '18', '1', '2');
INSERT INTO `registro_servicio` VALUES ('123', '0.40', '1.60', '2016-01-13', '3', '7', '5', '4');
INSERT INTO `registro_servicio` VALUES ('124', '0.80', '5.60', '2016-01-13', '3', '4', '5', '7');
INSERT INTO `registro_servicio` VALUES ('125', '0.40', '1.60', '2016-01-13', '3', '8', '5', '4');
INSERT INTO `registro_servicio` VALUES ('126', '0.20', '0.80', '2016-01-13', '3', '10', '5', '4');
INSERT INTO `registro_servicio` VALUES ('127', '2.20', '2.20', '2016-01-13', '3', '29', '5', '1');
INSERT INTO `registro_servicio` VALUES ('128', '2.00', '2.00', '2016-01-13', '3', '22', '5', '1');
INSERT INTO `registro_servicio` VALUES ('129', '1.00', '2.00', '2016-01-12', '3', '5', '5', '2');
INSERT INTO `registro_servicio` VALUES ('130', '0.40', '5.60', '2016-01-13', '3', '4', '5', '14');
INSERT INTO `registro_servicio` VALUES ('131', '1.00', '1.00', '2016-01-13', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('132', '0.20', '0.20', '2016-01-13', '3', '10', '5', '1');
INSERT INTO `registro_servicio` VALUES ('133', '0.40', '2.00', '2016-01-12', '3', '8', '5', '5');
INSERT INTO `registro_servicio` VALUES ('134', '0.80', '1.60', '2016-01-12', '3', '12', '5', '2');
INSERT INTO `registro_servicio` VALUES ('135', '5.00', '5.00', '2016-01-12', '3', '27', '5', '1');
INSERT INTO `registro_servicio` VALUES ('136', '5.00', '5.00', '2016-01-13', '5', '31', '1', '1');
INSERT INTO `registro_servicio` VALUES ('137', '6.00', '6.00', '2016-01-13', '5', '27', '1', '1');
INSERT INTO `registro_servicio` VALUES ('138', '20.00', '20.00', '2016-01-13', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('139', '16.00', '16.00', '2016-01-13', '5', '3', '1', '1');
INSERT INTO `registro_servicio` VALUES ('140', '2.00', '2.00', '2016-01-14', '5', '27', '1', '1');
INSERT INTO `registro_servicio` VALUES ('141', '10.00', '10.00', '2016-01-14', '5', '15', '1', '1');
INSERT INTO `registro_servicio` VALUES ('142', '10.00', '10.00', '2016-01-14', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('143', '5.00', '5.00', '2016-01-14', '5', '15', '1', '1');
INSERT INTO `registro_servicio` VALUES ('144', '1.00', '3.00', '2016-01-14', '3', '28', '5', '3');
INSERT INTO `registro_servicio` VALUES ('145', '0.80', '0.80', '2016-01-14', '3', '4', '5', '1');
INSERT INTO `registro_servicio` VALUES ('146', '0.40', '2.00', '2016-01-14', '3', '7', '5', '5');
INSERT INTO `registro_servicio` VALUES ('147', '0.40', '1.20', '2016-01-14', '3', '11', '5', '3');
INSERT INTO `registro_servicio` VALUES ('148', '3.00', '3.00', '2016-01-14', '3', '1', '5', '1');
INSERT INTO `registro_servicio` VALUES ('149', '0.20', '0.40', '2016-01-14', '3', '10', '5', '2');
INSERT INTO `registro_servicio` VALUES ('150', '0.80', '0.80', '2016-01-14', '3', '6', '5', '1');
INSERT INTO `registro_servicio` VALUES ('151', '0.40', '0.80', '2016-01-14', '3', '8', '5', '2');
INSERT INTO `registro_servicio` VALUES ('152', '2.00', '2.00', '2016-01-14', '3', '27', '5', '1');
INSERT INTO `registro_servicio` VALUES ('153', '1.00', '1.00', '2016-01-15', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('154', '0.40', '0.40', '2016-01-15', '3', '7', '5', '1');
INSERT INTO `registro_servicio` VALUES ('155', '0.40', '0.40', '2016-01-15', '3', '11', '5', '1');
INSERT INTO `registro_servicio` VALUES ('156', '1.00', '1.00', '2016-01-15', '3', '28', '5', '1');
INSERT INTO `registro_servicio` VALUES ('157', '0.40', '0.40', '2016-01-15', '3', '11', '5', '1');
INSERT INTO `registro_servicio` VALUES ('158', '0.40', '0.80', '2016-01-15', '3', '11', '5', '2');
INSERT INTO `registro_servicio` VALUES ('159', '0.20', '0.80', '2016-01-15', '3', '10', '5', '4');
INSERT INTO `registro_servicio` VALUES ('160', '0.40', '1.20', '2016-01-15', '3', '7', '5', '3');
INSERT INTO `registro_servicio` VALUES ('161', '0.40', '0.40', '2016-01-15', '3', '12', '5', '1');
INSERT INTO `registro_servicio` VALUES ('162', '0.80', '0.80', '2016-01-15', '3', '12', '5', '1');
INSERT INTO `registro_servicio` VALUES ('163', '0.40', '0.40', '2016-01-15', '3', '8', '5', '1');
INSERT INTO `registro_servicio` VALUES ('166', '8.00', '8.00', '2016-01-15', '5', '27', '1', '1');
INSERT INTO `registro_servicio` VALUES ('167', '10.00', '10.00', '2016-01-15', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('168', '10.00', '10.00', '2016-01-15', '5', '17', '1', '1');
INSERT INTO `registro_servicio` VALUES ('169', '1.00', '2.00', '2016-01-15', '5', '5', '1', '2');
INSERT INTO `registro_servicio` VALUES ('170', '5.00', '5.00', '2016-01-16', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('171', '1.00', '1.00', '2016-01-16', '5', '5', '1', '1');
INSERT INTO `registro_servicio` VALUES ('172', '10.00', '10.00', '2016-01-16', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('173', '1.00', '1.00', '2016-01-18', '5', '5', '1', '1');
INSERT INTO `registro_servicio` VALUES ('174', '6.00', '6.00', '2016-01-18', '5', '15', '1', '1');
INSERT INTO `registro_servicio` VALUES ('175', '10.00', '10.00', '2016-01-18', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('176', '0.40', '2.40', '2016-01-16', '3', '8', '5', '6');
INSERT INTO `registro_servicio` VALUES ('177', '0.20', '1.00', '2016-01-16', '3', '10', '5', '5');
INSERT INTO `registro_servicio` VALUES ('178', '0.40', '0.80', '2016-01-16', '3', '11', '5', '2');
INSERT INTO `registro_servicio` VALUES ('179', '0.20', '0.40', '2016-01-16', '3', '10', '5', '2');
INSERT INTO `registro_servicio` VALUES ('180', '3.00', '3.00', '2016-01-16', '3', '27', '5', '1');
INSERT INTO `registro_servicio` VALUES ('181', '0.80', '0.80', '2016-01-16', '3', '27', '5', '1');
INSERT INTO `registro_servicio` VALUES ('182', '8.00', '8.00', '2016-01-16', '3', '33', '5', '1');
INSERT INTO `registro_servicio` VALUES ('183', '0.40', '1.20', '2016-01-17', '3', '7', '5', '3');
INSERT INTO `registro_servicio` VALUES ('184', '0.40', '2.00', '2016-01-17', '3', '8', '5', '5');
INSERT INTO `registro_servicio` VALUES ('185', '0.20', '2.40', '2016-01-17', '3', '10', '5', '12');
INSERT INTO `registro_servicio` VALUES ('186', '1.00', '1.00', '2016-01-18', '3', '28', '5', '1');
INSERT INTO `registro_servicio` VALUES ('187', '0.20', '1.00', '2016-01-18', '3', '10', '5', '5');
INSERT INTO `registro_servicio` VALUES ('188', '0.80', '1.60', '2016-01-18', '3', '12', '5', '2');
INSERT INTO `registro_servicio` VALUES ('189', '0.40', '0.80', '2016-01-18', '3', '8', '5', '2');
INSERT INTO `registro_servicio` VALUES ('196', '0.40', '0.80', '2016-01-19', '3', '8', '5', '2');
INSERT INTO `registro_servicio` VALUES ('197', '0.40', '0.40', '2016-01-19', '3', '8', '5', '1');
INSERT INTO `registro_servicio` VALUES ('198', '0.80', '2.40', '2016-01-19', '3', '6', '5', '3');
INSERT INTO `registro_servicio` VALUES ('199', '0.80', '0.80', '2016-01-19', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('201', '1.00', '1.00', '2016-01-19', '3', '34', '5', '1');
INSERT INTO `registro_servicio` VALUES ('202', '0.80', '0.80', '2016-01-19', '3', '12', '5', '1');
INSERT INTO `registro_servicio` VALUES ('203', '0.80', '0.80', '2016-01-22', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('204', '0.20', '0.80', '2016-01-19', '3', '10', '5', '4');
INSERT INTO `registro_servicio` VALUES ('205', '1.00', '2.00', '2016-01-19', '3', '5', '5', '2');
INSERT INTO `registro_servicio` VALUES ('206', '0.40', '0.40', '2016-01-19', '3', '29', '5', '1');
INSERT INTO `registro_servicio` VALUES ('208', '0.20', '1.40', '2016-01-20', '3', '10', '5', '7');
INSERT INTO `registro_servicio` VALUES ('209', '0.40', '0.80', '2016-01-20', '3', '32', '5', '2');
INSERT INTO `registro_servicio` VALUES ('210', '0.40', '0.80', '2016-01-20', '3', '11', '5', '2');
INSERT INTO `registro_servicio` VALUES ('211', '0.40', '0.40', '2016-01-20', '3', '5', '5', '1');
INSERT INTO `registro_servicio` VALUES ('212', '0.40', '0.80', '2016-01-20', '3', '8', '5', '2');
INSERT INTO `registro_servicio` VALUES ('213', '1.60', '1.60', '2016-01-20', '3', '29', '5', '1');
INSERT INTO `registro_servicio` VALUES ('214', '1.20', '1.20', '2016-01-20', '3', '29', '5', '1');
INSERT INTO `registro_servicio` VALUES ('215', '0.20', '0.60', '2016-01-20', '3', '10', '5', '3');
INSERT INTO `registro_servicio` VALUES ('216', '0.80', '0.80', '2016-01-20', '3', '11', '5', '1');
INSERT INTO `registro_servicio` VALUES ('217', '0.40', '0.40', '2016-01-20', '3', '7', '5', '1');
INSERT INTO `registro_servicio` VALUES ('218', '10.00', '10.00', '2016-01-19', '5', '15', '1', '1');
INSERT INTO `registro_servicio` VALUES ('219', '5.00', '5.00', '2016-01-19', '5', '20', '1', '1');
INSERT INTO `registro_servicio` VALUES ('220', '5.00', '5.00', '2016-01-19', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('221', '10.00', '10.00', '2016-01-20', '5', '2', '1', '1');
INSERT INTO `registro_servicio` VALUES ('223', '5.00', '5.00', '2016-01-21', '5', '18', '1', '1');
INSERT INTO `registro_servicio` VALUES ('224', '8.00', '8.00', '2016-01-21', '5', '2', '1', '1');

-- ----------------------------
-- Table structure for `registro_ventas`
-- ----------------------------
DROP TABLE IF EXISTS `registro_ventas`;
CREATE TABLE `registro_ventas` (
  `id_reg` int(11) NOT NULL AUTO_INCREMENT,
  `cant` int(11) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `p_venta` decimal(10,2) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `p_costo` decimal(11,2) DEFAULT NULL,
  `importe_costo` decimal(11,2) DEFAULT NULL,
  `utilidad` decimal(11,2) DEFAULT NULL,
  PRIMARY KEY (`id_reg`),
  KEY `Refproducto61` (`id_prod`) USING BTREE,
  KEY `Refarea_venta62` (`id_area`) USING BTREE,
  KEY `Refusuarios63` (`uid`) USING BTREE,
  CONSTRAINT `registro_ventas_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_venta` (`id_area`),
  CONSTRAINT `registro_ventas_ibfk_2` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `registro_ventas_ibfk_3` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registro_ventas
-- ----------------------------
INSERT INTO `registro_ventas` VALUES ('1', '1', '8.00', '2015-12-28', '8.00', '10', '3', '5', '2.70', '2.70', '5.30');
INSERT INTO `registro_ventas` VALUES ('2', '1', '8.00', '2015-12-28', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('3', '1', '6.00', '2015-12-29', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('4', '3', '24.00', '2015-12-29', '8.00', '152', '3', '5', '5.00', '15.00', '9.00');
INSERT INTO `registro_ventas` VALUES ('5', '1', '8.00', '2015-12-29', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('6', '1', '6.00', '2015-12-29', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('9', '1', '6.00', '2015-12-26', '6.00', '205', '3', '1', '2.00', '2.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('12', '1', '8.00', '2015-12-26', '8.00', '82', '3', '1', '4.00', '4.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('13', '1', '6.00', '2015-12-26', '6.00', '10', '3', '1', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('14', '1', '25.00', '2015-12-26', '25.00', '153', '3', '1', '10.00', '10.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('15', '1', '8.00', '2015-12-26', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('16', '2', '24.00', '2015-12-26', '12.00', '163', '3', '1', '7.00', '14.00', '10.00');
INSERT INTO `registro_ventas` VALUES ('17', '1', '6.00', '2015-12-27', '6.00', '10', '3', '1', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('18', '1', '150.00', '2015-12-27', '150.00', '206', '3', '1', '120.00', '120.00', '30.00');
INSERT INTO `registro_ventas` VALUES ('19', '1', '8.00', '2015-12-27', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('20', '1', '160.00', '2015-12-27', '160.00', '124', '3', '1', '125.00', '125.00', '35.00');
INSERT INTO `registro_ventas` VALUES ('21', '1', '8.00', '2015-12-27', '8.00', '103', '3', '1', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('22', '1', '115.00', '2015-12-27', '115.00', '115', '3', '1', '95.00', '95.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('23', '1', '6.00', '2015-12-28', '6.00', '137', '3', '1', '2.00', '2.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('24', '1', '3.00', '2015-12-28', '3.00', '35', '3', '1', '2.00', '2.00', '1.00');
INSERT INTO `registro_ventas` VALUES ('25', '1', '10.00', '2015-12-28', '10.00', '90', '3', '1', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('26', '1', '8.00', '2015-12-28', '8.00', '88', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('27', '1', '8.00', '2015-12-28', '8.00', '140', '3', '1', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('28', '1', '8.00', '2015-12-28', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('29', '1', '8.00', '2015-12-29', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('30', '1', '8.00', '2015-12-29', '8.00', '88', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('33', '1', '10.00', '2015-12-29', '10.00', '207', '3', '1', '8.00', '8.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('34', '1', '2.00', '2015-12-29', '2.00', '146', '3', '1', '2.00', '2.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('35', '1', '120.00', '2015-12-30', '120.00', '134', '3', '5', '100.00', '100.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('36', '1', '80.00', '2015-12-30', '80.00', '182', '3', '5', '65.00', '65.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('37', '1', '8.00', '2015-12-30', '8.00', '89', '3', '1', '4.00', '4.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('38', '1', '150.00', '2016-01-04', '150.00', '208', '3', '1', '120.00', '120.00', '30.00');
INSERT INTO `registro_ventas` VALUES ('40', '1', '10.00', '2016-01-04', '10.00', '209', '3', '1', '5.00', '5.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('42', '1', '6.00', '2016-01-04', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('43', '1', '8.00', '2016-01-04', '8.00', '83', '3', '5', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('44', '1', '150.00', '2015-12-30', '150.00', '124', '3', '1', '125.00', '125.00', '25.00');
INSERT INTO `registro_ventas` VALUES ('46', '1', '8.00', '2016-01-05', '8.00', '141', '3', '5', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('47', '1', '10.00', '2016-01-05', '10.00', '226', '3', '5', '5.00', '5.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('48', '1', '130.00', '2016-01-05', '130.00', '125', '3', '5', '110.00', '110.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('49', '1', '10.00', '2016-01-05', '10.00', '6', '3', '5', '6.00', '6.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('50', '1', '5.00', '2016-01-04', '5.00', '11', '3', '5', '3.00', '3.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('51', '1', '5.00', '2016-01-05', '5.00', '11', '3', '5', '3.00', '3.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('52', '1', '10.00', '2016-01-05', '10.00', '83', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('53', '1', '5.00', '2016-01-05', '5.00', '149', '3', '5', '1.80', '1.80', '3.20');
INSERT INTO `registro_ventas` VALUES ('54', '1', '6.00', '2016-01-05', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('55', '10', '35.00', '2016-01-05', '3.50', '10', '3', '5', '2.70', '27.00', '8.00');
INSERT INTO `registro_ventas` VALUES ('56', '1', '8.00', '2016-01-05', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('57', '1', '15.00', '2016-01-05', '15.00', '144', '3', '5', '13.00', '13.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('58', '1', '10.00', '2016-01-06', '10.00', '89', '3', '5', '4.00', '4.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('59', '1', '115.00', '2016-01-06', '115.00', '115', '3', '5', '95.00', '95.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('60', '2', '12.00', '2016-01-06', '6.00', '10', '3', '5', '2.70', '5.40', '6.60');
INSERT INTO `registro_ventas` VALUES ('61', '1', '5.00', '2016-01-06', '5.00', '152', '3', '5', '5.00', '5.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('62', '1', '110.00', '2016-01-06', '110.00', '133', '4', '1', '95.00', '95.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('63', '1', '5.00', '2016-01-06', '5.00', '11', '3', '5', '3.00', '3.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('64', '1', '1.00', '2016-01-06', '1.00', '219', '3', '5', '1.00', '1.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('65', '2', '12.00', '2016-01-07', '6.00', '155', '3', '5', '1.70', '3.40', '8.60');
INSERT INTO `registro_ventas` VALUES ('66', '2', '20.00', '2016-01-07', '10.00', '6', '3', '5', '6.00', '12.00', '8.00');
INSERT INTO `registro_ventas` VALUES ('67', '1', '12.00', '2016-01-07', '12.00', '228', '3', '5', '5.00', '5.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('68', '1', '12.00', '2016-01-07', '12.00', '229', '3', '5', '5.00', '5.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('69', '1', '150.00', '2016-01-07', '150.00', '124', '3', '5', '125.00', '125.00', '25.00');
INSERT INTO `registro_ventas` VALUES ('70', '1', '8.00', '2016-01-07', '8.00', '103', '3', '5', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('71', '1', '6.00', '2016-01-08', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('72', '1', '6.00', '2016-01-08', '6.00', '155', '3', '5', '1.70', '1.70', '4.30');
INSERT INTO `registro_ventas` VALUES ('73', '1', '6.00', '2016-01-08', '6.00', '137', '3', '5', '2.00', '2.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('74', '1', '8.00', '2016-01-08', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('75', '1', '10.00', '2016-01-08', '10.00', '6', '3', '5', '6.00', '6.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('76', '1', '80.00', '2016-01-08', '80.00', '129', '3', '5', '67.00', '67.00', '13.00');
INSERT INTO `registro_ventas` VALUES ('77', '1', '8.00', '2016-01-08', '8.00', '83', '3', '5', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('78', '1', '15.00', '2016-01-08', '15.00', '7', '3', '5', '9.00', '9.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('79', '6', '600.00', '2016-01-08', '100.00', '133', '6', '1', '95.00', '570.00', '30.00');
INSERT INTO `registro_ventas` VALUES ('80', '25', '50.00', '2016-01-08', '2.00', '155', '6', '1', '1.70', '42.50', '7.50');
INSERT INTO `registro_ventas` VALUES ('81', '1', '120.00', '2016-01-09', '120.00', '133', '3', '5', '95.00', '95.00', '25.00');
INSERT INTO `registro_ventas` VALUES ('82', '1', '8.00', '2016-01-09', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('83', '1', '6.00', '2016-01-09', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('84', '1', '8.00', '2016-01-09', '8.00', '83', '3', '5', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('85', '1', '80.00', '2016-01-09', '80.00', '129', '3', '5', '67.00', '67.00', '13.00');
INSERT INTO `registro_ventas` VALUES ('87', '1', '16.00', '2016-01-09', '16.00', '153', '3', '5', '10.00', '10.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('88', '1', '5.00', '2016-01-09', '5.00', '149', '3', '5', '1.80', '1.80', '3.20');
INSERT INTO `registro_ventas` VALUES ('89', '1', '15.00', '2016-01-09', '15.00', '41', '3', '5', '8.00', '8.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('90', '1', '8.00', '2016-01-09', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('91', '1', '8.00', '2016-01-04', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('92', '1', '130.00', '2016-01-09', '130.00', '125', '3', '5', '110.00', '110.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('93', '1', '5.00', '2016-01-09', '5.00', '149', '3', '5', '1.80', '1.80', '3.20');
INSERT INTO `registro_ventas` VALUES ('94', '1', '10.00', '2016-01-09', '10.00', '6', '3', '5', '6.00', '6.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('95', '1', '110.00', '2016-01-09', '110.00', '133', '4', '1', '95.00', '95.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('96', '8', '16.00', '2016-01-09', '2.00', '155', '3', '1', '1.70', '13.60', '2.40');
INSERT INTO `registro_ventas` VALUES ('97', '1', '110.00', '2016-01-11', '110.00', '133', '4', '1', '95.00', '95.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('98', '1', '120.00', '2016-01-11', '120.00', '121', '4', '1', '115.00', '115.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('99', '1', '10.00', '2016-01-10', '10.00', '213', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('100', '1', '78.00', '2016-01-11', '78.00', '129', '3', '5', '67.00', '67.00', '11.00');
INSERT INTO `registro_ventas` VALUES ('101', '1', '8.00', '2016-01-11', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('102', '1', '6.00', '2016-01-11', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('103', '1', '6.00', '2016-01-11', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('104', '1', '10.00', '2016-01-11', '10.00', '83', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('110', '1', '10.00', '2016-01-12', '10.00', '88', '3', '5', '5.00', '5.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('111', '1', '8.00', '2016-01-12', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('112', '1', '2.00', '2016-01-12', '2.00', '152', '3', '5', '5.00', '5.00', '-3.00');
INSERT INTO `registro_ventas` VALUES ('113', '1', '6.00', '2016-01-12', '6.00', '155', '3', '5', '1.70', '1.70', '4.30');
INSERT INTO `registro_ventas` VALUES ('114', '1', '1.00', '2016-01-12', '1.00', '219', '3', '5', '1.00', '1.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('115', '1', '5.00', '2016-01-12', '5.00', '149', '3', '5', '1.80', '1.80', '3.20');
INSERT INTO `registro_ventas` VALUES ('116', '1', '8.00', '2016-01-12', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('117', '3', '285.00', '2016-01-12', '95.00', '115', '6', '1', '95.00', '285.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('118', '2', '230.00', '2016-01-12', '115.00', '181', '6', '1', '110.00', '220.00', '10.00');
INSERT INTO `registro_ventas` VALUES ('119', '2', '230.00', '2016-01-12', '115.00', '183', '6', '1', '105.00', '210.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('120', '6', '675.00', '2016-01-12', '112.50', '125', '6', '1', '110.00', '660.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('121', '35', '70.00', '2016-01-12', '2.00', '155', '6', '1', '1.70', '59.50', '10.50');
INSERT INTO `registro_ventas` VALUES ('123', '1', '5.00', '2016-01-13', '5.00', '212', '3', '5', '3.00', '3.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('124', '1', '130.00', '2016-01-13', '130.00', '130', '3', '5', '110.00', '110.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('125', '1', '77.00', '2016-01-13', '77.00', '129', '3', '5', '67.00', '67.00', '10.00');
INSERT INTO `registro_ventas` VALUES ('126', '1', '8.00', '2016-01-13', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('127', '1', '125.00', '2016-01-14', '125.00', '125', '3', '5', '110.00', '110.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('128', '1', '1.00', '2016-01-14', '1.00', '219', '3', '5', '1.00', '1.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('130', '1', '6.00', '2016-01-14', '6.00', '205', '3', '5', '2.00', '2.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('131', '1', '140.00', '2016-01-15', '140.00', '121', '3', '1', '115.00', '115.00', '25.00');
INSERT INTO `registro_ventas` VALUES ('132', '1', '8.00', '2016-01-15', '8.00', '89', '3', '1', '4.00', '4.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('133', '1', '6.00', '2016-01-15', '6.00', '138', '3', '1', '2.00', '2.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('134', '1', '120.00', '2016-01-15', '120.00', '131', '3', '1', '100.00', '100.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('135', '1', '15.00', '2016-01-15', '15.00', '7', '3', '1', '9.00', '9.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('136', '1', '6.00', '2016-01-15', '6.00', '142', '3', '1', '3.00', '3.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('137', '1', '10.00', '2016-01-16', '10.00', '103', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('138', '1', '15.00', '2016-01-16', '15.00', '7', '3', '5', '9.00', '9.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('139', '1', '12.00', '2016-01-16', '12.00', '104', '3', '5', '5.00', '5.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('140', '1', '10.00', '2016-01-16', '10.00', '89', '3', '5', '4.00', '4.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('141', '1', '10.00', '2016-01-16', '10.00', '248', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('142', '1', '0.00', '2016-01-16', '0.00', '149', '3', '1', '1.80', '1.80', '-1.80');
INSERT INTO `registro_ventas` VALUES ('143', '1', '25.00', '2016-01-12', '25.00', '238', '3', '5', '15.00', '15.00', '10.00');
INSERT INTO `registro_ventas` VALUES ('144', '1', '6.00', '2016-01-16', '6.00', '155', '3', '5', '1.70', '1.70', '4.30');
INSERT INTO `registro_ventas` VALUES ('145', '1', '5.00', '2016-01-16', '5.00', '149', '3', '5', '1.80', '1.80', '3.20');
INSERT INTO `registro_ventas` VALUES ('146', '1', '170.00', '2016-01-16', '170.00', '259', '3', '5', '120.00', '120.00', '50.00');
INSERT INTO `registro_ventas` VALUES ('147', '1', '5.00', '2016-01-16', '5.00', '89', '3', '5', '4.00', '4.00', '1.00');
INSERT INTO `registro_ventas` VALUES ('148', '1', '15.00', '2016-01-17', '15.00', '41', '3', '1', '8.00', '8.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('149', '1', '3.00', '2016-01-17', '3.00', '35', '3', '1', '2.00', '2.00', '1.00');
INSERT INTO `registro_ventas` VALUES ('150', '1', '12.00', '2016-01-17', '12.00', '112', '3', '1', '4.00', '4.00', '8.00');
INSERT INTO `registro_ventas` VALUES ('151', '2', '12.00', '2016-01-17', '6.00', '10', '3', '1', '2.70', '5.40', '6.60');
INSERT INTO `registro_ventas` VALUES ('152', '1', '10.00', '2016-01-17', '10.00', '213', '3', '1', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('153', '1', '15.00', '2016-01-17', '15.00', '7', '3', '1', '9.00', '9.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('154', '1', '8.00', '2016-01-17', '8.00', '152', '3', '1', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('155', '1', '5.00', '2016-01-17', '5.00', '149', '3', '1', '1.80', '1.80', '3.20');
INSERT INTO `registro_ventas` VALUES ('156', '1', '5.00', '2016-01-18', '5.00', '137', '3', '1', '2.00', '2.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('157', '1', '6.00', '2016-01-18', '6.00', '10', '3', '1', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('158', '1', '5.00', '2016-01-18', '5.00', '139', '3', '1', '2.00', '2.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('159', '1', '8.00', '2016-01-18', '8.00', '109', '3', '1', '4.00', '4.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('161', '1', '10.00', '2016-01-18', '10.00', '106', '3', '1', '4.00', '4.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('162', '1', '130.00', '2016-01-19', '130.00', '183', '3', '5', '105.00', '105.00', '25.00');
INSERT INTO `registro_ventas` VALUES ('163', '1', '0.00', '2016-01-19', '0.00', '264', '3', '5', '0.00', '0.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('164', '3', '15.00', '2016-01-19', '5.00', '11', '3', '5', '3.00', '9.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('165', '1', '6.00', '2016-01-19', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('166', '1', '80.00', '2016-01-19', '80.00', '261', '3', '5', '67.00', '67.00', '13.00');
INSERT INTO `registro_ventas` VALUES ('167', '1', '10.00', '2016-01-19', '10.00', '77', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('168', '1', '6.00', '2016-01-20', '6.00', '155', '3', '5', '1.70', '1.70', '4.30');
INSERT INTO `registro_ventas` VALUES ('169', '1', '90.00', '2016-01-20', '90.00', '261', '3', '5', '67.00', '67.00', '23.00');
INSERT INTO `registro_ventas` VALUES ('170', '1', '10.00', '2016-01-20', '10.00', '95', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('171', '1', '0.00', '2016-01-20', '0.00', '264', '3', '5', '0.00', '0.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('172', '1', '10.00', '2016-01-20', '10.00', '6', '3', '5', '6.00', '6.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('173', '1', '25.00', '2016-01-20', '25.00', '238', '3', '5', '15.00', '15.00', '10.00');
INSERT INTO `registro_ventas` VALUES ('174', '1', '6.00', '2016-01-20', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('175', '1', '3.00', '2016-01-20', '3.00', '35', '3', '5', '2.00', '2.00', '1.00');
INSERT INTO `registro_ventas` VALUES ('176', '1', '200.00', '2016-01-20', '200.00', '256', '3', '5', '150.00', '150.00', '50.00');
INSERT INTO `registro_ventas` VALUES ('177', '1', '115.00', '2016-01-21', '115.00', '125', '3', '1', '110.00', '110.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('179', '1', '12.00', '2016-01-21', '12.00', '228', '3', '5', '5.00', '5.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('180', '1', '6.00', '2016-01-21', '6.00', '137', '3', '5', '2.00', '2.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('181', '1', '8.00', '2016-01-21', '8.00', '141', '3', '5', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('182', '1', '135.00', '2016-01-21', '135.00', '121', '3', '5', '115.00', '115.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('183', '1', '0.00', '2016-01-21', '0.00', '264', '3', '5', '0.00', '0.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('184', '1', '6.00', '2016-01-21', '6.00', '91', '3', '5', '4.00', '4.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('185', '1', '125.00', '2016-01-21', '125.00', '125', '3', '5', '110.00', '110.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('186', '1', '6.00', '2016-01-21', '6.00', '10', '3', '5', '2.70', '2.70', '3.30');
INSERT INTO `registro_ventas` VALUES ('187', '1', '125.00', '2016-01-20', '125.00', '181', '4', '1', '110.00', '110.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('188', '1', '130.00', '2016-01-20', '130.00', '121', '4', '1', '115.00', '115.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('189', '1', '125.00', '2016-01-20', '125.00', '125', '4', '1', '110.00', '110.00', '15.00');
INSERT INTO `registro_ventas` VALUES ('190', '1', '50.00', '2016-01-21', '50.00', '125', '4', '1', '110.00', '110.00', '-60.00');
INSERT INTO `registro_ventas` VALUES ('191', '1', '8.00', '2016-01-21', '8.00', '95', '3', '5', '3.00', '3.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('192', '1', '10.00', '2016-01-22', '10.00', '174', '5', '1', '4.00', '4.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('193', '1', '10.00', '2016-01-19', '10.00', '177', '5', '1', '4.00', '4.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('194', '1', '102.00', '2016-01-23', '102.00', '273', '3', '1', '100.00', '100.00', '2.00');
INSERT INTO `registro_ventas` VALUES ('196', '1', '105.00', '2016-01-23', '105.00', '273', '6', '1', '100.00', '100.00', '5.00');
INSERT INTO `registro_ventas` VALUES ('197', '2', '230.00', '2016-01-23', '115.00', '183', '6', '1', '105.00', '210.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('198', '10', '20.00', '2016-01-23', '2.00', '155', '6', '1', '1.70', '17.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('199', '2', '12.00', '2016-01-22', '6.00', '10', '3', '1', '2.70', '5.40', '6.60');
INSERT INTO `registro_ventas` VALUES ('200', '10', '60.00', '2016-01-22', '6.00', '152', '3', '1', '5.00', '50.00', '10.00');
INSERT INTO `registro_ventas` VALUES ('201', '1', '10.00', '2016-01-22', '10.00', '275', '3', '5', '6.00', '6.00', '4.00');
INSERT INTO `registro_ventas` VALUES ('202', '1', '140.00', '2016-01-22', '140.00', '125', '3', '5', '110.00', '110.00', '30.00');
INSERT INTO `registro_ventas` VALUES ('203', '1', '130.00', '2016-01-22', '130.00', '130', '3', '5', '110.00', '110.00', '20.00');
INSERT INTO `registro_ventas` VALUES ('204', '1', '6.00', '2016-01-22', '6.00', '264', '3', '5', '0.00', '0.00', '6.00');
INSERT INTO `registro_ventas` VALUES ('205', '1', '8.00', '2016-01-23', '8.00', '152', '3', '5', '5.00', '5.00', '3.00');
INSERT INTO `registro_ventas` VALUES ('206', '1', '120.00', '2016-01-23', '120.00', '133', '3', '5', '95.00', '95.00', '25.00');
INSERT INTO `registro_ventas` VALUES ('207', '1', '0.00', '2016-01-23', '0.00', '264', '3', '5', '0.00', '0.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('208', '1', '10.00', '2016-01-23', '10.00', '95', '3', '5', '3.00', '3.00', '7.00');
INSERT INTO `registro_ventas` VALUES ('209', '1', '80.00', '2016-01-23', '80.00', '129', '3', '5', '67.00', '67.00', '13.00');
INSERT INTO `registro_ventas` VALUES ('210', '1', '0.00', '2016-01-23', '0.00', '264', '3', '5', '0.00', '0.00', '0.00');
INSERT INTO `registro_ventas` VALUES ('211', '1', '5.00', '2016-01-23', '5.00', '11', '3', '5', '3.00', '3.00', '2.00');

-- ----------------------------
-- Table structure for `reg_vent_cant`
-- ----------------------------
DROP TABLE IF EXISTS `reg_vent_cant`;
CREATE TABLE `reg_vent_cant` (
  `id_reg` int(11) NOT NULL AUTO_INCREMENT,
  `cant` int(11) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `p_venta` decimal(10,2) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `nomb_cliente` text,
  `uid` int(11) DEFAULT NULL,
  `p_costo` decimal(11,2) DEFAULT NULL,
  `importe_costo` decimal(11,2) DEFAULT NULL,
  `utilidad` decimal(11,2) DEFAULT NULL,
  PRIMARY KEY (`id_reg`),
  KEY `Refproducto61` (`id_prod`),
  KEY `Refusuarios63` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg_vent_cant
-- ----------------------------
INSERT INTO `reg_vent_cant` VALUES ('1', '2', '230.00', '2015-12-26', '115.00', '181', 'Yosmar', '1', '110.00', '220.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('2', '3', '210.00', '2015-12-26', '70.00', '182', 'Yosmar', '1', '65.00', '195.00', '15.00');
INSERT INTO `reg_vent_cant` VALUES ('3', '4', '520.00', '2015-12-26', '130.00', '124', 'Yosmar', '1', '125.00', '500.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('4', '2', '230.00', '2015-12-26', '115.00', '183', 'Yosmar', '1', '105.00', '210.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('5', '3', '210.00', '2015-12-26', '70.00', '127', 'Yosmar', '1', '65.00', '195.00', '15.00');
INSERT INTO `reg_vent_cant` VALUES ('6', '4', '420.00', '2015-12-26', '105.00', '133', 'Yosmar', '1', '95.00', '380.00', '40.00');
INSERT INTO `reg_vent_cant` VALUES ('7', '2', '196.00', '2015-12-26', '98.00', '115', 'Yosmar', '1', '95.00', '190.00', '6.00');
INSERT INTO `reg_vent_cant` VALUES ('8', '3', '210.00', '2015-12-26', '70.00', '127', 'Sta Cruz', '1', '65.00', '195.00', '15.00');
INSERT INTO `reg_vent_cant` VALUES ('9', '2', '140.00', '2015-12-26', '70.00', '182', 'Sta Cruz', '1', '65.00', '130.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('10', '20', '120.00', '2015-12-26', '6.00', '152', 'Sta Cruz', '1', '5.00', '100.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('11', '5', '30.00', '2015-12-28', '6.00', '152', 'Liusbel Vertientes', '1', '5.00', '25.00', '5.00');
INSERT INTO `reg_vent_cant` VALUES ('12', '1', '12.00', '2015-12-28', '12.00', '153', 'Liusbel Vertientes', '1', '10.00', '10.00', '2.00');
INSERT INTO `reg_vent_cant` VALUES ('13', '80', '160.00', '2015-12-28', '2.00', '155', 'Raul Lugo', '1', '2.00', '160.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('14', '40', '80.00', '2015-12-29', '2.00', '155', 'Roger', '1', '2.00', '80.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('15', '100', '520.00', '2015-12-29', '5.20', '152', 'Roger', '1', '5.00', '500.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('16', '4', '520.00', '2015-12-29', '130.00', '124', 'Yosmar', '1', '125.00', '500.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('17', '2', '210.00', '2015-12-29', '105.00', '133', 'Yosmar', '1', '95.00', '190.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('18', '2', '196.00', '2015-12-29', '98.00', '115', 'Yosmar', '1', '95.00', '190.00', '6.00');
INSERT INTO `reg_vent_cant` VALUES ('19', '40', '80.00', '2015-12-29', '2.00', '155', 'Raul Lugo', '1', '2.00', '80.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('20', '50', '260.00', '2015-12-29', '5.20', '152', 'Raul Lugo', '1', '5.00', '250.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('21', '3', '390.00', '2015-12-29', '130.00', '124', 'Richard', '1', '125.00', '375.00', '15.00');
INSERT INTO `reg_vent_cant` VALUES ('22', '10', '110.00', '2015-12-29', '11.00', '153', 'Richard', '1', '10.00', '100.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('23', '10', '25.00', '2015-12-30', '2.50', '155', 'Granma', '1', '2.00', '20.00', '5.00');
INSERT INTO `reg_vent_cant` VALUES ('24', '1', '75.00', '2015-12-30', '75.00', '182', 'Granma', '1', '65.00', '65.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('25', '10', '25.00', '2015-12-30', '2.50', '155', 'Otros', '1', '2.00', '20.00', '5.00');
INSERT INTO `reg_vent_cant` VALUES ('26', '20', '70.00', '2016-01-04', '3.50', '10', 'Otros', '1', '2.70', '54.00', '16.00');
INSERT INTO `reg_vent_cant` VALUES ('27', '6', '690.00', '2015-12-30', '115.00', '183', 'Richard', '1', '105.00', '630.00', '60.00');
INSERT INTO `reg_vent_cant` VALUES ('28', '2', '194.00', '2015-12-30', '97.00', '115', 'Richard', '1', '95.00', '190.00', '4.00');
INSERT INTO `reg_vent_cant` VALUES ('29', '2', '200.00', '2015-12-30', '100.00', '133', 'Richard', '1', '95.00', '190.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('30', '4', '400.00', '2016-01-04', '100.00', '133', 'Raicel Moron', '1', '95.00', '380.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('31', '4', '460.00', '2016-01-04', '115.00', '130', 'Raicel Moron', '1', '110.00', '440.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('32', '4', '460.00', '2016-01-04', '115.00', '183', 'Raicel Moron', '1', '105.00', '420.00', '40.00');
INSERT INTO `reg_vent_cant` VALUES ('33', null, '0.00', null, null, null, null, '1', null, '0.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('34', null, '0.00', null, null, null, null, '1', null, '0.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('35', null, '0.00', null, null, null, null, '1', null, '0.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('36', '4', '400.00', '2016-01-04', '100.00', '133', 'Raicel Moron', '1', '95.00', '380.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('37', '4', '460.00', '2016-01-04', '115.00', '130', 'Raicel Moron', '1', '110.00', '440.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('38', '4', '460.00', '2016-01-04', '115.00', '183', 'Raicel Moron', '1', '105.00', '420.00', '40.00');
INSERT INTO `reg_vent_cant` VALUES ('39', '2', '240.00', '2016-01-04', '120.00', '121', 'Raicel Moron', '1', '115.00', '230.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('40', '6', '420.00', '2016-01-04', '70.00', '129', 'Raicel Moron', '1', '65.00', '390.00', '30.00');
INSERT INTO `reg_vent_cant` VALUES ('41', '40', '80.00', '2016-01-04', '2.00', '155', 'Raicel Moron', '1', '2.00', '80.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('42', '3', '24.00', '2016-01-04', '8.00', '237', 'Raicel Moron', '1', '8.00', '24.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('43', '6', '18.00', '2016-01-04', '3.00', '142', 'Raicel Moron', '1', '3.00', '18.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('44', '20', '40.00', '2016-01-06', '2.00', '155', 'Raul Lugo', '1', '2.00', '40.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('45', '3', '6.00', '2016-01-06', '2.00', '35', 'Raul Lugo', '1', '2.00', '6.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('46', '3', '6.00', '2016-01-06', '2.00', '137', 'Raul Lugo', '1', '2.00', '6.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('47', '2', '4.00', '2016-01-06', '2.00', '138', 'Raul Lugo', '1', '2.00', '4.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('48', '10', '20.00', '2016-01-07', '2.00', '149', 'Otros', '1', '2.00', '20.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('49', '2', '230.00', '2016-01-07', '115.00', '184', 'Royner', '1', '105.00', '210.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('50', '2', '230.00', '2016-01-07', '115.00', '184', 'Royner', '1', '105.00', '210.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('51', '2', '224.00', '2016-01-07', '112.00', '125', 'Royner', '1', '110.00', '220.00', '4.00');
INSERT INTO `reg_vent_cant` VALUES ('52', '2', '200.00', '2016-01-07', '100.00', '133', 'Royner', '1', '95.00', '190.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('53', '1', '112.00', '2016-01-07', '112.00', '130', 'Royner', '1', '110.00', '110.00', '2.00');
INSERT INTO `reg_vent_cant` VALUES ('54', '3', '360.00', '2016-01-07', '120.00', '121', 'Rene Republica', '1', '115.00', '345.00', '15.00');
INSERT INTO `reg_vent_cant` VALUES ('55', '2', '220.00', '2016-01-07', '110.00', '131', 'Rene Republica', '1', '100.00', '200.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('56', '4', '20.00', '2016-01-07', '5.00', '91', 'Rene Republica', '1', '4.00', '16.00', '4.00');
INSERT INTO `reg_vent_cant` VALUES ('57', '7', '42.00', '2016-01-07', '6.00', '152', 'Liusbel Vertiente', '1', '5.00', '35.00', '7.00');
INSERT INTO `reg_vent_cant` VALUES ('58', '10', '35.00', '2016-01-07', '3.50', '10', 'Liusbel Vertiente', '1', '2.70', '27.00', '8.00');
INSERT INTO `reg_vent_cant` VALUES ('59', '8', '48.00', '2016-01-07', '6.00', '141', 'Liusbel Vertiente', '1', '3.00', '24.00', '24.00');
INSERT INTO `reg_vent_cant` VALUES ('60', '2', '6.00', '2016-01-07', '3.00', '140', 'Liusbel Vertiente', '1', '3.00', '6.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('61', '10', '110.00', '2016-01-08', '11.00', '153', 'Raul Lugo', '1', '10.00', '100.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('62', null, '0.00', null, null, null, null, '1', null, '0.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('63', null, '0.00', null, null, null, null, '1', null, '0.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('64', '1', '112.00', '2016-01-08', '112.00', '181', 'Raul Lugo', '1', '110.00', '110.00', '2.00');
INSERT INTO `reg_vent_cant` VALUES ('65', '1', '115.00', '2016-01-08', '115.00', '125', 'Leonel-Granma', '1', '110.00', '110.00', '5.00');
INSERT INTO `reg_vent_cant` VALUES ('66', '10', '20.00', '2016-01-08', '2.00', '149', 'Leonel-Granma', '1', '2.00', '20.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('67', '10', '20.00', '2016-01-08', '2.00', '149', 'Leonel-Bayamo', '1', '1.80', '18.00', '2.00');
INSERT INTO `reg_vent_cant` VALUES ('68', '1', '115.00', '2016-01-08', '115.00', '125', 'Leonel-Bayamo', '1', '110.00', '110.00', '5.00');
INSERT INTO `reg_vent_cant` VALUES ('69', '2', '200.00', '2016-01-08', '100.00', '115', 'Leonel-Bayamo', '1', '95.00', '190.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('70', '1', '5.00', '2016-01-09', '5.00', '91', 'Liusbel-Vertiente', '1', '4.00', '4.00', '1.00');
INSERT INTO `reg_vent_cant` VALUES ('71', '2', '224.00', '2016-01-12', '112.00', '181', 'Raul Lugo', '1', '110.00', '220.00', '4.00');
INSERT INTO `reg_vent_cant` VALUES ('72', '1', '113.00', '2016-01-12', '113.00', '183', '', '1', '105.00', '105.00', '8.00');
INSERT INTO `reg_vent_cant` VALUES ('73', '1', '107.00', '2016-01-12', '107.00', '131', 'Raul Lugo', '1', '100.00', '100.00', '7.00');
INSERT INTO `reg_vent_cant` VALUES ('74', '1', '112.00', '2016-01-16', '112.00', '181', '', '1', '110.00', '110.00', '2.00');
INSERT INTO `reg_vent_cant` VALUES ('75', '1', '73.00', '2016-01-16', '73.00', '261', 'Raul Lugo', '1', '67.00', '67.00', '6.00');
INSERT INTO `reg_vent_cant` VALUES ('76', '10', '110.00', '2016-01-06', '11.00', '153', 'Raul Lugo', '1', '9.80', '98.00', '12.00');
INSERT INTO `reg_vent_cant` VALUES ('77', '2', '28.00', '2016-01-11', '14.00', '153', 'Otros', '1', '9.80', '19.60', '8.40');
INSERT INTO `reg_vent_cant` VALUES ('78', '1', '15.00', '2016-01-11', '15.00', '238', 'Liusbel Vertientes', '1', '15.00', '15.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('79', '2', '4.00', '2016-01-12', '2.00', '35', 'Liusvel Vertientes', '1', '2.00', '4.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('80', '3', '30.00', '2016-01-12', '10.00', '41', 'Liusbel Vertientes', '1', '8.00', '24.00', '6.00');
INSERT INTO `reg_vent_cant` VALUES ('81', '20', '60.00', '2016-01-12', '3.00', '156', 'Cliente Bayamo', '1', '2.00', '40.00', '20.00');
INSERT INTO `reg_vent_cant` VALUES ('82', '3', '9.00', '2016-01-16', '3.00', '156', 'Otros', '1', '2.00', '6.00', '3.00');
INSERT INTO `reg_vent_cant` VALUES ('83', null, '0.00', null, null, null, null, '1', null, '0.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('84', '2', '224.00', '2016-01-19', '112.00', '125', 'Raul Lugo', '1', '110.00', '220.00', '4.00');
INSERT INTO `reg_vent_cant` VALUES ('85', '2', '230.00', '2016-01-21', '115.00', '130', '', '1', '110.00', '220.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('86', '1', '115.00', '2016-01-19', '115.00', '184', 'Raul Lugo', '1', '105.00', '105.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('87', '1', '98.00', '2016-01-19', '98.00', '115', 'Raul Lugo', '1', '95.00', '95.00', '3.00');
INSERT INTO `reg_vent_cant` VALUES ('88', null, '0.00', null, null, null, null, '1', null, '0.00', '0.00');
INSERT INTO `reg_vent_cant` VALUES ('89', '10', '58.00', '2016-01-22', '5.80', '152', 'comprador micro florida', '4', '5.00', '50.00', '8.00');
INSERT INTO `reg_vent_cant` VALUES ('90', '1', '120.00', '2016-01-22', '120.00', '121', 'pavel', '1', '115.00', '115.00', '5.00');
INSERT INTO `reg_vent_cant` VALUES ('91', '1', '12.00', '2016-01-22', '12.00', '153', 'rio cauto blanquito', '4', '9.80', '9.80', '2.20');
INSERT INTO `reg_vent_cant` VALUES ('92', '40', '120.00', '2016-01-23', '3.00', '10', '', '4', '2.70', '108.00', '12.00');
INSERT INTO `reg_vent_cant` VALUES ('93', '30', '165.00', '2016-01-23', '5.50', '152', '', '4', '5.00', '150.00', '15.00');
INSERT INTO `reg_vent_cant` VALUES ('94', '2', '200.00', '2016-01-23', '100.00', '133', '', '4', '95.00', '190.00', '10.00');
INSERT INTO `reg_vent_cant` VALUES ('95', '20', '40.00', '2016-01-23', '2.00', '155', 'roinel', '4', '1.70', '34.00', '6.00');
INSERT INTO `reg_vent_cant` VALUES ('96', '1', '107.00', '2016-01-23', '107.00', '131', 'Raul Lugo', '1', '100.00', '100.00', '7.00');
INSERT INTO `reg_vent_cant` VALUES ('97', '1', '112.00', '2016-01-23', '112.00', '181', 'Raul Lugo', '1', '110.00', '110.00', '2.00');
INSERT INTO `reg_vent_cant` VALUES ('98', '3', '18.00', '2016-01-23', '6.00', '276', 'Raul Lugo', '1', '0.00', '0.00', '18.00');
INSERT INTO `reg_vent_cant` VALUES ('99', '1', '98.00', '2016-01-23', '98.00', '133', 'Raul Lugo', '1', '95.00', '95.00', '3.00');
INSERT INTO `reg_vent_cant` VALUES ('100', '1', '10.00', '2016-01-23', '10.00', '92', '', null, '3.00', '3.00', '7.00');

-- ----------------------------
-- Table structure for `servicio`
-- ----------------------------
DROP TABLE IF EXISTS `servicio`;
CREATE TABLE `servicio` (
  `id_serv` int(11) NOT NULL AUTO_INCREMENT,
  `nomb_servicio` text,
  `descripcion` text,
  `p_costo` decimal(10,2) DEFAULT NULL,
  `p_venta` decimal(10,2) DEFAULT NULL,
  `id_tipo_costo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_serv`),
  KEY `Reftipo_costo73` (`id_tipo_costo`) USING BTREE,
  CONSTRAINT `servicio_ibfk_1` FOREIGN KEY (`id_tipo_costo`) REFERENCES `tipo_costo` (`id_tipo_costo`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of servicio
-- ----------------------------
INSERT INTO `servicio` VALUES ('1', 'Poner Screen Guard', 'Poner en los telefonos o en tablet los screen guard', '2.00', '5.00', '1');
INSERT INTO `servicio` VALUES ('2', 'Desbloqueo por Caja', 'Desbloqueo de Telefonos a traves de las cajas de desbloqueos.', '0.00', '10.00', '2');
INSERT INTO `servicio` VALUES ('3', 'Desbloqueo por credito', 'Desbloqueo de telefonos a traves de servicios por credito', '5.00', '20.00', '2');
INSERT INTO `servicio` VALUES ('4', 'Copia de Juego 360', 'Copia de Juegos Xbox 360', '0.00', '0.80', '2');
INSERT INTO `servicio` VALUES ('5', 'Copia de APK', 'Copia de APK', '0.00', '1.00', '2');
INSERT INTO `servicio` VALUES ('6', 'Copia de Juegos Wii', 'Copia de Juegos Wii', '0.00', '0.80', '2');
INSERT INTO `servicio` VALUES ('7', 'Copia de Juegos PSP', 'Copia de Juegos PSP', '0.00', '0.40', '2');
INSERT INTO `servicio` VALUES ('8', 'Copia de Juegos PS2', 'Copia de Juegos PS2', '0.00', '0.40', '2');
INSERT INTO `servicio` VALUES ('9', 'Copia de Juegos Xbox Clasico', 'Copia de Juegos  Xbox Clasico', '0.00', '0.80', '2');
INSERT INTO `servicio` VALUES ('10', 'Copia de Combo Peliculas', 'Copia de Combo de Peliculas 4gb', '0.00', '0.20', '2');
INSERT INTO `servicio` VALUES ('11', 'Copia de Musica', 'Copia de Musica en formato de Audio', '0.00', '0.40', '2');
INSERT INTO `servicio` VALUES ('12', 'Copia del Paquete', 'Copia del Paquete semanal', '0.00', '0.80', '2');
INSERT INTO `servicio` VALUES ('13', 'Defectacion', 'Defectacion de problemas en los telefonos', '0.00', '2.00', '2');
INSERT INTO `servicio` VALUES ('14', 'Mantenimiento Telefono', 'Mantenimiento a los telefonos', '0.00', '3.00', '2');
INSERT INTO `servicio` VALUES ('15', 'Arreglo Wifi Samsung', 'Solucion para la wifi de los samsung', '0.00', '10.00', '2');
INSERT INTO `servicio` VALUES ('16', 'Activacion Iphone', 'Activacion de iphone por internet', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('17', 'Jailbreak Iphone', 'Jailbreak para los iphone', '0.00', '10.00', '2');
INSERT INTO `servicio` VALUES ('18', 'Flasheo de Telefonos', 'Resintalacion de Firmware de los telefonos', '0.00', '10.00', '2');
INSERT INTO `servicio` VALUES ('19', 'Cambio de Idioma Telefonos', 'Cambio de Idioma para los telefonos', '0.00', '10.00', '2');
INSERT INTO `servicio` VALUES ('20', 'Full Reset Telefono', 'Realizar wipe data a telefonos', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('21', 'Solucion para correo Nauta', 'Solucion para bajar el consumo del correo nauta', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('22', 'Arreglo de Mando', 'Arreglo de mando de una consola de juegos sin incluir piezas.', '0.00', '2.00', '2');
INSERT INTO `servicio` VALUES ('23', 'Copia de Juegos PS3', 'Copia de Juegos PS3', '0.00', '0.80', '2');
INSERT INTO `servicio` VALUES ('24', 'Juego PS2 en DVD', 'Grabaciu00f3n de un juego de PS2 en un disco DVD', '0.00', '1.40', '2');
INSERT INTO `servicio` VALUES ('25', 'Actualizacion Xbox 360', 'actualisacion 360', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('26', 'Mantenimiento Laptop', 'Limpieza a laptops', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('27', 'Arreglo Generico', 'Cualquier tipo de arreglito de 1 cuc', '0.00', '1.00', '2');
INSERT INTO `servicio` VALUES ('28', 'Corte de SIM', 'Corte de SIM para telu00e9fonos celulares', '0.00', '1.00', '2');
INSERT INTO `servicio` VALUES ('29', 'Copia de Juegos de PC', 'Copia de Juegos de PC', '0.00', '1.00', '2');
INSERT INTO `servicio` VALUES ('30', 'Joistick puesto', 'Joistick puesto (Pieza de 360)', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('31', 'Quitar Icloud a Iphone', 'Quitar la cuenta Icloud a los Telefonos', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('32', 'Copia de Memoria 8gb', 'Llenado de memoria de 8gb', '0.00', '0.40', '2');
INSERT INTO `servicio` VALUES ('33', 'Pirateria PS2', 'Desbloqueo de consola PS2 para jugar por USB', '0.00', '5.00', '2');
INSERT INTO `servicio` VALUES ('34', 'Configuracion de Correo Nauta', 'Configuracion de Correo NAUTA', '0.00', '1.00', '2');
INSERT INTO `servicio` VALUES ('35', 'Instalacion de software a laptops', 'Instalacion de software a laptops', '0.00', '5.00', '2');

-- ----------------------------
-- Table structure for `sessions`
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) NOT NULL,
  `data` blob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sessions
-- ----------------------------
INSERT INTO `sessions` VALUES ('04b945c3d3a4f2897442a08f4b660342deb046b3', '::1', '1453918720', '');
INSERT INTO `sessions` VALUES ('08c9fb34be2a802d6f73f7302a3d2bb36b4ccbb1', '192.168.1.2', '1453588068', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('196709cb2cf22375073367872c36c381c5a308e0', '::1', '1455625832', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('5638be993a7db28e5c34baa3ce607b6b72499134', '::1', '1453853315', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('598d0917df1bd9e1a16df0d9a41c47ca8bc92bbb', '::1', '1454009479', '');
INSERT INTO `sessions` VALUES ('7f4bb3c34fa8ce45adb8b8346ac03eecfd16884b', '::1', '1454682731', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('84c6132318b95c694fd662828dba03d31afbf72a', '::1', '1453999632', '');
INSERT INTO `sessions` VALUES ('95916147b9bbdc84ac2581c0fdd1d3b3c4ab4664', '::1', '1453928389', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('959a51c11dbaf3fc0a332c2bd0e29afb60d8dbd9', '::1', '1453839404', '');
INSERT INTO `sessions` VALUES ('97224c386b937fc09c1da54fe4f7d138274cc800', '192.168.1.2', '1453571604', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('adbd8662e50922b6a853b5a390c06c932325df6f', '::1', '1453690208', '');
INSERT INTO `sessions` VALUES ('b12daf221a585e385ecce2d4679d3071d9430a91', '::1', '1453589766', 0x7569647C733A313A2235223B757365727C733A353A22726F626572223B726F6C7C733A313A2231223B);
INSERT INTO `sessions` VALUES ('ba4801a8b69d35343e1426616b9bcb1d59cc5d99', '::1', '1454596955', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('becec78945d0196911a3d6d86e252c1dfc4fc27c', '::1', '1453999646', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);
INSERT INTO `sessions` VALUES ('f9d2f5a7f2e7f5ebe9b9852fe77079818ab22897', '::1', '1454618380', 0x7569647C733A313A2231223B757365727C733A373A226B7265736E696B223B726F6C7C733A313A2233223B);

-- ----------------------------
-- Table structure for `tabla_depreciacion`
-- ----------------------------
DROP TABLE IF EXISTS `tabla_depreciacion`;
CREATE TABLE `tabla_depreciacion` (
  `id_tabla` int(11) NOT NULL AUTO_INCREMENT,
  `concepto` text,
  `porciento` int(11) DEFAULT NULL,
  `tiempo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_tabla`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tabla_depreciacion
-- ----------------------------
INSERT INTO `tabla_depreciacion` VALUES ('1', 'Alto', '75', '6');
INSERT INTO `tabla_depreciacion` VALUES ('2', 'Medio', '50', '6');
INSERT INTO `tabla_depreciacion` VALUES ('3', 'Bajo', '30', '12');
INSERT INTO `tabla_depreciacion` VALUES ('4', 'Muy Bajo', '15', '12');

-- ----------------------------
-- Table structure for `tipo_costo`
-- ----------------------------
DROP TABLE IF EXISTS `tipo_costo`;
CREATE TABLE `tipo_costo` (
  `id_tipo_costo` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_costo` text,
  PRIMARY KEY (`id_tipo_costo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tipo_costo
-- ----------------------------
INSERT INTO `tipo_costo` VALUES ('1', 'Fijo');
INSERT INTO `tipo_costo` VALUES ('2', 'Variable');

-- ----------------------------
-- Table structure for `tipo_mov`
-- ----------------------------
DROP TABLE IF EXISTS `tipo_mov`;
CREATE TABLE `tipo_mov` (
  `id_mov` int(11) NOT NULL AUTO_INCREMENT,
  `movimiento` text,
  PRIMARY KEY (`id_mov`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tipo_mov
-- ----------------------------
INSERT INTO `tipo_mov` VALUES ('1', 'Entrada');
INSERT INTO `tipo_mov` VALUES ('2', 'Salida');
INSERT INTO `tipo_mov` VALUES ('3', 'Venta');
INSERT INTO `tipo_mov` VALUES ('4', 'Transferencia');

-- ----------------------------
-- Table structure for `tipo_producto`
-- ----------------------------
DROP TABLE IF EXISTS `tipo_producto`;
CREATE TABLE `tipo_producto` (
  `id_tipo_prod` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_prod` text,
  PRIMARY KEY (`id_tipo_prod`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tipo_producto
-- ----------------------------
INSERT INTO `tipo_producto` VALUES ('1', 'Telefonos Celulares');
INSERT INTO `tipo_producto` VALUES ('2', 'Tablets');
INSERT INTO `tipo_producto` VALUES ('3', 'Micro SD');
INSERT INTO `tipo_producto` VALUES ('4', 'Memorias de Datos');
INSERT INTO `tipo_producto` VALUES ('5', 'Memorias RAM');
INSERT INTO `tipo_producto` VALUES ('6', 'Cargadores');
INSERT INTO `tipo_producto` VALUES ('7', 'Piu00f1as');
INSERT INTO `tipo_producto` VALUES ('8', 'Cables de Telefono');
INSERT INTO `tipo_producto` VALUES ('9', 'Cover de Moviles');
INSERT INTO `tipo_producto` VALUES ('10', 'Cover de Tablets');
INSERT INTO `tipo_producto` VALUES ('11', 'Accesorios de Telefonos');
INSERT INTO `tipo_producto` VALUES ('12', 'Accesorios de Tablets');
INSERT INTO `tipo_producto` VALUES ('13', 'Audifonos');
INSERT INTO `tipo_producto` VALUES ('14', 'Manos Libres');
INSERT INTO `tipo_producto` VALUES ('15', 'Baterias');
INSERT INTO `tipo_producto` VALUES ('16', 'Monitor');
INSERT INTO `tipo_producto` VALUES ('17', 'CPU');
INSERT INTO `tipo_producto` VALUES ('18', 'Accesorios PC');
INSERT INTO `tipo_producto` VALUES ('19', 'Disco Duros');
INSERT INTO `tipo_producto` VALUES ('20', 'HDD');
INSERT INTO `tipo_producto` VALUES ('21', 'Motherboard');
INSERT INTO `tipo_producto` VALUES ('22', 'Tarjeta de Video');
INSERT INTO `tipo_producto` VALUES ('23', 'Accesorios Impresoras');
INSERT INTO `tipo_producto` VALUES ('24', 'Fuente de Poder');
INSERT INTO `tipo_producto` VALUES ('25', 'Consolas');
INSERT INTO `tipo_producto` VALUES ('26', 'Accesorios de Consolas');
INSERT INTO `tipo_producto` VALUES ('27', 'Herramienta de Trabajo');
INSERT INTO `tipo_producto` VALUES ('28', 'Otros');
INSERT INTO `tipo_producto` VALUES ('29', 'Relojes');
INSERT INTO `tipo_producto` VALUES ('30', 'Piezas de Reparacion');

-- ----------------------------
-- Table structure for `tipo_venta`
-- ----------------------------
DROP TABLE IF EXISTS `tipo_venta`;
CREATE TABLE `tipo_venta` (
  `id_tipo_venta` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_venta` text,
  PRIMARY KEY (`id_tipo_venta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tipo_venta
-- ----------------------------

-- ----------------------------
-- Table structure for `usuarios`
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` text,
  `password` text,
  `rol` int(11) DEFAULT NULL,
  `licencia` text,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES ('1', 'kresnik', '59033478180d07080d5e4f3baa0099996c364162', '3', 'zoaw69yd2YC8RFnJlH6f7S/13/02PA7f1tvCYxMdfkVkH6i0CANJJUbfNtw1hYnteSeq8tLcj0nJfsFHZ7lyZfweIFkya0+oSxpfGNiY2JuhzURQvZlzxXS/+lBRZCaF');
INSERT INTO `usuarios` VALUES ('4', 'leonel', '33a11888bbcb40884b1f4402e6a514d039c63732', '3', 'zoaw69yd2YC8RFnJlH6f7S/13/02PA7f1tvCYxMdfkVkH6i0CANJJUbfNtw1hYnteSeq8tLcj0nJfsFHZ7lyZfweIFkya0+oSxpfGNiY2JuhzURQvZlzxXS/+lBRZCaF');
INSERT INTO `usuarios` VALUES ('5', 'rober', '2c69f501e6c74f4c654809056ae4dd045e36de44', '1', 'zoaw69yd2YC8RFnJlH6f7S/13/02PA7f1tvCYxMdfkVkH6i0CANJJUbfNtw1hYnteSeq8tLcj0nJfsFHZ7lyZfweIFkya0+oSxpfGNiY2JuhzURQvZlzxXS/+lBRZCaF');
INSERT INTO `usuarios` VALUES ('6', 'flaco', 'eb6f30aeb7b925fe4581537cfbff4125aa379ecb', '1', 'zoaw69yd2YC8RFnJlH6f7S/13/02PA7f1tvCYxMdfkVkH6i0CANJJUbfNtw1hYnteSeq8tLcj0nJfsFHZ7lyZfweIFkya0+oSxpfGNiY2JuhzURQvZlzxXS/+lBRZCaF');

-- ----------------------------
-- Table structure for `vale_venta`
-- ----------------------------
DROP TABLE IF EXISTS `vale_venta`;
CREATE TABLE `vale_venta` (
  `id_vale` int(11) NOT NULL AUTO_INCREMENT,
  `nomb_cliente` text,
  `ci` text,
  `precio` decimal(10,2) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `fecha` char(10) DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `id_prod` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `importe` decimal(11,2) DEFAULT NULL,
  PRIMARY KEY (`id_vale`),
  KEY `Refarea_venta64` (`id_area`) USING BTREE,
  KEY `Refproducto65` (`id_prod`) USING BTREE,
  KEY `Refusuarios66` (`uid`) USING BTREE,
  CONSTRAINT `vale_venta_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area_venta` (`id_area`),
  CONSTRAINT `vale_venta_ibfk_2` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `vale_venta_ibfk_3` FOREIGN KEY (`uid`) REFERENCES `usuarios` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vale_venta
-- ----------------------------
INSERT INTO `vale_venta` VALUES ('1', 'Reposicion x una de 8gb', '', '2.00', '1', '2016/01/12', '3', '152', '5', '2.00');
INSERT INTO `vale_venta` VALUES ('2', 'Raul Lugo', '', '102.00', '1', '2016/01/23', '3', '273', '1', '102.00');

-- ----------------------------
-- Table structure for `venta_directa`
-- ----------------------------
DROP TABLE IF EXISTS `venta_directa`;
CREATE TABLE `venta_directa` (
  `id_prod` int(11) NOT NULL,
  `marca` text,
  `imagen` text,
  `id_tabla` int(11) DEFAULT NULL,
  `id_tipo_prod` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `Reftabla_depreciacion44` (`id_tabla`) USING BTREE,
  KEY `Reftipo_producto46` (`id_tipo_prod`) USING BTREE,
  CONSTRAINT `venta_directa_ibfk_1` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`),
  CONSTRAINT `venta_directa_ibfk_2` FOREIGN KEY (`id_tabla`) REFERENCES `tabla_depreciacion` (`id_tabla`),
  CONSTRAINT `venta_directa_ibfk_3` FOREIGN KEY (`id_tipo_prod`) REFERENCES `tipo_producto` (`id_tipo_prod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of venta_directa
-- ----------------------------
INSERT INTO `venta_directa` VALUES ('1', 'ADATA', 'adata8gb.jpg', '4', '4');
INSERT INTO `venta_directa` VALUES ('5', 'ADATA', 'adata8gb.jpg', '4', '4');
INSERT INTO `venta_directa` VALUES ('6', 'ADATA', 'adata8gb.jpg', '4', '4');
INSERT INTO `venta_directa` VALUES ('7', 'ADATA', 'adata8gb.jpg', '4', '4');
INSERT INTO `venta_directa` VALUES ('8', 'No tiene', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('9', 'ADATA', '', '4', '3');
INSERT INTO `venta_directa` VALUES ('10', 'ADATA', '', '4', '3');
INSERT INTO `venta_directa` VALUES ('11', 'No tiene', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('12', 'No tiene', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('13', 'IPHONE', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('14', 'No tiene', null, '4', '11');
INSERT INTO `venta_directa` VALUES ('15', 'Taurus', null, '4', '12');
INSERT INTO `venta_directa` VALUES ('16', 'No tiene', null, '4', '12');
INSERT INTO `venta_directa` VALUES ('17', 'No tiene', null, '4', '12');
INSERT INTO `venta_directa` VALUES ('18', 'APPLE', '', '4', '12');
INSERT INTO `venta_directa` VALUES ('19', 'ADATA', '', '4', '5');
INSERT INTO `venta_directa` VALUES ('20', 'ADATA', '', '4', '5');
INSERT INTO `venta_directa` VALUES ('21', 'ATP', '', '4', '5');
INSERT INTO `venta_directa` VALUES ('22', 'KINGSTON', '', '4', '5');
INSERT INTO `venta_directa` VALUES ('23', 'ADATA', '', '4', '5');
INSERT INTO `venta_directa` VALUES ('26', 'SAMSUNG', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('27', 'Nokia', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('30', null, null, null, null);
INSERT INTO `venta_directa` VALUES ('35', 'INS', '20150225_142759.jpg', '4', '18');
INSERT INTO `venta_directa` VALUES ('36', 'WD', 'hdd.jpg', '3', '20');
INSERT INTO `venta_directa` VALUES ('37', 'Toshiba', '', '3', '20');
INSERT INTO `venta_directa` VALUES ('39', 'Asus', '', '3', '21');
INSERT INTO `venta_directa` VALUES ('40', 'Asus', '', '3', '21');
INSERT INTO `venta_directa` VALUES ('41', 'I-SOURCE', '', '3', '18');
INSERT INTO `venta_directa` VALUES ('42', 'Nvidia', '', '3', '22');
INSERT INTO `venta_directa` VALUES ('43', 'CANON', '', '3', '23');
INSERT INTO `venta_directa` VALUES ('44', 'CANON', '', '3', '23');
INSERT INTO `venta_directa` VALUES ('45', 'No tiene', '', '3', '18');
INSERT INTO `venta_directa` VALUES ('46', 'HKR', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('47', 'No tiene', '', '3', '18');
INSERT INTO `venta_directa` VALUES ('48', 'No tiene', '', '3', '18');
INSERT INTO `venta_directa` VALUES ('49', 'No tiene', '', '4', '23');
INSERT INTO `venta_directa` VALUES ('50', 'ALTEK', '', '4', '24');
INSERT INTO `venta_directa` VALUES ('51', 'No tiene', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('52', 'No tiene', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('53', 'No tiene', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('54', 'No tiene', '', '4', '12');
INSERT INTO `venta_directa` VALUES ('55', 'No tiene', '', '4', '12');
INSERT INTO `venta_directa` VALUES ('56', 'No tiene', '', '4', '12');
INSERT INTO `venta_directa` VALUES ('57', 'No tiene', '', '4', '12');
INSERT INTO `venta_directa` VALUES ('58', 'Mini Digital', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('59', 'NIUTEK', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('60', 'OMEGA', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('61', 'GENIUS', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('62', 'INS', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('63', 'No tiene', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('64', 'No tiene', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('65', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('66', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('67', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('68', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('69', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('70', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('71', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('72', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('73', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('74', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('75', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('76', 'BAKCU', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('77', 'LG', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('78', 'LG', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('79', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('80', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('81', 'LG', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('82', 'BLU', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('83', 'BLU', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('84', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('85', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('86', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('87', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('88', 'BLU', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('89', 'BLU', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('90', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('91', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('92', 'Iphone', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('93', 'Blu', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('94', 'Blu', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('95', 'Iphone', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('96', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('97', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('98', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('99', 'LG', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('100', 'Iphone', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('101', 'Blu', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('102', 'Iphone', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('103', 'LG', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('104', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('105', 'BLU', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('106', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('107', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('108', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('109', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('110', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('111', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('112', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('113', 'LG', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('114', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('115', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('116', 'Alcatel', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('117', 'Samsung', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('118', 'LG', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('119', 'Motorola', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('120', 'Alcatel', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('121', 'Alcatel', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('122', 'ZTE', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('123', 'Blackberry', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('124', 'LG', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('125', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('126', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('127', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('128', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('129', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('130', 'BLU ', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('131', 'Alcatel', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('132', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('133', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('134', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('135', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('136', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('137', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('138', 'Iphone', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('139', 'Iphone', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('140', 'No tiene', '', '4', '6');
INSERT INTO `venta_directa` VALUES ('141', 'No tiene', '', '4', '6');
INSERT INTO `venta_directa` VALUES ('142', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('143', 'No tiene', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('144', 'Playstation', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('145', 'No tiene', '', '4', '13');
INSERT INTO `venta_directa` VALUES ('146', 'Xbox 360', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('147', 'PlayStation', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('148', 'Xbox One', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('149', 'No tiene', '', '4', '13');
INSERT INTO `venta_directa` VALUES ('150', 'No tiene', '', '4', '8');
INSERT INTO `venta_directa` VALUES ('151', 'No tiene', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('152', 'ADATA', '', '4', '3');
INSERT INTO `venta_directa` VALUES ('153', 'ADATa', '', '4', '3');
INSERT INTO `venta_directa` VALUES ('154', 'ADATa', '', '4', '3');
INSERT INTO `venta_directa` VALUES ('155', 'Samsung', '', '4', '14');
INSERT INTO `venta_directa` VALUES ('156', 'No tiene', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('157', 'PlayStation', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('158', 'No tiene', '', '4', '27');
INSERT INTO `venta_directa` VALUES ('159', 'PlaySation', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('160', 'PlayStation', '', '4', '27');
INSERT INTO `venta_directa` VALUES ('161', 'Xbox 360', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('162', 'No tiene', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('163', 'Xbox 360', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('164', 'No tiene', '', '4', '28');
INSERT INTO `venta_directa` VALUES ('165', 'Invicta', '', '4', '29');
INSERT INTO `venta_directa` VALUES ('166', 'SONY', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('167', 'No tiene', '', '4', '27');
INSERT INTO `venta_directa` VALUES ('168', 'Iphone', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('169', 'Iphone', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('170', 'Sony', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('171', 'Iphone', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('172', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('173', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('174', 'LG', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('175', 'LG', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('176', 'Samsung', '', '3', '11');
INSERT INTO `venta_directa` VALUES ('177', 'LG', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('178', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('179', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('180', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('181', 'Huawei', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('182', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('183', 'Samsung', '', '1', '1');
INSERT INTO `venta_directa` VALUES ('184', 'BLU', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('185', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('186', 'Huawei', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('187', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('188', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('189', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('190', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('191', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('192', 'Huawei', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('193', 'Huawei', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('194', 'Sony', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('195', 'Sony', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('196', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('197', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('198', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('199', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('200', 'Sony', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('201', 'Sony', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('202', 'Iphone', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('203', 'Sony ', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('204', 'Sony', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('205', 'Iphone', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('206', 'Blu', '', '4', '2');
INSERT INTO `venta_directa` VALUES ('207', 'No tiene', '', '4', '28');
INSERT INTO `venta_directa` VALUES ('208', 'Samsung', '', '4', '2');
INSERT INTO `venta_directa` VALUES ('209', 'Samsung', '', '4', '10');
INSERT INTO `venta_directa` VALUES ('210', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('211', 'Samsung', '', '4', '10');
INSERT INTO `venta_directa` VALUES ('212', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('213', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('214', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('215', 'No tiene', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('216', 'No tiene', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('217', 'No tiene', '', '4', '18');
INSERT INTO `venta_directa` VALUES ('218', 'No tiene', '', '4', '28');
INSERT INTO `venta_directa` VALUES ('219', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('220', 'Microsoft', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('221', 'TRIO', '', '4', '2');
INSERT INTO `venta_directa` VALUES ('222', 'Coby', '', '4', '2');
INSERT INTO `venta_directa` VALUES ('223', 'Samsung', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('224', 'Samsung', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('225', 'Samsung', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('226', 'Nokia', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('227', 'Nokia', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('228', 'Nokia', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('229', 'Nokia', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('230', 'Samsung', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('231', 'Blackberry', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('232', 'Blackberry', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('233', 'Iphone', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('234', 'Iphone ', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('235', 'Iphone', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('236', 'PSP', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('237', 'No tiene', '', '4', '10');
INSERT INTO `venta_directa` VALUES ('238', 'PlaySation', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('239', 'Sony', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('240', 'Sony', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('241', 'Motorola', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('242', 'LG', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('243', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('244', 'Samsung ', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('245', 'Samsung', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('246', 'Playstation', '', '4', '26');
INSERT INTO `venta_directa` VALUES ('247', 'Huawei', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('248', 'Huawei', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('249', 'Huawei', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('250', 'LG', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('251', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('252', 'Samsung ', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('253', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('254', 'Iphone', '', '4', '30');
INSERT INTO `venta_directa` VALUES ('255', 'Iphone', '', '4', '30');
INSERT INTO `venta_directa` VALUES ('256', 'Samsung', '', '4', '2');
INSERT INTO `venta_directa` VALUES ('257', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('258', 'Samsung', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('259', 'Samsung', '', '4', '2');
INSERT INTO `venta_directa` VALUES ('260', 'Blu ', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('261', 'Blu', '', '3', '1');
INSERT INTO `venta_directa` VALUES ('262', 'Blu', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('263', 'SONY', '', '4', '25');
INSERT INTO `venta_directa` VALUES ('264', 'Blu', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('265', 'Blu', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('266', 'Iphone', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('267', 'Iphone', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('268', 'Samsung', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('269', 'Samsung', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('270', 'Samsung', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('271', 'Blu', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('272', 'Nokia', '', '4', '15');
INSERT INTO `venta_directa` VALUES ('273', 'Zte', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('274', 'Blu', '', '4', '1');
INSERT INTO `venta_directa` VALUES ('275', 'No tiene', '', '4', '11');
INSERT INTO `venta_directa` VALUES ('276', 'Alcatel', '', '4', '9');
INSERT INTO `venta_directa` VALUES ('277', 'Huawei', '', '4', '9');
