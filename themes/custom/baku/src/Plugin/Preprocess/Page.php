<?php
/**
 * @file
 * Contains \Drupal\baku\Plugin\Preprocess\Page.
 */

namespace Drupal\baku\Plugin\Preprocess;

use Drupal\bootstrap\Annotation\BootstrapPreprocess;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Variables;

/**
 * Pre-processes variables for the "page" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("page")
 */
class Page extends \Drupal\bootstrap\Plugin\Preprocess\Page {
  /**
   * {@inheritdoc}
   */
  public function preprocess(array &$variables, $hook, array $info) {
    $variables['attributes']['class'][] = 'page-container';
    parent::preprocess($variables, $hook, $info);
  }
}
