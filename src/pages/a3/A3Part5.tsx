import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A3Part5(prop: Part5Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part V: Liking a Post{" "}
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
          name="POST request to like a post"
          hasPartial={true}
          selected={prop.part5_1}
          setSelected={prop.setPart5_1}
        />
        <YesNoPartial
          name="❤️ turns red if liked, # likes goes up"
          hasPartial={true}
          selected={prop.part5_2}
          setSelected={prop.setPart5_2}
        />
      </Stack>
    </Stack>
  );
}

interface Part5Prop {
  part5_1: string;
  part5_2: string;
  setPart5_1: React.Dispatch<React.SetStateAction<string>>;
  setPart5_2: React.Dispatch<React.SetStateAction<string>>;
}
