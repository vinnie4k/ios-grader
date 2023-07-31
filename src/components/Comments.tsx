import { TextField } from "@mui/material";

export default function Comments(prop: CommentProp) {
  return (
    <TextField
      placeholder="Any additional comments?"
      variant="outlined"
      fullWidth={true}
      multiline
      value={prop.comments}
      onChange={(event) => {
        prop.setComments(event.target.value);
      }}
    />
  );
}

interface CommentProp {
  comments: string;
  setComments: React.Dispatch<React.SetStateAction<string>>;
}
