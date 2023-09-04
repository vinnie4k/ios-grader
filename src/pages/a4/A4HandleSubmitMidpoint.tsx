import { saveAs } from "file-saver";

export default function A4HandleSubmitMidpoint(
  graderName: string,
  graderNetID: string,
  studentName: string,
  studentNetID: string,
  part1_1: string,
  part1_2: string,
  part1_3: string,
  part2_1: string,
  part2_2: string,
  part2_3: string,
  part3_1: string,
  part3_2: string,
  part3_3: string,
  comments: string
) {
  const score1_1 = calculateScore(part1_1, 1);
  const score1_2 = calculateScore(part1_2, 1);
  const score1_3 = calculateScore(part1_3, 1);
  const scorePart1 = score1_1 + score1_2 + score1_3;

  const score2_1 = calculateScore(part2_1, 1);
  const score2_2 = calculateScore(part2_2, 1);
  const score2_3 = calculateScore(part2_3, 1);
  const scorePart2 = score2_1 + score2_2 + score2_3;

  const score3_1 = calculateScore(part3_1, 1);
  const score3_2 = calculateScore(part3_2, 1);
  const score3_3 = calculateScore(part3_3, 1);
  const scorePart3 = score3_1 + score3_2 + score3_3;

  const blob = new Blob(
    [
      `A4: ChefOS Midpoint
\nGrader: ${graderName} (${graderNetID})
\nStudent: ${studentName} (${studentNetID})
\n====================
\nPart I: Recipe CollectionView
\n - Cell contains Image, Name, Rating, and Difficulty: ${score1_1}/1
\n - There are 2 columns and a dynamic # of cells: ${score1_2}/1
\n - Each cell is unique and represents a different recipe: ${score1_3}/1
\n Part I Total: ${scorePart1}/3
\n====================
\nPart II: Detailed Recipe View
\n - Image: ${score2_1}/1
\n - Name and Description: ${score2_2}/1
\n - Tapping on each recipe cell pushes its own detailed view: ${score2_3}/1
\n Part II Total: ${scorePart2}/3
\n====================
\nPart III: Filtering
\n - Filters can scroll horizontally: ${score3_1}/1
\n - Selected filters are highlighted: ${score3_2}/1
\n - Tapping on each filter filters by difficulty: ${score3_3}/1
\n Part III Total: ${scorePart3}/3
\n====================
\n You will receive a 5/5 on CMS for submitting this on time.
\n====================
\nCOMMENTS:
\n${comments}`,
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(blob, `${studentNetID}_a4_midpoint.txt`);
}

function calculateScore(scoreString: string, maxScore: number) {
  // Partial score gives half of maxScore
  if (scoreString === "yes") return maxScore;
  if (scoreString === "no") return 0;
  if (scoreString === "partial") return Math.round((maxScore / 2) * 100) / 100;
  return 0;
}
