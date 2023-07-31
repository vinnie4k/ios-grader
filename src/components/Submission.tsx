import { Link, Stack, Typography } from "@mui/material";

export default function Submission() {
  return (
    <div>
      <Stack spacing="20px">
        <Stack spacing="4px">
          <Typography variant="h2" component="h2">
            Downloading the Submission
          </Typography>

          <Typography variant="subtitle2" component="p">
            Skip this step if you already know how to download submissions from
            CMS.
          </Typography>
        </Stack>

        <Stack spacing="8px">
          <Typography variant="body1" component="p" color="blue">
            1. Log in to{" "}
            <Link
              href="https://cmsx.cs.cornell.edu/web/guest/"
              color="blue.main"
            >
              CMS
            </Link>
            .
          </Typography>

          <Typography variant="body1" component="p">
            2. Navigate to{" "}
            <Typography color="ruby.main" component="span">
              CS 1998 S601
            </Typography>
            .
          </Typography>

          <Typography variant="body1" component="p">
            3. On the Home page, click on{" "}
            <Typography color="ruby.main" component="span">
              groups
            </Typography>{" "}
            next to the assignment name.
          </Typography>

          <Typography variant="body1" component="p">
            4. Click on{" "}
            <Typography color="ruby.main" component="span">
              Show Assigned To
            </Typography>{" "}
            if you cannot see the{" "}
            <Typography color="ruby.main" component="span">
              Assigned To
            </Typography>{" "}
            section.
          </Typography>

          <Typography variant="body1" component="p">
            5. Look for the submission assigned to you and click on{" "}
            <Typography color="ruby.main" component="span">
              Files
            </Typography>{" "}
            on the right to download the submission. You could also select
            multiple submissions at once and click on{" "}
            <Typography color="ruby.main" component="span">
              Files
            </Typography>{" "}
            underneath{" "}
            <Typography color="ruby.main" component="span">
              Select Group Operations:
            </Typography>{" "}
            at the top to download multiple submissions.
          </Typography>

          <Typography variant="body1" component="p">
            6. Clone the repository. The submission TXT file should contain a
            GitHub link. If not, you can find it through the course’s GitHub.
            Make sure to clone via SSH!
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
}
