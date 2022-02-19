const tabs = option => {
    const {
        selectorTabsButtons,
        activeClassButton,
        selectorTabsElement,
        activeClassTab,
        callback = () => {},
    } = option;

    const tabsBtns = document.querySelectorAll(selectorTabsButtons);
    const tabsElem = document.querySelectorAll(selectorTabsElement);

    tabsBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            for(let i = 0; i < tabsBtns.length; i++) {
                if(tabsBtns[i] === btn){
                    tabsBtns[i].classList.add(activeClassButton);
                    tabsElem[i].classList.add(activeClassTab);
                    callback(i);
                } else {
                    tabsBtns[i].classList.remove(activeClassButton);
                    tabsElem[i].classList.remove(activeClassTab);
                }
            }
        });
    });
};

export default tabs;