import { saveAs } from "file-saver";

export default function A2HandleSubmit(
  graderName: string,
  graderNetID: string,
  studentName: string,
  studentNetID: string,
  part1_1: string,
  part1_2: string,
  part1_3: string,
  part2_1: string,
  part2_2: string,
  part3_1: string,
  part3_2: string,
  part3_3: string,
  part4_1: string,
  part4_2: string,
  part5_1: string,
  extra_1: string,
  extra_2: string,
  survey: boolean,
  helpers: boolean,
  crash: boolean,
  comments: string
) {
  const score1_1 = calculateScore(part1_1, 1);
  const score1_2 = calculateScore(part1_2, 1);
  const score1_3 = calculateScore(part1_3, 1);
  const scorePart1 = score1_1 + score1_2 + score1_3;

  const score2_1 = calculateScore(part2_1, 1);
  const score2_2 = calculateScore(part2_2, 1);
  const scorePart2 = score2_1 + score2_2;

  const score3_1 = calculateScore(part3_1, 1);
  const score3_2 = calculateScore(part3_2, 1);
  const score3_3 = calculateScore(part3_3, 1);
  const scorePart3 = score3_1 + score3_2 + score3_3;

  const score4_1 = calculateScore(part4_1, 1);
  const score4_2 = calculateScore(part4_2, 1);
  const scorePart4 = score4_1 + score4_2;

  const score5_1 = calculateScore(part5_1, 3);

  const scoreSurvey = survey ? 1 : 0;
  const scoreHelpers = helpers ? 1 : 0;
  const subtotal =
    scorePart1 +
    scorePart2 +
    scorePart3 +
    scorePart4 +
    score5_1 +
    scoreSurvey +
    scoreHelpers;

  const scoreCrash = crash ? -1 : 0;
  const scoreExtra1 = calculateScore(extra_1, 1);
  const scoreExtra2 = calculateScore(extra_2, 1);

  const blob = new Blob(
    [
      `A2: Profile
\nGrader: ${graderName} (${graderNetID})
\nStudent: ${studentName} (${studentNetID})
\n====================
\nPart I: Creating the Profile Page
\n - Profile Image: ${score1_1}/1
\n - Name, Bio: ${score1_2}/1
\n - Hometown and Major: ${score1_3}/1
\n Part I Total: ${scorePart1}/3
\n====================
\nPart II: Push the Edit Profile Page
\n - Edit Profile Button: ${score2_1}/1
\n - Pushes EditProfileVC: ${score2_2}/1
\n Part II Total: ${scorePart2}/2
\n====================
\nPart III: Create the Edit Profile Page
\n - Profile Image: ${score3_1}/1
\n - Name, Bio: ${score3_2}/1
\n - Hometown and Major: ${score3_3}/1
\n Part III Total: ${scorePart3}/3
\n====================
\nPart IV: Pop the Edit Profile Page
\n - Save Button: ${score4_1}/1
\n - Pops EditProfileVC: ${score4_2}/1
\n Part IV Total: ${scorePart4}/2
\n====================
\nPart V: Delegation
\n - Clicking on Save updates main profile: ${score5_1}/3
\n Part V Total: ${score5_1}/3
\n====================
\nOTHER
\n- Feedback Survey: ${scoreSurvey}/1
\n- viewDidLoad calls helpers: ${scoreHelpers}/1
\n====================
\nSUBTOTAL: ${subtotal}/15
\n- EC1: Custom back button: +${scoreExtra1}
\n- EC2: Edit profile picture: +${scoreExtra2}
\n- Crash Tax: ${scoreCrash}
\nGRAND TOTAL: ${subtotal + scoreExtra1 + scoreExtra2 + scoreCrash}/15
\n====================
\nCOMMENTS:
\n${comments}`,
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(blob, `${studentNetID}_a2.txt`);
}

function calculateScore(scoreString: string, maxScore: number) {
  // Partial score gives half of maxScore
  if (scoreString === "yes") return maxScore;
  if (scoreString === "no") return 0;
  if (scoreString === "partial") return Math.round((maxScore / 2) * 100) / 100;
  return 0;
}
