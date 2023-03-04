function unselected_boxes(qn_boxes){
    const unselected_box = [];

    for(const box of qn_boxes){
        box.addEventListener('click', click_answer);
        unselected_box.push(box);
    }
    return unselected_box;
}

function disable_click_qns(qn_boxes){
    for(const box of qn_boxes){
        box.removeEventListener('click', click_answer);
    }
}



function mode(dict)
{
    let array = Object.keys(dict).map(function(key){
        return dict[key];
    })
    console.log(array);
    if(array.length == 0)
        return null;
    let modeMap = {};
    let maxEl = array[0], maxCount = 1;
    for(let i = 0; i < array.length; i++)
    {
        let el = array[i];
        if(modeMap[el] == null)
        // second question id 
            modeMap[el] = 2; 
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function winner(){

    let choice = mode(id_to_qn_click).dataset.choiceId;
    console.log(choice);
    let article_content = document.querySelector('article');
    let result_section = document.createElement('section');
    let header = document.createElement('h3');
    let ans_header = document.createTextNode("You got: " + RESULTS_MAP[choice]["title"]); 
    let ans_description = document.createTextNode(RESULTS_MAP[choice]["contents"]);
    let ans_paragraph = document.createElement('h4');

    
    ans_paragraph.appendChild(ans_description);
    header.appendChild(ans_header);
    result_section.appendChild(header);
    result_section.append(ans_paragraph);
    result_section.appendChild(createRestartButton());

    article_content.appendChild(result_section);
    
}

function removeElem(array, elem){
    const index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

function changeOpaque(array, opacity='0.6'){
    for (const elem of array){
        elem.style.opacity = opacity;
    }
}

// check to see if quiz is finished, all answers selected
function isQuizOver(){

    let over = false;
    let count = 0;
    for (const key in id_to_qn_click) {
        if (id_to_qn_click[key] !== null && id_to_qn_click[key] != undefined)
            count++;
    }
    if(count == 10)
        over = true;
    return over;
}

// make the restart quiz button
function createRestartButton(){
    // creating button element  
    let button = document.createElement('BUTTON');  
    button.addEventListener('click', restart)
    // creating text to be 
    //displayed on button 
    let text = document.createTextNode("Restart Quiz"); 

    button.style.width = '100%';
    button.style.height = "80px";
    button.style.background = '#F4AB8D';
    button.appendChild(text); 

    return button;
}

function globalStyleReset(){
    // ans_1, ans_2, ans_3...
    
    for(const box of ans_1){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_2){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_3){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_4){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_5){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_6){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_7){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_8){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_9){
        box.style.backgroundColor = '#fafaf9';

    }
    for(const box of ans_10){
        box.style.backgroundColor = '#fafaf9';

    }
    changeOpaque(ans_1, '1.0');
    changeOpaque(ans_2, '1.0');
    changeOpaque(ans_3, '1.0');
    changeOpaque(ans_4, '1.0');
    changeOpaque(ans_5, '1.0');
    changeOpaque(ans_6, '1.0');
    changeOpaque(ans_7, '1.0');
    changeOpaque(ans_8, '1.0');
    changeOpaque(ans_9, '1.0');
    changeOpaque(ans_10, '1.0');

}

//  re-initiate the global variables to start over
function reinitGlobalVar(){

    q1_unselected_box = unselected_boxes(ans_1);
    q2_unselected_box = unselected_boxes(ans_2);
    q3_unselected_box = unselected_boxes(ans_3);
    q4_unselected_box = unselected_boxes(ans_4);
    q5_unselected_box = unselected_boxes(ans_5);
    q6_unselected_box = unselected_boxes(ans_6);
    q7_unselected_box = unselected_boxes(ans_7);
    q8_unselected_box = unselected_boxes(ans_8);
    q9_unselected_box = unselected_boxes(ans_9);
    q10_unselected_box = unselected_boxes(ans_10);

    q1_selected_box = undefined;
    q2_selected_box = undefined;
    q3_selected_box = undefined;
    q4_selected_box = undefined;
    q5_selected_box = undefined;
    q6_selected_box = undefined;
    q7_selected_box = undefined;
    q8_selected_box = undefined;
    q9_selected_box = undefined;
    q10_selected_box = undefined;

    id_to_qn_unselected_boxes = {
        'one': q1_unselected_box,
        'two': q2_unselected_box,
        'three': q3_unselected_box,
        'four' : q4_unselected_box,
        'five' : q5_unselected_box,
        'six' : q6_unselected_box,
        'seven' : q7_unselected_box,
        'eight' : q8_unselected_box,
        'nine' : q9_unselected_box,
        'ten' : q10_unselected_box
    }
    id_to_qn_click = {
        'one': q1_selected_box,
        'two': q2_selected_box,
        'three': q3_selected_box,
        'four': q4_selected_box,
        'five' : q5_selected_box,
        'six' : q6_selected_box,
        'seven' : q7_selected_box,
        'eight' : q8_selected_box,
        'nine' : q9_selected_box,
        'ten' : q10_selected_box
    }
      
}

function restart(event){
    const answer_div = event.currentTarget.parentElement;
    answer_div.remove();
    globalStyleReset();
    reinitGlobalVar();
}

// choose an answer event listener
function click_answer(event){
    const divB = event.currentTarget;
    const qn_id = divB.dataset.questionId;

    let clicked_button = id_to_qn_click[qn_id];
    let unclicked_buttons = id_to_qn_unselected_boxes[qn_id];

    // change background and opacity of a qn
    if(clicked_button !== undefined){
        // reset previous answer style
        clicked_button.style.backgroundColor = '#fafaf9';

        unclicked_buttons.push(clicked_button);
        clicked_button = undefined; 
        changeOpaque(unclicked_buttons, '1.0');
    }
    id_to_qn_click[qn_id] = divB;
    divB.style.backgroundColor = '#F4AB8D';
    removeElem(unclicked_buttons, divB);
    changeOpaque(unclicked_buttons);
    
    //winner(q2_selected_box.dataset.choiceId); 


 // disable clicking on questions if quiz is over
    if (isQuizOver()){
        disable_click_qns(ans_1);
        disable_click_qns(ans_2);
        disable_click_qns(ans_3);
        disable_click_qns(ans_4);
        disable_click_qns(ans_5);
        disable_click_qns(ans_6);
        disable_click_qns(ans_7);
        disable_click_qns(ans_8);
        disable_click_qns(ans_9);
        disable_click_qns(ans_10);
        winner();

    }

}




// constants for unselected answers
const ans_1 = document.querySelectorAll('[data-question-id="one"]');
let q1_unselected_box = unselected_boxes(ans_1);

const ans_2 = document.querySelectorAll('[data-question-id="two"]');
let q2_unselected_box = unselected_boxes(ans_2);

const ans_3 = document.querySelectorAll('[data-question-id="three"]');
let q3_unselected_box = unselected_boxes(ans_3);

const ans_4 = document.querySelectorAll('[data-question-id="four"]');
let q4_unselected_box = unselected_boxes(ans_4);

const ans_5 = document.querySelectorAll('[data-question-id="five"]');
let q5_unselected_box = unselected_boxes(ans_5);

const ans_6 = document.querySelectorAll('[data-question-id="six"]');
let q6_unselected_box = unselected_boxes(ans_6);

const ans_7 = document.querySelectorAll('[data-question-id="seven"]');
let q7_unselected_box = unselected_boxes(ans_7);

const ans_8 = document.querySelectorAll('[data-question-id="eight"]');
let q8_unselected_box = unselected_boxes(ans_8);

const ans_9 = document.querySelectorAll('[data-question-id="nine"]');
let q9_unselected_box = unselected_boxes(ans_9);

const ans_10 = document.querySelectorAll('[data-question-id="ten"]');
let q10_unselected_box = unselected_boxes(ans_10);

// storage for selected answers
let q1_selected_box;
let q2_selected_box;
let q3_selected_box;
let q4_selected_box;
let q5_selected_box;
let q6_selected_box;
let q7_selected_box;
let q8_selected_box;
let q9_selected_box;
let q10_selected_box;

let id_to_qn_unselected_boxes = {
    'one': q1_unselected_box,
    'two': q2_unselected_box,
    'three': q3_unselected_box,
    'four' : q4_unselected_box,
    'five' : q5_unselected_box,
    'six' : q6_unselected_box,
    'seven' : q7_unselected_box,
    'eight' : q8_unselected_box,
    'nine' : q9_unselected_box,
    'ten' : q10_unselected_box
}

let id_to_qn_click = {
    'one': q1_selected_box,
    'two': q2_selected_box,
    'three': q3_selected_box,
    'four' : q4_selected_box,
    'five' : q5_selected_box,
    'six' : q6_selected_box,
    'seven' : q7_selected_box,
    'eight' : q8_selected_box,
    'nine' : q9_selected_box,
    'ten' : q10_selected_box
}