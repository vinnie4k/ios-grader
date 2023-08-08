import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A4Part5(prop: Part5Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part V: Bookmark Recipes
          </Typography>
          <Typography variant="subtitle2" component="p">
            Restart app to check for persistence.
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
          name="Saved recipes have a filled bookmark icon"
          hasPartial={true}
          selected={prop.part5_1}
          setSelected={prop.setPart5_1}
        />
        <YesNoPartial
          name="Bookmarking updates CollectionView using delegation"
          hasPartial={true}
          selected={prop.part5_2}
          setSelected={prop.setPart5_2}
        />
        <YesNoPartial
          name="Saved recipes are stored locally via UserDefaults"
          hasPartial={true}
          selected={prop.part5_3}
          setSelected={prop.setPart5_3}
        />
      </Stack>
    </Stack>
  );
}

interface Part5Prop {
  part5_1: string;
  part5_2: string;
  part5_3: string;
  setPart5_1: React.Dispatch<React.SetStateAction<string>>;
  setPart5_2: React.Dispatch<React.SetStateAction<string>>;
  setPart5_3: React.Dispatch<React.SetStateAction<string>>;
}
