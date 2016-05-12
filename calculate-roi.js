/**
 * Created by maximmillen on 12/05/16.
 */

function calculateROI() {
        console.log("triggered calculate roi");
  var theForm = document.forms["roi-calculator"];
  var number_engs = theForm.elements["num-engs"].value;
  var hours_week = theForm.elements["hours"].value;
  var eng_cost = parseFloat(theForm.elements["rate"].value.replace("$", ""));
  console.log("cost: ", eng_cost);
  var work_weeks = 47;
  var annual_cost = eng_cost * hours_week * work_weeks * number_engs;
  var review_ratio = 0.5;
  var reduction_ratio = 0.3;
  var pensolve_savings = annual_cost * review_ratio * reduction_ratio;
  var savings_str = "$" + pensolve_savings.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
  var cost_str = "$" + annual_cost.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});

  var divobj = document.getElementById('roi-answers');
  divobj.style.display = "block";
  document.getElementById('annual-cost').innerHTML = "The annual cost of spreadsheet engineering: " + cost_str;

  document.getElementById('annual-savings').innerHTML = "Pensolve annual savings: " + savings_str;

  console.log("annual cost: ", annual_cost);
  console.log("pensolve savings: ", pensolve_savings);
  console.log("savings str: ", savings_str);

      }