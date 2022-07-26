window.addEventListener('DOMContentLoaded', init);

function init(){
    let back=document.querySelectorAll(".back")
    let close=document.querySelectorAll(".pc_close_btn")


    let fashion = document.querySelector(".fashion")
    let fashionElement = document.querySelector(".fashion_wrap")

    let pc_fashion = document.querySelector(".pc_fashion")
    let pc_fashionElement = document.querySelector(".pc_fashion_wrap")

    let jewelry = document.querySelector(".jewelry")
    let jewelryElement = document.querySelector(".jewelry_wrap")

    let pc_jewelry = document.querySelector(".pc_jewelry")
    let pc_jewelryElement = document.querySelector(".pc_jewelry_wrap")


    let watch = document.querySelector(".watch")
    let watchElement = document.querySelector(".watch_wrap")
    
    let pc_watch = document.querySelector(".pc_watch")
    let pc_watchElement = document.querySelector(".pc_watch_wrap")


    let eye = document.querySelector(".eye")
    let eyeElement = document.querySelector(".eye_wrap")

    let pc_eye = document.querySelector(".pc_eye")
    let pc_eyeElement = document.querySelector(".pc_eye_wrap")


    let perfume = document.querySelector(".perfume")
    let perfumeElement = document.querySelector(".perfume_wrap")

    let pc_perfume = document.querySelector(".pc_perfume")
    let pc_perfumeElement = document.querySelector(".pc_perfume_wrap")


    let pc_makeup = document.querySelector(".pc_makeup")
    let pc_makeupElement = document.querySelector(".pc_makeup_wrap")

    let makeup = document.querySelector(".makeup")
    let makeupElement = document.querySelector(".makeup_wrap")


    let pc_skincare = document.querySelector(".pc_skincare")
    let pc_skincareElement = document.querySelector(".pc_skincare_wrap")

    let skincare = document.querySelector(".skincare")
    let skincareElement = document.querySelector(".skincare_wrap")

    
    let pc_information = document.querySelector(".pc_information")
    let pc_informationElement = document.querySelector(".pc_information_wrap")

    let information = document.querySelector(".information")
    let informationElement = document.querySelector(".information_wrap")
    
    back.forEach(v => v.addEventListener('click',backHandler))

    function backHandler(e){
        switch(e.target.id){
            case "fashion":
                fashionElement.classList.remove("on")
            break;
            case "jewelry":
                jewelryElement.classList.remove("on")
            break;
            case "watch":
                watchElement.classList.remove("on")
            break;
            case "eye":
                eyeElement.classList.remove("on")
            break;
            case "perfume":
                perfumeElement.classList.remove('on')
            break;
            case "makeup":
                makeupElement.classList.remove("on")
            break;
            case "skincare":
                skincareElement.classList.remove("on")
            break;
            case "information":
                informationElement.classList.remove("on")
            break;
        }
    }

    let close1=close.forEach(c => c.addEventListener('click', closeHandler))

    function closeHandler(d){
        switch(d.target.id){
            case "pc_c_F":
                console.log(header)
                pc_fashionElement.classList.remove("on")
                header.setAttribute('class', '')
                // header.style.display="none"
                // console.log(header)
            break;
            case "pc_c_J":
                pc_jewelryElement.classList.remove("on")
                header.setAttribute('class', '')
            break;
            case "pc_c_W":
                pc_watchElement.classList.remove("on")
                header.setAttribute('class', '')
            break;
            case "pc_c_E":
                pc_eyeElement.classList.remove("on")
                header.setAttribute('class', '')
            break;
            case "pc_c_P":
                pc_perfumeElement.classList.remove("on")
                header.setAttribute('class', '')
            break;
            case "pc_c_M":
                pc_makeupElement.classList.remove("on")
                header.setAttribute('class', '')
            break;
            case "pc_c_S":
                pc_skincareElement.classList.remove("on")
                header.setAttribute('class', '')
            break;
            case "pc_c_I":
                pc_informationElement.classList.remove("on")
                header.setAttribute('class', '')
            break;

        
        }
    }
  
    fashion.addEventListener('click', () => {
        fashionElement.classList.add("on")
        let b = fashionElement.querySelector('.back')
        b.setAttribute('id','fashion')
    })

    pc_fashion.addEventListener('click', () => {
        pc_fashionElement.classList.add("on")

        let b = pc_fashionElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_F')
        pc_informationElement.classList.remove("on")
        pc_skincareElement.classList.remove("on")
        pc_makeupElement.classList.remove("on")
        pc_perfumeElement.classList.remove("on")
        pc_eyeElement.classList.remove("on")
        pc_watchElement.classList.remove("on")
        pc_jewelryElement.classList.remove("on")
        // header.style.display="block"
        // if(pc_fashion = !pc_fashion){
        //     pc_fashionElement.classList.remove("on");
        // }
    })



    jewelry.addEventListener('click', ()=>{
        jewelryElement.classList.add("on")
        let b = jewelryElement.querySelector('.back')
        b.setAttribute('id','jewelry')
    })

    pc_jewelry.addEventListener('click', () => {
        pc_jewelryElement.classList.add("on")
        let b = pc_jewelryElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_J')
        pc_informationElement.classList.remove("on")
        pc_skincareElement.classList.remove("on")
        pc_makeupElement.classList.remove("on")
        pc_perfumeElement.classList.remove("on")
        pc_eyeElement.classList.remove("on")
        pc_watchElement.classList.remove("on")
        pc_fashionElement.classList.remove("on")
    })


    watch.addEventListener('click',()=>{
        watchElement.classList.add("on")
        let b = watchElement.querySelector('.back')
        b.setAttribute('id','watch')
    })

    pc_watch.addEventListener('click', () => {
        pc_watchElement.classList.add("on")
        let b = pc_watchElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_W')
        pc_informationElement.classList.remove("on")
        pc_skincareElement.classList.remove("on")
        pc_makeupElement.classList.remove("on")
        pc_perfumeElement.classList.remove("on")
        pc_eyeElement.classList.remove("on")
        pc_jewelryElement.classList.remove("on")
        pc_fashionElement.classList.remove("on")
    })


    eye.addEventListener('click', ()=>{
        eyeElement.classList.add("on")
        let b = eyeElement.querySelector('.back')
        b.setAttribute('id','eye')
    })

    pc_eye.addEventListener('click', () => {
        pc_eyeElement.classList.add("on")
        let b = pc_eyeElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_E')
        pc_informationElement.classList.remove("on")
        pc_skincareElement.classList.remove("on")
        pc_makeupElement.classList.remove("on")
        pc_perfumeElement.classList.remove("on")
        pc_watchElement.classList.remove("on")
        pc_jewelryElement.classList.remove("on")
        pc_fashionElement.classList.remove("on")
    })


    perfume.addEventListener('click', ()=>{
        perfumeElement.classList.add('on')
        let b = perfumeElement.querySelector('.back')
        b.setAttribute('id','perfume')
    })

    pc_perfume.addEventListener('click', () => {
        pc_perfumeElement.classList.add("on")
        let b = pc_perfumeElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_P')
        pc_informationElement.classList.remove("on")
        pc_skincareElement.classList.remove("on")
        pc_makeupElement.classList.remove("on")
        pc_eyeElement.classList.remove("on")
        pc_watchElement.classList.remove("on")
        pc_jewelryElement.classList.remove("on")
        pc_fashionElement.classList.remove("on")
    })


    makeup.addEventListener('click', ()=>{
        makeupElement.classList.add("on")
        let b = makeupElement.querySelector('.back')
        b.setAttribute('id','makeup')
    })

    pc_makeup.addEventListener('click', () => {
        pc_makeupElement.classList.add("on")
        let b = pc_makeupElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_M')
        pc_informationElement.classList.remove("on")
        pc_skincareElement.classList.remove("on")
        pc_perfumeElement.classList.remove("on")
        pc_eyeElement.classList.remove("on")
        pc_watchElement.classList.remove("on")
        pc_jewelryElement.classList.remove("on")
        pc_fashionElement.classList.remove("on")
    })


    skincare.addEventListener('click',()=>{
        skincareElement.classList.add("on")
        let b = skincareElement.querySelector('.back')
        b.setAttribute('id','skincare')
    })

    pc_skincare.addEventListener('click', () => {
        pc_skincareElement.classList.add("on")
        let b = pc_skincareElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_S')
        pc_informationElement.classList.remove("on")
        pc_makeupElement.classList.remove("on")
        pc_perfumeElement.classList.remove("on")
        pc_eyeElement.classList.remove("on")
        pc_watchElement.classList.remove("on")
        pc_jewelryElement.classList.remove("on")
        pc_fashionElement.classList.remove("on")
    })


    information.addEventListener('click', ()=>{
        informationElement.classList.add("on")
        let b = informationElement.querySelector('.back')
        b.setAttribute('id','information')
    })
    
    pc_information.addEventListener('click', () => {
        pc_informationElement.classList.add("on")
        
        let b = pc_informationElement.querySelector('.pc_close_btn')
        b.setAttribute('id','pc_c_I')
        pc_skincareElement.classList.remove("on")
        pc_makeupElement.classList.remove("on")
        pc_perfumeElement.classList.remove("on")
        pc_eyeElement.classList.remove("on")
        pc_watchElement.classList.remove("on")
        pc_jewelryElement.classList.remove("on")
        pc_fashionElement.classList.remove("on")
    })

   

    


    let header=document.querySelector("#pc_header_mouseover")
    let realheader=document.querySelector("#pc_header_logo")
       
    realheader.addEventListener('mouseover',()=>{
        // header.style.display="block"
        // console.log(`mouse over`)
        header.classList.add("on")
    })

    header.addEventListener('click', ()=>{
        header.classList.add("menu")
    })

    header.addEventListener('mouseout', ()=>{
        console.log(`header mouse out`)
        if ( header.classList[1]  == undefined ) {
            header.classList.remove("on")
            header.classList.remove("menu")
        } 
        
        console.log(header.classList)
    })

    header.addEventListener('mouseover',()=>{
        console.log(`headder over`)
    })

    
    

}


    
    


