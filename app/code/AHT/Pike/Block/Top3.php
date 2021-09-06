<?php

namespace AHT\Pike\Block;

class Top3 extends \Magento\Framework\View\Element\Html\Link
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
        return '<a href="#"><i class="fas fa-dollar-sign"></i> money back quarantee</a>';
    }
}
