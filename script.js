function calculate() {

  function getCappedValue(id, maxLimit) {
    let val = parseFloat(document.getElementById(id).value) || 0;
    return val > maxLimit ? maxLimit : val;
  }


  let t1 = getCappedValue("test1", 50);
  let t2 = getCappedValue("test2", 50);
  let t3 = getCappedValue("test3", 50);
  let t4 = getCappedValue("test4", 50);
  let t5 = getCappedValue("test5", 50);


  let testPercentages = [t1 * 2, t2 * 2, t3 * 2, t4 * 2, t5 * 2];


  let sumTests = testPercentages.reduce((acc, curr) => acc + curr, 0);
  let averageTests = sumTests / 5;
  let T = averageTests * 0.8;



  let q1 = getCappedValue("quiz1", 5) * 20;
  let q2 = getCappedValue("quiz2", 5) * 20;
  let q3 = getCappedValue("quiz3", 5) * 20;
  let q4 = getCappedValue("quiz4", 5) * 20;
  let q5 = getCappedValue("quiz5", 5) * 20;


  let q6 = getCappedValue("quiz6", 10) * 10;
  let q7 = getCappedValue("quiz7", 10) * 10;
  let q8 = getCappedValue("quiz8", 10) * 10;
  let q9 = getCappedValue("quiz9", 10) * 10;
  let q10 = getCappedValue("quiz10", 10) * 10;


  let allQuizzes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];


  allQuizzes.sort((a, b) => b - a);
  let top6Quizzes = allQuizzes.slice(0, 6);


  let sumTop6 = top6Quizzes.reduce((acc, curr) => acc + curr, 0);
  let averageQuizzes = sumTop6 / 6;
  let Q = averageQuizzes * 0.2;



  let semesterMark = T + Q;


  document.getElementById("result").innerText = semesterMark.toFixed(2) + "%";
}