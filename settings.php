<?php

$config_directories = array(
  'sync' => 'sites/marlo.official/files/config_AZ7ZT0G9XATAeWWNBapt9EqUvJOuDiMc9LVvQhMtX2lzLZsPfA295e4kMUD98DrG0PZv8aQqqw/sync',
);

$databases = array('default' => array('default' => array(
  'database' => '../sqlite/marlo.official.sqlite',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\sqlite',
  'driver' => 'sqlite',
)));

$settings['container_yamls'][] = __DIR__ . '/services.yml';
$settings['file_private_path'] = '/var/www/drupal.dev/private/marlo.official/files';
$settings['file_public_path'] = 'sites/marlo.official/files';
$settings['file_scan_ignore_directories'] = ['bower_components', 'node_modules', 'tmp'];
$settings['hash_salt'] = 'hAiMU2o1yiskLe_WARFVgHLmQh7x3QLqTJkObaZFQCZU-7q6-kB1P1D4YkbZYw4W7hx5fTW0bw';
$settings['install_profile'] = 'minimal';
$settings['locale_custom_strings_en'][''] = array('Send message' => 'Send It!');
$settings['trusted_host_patterns'] = array('^([\w_-]+\.)?marlo[\w_-]*\.([a-z]{2,4})$');
$settings['update_free_access'] = FALSE;

if (file_exists(__DIR__ . '/settings.local.php')) include __DIR__ . '/settings.local.php';
if (file_exists(__DIR__ . '/settings.stage.php')) include __DIR__ . '/settings.stage.php';
if (file_exists(__DIR__ . '/settings.prod.php')) include __DIR__ . '/settings.prod.php';
