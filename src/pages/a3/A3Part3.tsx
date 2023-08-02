import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A3Part3(prop: Part3Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part III: Fetching Posts
          </Typography>
          <Typography variant="subtitle2" component="p">
            If attempted but not functioning, select Partial.
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
          name="GET request to fetch posts"
          hasPartial={true}
          selected={prop.part3_1}
          setSelected={prop.setPart3_1}
        />
        <YesNoPartial
          name="Scroll to refresh (UIRefreshControl)"
          hasPartial={true}
          selected={prop.part3_2}
          setSelected={prop.setPart3_2}
        />
      </Stack>
    </Stack>
  );
}

interface Part3Prop {
  part3_1: string;
  part3_2: string;
  setPart3_1: React.Dispatch<React.SetStateAction<string>>;
  setPart3_2: React.Dispatch<React.SetStateAction<string>>;
}
