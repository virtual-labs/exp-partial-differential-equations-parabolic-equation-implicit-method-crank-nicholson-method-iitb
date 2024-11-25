let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">PDE: Parabolic equation - implicit method (Crank - Nicholson method)</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>

      <div>
         $$
            \\frac{\\partial^2f}{\∂ x^2} = \\frac{\∂ f}{\∂ t}
         $$
         $$ when, f(0,t) = 0, f(20,t) = 10, f(x,0) = 2 $$
         $$ \Δx = h = 5 $$
         <p> take r = 1 </p>
      </div>
      <p class="18px fb-500" style='text-align:left;'>
         Find f(x,25) = ?
      </p>

      <div>
         $$
            \\frac{k}{h^2} = r
         $$
         $$
            k = h^2r
         $$
      </div>
      <div id="act1-k-div">
         <br>
         k = <span style="display:inline-block;"> <input type='number' id='act1-k-inp' class='form-control fs-16px' /> </span>
         <br>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_k();' id='act1-vf-btn1'>Verify</button>
      </div>
         
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function a1_verify_k() {
    let k_inp = (document.getElementById('act1-k-inp'));
    console.log(k);
    if (!verify_values(parseFloat(k_inp.value), k)) {
        k_inp.style.border = '1px solid red';
        alert('Incorrect k value');
        return;
    }
    else {
        k_inp.style.border = '1px solid #ced4da';
        k_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-k-div'));
    let outer_div = (document.getElementById('act1-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div class="fs-18px fb-500">
      $$ k = ${k} $$
   </div>   
   `;
    outer_div.innerHTML += `
   <br>
   <div>
      $$ 
         (2+2r)u_{i+1,j} - r\×u_{i+1,j-1} - r\×u_{i+1,j+1} = r(u_{i,j-1})+(2-2r)u_{ij}+r\×u_{i,j+1} 
      $$
      $$
         4u_{i+1,j} - u_{i+1,j-1} - u_{i+1,j+1} = u_{i,j-1} + u_{i,j+1}
      $$
   </div>
   <div>
      <p style="text-align:left;" class="fs-18px fb-500">
         Verify equation 1 for x = 5,
      </p>
      <div id='act1-eq1'>
         <div class="row justify-content-center fs-18px" style="align-items:center;">
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;"  type='number'    id='u1-eq1-inp' class='form-control fs-16px' />  u<sub>1</sub> +
            </div>
            <div class="col-md-3" style="display:inline-block;">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='u2-eq1-inp' class='form-control fs-16px' /> u<sub>2</sub> +
            </div>
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='u3-eq1-inp' class='form-control fs-16px' /> u<sub>3</sub>= 
            </div>
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='c-eq1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_equ1();' id='act1-vf-btn2'>Verify</button>         
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_equ1() {
    let u1_inp = (document.getElementById('u1-eq1-inp'));
    let u2_inp = (document.getElementById('u2-eq1-inp'));
    let u3_inp = (document.getElementById('u3-eq1-inp'));
    let c_inp = (document.getElementById('c-eq1-inp'));
    console.log(matA[0], matC[0]);
    if (!verify_values(parseFloat(u1_inp.value), matA[0][0])) {
        u1_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u1 value');
        return;
    }
    else {
        u1_inp.style.border = '1px solid #ced4da';
        u1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(u2_inp.value), matA[0][1])) {
        u2_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u2 value');
        return;
    }
    else {
        u2_inp.style.border = '1px solid #ced4da';
        u2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(u3_inp.value), matA[0][2])) {
        u3_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u3 value');
        return;
    }
    else {
        u3_inp.style.border = '1px solid #ced4da';
        u3_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), matC[0])) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-eq1'));
    let outer_div = (document.getElementById('act1-div'));
    div.innerHTML = '';
    div.innerHTML = `
   $$
      ${matA[0][0]}u_1  ${matA[0][1]}u_2 = ${matC[0]} \\quad ...equ(1)
   $$
   `;
    outer_div.innerHTML += `
   <div>
      <p style="text-align:left;" class="fs-18px fb-500">
         Verify equation 2 for x = 10,
      </p>
      <div id='act1-eq2'>
         <div class="row justify-content-center fs-18px" style="align-items:center;">
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;"  type='number'    id='u1-eq2-inp' class='form-control fs-16px' />  u<sub>1</sub> +
            </div>
            <div class="col-md-3" style="display:inline-block;">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='u2-eq2-inp' class='form-control fs-16px' /> u<sub>2</sub> +
            </div>
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='u3-eq2-inp' class='form-control fs-16px' /> u<sub>3</sub>= 
            </div>
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='c-eq2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_equ2();' id='act1-vf-btn3'>Verify</button>         
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_equ2() {
    let u1_inp = (document.getElementById('u1-eq2-inp'));
    let u2_inp = (document.getElementById('u2-eq2-inp'));
    let u3_inp = (document.getElementById('u3-eq2-inp'));
    let c_inp = (document.getElementById('c-eq2-inp'));
    console.log(matA[1], matC[1]);
    if (!verify_values(parseFloat(u1_inp.value), matA[1][0])) {
        u1_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u1 value');
        return;
    }
    else {
        u1_inp.style.border = '1px solid #ced4da';
        u1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(u2_inp.value), matA[1][1])) {
        u2_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u2 value');
        return;
    }
    else {
        u2_inp.style.border = '1px solid #ced4da';
        u2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(u3_inp.value), matA[1][2])) {
        u3_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u3 value');
        return;
    }
    else {
        u3_inp.style.border = '1px solid #ced4da';
        u3_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), matC[1])) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-eq2'));
    let outer_div = (document.getElementById('act1-div'));
    div.innerHTML = '';
    div.innerHTML = `
   $$
      ${matA[1][0]}u_1  ${matA[1][1]}u_2 + ${matA[1][2]}u_3  = ${matC[1]} \\quad ...equ(2)
   $$
   `;
    outer_div.innerHTML += `
   <div>
      <p style="text-align:left;" class="fs-18px fb-500">
         Verify equation 3 for x = 15,
      </p>
      <div id='act1-eq3'>
         <div class="row justify-content-center fs-18px" style="align-items:center;">
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;"  type='number'    id='u1-eq3-inp' class='form-control fs-16px' />  u<sub>1</sub> +
            </div>
            <div class="col-md-3" style="display:inline-block;">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='u2-eq3-inp' class='form-control fs-16px' /> u<sub>2</sub> +
            </div>
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='u3-eq3-inp' class='form-control fs-16px' /> u<sub>3</sub>= 
            </div>
            <div class="col-md-3">
               <input style="display:inline-block; width:60%; margin-top:5px;" type='number' id='c-eq3-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_equ3();' id='act1-vf-btn4'>Verify</button>         
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_equ3() {
    let u1_inp = (document.getElementById('u1-eq3-inp'));
    let u2_inp = (document.getElementById('u2-eq3-inp'));
    let u3_inp = (document.getElementById('u3-eq3-inp'));
    let c_inp = (document.getElementById('c-eq3-inp'));
    console.log(matA[2], matC[2]);
    if (!verify_values(parseFloat(u1_inp.value), matA[2][0])) {
        u1_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u1 value');
        return;
    }
    else {
        u1_inp.style.border = '1px solid #ced4da';
        u1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(u2_inp.value), matA[2][1])) {
        u2_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u2 value');
        return;
    }
    else {
        u2_inp.style.border = '1px solid #ced4da';
        u2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(u3_inp.value), matA[2][2])) {
        u3_inp.style.border = '1px solid red';
        alert('Incorrect coefficient of u3 value');
        return;
    }
    else {
        u3_inp.style.border = '1px solid #ced4da';
        u3_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), matC[2])) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-eq3'));
    div.innerHTML = '';
    div.innerHTML = `
   $$
      ${matA[2][1]}u_2 + ${matA[2][2]}u_3  = ${matC[2]} \\quad ...equ(3)
   $$
   <button class='btn btn-info btn-sm std-btn' onclick='a1_load_table();' id='act1-btn1'>Next</button>  
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_load_table() {
    internal_calculation2();
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Solving above system of equation fill the table,
   </p>
   <div id="act1-tb-box">
   </div>
   `;
    let header = ['t&darr; \\ x&rarr;', '0', '5', '10', '15', '20'];
    let vf_rows = [];
    let vf_cols = [];
    let tb_box = (document.getElementById('act1-tb-box'));
    vf_rows = [0, 1];
    vf_cols = [[], [2, 3, 4]];
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, table_data1, vf_rows, vf_cols, '', tb_box, true, true, act1_complete, 3);
    tab.load_table();
}
function internal_calculation1() {
    k = 0;
    k = Math.pow(h, 2) * r;
    //== if dynamic data is need for table_data1 then complete this code (START) ==//
    // let n: number = dist_at / k + 1;
    // let t = 0;
    // for (let i = 0; i < n; i++) {
    //    let ar: number[] = []
    //    for (let j = 0; j < 6; j++) {
    //       if (j == 0) {
    //          ar.push(t);
    //          t += k;
    //       } else if (j == 1) {
    //          ar.push(0);
    //       } else if (j == 5) {
    //          ar.push(10);
    //       } else if (i == 0) {
    //          ar.push(2);
    //       } else{}
    //    }
    // }
    //== if dynamic data is need for table_data1 then complete this code (END) ==//
    matA = [
        [2 + 2 * r, -r, 0],
        [r, -(2 + 2 * r), r],
        [0, -r, 2 + 2 * r],
    ];
    matC = [
        table_data1[0][3],
        -(table_data1[0][2] + table_data1[0][4]),
        20 + table_data1[0][3],
    ];
}
function internal_calculation2() {
    let matU = gauss(matA, matC);
    u1 = matU[0];
    u2 = matU[1];
    u3 = matU[2];
    table_data1[1][2] = u1;
    table_data1[1][3] = u2;
    table_data1[1][4] = u3;
    console.log(matA);
    console.log(matC);
    console.log(matU);
}
function act1_complete() {
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map