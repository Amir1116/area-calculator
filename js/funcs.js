//======================================== Area Calculate ===========

function squareArea(a,initUnit, finalUnit) {
    let res = +((Math.pow(a,2)).toFixed(2));    
    return convertUnits(res, initUnit, finalUnit);
}

function squarePerimeter(a,initUnit, finalUnit) {
    let res = +((a*4).toFixed(2));
    return convertUnits(res, initUnit,finalUnit);
}

function rectArea(a,b, initUnit, finalUnit) {
    let res = +((a*b).toFixed(2));
    return convertUnits(res,initUnit,finalUnit);
}

function rectPerimeter(a,b, initUnit, finalUnit) {
    let res = +(((a+b)*2).toFixed(2));
    return convertUnits(res,initUnit,finalUnit);
}

function circleArea(r,initUnit, finalUnit) {
    let res = +((Math.PI*Math.pow(r,2)).toFixed(2));
    return convertUnits(res,initUnit, finalUnit);
}

function cirсumference(r, initUnit, finalUnit) {
    let res = +((2*Math.PI*r).toFixed(2));
    return convertUnits(res,initUnit,finalUnit);
}

function triangleArea(a,b,c, initUnit, finalUnit) {
    const p = (a+b+c)/2;
    let res =  +((Math.sqrt(((p-a)*(p-b)*(p-c)))).toFixed(2));
    return convertUnits(res, initUnit, finalUnit);
}

function trianglePerimeter(a,b,c, initUnit, finalUnit) {
    let res = +((a+b+c).toFixed(2));
    return convertUnits(res,initUnit,finalUnit);
}

function optionValue(el) {
    return el.options[el.selectedIndex].value;
}

function areaMain(shape, sideA,sideB,sideC,radius,iU,fU){
    let area;
    if(shape ==='square'){
        area = squareArea(sideA,iU, fU);        
    }else if(shape === 'rectangle'){
        area = rectArea(sideA, sideB, iU, fU);       
    }else if(shape === 'triangle'){
        area = triangleArea(sideA, sideB, sideC, iU, fU);      
    }else{
        area = circleArea(radius,iU, fU);       
    }
    return area;
}

function perimeterMain(shape,sideA,sideB,sideC,radius,iU,fU){
    let perimeter;
    if(shape ==='square'){       
        perimeter = squarePerimeter(sideA,iU, fU);
    }else if(shape === 'rectangle'){       
        perimeter = rectPerimeter(sideA,sideB, iU, fU);
    }else if(shape === 'triangle'){        
        perimeter = trianglePerimeter(sideA,sideB,sideC, iU, fU);
    }else{       
        perimeter = cirсumference(radius, iU, fU);
    }
    return perimeter;
}
//=================================end Area Calculate


//==================================Convert units========
//mm => sm = res/10;v   
//mm => dm = res/100;v   
//mm => m  = res/1000;v  
//============================
//sm => mm = res*10;v
//sm => dm = res/10;v
//sm => m = res/100;v
//============================
//dm => mm = res*100;v
//dm => sm = res*10;v
//dm => m = res/10;v
//============================
//m => mm = res*1000;
//m => sm = res*100;v
//m => dm = res*10;v 
function convertUnits(res, initUnit, finalUnit){
    let finalRes;
    if(
        (initUnit === 'mm' && finalUnit === 'sm')||(initUnit ==='sm'&&finalUnit === 'dm')||(initUnit === 'dm' && finalUnit === 'm')
    ){
        finalRes = res/10; 
    }else if(
        (initUnit === 'mm' && finalUnit === 'dm')||(initUnit === 'sm' && finalUnit === 'm')
    ){
        finalRes = res/100;
    }else if(
        (initUnit === 'sm' && finalUnit === 'mm')||(initUnit === 'dm' && finalUnit === 'sm')||(initUnit === 'm' && finalUnit === 'dm')
    ){
        finalRes = res*10;
    }else if(
        (initUnit === 'dm' && finalUnit === 'mm')||(initUnit === 'm' && finalUnit === 'sm')
    ){
        finalRes = res*100;
    }else if(
        (initUnit === 'mm' && finalUnit === 'm')
    ){
        finalRes = res/1000;
    }else if(
        (initUnit === 'm' && finalUnit === 'mm')
    ){
        finalRes = res*1000; 
    }else{
        finalRes = res;
    }
    return finalRes;    
} 

function convertToNumber(str){
    return Number(str);
}


//===================================end Convert units

//===================================Render Res
function arrOfResults(arr, obj){
    return arr.push(obj);
}

function countIncrement(count){
    count+=1;
    return count;
}

function countDecrement(count){
    count-=1;
    return count;
}
    //===========Seacrch name====================
    function addObjToArray(arr, obj){
        return arr.push(obj);
    } 
    
    function searchArray(arr){
        return arr.map(el => el['Название']);
    }

    function searchList(input,arr){
        let value = input.toLowerCase();
         const list = arr.filter(name => name.includes(value));
         return list;
    }

    function createSeacrhModal(el, arr, modal){
        if(modal){
            el.classList.add('border-search');        
            arr.forEach(name => {
                const listItem = document.createElement('span');
                listItem.classList.add('search-item');
                listItem.textContent = name;
                el.appendChild(listItem);
                console.log(arr);
            });         
        }else{
            const childItem = document.querySelector('.search-item');
            el.classList.remove('border-seacrh');            
        }        
    }

    function uniqValue(cl, targetValue,arr){
        const arrList = Array.from(document.querySelectorAll(cl))||[];
        const values = arrList.map(el => el.textContent);
        const uniqList = values.map(el => searchList(targetValue,arr).filter(el2 => el!==el2));
        uniqList.forEach(el => {
            const listItem = document.createElement('span');
            listItem.classList.add('search-item');
            listItem.textContent = el;
            el.appendChild(listItem);
            console.log(arr);
        });        
    }
    //===============end Search name==============

function createOfResults(count,name,sh, initUnits, finalUnits,sideSize1,sideSize2, sideSize3, radiusSize){   
    const shapeName = name.textContent||'Фигура';
    const shape = optionValue(sh);
    const iU = optionValue(initUnits);
    const fU = optionValue(finalUnits);
    const sideA = convertToNumber(sideSize1.value);
    const sideB = convertToNumber(sideSize2.value);
    const sideC = convertToNumber(sideSize3.value);
    const radius = convertToNumber(radiusSize.value);
    let area = areaMain(shape, sideA,sideB,sideC,radius,iU,fU);
    let perimeter = perimeterMain(shape, sideA,sideB,sideC,radius,iU,fU);
   
    const objResults = {
        ['№']: count,
        ['Название']: shapeName,
        ['Форма']: shape,
        ['Длинна а']: sideA||0,
        ['Длинна b']: sideB||0,
        ['Длинна c']: sideC||0,
        ['Длинна r']: radius||0,
        ['Исх. ед.изм.']: iU,
        ['Площадь']:area,
        ['Переметр']: perimeter,
        ['Расч. ед.изм.']: fU,       
    };
    return objResults;
}



function editSelect(){
    const selectEl = `<select class="menu-result" name="edit" id="edit-result">
        <option class="result-menu-icon" value="edit" checked>
            редактировать
        </option>
        <option value="edit">
            изм.
        </option>
        <option value="delete">удал.</option>
    </select>`;
    return selectEl;
}

function tableHeaders(obj){      
    const tableHeaders = [...Object.keys(obj), 'Редактировать'];
    return tableHeaders;
}

function tableColumn(obj){
    const edit = editSelect();
    const tableColums = [...Object.values(obj), edit];
    return tableColums;
}
function renderRes(res){

}

//===================================end Render Res
//=========================== Initial Values
function nameLengthValidation( el, value, length) {
    let outValue;
    if(value.length > length){
        outValue = '';
        el.placeholder = `${value}-длинное`;
    }else if(value === ''){
        outValue = 'Фигура';
    }
    else{
        outValue = value;
    }
    return outValue;
}

function addClassName(searchName,name,...elems) {
    const arrEl = document.querySelectorAll(searchName);
    arrEl.forEach(el => el.classList.remove(name));
    elems.forEach(el => el.classList.add(name));
}

function showSideSizeBlock(sh,s1,s2,s3,r,btn, inpS1,inpS2,inpS3,inpR){
    const shapeValue = optionValue(sh);
    if(shapeValue === 'square'){ 
        resetValue(btn,inpS1);   
        addClassName('.side-size-contaner', 'show', s1);
        addIntEvent(btn,'change', inpS1);             
        
    }else if(shapeValue === 'rectangle'){
        resetValue(btn,inpS1, inpS2); 
        addClassName('.side-size-contaner', 'show', s1 , s2);
        addIntEvent(btn,'change', inpS1, inpS2);      
       
    }else if(shapeValue === 'circle'){
        resetValue(btn,inpR);
        addClassName('.side-size-contaner','show', r);
        addIntEvent(btn,'change', inpR);
        
    }else if(shapeValue === 'triangle'){
        resetValue(btn,inpS1, inpS2, inpS3);
        addClassName('.side-size-contaner','show',s1 ,s2 ,s3);
        addIntEvent(btn,'change', inpS1, inpS2, inpS3);
       
    }else{
        addClassName('.side-size-contaner','show');      
    }
}
function resetValue(btn,...elems) {
    elems.forEach(el =>{
        el.value = '';
        el.placeholder = 'длина';
    });
    btnCalculateEnable(btn,false);
} 

function addIntEvent(btn, event, ...elems) { 
      
       elems.forEach((el,idx, arr) => {
           el.addEventListener(event, (e)=>{
                e.target.value  = validationInput(e.target.value, e.target); 
                e.target.placeholder = setPlaceholder(e.target.value);   
                const allValues = arr.every(el => el.value !== '');
               
                btnCalculateEnable(btn,allValues);     
        });
    });  
              
}

function validationInput(value) {   
    let outValue;
    if((value.match( /^[0-9]+\.?[0-9]+$/)||[].length === value.length)||(value.match( /^[0-9]$/)||[].length === value.length)){
        outValue = value;           
    } else {                            
        outValue = ''; 
    }  
    return outValue;
}

function setPlaceholder(value) {
    let out = value === ''? 'введите верное значение' : '';   
    return out;
}

function btnCalculateEnable(btn,condit) {                 
    if(condit){
        console.log('yes');
        btn.disabled = false;
    }else{
        console.log('no');
        btn.disabled = true;
    }    
}

//=========================================== end initial value

//===================================== Section shema and formula

function showShapeImageContainer(el,shape, cl) {
    const shapeValue= optionValue(shape);
    if(shapeValue !== 'shape'){
        shapeImage.src = `./img/${shapeValue}.png`;
        el.classList.add(cl);
    }else{
        shapeImage.classList.remove(cl);
    }    
}

//=========================================end Section Shema and formula