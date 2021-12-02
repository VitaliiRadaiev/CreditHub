{
    let tabsAll = document.querySelectorAll('.tabs');
    if(tabsAll.length) {
        tabsAll.forEach(tabs => {
            let allTriggers = tabs.querySelectorAll('.tabs__trigger');
            let allContent = tabs.querySelectorAll('.tabs__content');

            allTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    let id = trigger.dataset.tab;
                    trigger.classList.add('active');
        
                    allTriggers.forEach(t => {
                        if(t === trigger) return;
                        t.classList.remove('active');
                        
                    })

                    allContent.forEach(content => {
                        if(id === content.dataset.tab) {
                            content.classList.add('active');
                        } else {
                            content.classList.remove('active');
                        }
                    })
                })
            })
        })
    }
}