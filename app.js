
let a = document.querySelector("#div1");

let b = document.querySelector("#div2");

let p = document.querySelector("#p");

let c = document.querySelector("#div3");

let d = document.querySelector("#div4");

let e = document.querySelector("#div5");

let f = document.querySelector("#div6");

let g = document.querySelector("#div7");

let h = document.querySelector("#div8");

let i = document.querySelector("#div9");

function myChange() {



  if (((a.value == b.value && a.value == c.value)||(a.value==d.value && a.value==g.value)||(a.value==e.value && a.value==i.value)) && a.value!="" ) {

    p.innerHTML = "Result : Player " + a.value +" win";

  } 

  else if (((i.value == h.value && i.value==g.value)||(i.value == f.value && i.value==c.value)) && i.value!="" ){

    p.innerHTML = "Result : Player " + i.value +" win";

    console.log(i.value)

  }

  else if (((d.value == e.value && e.value==f.value )||(e.value == b.value && e.value==h.value )||(c.value==e.value && e.value==g.value )) && e.value!=""){

    p.innerHTML = "Result : Player " + e.value +" win";

  }

//   else{

//       p.innerHTML = "Draw";

//   }

  else if(a.value!="" && b.value!="" && c.value!="" && d.value!="" && e.value!="" && f.value!="" && g.value!="" && h.value!="" && i.value!=""){

      p.innerHTML = "Result : Draw";

  }

}

let x = "0";

function func1() {

  if (x == "0") {

    a.value = "0";

    a.disabled = true;

    myChange();

    return (x = "X");

  } else {

    a.value = "X";

    a.disabled=true;

    myChange();

    return (x = "0");

  }

}

function func2() {

  if (x == "0") {

    b.value = "0";

    b.disabled = true;

    myChange();

    return (x = "X");

  } else {

    b.value = "X";

    b.disabled = true;

    myChange();

    return (x = "0");

  }

}

function func3() {

  if (x == "0") {

    c.value = "0";

    c.disabled = true;

    myChange();

    return (x = "X");

  } else {

    c.value = "X";

    c.disabled = true;

    myChange();

    return (x = "0");

  }

}

function func4() {

  if (x == "0") {

    d.value = "0";

    d.disabled = true;

    myChange();

    return (x = "X");

  } else {

    d.value = "X";

    d.disabled = true;

    myChange();

    return (x = "0");

  }

}

function func5() {

  if (x == "0") {

    e.value = "0";

    e.disabled = true;

    myChange();

    return (x = "X");

  } else {

    e.value = "X";

    e.disabled = true;

    myChange();

    return (x = "0");

  }

}

function func6() {

  if (x == "0") {

    f.value = "0";

    f.disabled = true;

    myChange();

    return (x = "X");

  } else {

    f.value = "X";

    f.disabled = true;

    myChange();

    return (x = "0");

  }

}

function func7() {

  if (x == "0") {

    g.value = "0";

    g.disabled = true;

    myChange();

    return (x = "X");

  } else {

    g.value = "X";

    g.disabled = true;

    myChange();

    return (x = "0");

  }

}

function func8() {

  if (x == "0") {

    h.value = "0";

    h.disabled = true;

    myChange();

    return (x = "X");

  } else {

    h.value = "X";

    h.disabled = true;

    myChange();

    return (x = "0");

  }

}

function func9() {

  if (x == "0") {

    i.value = "0";

    i.disabled = true;

    myChange();

    return (x = "X");

  } else {

    i.value = "X";

    i.disabled = true;

    myChange();

    return (x = "0");

  }

}

function reset(){

    a.value=null;

    a.disabled=false;

    b.value=null;

    b.disabled=false;

    c.value=null;

    c.disabled=false;

    d.disabled=false;

    e.disabled=false;

    f.disabled=false;

    g.disabled=false;

    h.disabled=false;

    i.disabled=false;

    d.value=null;

    e.value=null;

    f.value=null;

    g.value=null;

    h.value=null;

    i.value=null;

    p.innerHTML="Result :";

}
