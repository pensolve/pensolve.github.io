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
  var spreadsheet_hours = hours_week * work_weeks * number_engs;
  var annual_cost = eng_cost * spreadsheet_hours;
  var review_ratio = 0.5;
  var reduction_ratio = 0.3;
  var pensolve_hours = spreadsheet_hours * review_ratio * reduction_ratio;
  var pensolve_savings = annual_cost * review_ratio * reduction_ratio;
  var hours_str = spreadsheet_hours.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
  var hours_saved_str = pensolve_hours.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
  var savings_str = "$" + pensolve_savings.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
  var cost_str = "$" + annual_cost.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});

  document.getElementById('spreadsheet-hours').innerHTML = "Time spent with spreadsheets per year: " + hours_str + " hours";
  document.getElementById('annual-cost').innerHTML = "Annual spending on spreadsheet engineering: " + cost_str;
  document.getElementById('review-ratio').innerHTML = "Time modifying and reviewing spreadsheets: 50%";
  document.getElementById('review-saving').innerHTML = "Approximate time saving from Pensolve: 30%";
  document.getElementById('hours-savings').innerHTML = "Expected hours saved: " + hours_saved_str + " hours";
  document.getElementById('annual-savings').innerHTML = "Expected Pensolve annual savings: <u>" + savings_str + "</u>";

  console.log("annual cost: ", annual_cost);
  console.log("pensolve savings: ", pensolve_savings);
  console.log("savings str: ", savings_str);

      }