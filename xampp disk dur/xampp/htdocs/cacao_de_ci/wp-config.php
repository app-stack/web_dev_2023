<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cacao_de_ci' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'W`lYM(,k:60:+*D0p<xwl9#*u7*ry1r&p!Aj0?yaN.Tb.=[=C%?,C7Uv}$ar(s1Q' );
define( 'SECURE_AUTH_KEY',  '*_Cc_A{4CAP,u}rvs1Dd3/Rslp,%X$M&`y=z5G.{[Xg;axDh?dvqZ]oNmm,:AhT!' );
define( 'LOGGED_IN_KEY',    'Xjb89bz($g]9)D*;o{^6#N[34:k!4!5N`-!?nvJ0~Ox9kA<a^;y]$W}I+IZm[?A:' );
define( 'NONCE_KEY',        ' L*Cj6r^l12?T=|uZ7^r] Y[S]#v,*<v4a/{MuQW$>bX%+]:T~y,K%f5`~m,z,nh' );
define( 'AUTH_SALT',        'd@`zO0.Tr{Lw>DHH87%4,E <|gy5#!_w@${O7(kl#7OlRIBfsXRMv[$I4Cb[O<Pg' );
define( 'SECURE_AUTH_SALT', 'hh?4}gi>ufFTZI14a{$dK,1UyUTx/Md9z^x$u;~V,t*8lX+P;L]k_``OS>}s)rrD' );
define( 'LOGGED_IN_SALT',   '|i=5b?s1Hq{reE&GL?uMk9Vp2*o]6W.M%$MHAwaAu*inb$@#pSRuernQ*hm!2yiJ' );
define( 'NONCE_SALT',       '@NZhk.u;yApD-l(U4=5CKm6T1 T6U6a(m!$u1Fx.R%.R1pz:1Y1B$J&Wpu=7Bwtt' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
