<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'pro_service1');

/** MySQL database username */
define('DB_USER', 'mald');

/** MySQL database password */
define('DB_PASSWORD', 'pro_servSite1!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' L5u68KLLLV|,Fxm2(q%f+ dOZcWwf@&{vi^]7yNd>YB:<aHO7QWT/U;na/{3uOj');
define('SECURE_AUTH_KEY',  'W7`VrnZ+?h4ay3*_pG/2^8ELZd][[%ZG5@CNaajI)*4+g(QD)<}VS T:IM^Uo#S]');
define('LOGGED_IN_KEY',    'AG7 r(jJ{P]B*KiPP9q:%4p3Wo&M60lGEcvi QnqP6qIac}h9Q|QBR*R}}lc[k}U');
define('NONCE_KEY',        'zeC9sE}|$r<j@-se(8!&84_9hY)9<?>Hdr2+E+y {RySx10Ftt=|qS2->8KwN/Cr');
define('AUTH_SALT',        '~2I$u%vp{m,8I-~[E2f,_ |kQX$~%B,Zlr!#uABE*!fZ0)#js=i?+&#)lm!JRAG2');
define('SECURE_AUTH_SALT', 'WV^)8u4=k(od>tY{=Ubr(c+q|s]#oa5,F@ ^~n_J_QW(/UQ:Vgdxw3b,lf)D0~bA');
define('LOGGED_IN_SALT',   'Z9Fx `Cyu)=y0h{cOK{K3L^=!knttj^tBz(@Fu;Gi8~5OTPizo_FZ.tH/I]M*uQy');
define('NONCE_SALT',       'Tg%+47!xB:T]4v6Q.~SN4?Fp-xq{x,=;GJ[g:A4I9$)gr(pr$8IB{_Z(3O9B:],z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
