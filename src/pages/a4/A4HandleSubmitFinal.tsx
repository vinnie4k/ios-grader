import { saveAs } from "file-saver";

export default function A4HandleSubmitFinal(
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
  part4_1: string,
  part5_1: string,
  part5_2: string,
  part5_3: string,
  extra_1: string,
  extra_2: string,
  extra_3: string,
  extra_4: string,
  survey: boolean,
  crash: boolean,
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

  const score4_1 = calculateScore(part4_1, 2);

  const score5_1 = calculateScore(part5_1, 1);
  const score5_2 = calculateScore(part5_2, 1);
  const score5_3 = calculateScore(part5_3, 1);
  const scorePart5 = score5_1 + score5_2 + score5_3;

  const scoreSurvey = survey ? 1 : 0;
  const subtotal =
    scorePart1 + scorePart2 + scorePart3 + score4_1 + scorePart5 + scoreSurvey;
  const scoreCrash = crash ? -1 : 0;
  const scoreExtra1 = calculateScore(extra_1, 1);
  const scoreExtra2 = calculateScore(extra_2, 1);
  const scoreExtra3 = calculateScore(extra_3, 1);
  const scoreExtra4 = calculateScore(extra_4, 2);

  const blob = new Blob(
    [
      `A4: ChefOS Final
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
\nPart IV: Fetching Recipes
\n - GET request to fetch all recipes: ${score4_1}/2
\n Part IV Total: ${score4_1}/2
\n====================
\nPart V: Bookmark Recipes
\n - Saved recipes have a filled bookmark icon: ${score5_1}/1
\n - Bookmarking updates CollectionView using delegation: ${score5_2}/1
\n - Saved recipes are stored locally via UserDefaults: ${score5_3}/1
\n Part V Total: ${scorePart5}/3
\n====================
\nOTHER
\n- Feedback Survey: ${scoreSurvey}/1
\n====================
\nSUBTOTAL: ${subtotal}/15
\n- EC1: Custom back button: +${scoreExtra1}
\n- EC2: Stacking filters: +${scoreExtra2}
\n- EC3: Nesting collection views: +${scoreExtra3}
\n- EC4: Separate bookmark page: +${scoreExtra4}
\n- Crash Tax: ${scoreCrash}
\nGRAND TOTAL: ${
        subtotal +
        scoreExtra1 +
        scoreExtra2 +
        scoreExtra3 +
        scoreExtra4 +
        scoreCrash
      }/15
\n====================
\nCOMMENTS:
\n${comments}`,
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(blob, `${studentNetID}_a4_final.txt`);
}

function calculateScore(scoreString: string, maxScore: number) {
  // Partial score gives half of maxScore
  if (scoreString === "yes") return maxScore;
  if (scoreString === "no") return 0;
  if (scoreString === "partial") return Math.round((maxScore / 2) * 100) / 100;
  return 0;
}
