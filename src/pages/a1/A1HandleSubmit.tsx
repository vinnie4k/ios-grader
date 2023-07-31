import { saveAs } from "file-saver";

export default function A1HandleSubmit(
  graderName: string,
  graderNetID: string,
  studentName: string,
  studentNetID: string,
  todo1: string,
  todo2: string,
  todo3: string,
  todo4: string,
  todo5: string,
  todo6: string,
  todo7: string,
  todo8: string,
  todo9: string,
  survey: boolean,
  crash: boolean,
  comments: string
) {
  const score1 = Math.round((Number(todo1) / 2) * 100) / 100;
  const score2 = Math.round((Number(todo2) / 1) * 100) / 100;
  const score3 = Math.round((Number(todo3) / 4) * 100) / 100;
  const score4 = Math.round((Number(todo4) / 4) * 100) / 100;
  const score5 = Math.round((Number(todo5) / 4) * 100) / 100;
  const score6 = Math.round((Number(todo6) / 6) * 100) / 100;
  const score7 = Math.round((Number(todo7) / 4) * 100) / 100;
  const score8 = Math.round((Number(todo8) / 6) * 100) / 100;
  const score9 = Math.round((Number(todo9) / 6) * 100) / 100;
  const scoreSurvey = survey ? 1 : 0;
  const scoreCrash = crash ? -1 : 0;
  const subtotal =
    score1 +
    score2 +
    score3 +
    score4 +
    score5 +
    score6 +
    score7 +
    score8 +
    score9 +
    scoreSurvey;

  const blob = new Blob(
    [
      `A1: Swift Basics
\nGrader: ${graderName} (${graderNetID})
\nStudent: ${studentName} (${studentNetID})
\n====================
\nScores are based on the number of passed test cases.
\n1. introduce: ${todo1}/2 = ${score1}
\n2. getStudentInfo: ${todo2}/1 = ${score2}
\n3. countEvens: ${todo3}/4 = ${score3}
\n4. capitalizeStrings: ${todo4}/4 = ${score4}
\n5. repeatString: ${todo5}/4 = ${score5}
\n6. countWords: ${todo6}/6 = ${score6}
\n7. containsNum: ${todo7}/4 = ${score7}
\n8. uppercaseLead: ${todo8}/6 = ${score8}
\n9. filterImposter: ${todo9}/6 = ${score9}
\nFeedback Survey: ${scoreSurvey}/1
\n====================
\nSUBTOTAL: ${subtotal}/10
\n- Crash Tax: ${scoreCrash}
\nGRAND TOTAL: ${subtotal + scoreCrash}/10
\n====================
\nCOMMENTS:
\n${comments}`,
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(blob, `${studentNetID}_a1.txt`);
}
