<?php

/*
  +------------------------------------------------------------------------+
  | Phosphorum                                                             |
  +------------------------------------------------------------------------+
  | Copyright (c) 2013-present Phalcon Team (https://www.phalconphp.com)   |
  +------------------------------------------------------------------------+
  | This source file is subject to the New BSD License that is bundled     |
  | with this package in the file LICENSE.txt.                             |
  |                                                                        |
  | If you did not receive a copy of the license and are unable to         |
  | obtain it through the world-wide-web, please send an email             |
  | to license@phalconphp.com so we can send you a copy immediately.       |
  +------------------------------------------------------------------------+
*/

namespace Phosphorum\Task;

use Phosphorum\Console\AbstractTask;

/**
 * Phosphorum\Task\Help
 *
 * @package Phosphorum\Task
 */
class Help extends AbstractTask
{
    /**
     * @Doc("Getting the application help")
     */
    public function main()
    {
        $this->outputInfo(sprintf('%s %s', container('app')->getName(), container('app')->getVersion()));
        $this->outputInfo('Usage: php forum [command <arguments>] [--help | -H] [--version | -V] [--list]');
    }
}
