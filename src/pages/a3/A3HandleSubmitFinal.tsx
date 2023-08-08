import { saveAs } from "file-saver";

export default function A3HandleSubmitFinal(
  graderName: string,
  graderNetID: string,
  studentName: string,
  studentNetID: string,
  part1_1: string,
  part1_2: string,
  part2_1: string,
  part2_2: string,
  part2_3: string,
  part3_1: string,
  part3_2: string,
  part4_1: string,
  part5_1: string,
  part5_2: string,
  extra_1: string,
  extra_2: string,
  extra_3: string,
  survey: boolean,
  helpers: boolean,
  crash: boolean,
  comments: string
) {
  const score1_1 = calculateScore(part1_1, 1);
  const score1_2 = calculateScore(part1_2, 1);
  const scorePart1 = score1_1 + score1_2;

  const score2_1 = calculateScore(part2_1, 1);
  const score2_2 = calculateScore(part2_2, 1);
  const score2_3 = calculateScore(part2_3, 1);
  const scorePart2 = score2_1 + score2_2 + score2_3;

  const score3_1 = calculateScore(part3_1, 2);
  const score3_2 = calculateScore(part3_2, 1);
  const scorePart3 = score3_1 + score3_2;

  const score4_1 = calculateScore(part4_1, 3);

  const score5_1 = calculateScore(part5_1, 1);
  const score5_2 = calculateScore(part5_2, 1);
  const scorePart5 = score5_1 + score5_2;

  const scoreSurvey = survey ? 1 : 0;
  const scoreHelpers = helpers ? 1 : 0;
  const subtotal =
    scorePart1 +
    scorePart2 +
    scorePart3 +
    score4_1 +
    scorePart5 +
    scoreSurvey +
    scoreHelpers;

  const scoreCrash = crash ? -1 : 0;
  const scoreExtra1 = calculateScore(extra_1, 1);
  const scoreExtra2 = calculateScore(extra_2, 1);
  const scoreExtra3 = calculateScore(extra_3, 1);

  const blob = new Blob(
    [
      `A3: ChatDev Final
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
\nPart III: Fetching Posts
\n - GET request to fetch posts: ${score3_1}/2
\n - Scroll to refresh (UIRefreshControl): ${score3_2}/1
\n Part III Total: ${scorePart3}/3
\n====================
\nPart IV: Creating a Post
\n - POST request to create a post: ${score4_1}/3
\n Part IV Total: ${score4_1}/3
\n====================
\nPart V: Liking a Post
\n - POST request to like a post: ${score5_1}/1
\n - ❤️ turns red if liked, # likes goes up: ${score5_2}/1
\n Part V Total: ${scorePart5}/2
\n====================
\nOTHER
\n- Feedback Survey: ${scoreSurvey}/1
\n- viewDidLoad calls helpers: ${scoreHelpers}/1
\n====================
\nSUBTOTAL: ${subtotal}/15
\n- EC1: POST Request to Unlike a Post: +${scoreExtra1}
\n- EC2: Sort by Top/New posts: +${scoreExtra2}
\n- EC3: Animation when liking a Post: +${scoreExtra3}
\n- Crash Tax: ${scoreCrash}
\nGRAND TOTAL: ${
        subtotal + scoreExtra1 + scoreExtra2 + scoreExtra3 + scoreCrash
      }/15
\n====================
\nCOMMENTS:
\n${comments}`,
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(blob, `${studentNetID}_a3_final.txt`);
}

function calculateScore(scoreString: string, maxScore: number) {
  // Partial score gives half of maxScore
  if (scoreString === "yes") return maxScore;
  if (scoreString === "no") return 0;
  if (scoreString === "partial") return Math.round((maxScore / 2) * 100) / 100;
  return 0;
}
