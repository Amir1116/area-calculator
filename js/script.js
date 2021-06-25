"use strict";
//shape name validation

shapeName.addEventListener('change',(e)=>{
    const el = e.target;
    const value = el.value;    
    el.value = nameLengthValidation(el,value, 10);
});
//==================================
//show intinal data inputs

shape.addEventListener('change',()=>{
    showSideSizeBlock(shape, blockSide1 ,blockSide2, blockSide3, blockRadius, btnCalc, inputSide1,inputSide2,inputSide3,inputRadius);    

});
// button calculate event

btnCalc.addEventListener('click',()=>{  
    showShapeImageContainer(imageContainer,shape, 'd-flex');
    count = countIncrement(count);
    console.log(count);
    const objResults = createOfResults(count,shapeName,shape, initUnits, finalUnits,inputSide1,inputSide2, inputSide3, inputRadius);
    addObjToArray(resultsArray, objResults);
    console.log(resultsArray);    
    const searchList = searchArray(resultsArray);
    console.log(searchList);
    
    const tableHeader = tableHeaders(objResults);
    const tableColums = tableColumn(objResults);
    

});
console.log(searchInput);
const arrInput = ['john1', 'rio2', 'mike3'];

searchInput.addEventListener('input',(e)=>{
    let targetValue = e.target.value;    
    const modalList = searchList(targetValue,arrInput);    
    if(modalList.length != 0 && targetValue){       
        createSeacrhModal(searchPanel, modalList, true);
        uniqValue('.search-item', targetValue, arrInput);
    }else{
      
        createSeacrhModal(searchPanel, [], false);
    }
    // console.log(uniqValue('.search-item'));
});