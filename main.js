const langs = document.querySelector('.changeLanguage');
const buttons = document.querySelectorAll('button')
const aboutDesc = document.querySelector('.about p');
const telekom = document.querySelector('.telekom p');
const handle = document.querySelector('.handle p');
const ms = document.querySelector('.ms p');
const lidl = document.querySelector('.lidl p');
const mercedes = document.querySelector('.mercedes p');
const telekomTitle = document.querySelector('.telekom h4');
const handleTitle = document.querySelector('.handle h4');
const msTitle = document.querySelector('.ms h4');
const lidlTitle = document.querySelector('.lidl h4');
const mercedesTitle = document.querySelector('.mercedes h4');
const contact = document.querySelector('.contact');
const education = document.querySelector('.educ');
const language = document.querySelector('.lang');
const profile = document.querySelector('.profile');
const experience = document.querySelector('.experience');
const interest = document.querySelector('.int');
const cook = document.querySelector('.cook');
const graduation = document.querySelector('.graduation');
const ger = document.querySelector('.ger');
const ge = document.querySelector('.ge');
const eng = document.querySelector('.eng');
const au = document.querySelector('.au');
const uk = document.querySelector('.uk');
const gaming = document.querySelector('.gaming');
const cooking = document.querySelector('.cooking');


buttons.forEach(el => {
    el.addEventListener('click', function(){
        langs.querySelector('.active').classList.remove('active');
        el.classList.add('active')

        const attr = el.getAttribute('language')

        aboutDesc.innerHTML = lang[attr].aboutDesc
        telekom.innerHTML = lang[attr].telekom
        handle.innerHTML = lang[attr].handle
        ms.innerHTML = lang[attr].ms
        lidl.innerHTML = lang[attr].lidl
        mercedes.innerHTML = lang[attr].mercedes
        contact.innerHTML = lang[attr].contact
        education.innerHTML = lang[attr].education
        language.innerHTML = lang[attr].language
        profile.innerHTML = lang[attr].profile
        experience.innerHTML = lang[attr].experience
        interest.innerHTML = lang[attr].interest
        telekomTitle.innerHTML = lang[attr].telekomTitle
        handleTitle.innerHTML = lang[attr].handleTitle
        msTitle.innerHTML = lang[attr].msTitle
        lidlTitle.innerHTML = lang[attr].lidlTitle
        mercedesTitle.innerHTML = lang[attr].mercedesTitle

        cook.innerHTML = lang[attr].cook
        graduation.innerHTML = lang[attr].graduation
        ger.innerHTML = lang[attr].ger
        ge.innerHTML = lang[attr].ge
        eng.innerHTML = lang[attr].eng
        au.innerHTML = lang[attr].au
        uk.innerHTML = lang[attr].uk
        gaming.innerHTML = lang[attr].gaming
        cooking.innerHTML = lang[attr].cooking
    })
})

