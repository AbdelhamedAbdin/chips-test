// Chips form
let chips_text = document.getElementById('chips-text');
let chips_list = document.getElementById('chips-chips_list');
let id_skills = document.getElementById('id_skills');
let job_form = document.getElementById('job-form');
let ACTION = '';
let ACTION_SUBMIT = '';
let items = ['Excel'];
// input to submit job
const submit_job = document.getElementById("submit-job");

// chips_text.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         let val = chips_text.value;
//         if (val !== '') {
//             if (items.indexOf(val) >= 0) {
//                 alert('Tag name is a duplicate');
//             } else {
//                 items.push(val);
//                 render();
//                 chips_text.value = '';
//                 chips_text.focus();
//             }
//         } else {
//             alert('Please type a tag Name');
//         }
//     }
// });

chips_text.onkeydown = (e) => {
    if (e.key === 'Enter') {
        let val = chips_text.value;
        if (val !== '') {
            if (items.indexOf(val) >= 0) {
                alert('Tag name is a duplicate');
            } else {
                items.push(val);
                render();
                chips_text.value = '';
                chips_text.focus();
            }
        } else {
            alert('Please type a tag Name');
        }
    }
};

function render() {
    chips_list.innerHTML = '';
    if (ACTION_SUBMIT === 'Submit') {
        ACTION = '';
        ACTION_SUBMIT = 'Submit';
        console.log(ACTION)
        console.log(ACTION_SUBMIT)
    } else {
        ACTION = 'Enter';
        ACTION_SUBMIT = '';
        console.log(ACTION)
        console.log(ACTION_SUBMIT)
    }
    items.map((item, index) => {
        chips_list.innerHTML += `<li class='chips'><a href="javascript: remove(${index})">X</a><span>${item}</span></li>`;
        id_skills.value = `${[...items]}`;
    });
}

function remove(i) {
    items = items.filter(item => items.indexOf(item) != i);
    render();
}

window.onload = function() {
    render();
    chips_text.focus();
}

job_form.onsubmit = (e) => {
    e.preventDefault();
    if (ACTION_SUBMIT === 'Submit') {
        ACTION = '';
        ACTION_SUBMIT = 'Submit';
        console.log(ACTION)
        console.log(ACTION_SUBMIT)
    } else {
        ACTION = 'Enter';
        ACTION_SUBMIT = '';
        console.log(ACTION)
        console.log(ACTION_SUBMIT)
    }
}



// function getEventType(event) {
//     if (event.type === "keydown") {
//         event.preventDefault();
//     }
// }
//
// submit_job.addEventListener('keydown', getEventType, true);
//
// submit_job.addEventListener('click', getEventType);

// submit_job.onsubmit = (e) => {
    // e.preventDefault();
    // console.log(e.key)
// }

// job_form.onsubmit = (e) => {
//     e.preventDefault();
    // console.log(e)
    // console.log(e.charCode)
    // console.log(e.relatedTarget)
    // console.log(e.target)
    // console.log(e.currentTarget)

    // if (e.key !== "") {
    //     console.log(e.currentTarget)
    // } else if (e.pointerType === "mouse") {
    //     submit_job.onsubmit = () => {
    //         return true
    //     }
    // }
// }

// window.addEventListener("mouseup", (e) => {
//     e.preventDefault();
//     console.log(e)
// })
