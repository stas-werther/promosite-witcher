import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js"

burgerMenu({
    selectorMenu: '.nav-list',
    openMenuSelector: 'nav-list-active'
})

tabs({
    selectorTabsButtons: '.tabs-btn',
    activeClassButton: 'tabs-btn-activ',
    selectorTabsElement: '.tabs-item',
    activeClassTab: 'tabs-item-activ',
    callback: renderTabs,
})

renderTabs();