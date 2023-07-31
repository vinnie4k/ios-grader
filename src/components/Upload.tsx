import { Link, Stack, Typography } from "@mui/material";

export default function Upload() {
  return (
    <div>
      <Stack spacing="20px">
        <Stack spacing="4px">
          <Typography variant="h2" component="h2">
            Upload to CMS
          </Typography>

          <Typography variant="subtitle2" component="p">
            Ignore this if you already know how to upload to CMS.
          </Typography>
        </Stack>

        <Stack spacing="8px">
          <Typography variant="body1" component="p">
            1. Double check the feedback file for any mistakes.
          </Typography>

          <Typography variant="body1" component="p" color="blue">
            2. Log in to{" "}
            <Link
              href="https://cmsx.cs.cornell.edu/web/guest/"
              color="blue.main"
            >
              CMS
            </Link>
            .
          </Typography>

          <Typography variant="body1" component="p">
            3. Navigate to{" "}
            <Typography color="ruby.main" component="span">
              CS 1998 S601
            </Typography>
            .
          </Typography>

          <Typography variant="body1" component="p">
            4. On the Home page, click on{" "}
            <Typography color="ruby.main" component="span">
              groups
            </Typography>{" "}
            next to the assignment name.
          </Typography>

          <Typography variant="body1" component="p">
            5. Look for the student and click on{" "}
            <Typography color="ruby.main" component="span">
              Grade
            </Typography>{" "}
            in the rightmost column.
          </Typography>

          <Typography variant="body1" component="p">
            6. Input the GRAND TOTAL grade from the feedback file under{" "}
            <Typography color="ruby.main" component="span">
              Score
            </Typography>
            .
          </Typography>

          <Typography variant="body1" component="p">
            7. Click on{" "}
            <Typography color="ruby.main" component="span">
              Choose File
            </Typography>{" "}
            to upload the feedback file.
          </Typography>

          <Typography variant="body1" component="p">
            8. When everything is done, click on{" "}
            <Typography color="ruby.main" component="span">
              Update
            </Typography>
            .
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
}
