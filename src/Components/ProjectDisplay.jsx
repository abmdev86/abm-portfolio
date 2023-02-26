import { Typography } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

export default function ProjectDisplay({ title, description, src, url }) {
  return (
    <ImageListItem>
      <Typography
        variant="h6"
        align="center"
        component="a"
        href={url}
        sx={{
          fontWeight: 700,
          textDecoration: "none",
          color: "inherit",
          letterSpacing: 1,
        }}
      >
        {title}
      </Typography>
      <img
        className="projects-display--image"
        src={`${src}?w=161&fit=crop&auto=format`}
        alt={`${title}'s thumbnail`}
        loading="lazy"
      />
    </ImageListItem>
  );
}
