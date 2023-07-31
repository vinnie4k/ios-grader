import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A3Part4(prop: Part4Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part IV: Creating a Post
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
          name="POST request to create a post"
          hasPartial={true}
          selected={prop.part4_1}
          setSelected={prop.setPart4_1}
        />
      </Stack>
    </Stack>
  );
}

interface Part4Prop {
  part4_1: string;
  setPart4_1: React.Dispatch<React.SetStateAction<string>>;
}
