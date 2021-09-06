<?php

namespace AHT\Pike\Block;

class Top1 extends \Magento\Framework\View\Element\Html\Link
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
        return '<a href="#"><i class="fas fa-truck"></i> we ship australia wide</a>';
    }
}
