+function(){
  console.log('The same');
}();

(function callMyFunc() {

  
  //////// MY POP //////////////////////////////
  
  function myPop(array) {
    let forDelete = array[array.length-1];
    delete array[array.length-1];
    array.length--;
    console.log(message);
    return forDelete;
  }

  Array.prototype.pop = function () {
    let x = myPop(this);
    return x;
  };
  
  ///// MY PUSH ////////////////////////////

  function myPush(element, array){
    array[array.length] = element;
    console.log(message);
    return array.length;
  }

  Array.prototype.push = function (element) {
    return myPush(element, this);
  };

  ///// MY FOREACH /////////////////////////

  let message = '>> made by Pavlo';

  function myForEach(arr, callback1) {
    for(let i = 0; i<arr.length; i++){
      callback1(arr[i], i, arr);
    }
    console.log(message);
  }

  Array.prototype.forEach = function (callback2) {
    myForEach(this, callback2);
  };

  ////////// MY FILTER /////////////////////////////////////

  function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let isTrue = callback(arr[i]);
      if (isTrue) {
        result.push(arr[i]);
      }
    }
    console.log(message);
    return result;
  }

  Array.prototype.filter = function (callback) {
    let x = myFilter(this, callback);
    return x;
  };

  /////////// MY MAP //////////////////////////////////////////

  function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]))
    }
    console.log(message);
    return result;
  }

  Array.prototype.map = function (callback) {
    let x = myMap(this, callback);
    return x;
  };

  ///////////// MY FIND /////////////////////////////////////////////////////////

  function myFind(arr, callback) {
    let result;
    for (let i = 0; i < arr.length; i++) {
      let isTrue = callback(arr[i]);
      if(isTrue){
        result = arr[i];
        break;
      }
    }
    console.log(message);
    return result;
  }

  Array.prototype.find = function (callback) {
    let x = myFind(this, callback);
    return x;
  };

  /////////////// MY FINDiNDEX //////////////////////////////////////////

  function myFindIndex(arr, callback) {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
      let isTrue = callback(arr[i], i);
      if(isTrue){
        result = i;
        break;
      }
    }
    console.log(message);
    return result;
  }

  Array.prototype.findIndex = function (callback) {
    let x = myFindIndex(this, callback);
    return x;
  };

})();