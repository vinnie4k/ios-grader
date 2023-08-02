import { saveAs } from "file-saver";

export default function A3HandleSubmitMidpoint(
  graderName: string,
  graderNetID: string,
  studentName: string,
  studentNetID: string,
  part1_1: string,
  part1_2: string,
  part2_1: string,
  part2_2: string,
  part2_3: string,
  comments: string
) {
  const score1_1 = calculateScore(part1_1, 1);
  const score1_2 = calculateScore(part1_2, 1);
  const scorePart1 = score1_1 + score1_2;

  const score2_1 = calculateScore(part2_1, 1);
  const score2_2 = calculateScore(part2_2, 1);
  const score2_3 = calculateScore(part2_3, 1);
  const scorePart2 = score2_1 + score2_2 + score2_3;

  const blob = new Blob(
    [
      `A3: ChatDev Midpoint
\nGrader: ${graderName} (${graderNetID})
\nStudent: ${studentName} (${studentNetID})
\n====================
\nPart I: Creating the UICollectionViewCell
\n - Header (name, date, image): ${score1_1}/1
\n - Message Body, Like Button, # Likes: ${score1_2}/1
\n Part I Total: ${scorePart1}/2
\n====================
\nPart II: Creating the UICollectionView
\n - Multiple sections: ${score2_1}/1
\n - Dynamic number of items/cells: ${score2_2}/1
\n - Each cell is unique and represents a different Post: ${score2_3}/1
\n Part II Total: ${scorePart2}/3
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
  saveAs(blob, `${studentNetID}_a3_midpoint.txt`);
}

function calculateScore(scoreString: string, maxScore: number) {
  // Partial score gives half of maxScore
  if (scoreString === "yes") return maxScore;
  if (scoreString === "no") return 0;
  if (scoreString === "partial") return Math.round((maxScore / 2) * 100) / 100;
  return 0;
}
