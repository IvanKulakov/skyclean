// service items
try{
    const serviceLeftBtn = document.getElementById('service_left');
    const serviceRightBtn = document.getElementById('service_right');
    const services = document.getElementsByClassName('services_items');
    const servicesNumber = document.getElementsByClassName('services_items_number');

    const idForItems = () =>{
        for(let i = 0; i < services.length; i++){
            services[i].id = 'services' + i;
            services[i].classList.add('response_text_invisible');
            services[0].classList.remove('response_text_invisible');
        }
        for(let i = 0; i < servicesNumber.length; i++){
            servicesNumber[i].id = 'servicesNumber' + i;
            servicesNumber[0].classList.add('active_number');
            servicesNumber[i].addEventListener("click", setActive);
        }
    }
    const isActive = () => {
        for(let i = 0; i < services.length; i++){
            if(!services[i].classList.contains('response_text_invisible')){
                return Number(services[i].id.slice(-1))
            }
        }
    }
    const isActiveNumber = () => {
        for(let i = 0; i < servicesNumber.length; i++){
            if(servicesNumber[i].classList.contains('active_number')){
                return Number(servicesNumber[i].id.slice(-1))
            }
        }
    }
    const setActive = (e) => {

        let numb = e.target.id.slice(-1);
        if (+numb === isActiveNumber()){
            return false;
        }
        if(+numb !== isActiveNumber()) {
            for(let i = 0; i < services.length; i++){
                services[i].classList.add('response_text_invisible');
                services[+numb].classList.remove('response_text_invisible');
            }
            for(let i = 0; i < servicesNumber.length; i++){
                servicesNumber[i].classList.remove('active_number');
                servicesNumber[+numb].classList.add('active_number');
            }
        }
    }
    const stepLeft = () => {
        if (+isActive() === 0) {
            return false
        }
        if (+isActive() === 1) {
            for (let i = 0; i < services.length; i++) {
                services[i].classList.add('response_text_invisible');
                services[0].classList.remove('response_text_invisible');
            }
            for (let i = 0; i < servicesNumber.length; i++){
                servicesNumber[i].classList.remove('active_number');
                servicesNumber[0].classList.add('active_number');
            }
        }
    }
    const stepRight = () =>{
        if(+isActive() === 1){
            return false
        }
        if(+isActive() === 0){
            for(let i = 0; i < services.length; i++){
                services[i].classList.add('response_text_invisible');
                services[1].classList.remove('response_text_invisible');
            }
            for (let i = 0; i < servicesNumber.length; i++){
                servicesNumber[i].classList.remove('active_number');
                servicesNumber[1].classList.add('active_number');
            }

        }
    }

    idForItems();
    serviceLeftBtn.addEventListener("click", stepLeft);
    serviceRightBtn.addEventListener('click', stepRight)

}
catch (e) {
    console.log(e)
}

// business_items
try{
    const businessItems = document.getElementsByClassName('business_items');
    const itemNumbers = document.getElementsByClassName('business_item_data');
    const businessLeftBtn = document.getElementById('business_left');
    const businessRightBtn = document.getElementById('business_right');
    const idForItems = () =>{
        for(let i = 0; i < businessItems.length; i++){
            businessItems[i].id = 'businessItems' + i;
            businessItems[i].classList.add('response_text_invisible');
            businessItems[0].classList.remove('response_text_invisible');
        }
        for(let i = 0; i < itemNumbers.length; i++){
            itemNumbers[i].id = 'itemNumbers' + i;
            itemNumbers[0].classList.add('active_business_number');
            itemNumbers[i].addEventListener("click", setActive);
        }
    }
    const stepRight = () =>{
        if(+isActive() + 1 === businessItems.length){
            return false
        }
        else {
            let next = +isActive() + 1;
            for (let i = 0; i < businessItems.length; i++){
                businessItems[i].classList.add('response_text_invisible');
                businessItems[next].classList.remove('response_text_invisible');
            }
            for (let i = 0; i < itemNumbers.length; i++){
                itemNumbers[i].classList.remove('active_business_number');
                itemNumbers[next].classList.add('active_business_number');
            }

        }
    }
    const stepLeft = () => {
        if(+isActive() === 0){
            console.log('0')
            return false
        }
        else {
            let next = +isActive() - 1;
            for (let i = 0; i < businessItems.length; i++){
                businessItems[i].classList.add('response_text_invisible');
                businessItems[next].classList.remove('response_text_invisible');
            }
            for (let i = 0; i < itemNumbers.length; i++){
                itemNumbers[i].classList.remove('active_business_number');
                itemNumbers[next].classList.add('active_business_number');
            }

        }
    }
    const isActive = () => {
        for(let i = 0; i < businessItems.length; i++){
            if(!businessItems[i].classList.contains('response_text_invisible')){
                return Number(businessItems[i].id.slice(-1))
            }
        }
    }
    const isActiveNumber = () => {
        for(let i = 0; i < itemNumbers.length; i++){
            if(itemNumbers[i].classList.contains('active_business_number')){
                return Number(itemNumbers[i].id.slice(-1))
            }
        }
    }
    const setActive = (e) => {

        let numb = e.target.id.slice(-1);
        if (+numb === isActiveNumber()){
            return false;
        }
        if(+numb !== isActiveNumber()) {
            for(let i = 0; i < businessItems.length; i++){
                businessItems[i].classList.add('response_text_invisible');
                businessItems[+numb].classList.remove('response_text_invisible');
            }
            for(let i = 0; i < itemNumbers.length; i++){
                itemNumbers[i].classList.remove('active_business_number');
                itemNumbers[+numb].classList.add('active_business_number');
            }
        }
    }
    idForItems();
    businessRightBtn.addEventListener("click", stepRight);
    businessLeftBtn.addEventListener("click", stepLeft);

}
catch (e) {
    console.log(e)
}