<?php

namespace AHT\Pike\Block;

class Instagram extends \Magento\Framework\View\Element\Html\Link
{
    /**
     * Render block HTML.
     *
     * @return string
     */
    protected function _toHtml()
    {
        if (false != $this->getTemplate()) {
            return parent::_toHtml();
        }
        return '<li><a href="#"><i class="fab fa-instagram"></i></a></li>';
    }
}
