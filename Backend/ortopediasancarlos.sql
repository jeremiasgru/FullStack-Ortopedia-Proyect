-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-02-2022 a las 00:17:22
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ortopediasancarlos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Ayudamos a liberar camas en el hospital para atender el volumen de pacientes en el inicio de la pandemia', 'Como servicio esencial, Ortopedia CAD Palencia, no ha parado de trabajar intensamente durante la crisis sanitaria.', 'Los servicios declarados como esenciales no dejaron de trabajar en ningún momento durante el estado de alarma, aunque eso no significa que hayan estado exentos de desarrollar su labor sin dificultades. Es el caso de Ortopedia CAD Palencia, que define como \"muy intenso\" el trabajo de los últimos meses.\r\n\r\nLidia Díez, técnico de Ortopedia CAD, asegura que en los inicios de la pandemia atendieron a puerta cerrada y principalmente urgencias. Asimismo tuvieron que acudir a domicilios y también al hospital, en este último ayudaron a liberar camas en los momentos más duros, ya que atendiendo por ejemplo a alguien que hubiera sufrido un accidente, facilitándole medios para su movilidad, la persona podía abandonar el hospital y eso significaba una cama más que se podía destinar a pacientes de coronavirus.', 'thfjb7wyadiqtr3bs66t'),
(2, 'Los podólogos advierten sobre los \"timos\" en las plantillas a medida', 'El ICOPCV recuerda que las plantillas personalizadas son un tratamiento ortopédico que requiere ser prescrito por un podólogo o un médico', 'El Ilustre Colegio Oficial de Podólogos de la Comunidad Valenciana (ICOPCV) ha advertido sobre algunos timos que se producen en la realización de plantillas a medida.\r\n\r\nÉstos consisten en que tiendas especializadas directamente ofrecen la posibilidad de realizar un estudio de la pisada. Si en ésta se detecta una descompensación, entonces se le ofrece una plantilla a medida al cliente. El problema en esta situación reside en que esto lo hace personal no cualificado, profesionales que solo podrían ofrecer plantillas estándar que, por otro lado, tienen un precio mucho más bajo que una realizada a medida. Por tanto, solo un médico o un podólogo pueden prescribir este tipo de tratamientos personalizados.', NULL),
(3, 'Impresoras 3D, fabricantes de vida.', 'En el centro de Formación Profesional Don Bosco de Errenteria, elaboran manos y brazos biónicos a bajo coste', 'Hace cuatro años, el Centro Integrado de Formación Profesional Don Bosco de Errenteria compró su primera impresora 3D con el objeto de combinar la docencia con las aplicaciones de la tecnología. Desde entonces, están experimentando el gran potencial de estas impresoras de bajo coste cuyo precio oscila entre los 1500 y los 2000 euros.\r\nCarlos Lizarbe y David Muñoz, profesores del Departamento de electrónica y telecomunicaciones, están apostando por la aplicación de la tecnología al servicio de la ortopedia. Utilizan estas impresoras para la elaboración de prótesis de brazos y manos para personas que lo necesitan. Partiendo de un tipo de plástico específico, las impresoras van imprimiendo las piezas por láminas. En pocas horas, consiguen fabricar una mano o un brazo biónico cuyo coste -no supera los 400 euros- es mucho más bajo que el de una prótesis ortopédica que puede estar por encima de los 20.000 euros.', 'upjjdyz8d5gojw0fr6yd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'jeremias', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
