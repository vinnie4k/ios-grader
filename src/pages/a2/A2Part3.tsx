import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A2Part3(prop: Part3Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part III: Create the Edit Profile Page
          </Typography>
          <Typography variant="subtitle2" component="p">
            We only care about the UI for this part.
          </Typography>
        </Stack>

        <Stack direction="row" spacing="48px" alignItems="end">
          <Typography variant="h5" component="h5" paddingRight="16px">
            Yes
          </Typography>
          <Typography variant="h5" component="h5">
            No
          </Typography>
          <Typography variant="h5" component="h5">
            Partial
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing="12px">
        <YesNoPartial
          name="Profile Image"
          hasPartial={true}
          selected={prop.part3_1}
          setSelected={prop.setPart3_1}
        />
        <YesNoPartial
          name="Name and Bio"
          hasPartial={true}
          selected={prop.part3_2}
          setSelected={prop.setPart3_2}
        />
        <YesNoPartial
          name="Hometown, School, Major, Fav App"
          hasPartial={true}
          selected={prop.part3_3}
          setSelected={prop.setPart3_3}
        />
      </Stack>
    </Stack>
  );
}

interface Part3Prop {
  part3_1: string;
  part3_2: string;
  part3_3: string;
  setPart3_1: React.Dispatch<React.SetStateAction<string>>;
  setPart3_2: React.Dispatch<React.SetStateAction<string>>;
  setPart3_3: React.Dispatch<React.SetStateAction<string>>;
}
