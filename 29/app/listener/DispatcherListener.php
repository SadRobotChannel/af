<?php

/*
 +------------------------------------------------------------------------+
 | Phosphorum                                                             |
 +------------------------------------------------------------------------+
 | Copyright (c) 2013-2016 Phalcon Team and contributors                  |
 +------------------------------------------------------------------------+
 | This source file is subject to the New BSD License that is bundled     |
 | with this package in the file LICENSE.txt.                             |
 |                                                                        |
 | If you did not receive a copy of the license and are unable to         |
 | obtain it through the world-wide-web, please send an email             |
 | to license@phalconphp.com so we can send you a copy immediately.       |
 +------------------------------------------------------------------------+
*/

namespace Phosphorum\Listener;

use Phalcon\Dispatcher;
use Phalcon\Events\Event;
use Phalcon\Mvc\Dispatcher\Exception;
use Phosphorum\Exception\PhosphorumException;

/**
 * Phosphorum\Listener\DispatcherListener
 *
 * @package Phosphorum\Listener
 */
class DispatcherListener extends AbstractListener
{
    /**
     * Before exception is happening.
     *
     * @param  Event      $event
     * @param  Dispatcher $dispatcher
     * @param  \Exception $exception
     * @return bool
     *
     * @throws \Exception|\Throwable
     */
    public function beforeException(Event $event, Dispatcher $dispatcher, $exception)
    {
        if ($exception instanceof Exception) {
            switch ($exception->getCode()) {
                case Dispatcher::EXCEPTION_CYCLIC_ROUTING:
                    $code = 400;
                    $dispatcher->forward([
                        'controller' => 'error',
                        'action'     => 'route400',
                    ]);

                    break;
                default:
                    $code = 404;
                    $dispatcher->forward([
                        'controller' => 'error',
                        'action'     => 'route404',
                    ]);
            }

            container('logger')->error("Dispatching [$code]: " . $exception->getMessage());

            return false;
        }

        if ($exception instanceof PhosphorumException) {
            switch ($exception->getCode()) {
                case 404:
                    $code = 404;
                    $dispatcher->forward([
                        'controller' => 'error',
                        'action'     => 'route404',
                    ]);

                    break;
                default:
                    $code = 404;
                    $dispatcher->forward([
                        'controller' => 'error',
                        'action'     => 'route404',
                    ]);
            }

            container('logger')->error("Dispatching [$code]: " . $exception->getMessage());

            return false;
        }

        if ($exception instanceof \Exception || $exception instanceof \Throwable) {
            container('logger')->error("Dispatching [{$exception->getCode()}]: " . $exception->getMessage());

            if (!environment('production')) {
                throw $exception;
            }
        }

        $dispatcher->forward([
            'controller' => 'error',
            'action'     => 'route500',
        ]);

        return $event->isStopped();
    }
}
