function generateCard() {
  let name = document.getElementById("name").value;
  let color = document.getElementById("color").value;
  let shape = document.getElementById("shape").value;
  let weight = document.getElementById("weight").value;

  document.getElementById("card").innerHTML = `
    <div class="card-box">
      <div class="header">RUDRAKASHI GEM TESTING LAB</div>

      <div class="section"><b>Name:</b> ${name}</div>
      <div class="section"><b>Color:</b> ${color}</div>
      <div class="section"><b>Cut & Shape:</b> ${shape}</div>
      <div class="section"><b>Weight:</b> ${weight}</div>

      <div class="section"><b>Natural Rudraksha</b></div>
    </div>
  `;
}

function printCard() {
  window.print();
}
