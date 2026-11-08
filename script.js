const PASS_MARK = 50;
const MIN_ATTENDANCE = 75;

function getGradeLetter(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    if (average >= PASS_MARK) return "E";
    return "F";
}

function getFinalResult(average, attendance) {
    if (average >= PASS_MARK && attendance >= MIN_ATTENDANCE) {
        return "ناجح (Pass)";
    } else {
        return "يحتاج مراجعة (Needs Review)";
    }
}

document.getElementById("analyzeBtn").addEventListener("click", function() {

    const rawG1 = document.getElementById("grade1").value.trim();
    const rawG2 = document.getElementById("grade2").value.trim();
    const rawG3 = document.getElementById("grade3").value.trim();
    const rawAtt = document.getElementById("attendance").value.trim();

    const reportBox = document.getElementById("reportBox");

    if (rawG1 === "" || rawG2 === "" || rawG3 === "" || rawAtt === "") {
        reportBox.style.display = "block";
        reportBox.innerHTML = `
            <p style="color:red; font-weight:bold;">
                خطأ: الرجاء إدخال جميع الدرجات وعدم ترك أي حقل فارغ.
            </p>`;
        return;
    }

    const g1 = Number(rawG1);
    const g2 = Number(rawG2);
    const g3 = Number(rawG3);
    const att = Number(rawAtt);

    const grades = [g1, g2, g3];

    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    const average = total / grades.length;

    const letter = getGradeLetter(average);
    const result = getFinalResult(average, att);

    reportBox.style.display = "block";

    reportBox.innerHTML = `
        <h4>تقرير الطالب:</h4>
        <p>إجمالي الدرجات: <strong>${total}</strong></p>
        <p>المتوسط: <strong>${average.toFixed(1)}</strong></p>
        <p>التقدير: <strong>${letter}</strong></p>
        <p>الحالة: <strong>${result}</strong></p>
    `;
});