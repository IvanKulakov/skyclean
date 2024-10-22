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

// price_items
try{
    const btnOpenPriceItems = document.getElementsByClassName('price_svg_open');
    const priceContent = document.getElementsByClassName('price_items');
    const idForItems = () =>{
        for(let i = 0; i < btnOpenPriceItems.length; i++){
            btnOpenPriceItems[i].id = 'btnOpenPriceItems' + i;
            btnOpenPriceItems[i].addEventListener("click", setActive)
        }
        for(let i = 0; i < priceContent.length; i++){
            priceContent[i].id = 'priceContent' + i;
            priceContent[i].classList.add('price_items_content_closed');
        }
    }
    const setActive = (e) => {
        let numb = e.target.id.slice(-1)
        priceContent[numb].classList.toggle('price_items_content_closed');
        btnOpenPriceItems[numb].classList.toggle('price_svg_open_active')
    }



    idForItems();

}
catch (e) {
    console.log(e)
}

// service items mob
try{
    const serviceItemsMob = document.getElementsByClassName('service_item_box_mob');
    const btnLeft = document.getElementById('service_left_mob');
    const btnRight = document.getElementById('service_right_mob');

    const idForItems = () =>{
        for(let i = 0; i < serviceItemsMob.length; i++){
            serviceItemsMob[i].id = i;
            serviceItemsMob[i].classList.add('response_text_invisible');
            serviceItemsMob[0].classList.remove('response_text_invisible');
        }
    }
    const isActive = () => {
        for(let i = 0; i < serviceItemsMob.length; i++){
            if(!serviceItemsMob[i].classList.contains('response_text_invisible')){
                return Number(serviceItemsMob[i].id)
            }
        }
    }
    const stepLeft = () => {
        if(+isActive() === 0){
            return false
        }
        else {
            let next = +isActive() - 1;
            for (let i = 0; i < serviceItemsMob.length; i++){
                serviceItemsMob[i].classList.add('response_text_invisible');
                serviceItemsMob[next].classList.remove('response_text_invisible');
            }
        }
    }
    const stepRight = () =>{
        let next = +isActive() + 1;
        if(next === serviceItemsMob.length){
            return false
        }
        else {
            for (let i = 0; i < serviceItemsMob.length; i++){
                serviceItemsMob[i].classList.add('response_text_invisible');
                serviceItemsMob[next].classList.remove('response_text_invisible');
            }
        }
    }

    idForItems();
    btnLeft.addEventListener("click", stepLeft)
    btnRight.addEventListener("click", stepRight)


}
catch (e) {
    console.log(e)
}

// business items mob
try{
    const businessItemsMob = document.getElementsByClassName('business_items_mob');
    const btnBusinessLeft = document.getElementById('business_left_mob');
    const btnBusnessRight = document.getElementById('business_right_mob');

    const idForItems = () =>{
        for(let i = 0; i < businessItemsMob.length; i++){
            businessItemsMob[i].id ='businessItems' + i;
            businessItemsMob[i].classList.add('response_text_invisible');
            businessItemsMob[0].classList.remove('response_text_invisible');
        }
    }
    const isActive = () => {
        for(let i = 0; i < businessItemsMob.length; i++){
            if(!businessItemsMob[i].classList.contains('response_text_invisible')){
                return Number(businessItemsMob[i].id.slice(-1))
            }
        }
    }
    const stepLeft = () => {
        if(+isActive() === 0){
            return false
        }
        else {
            let next = +isActive() - 1;
            for (let i = 0; i < businessItemsMob.length; i++){
                businessItemsMob[i].classList.add('response_text_invisible');
                businessItemsMob[next].classList.remove('response_text_invisible');
            }
        }
    }
    const stepRight = () =>{
        let next = +isActive() + 1;
        if(next === businessItemsMob.length){
            return false
        }
        else {
            for (let i = 0; i < businessItemsMob.length; i++){
                businessItemsMob[i].classList.add('response_text_invisible');
                businessItemsMob[next].classList.remove('response_text_invisible');
            }
        }
    }

    idForItems();
    btnBusinessLeft.addEventListener("click", stepLeft)
    btnBusnessRight.addEventListener("click", stepRight)
}
catch (e) {
    console.log(e)
}


// response items
try {
    const img1 = 'img/image%2011.png';
    const img2 = 'img/image%209.png';
    const img3 = 'img/image%2010.png';

    const text1 = 'Хочу подякувати команді за чудову роботу! Миття вікон пройшло швидко і якісно, а фахівці були дуже ввічливими. Обов\'язково звернуся знову!'
    const text2 = 'Доброго дня! Сподобалася якість роботи, ставлення до клієнта, хлопці працюють із технікою Karcher, засоби для прибирання були без запаху. Мийкою вікон залишилися дуже задоволені! Рекомендую!'
    const text3 = 'Скористався послугами з прибирання, і залишився в захваті! Чистка килимів була на високому рівні, а хлопці дуже уважні. Обслуговування на вищому рівні. Рекомендую!'

    const placeIm1 = document.getElementById('im1');
    const placeIm2 = document.getElementById('im2');
    const placeIm3 = document.getElementById('im3');
    const placeText = document.getElementById('response_text')
    const rightBtnResponse = document.getElementById('response_btn_right');
    const leftBtnResponse = document.getElementById('response_btn_left');
    const setImg = () =>{
        placeIm1.setAttribute("src", img1);
        placeIm2.setAttribute("src", img2);
        placeIm3.setAttribute("src", img3);
        placeText.innerText = text2;
    }
    setImg();
    const stepRight = () => {
       let data = placeIm1.getAttribute("src");
        if (data === img1)
        {
            placeIm1.setAttribute("src", img3);
            placeIm2.setAttribute("src", img1);
            placeIm3.setAttribute("src", img2);
            placeText.innerText = text1;
        }
        if (data === img2){
            placeIm1.setAttribute("src", img1);
            placeIm2.setAttribute("src", img2);
            placeIm3.setAttribute("src", img3);
            placeText.innerText = text2;
        }
        if (data === img3){
            placeIm1.setAttribute("src", img2);
            placeIm2.setAttribute("src", img3);
            placeIm3.setAttribute("src", img1);
            placeText.innerText = text3;
        }
    }
    const stepLeft = () => {
        let data = placeIm1.getAttribute("src");
        if (data === img1)
        {
            placeIm1.setAttribute("src", img2);
            placeIm2.setAttribute("src", img3);
            placeIm3.setAttribute("src", img1);
            placeText.innerText = text3;
        }
        if (data === img2){
            placeIm1.setAttribute("src", img3);
            placeIm2.setAttribute("src", img1);
            placeIm3.setAttribute("src", img2);
            placeText.innerText = text1;
        }
        if (data === img3){
            placeIm1.setAttribute("src", img1);
            placeIm2.setAttribute("src", img2);
            placeIm3.setAttribute("src", img3);
            placeText.innerText = text2;
        }
    }



    rightBtnResponse.addEventListener("click", stepLeft);
    leftBtnResponse.addEventListener("click", stepRight);

}
catch (e) {
    console.log(e)
}


// response items mob
try{
    const responseItemsMob = document.getElementsByClassName('response_content_mob');
    const btnResponseLeft = document.getElementById('response_btn_mob_left');
    const btnResponseRight = document.getElementById('response_btn_mob_right');

    const idForItems = () =>{
        for(let i = 0; i < responseItemsMob.length; i++){
            responseItemsMob[i].id ='responseItemsMob' + i;
            responseItemsMob[i].classList.add('response_text_invisible');
            responseItemsMob[0].classList.remove('response_text_invisible');
        }
    }
    const isActive = () => {
        for(let i = 0; i < responseItemsMob.length; i++){
            if(!responseItemsMob[i].classList.contains('response_text_invisible')){
                return Number(responseItemsMob[i].id.slice(-1))
            }
        }
    }
    const stepLeft = () => {
        if(+isActive() === 0){
            return false
        }
        else {
            let next = +isActive() - 1;
            for (let i = 0; i < responseItemsMob.length; i++){
                responseItemsMob[i].classList.add('response_text_invisible');
                responseItemsMob[next].classList.remove('response_text_invisible');
            }
        }
    }
    const stepRight = () =>{
        let next = +isActive() + 1;
        if(next === responseItemsMob.length){
            return false
        }
        else {
            for (let i = 0; i < responseItemsMob.length; i++){
                responseItemsMob[i].classList.add('response_text_invisible');
                responseItemsMob[next].classList.remove('response_text_invisible');
            }
        }
    }

    idForItems();
    btnResponseLeft.addEventListener("click", stepLeft)
    btnResponseRight.addEventListener("click", stepRight)

}
catch (e){
    console.log(e)
}

//modal block start
try {
    const btnOpenModal = document.getElementById('openModal');
    const btnOpenModalAbout = document.getElementById('btnOpenModalAbout')
    const btnClosedModal = document.getElementById('close_icon');
    const btnsubmit = document.getElementById('closedModal');
    const modal = document.getElementById('modal');
    const userNameInput = document.getElementById('userNameInput');
    const userPhoneInput = document.getElementById('userPhoneInput');

    const open = function (){
        modal.classList.add('modal-active');
        document.body.classList.add('main_hidden');
    };
    const closed = function (event) {
        event.preventDefault();
        event.stopPropagation();
        sendToTelegram('modal', userNameInput.value, userPhoneInput.value);
        userNameInput.value = "";
        userPhoneInput.value = "";
        modal.classList.remove('modal-active');
        document.body.classList.remove('main_hidden');
    }
    const exit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        userNameInput.value = "";
        userPhoneInput.value = "";
        modal.classList.remove('modal-active');
        document.body.classList.remove('main_hidden');
    }
    btnOpenModal.addEventListener('click', open);
    btnOpenModalAbout.addEventListener('click', open);
    btnClosedModal.addEventListener('click', exit);
    btnsubmit.addEventListener('click', closed);
    userPhoneInput.addEventListener('focus', _ => {
        if(!/^\+\d*$/.test(userPhoneInput.value))
            userPhoneInput.value = '+38';

    });

    userPhoneInput.addEventListener('keypress', e => {
        if(!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
}
catch (e){
    console.log(e)
}
//telegram block start
// https://api.telegram.org/bot7616563724:AAFzWI_nremjyn3BRhSdBJsX3hzCsahb1Ho/getUpdates

const sendToTelegram = (data, customer, telephone) => {
    if(telephone.length > 5) {
        const token = '7616563724:AAFzWI_nremjyn3BRhSdBJsX3hzCsahb1Ho';
        const chatId = '-4589004711';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Ім'я ${customer}, телефон ${telephone}, місто ${data}`;
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.send();
    }
};

//footer send block
const inputNameFooter = document.getElementById('inputNameFooter');
const inputTelFooter = document.getElementById('inputTelFooter');
const inputCityFooter = document.getElementById('inputCityFooter')
const inputBtnFooter = document.getElementById('inputBtnFooter');
const sendFooterData = function (event) {
    event.preventDefault();
    event.stopPropagation();
    sendToTelegram(inputCityFooter.value, inputNameFooter.value, inputTelFooter.value);
    inputCityFooter.value = "";
    inputNameFooter.value = "";
    inputTelFooter.value = "";
}
inputTelFooter.addEventListener('focus', _ => {
    if(!/^\+\d*$/.test(inputTelFooter.value))
        inputTelFooter.value = '+38';
});
inputTelFooter.addEventListener('keypress', e => {
    if(!/\d/.test(e.key)) {
        e.preventDefault();
    }
});
inputBtnFooter.addEventListener('click', sendFooterData);
