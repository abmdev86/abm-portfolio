import { Paper, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Paper elevation={3} sx={{ m: { xs: 2, md: 5 }, p: 4 }}>
      <Typography variant="h4" align="center">About Me:</Typography>

      <Typography variant="body1" align="center" paragraph sx={{ letterSpacing: 1, lineHeight: 2, p: 3, fontWeight: 700, align: 'center' }} >
        Fullstack software engineer, with an interest in JavaScript, React and
        mobile development. Adept at various frameworks and CMS including React,
        Nextjs, WordPress as well as experience with Apache servers, PHP, SQL,
        and no-SQL l databases, and hosting on AWS, Azure and Firebase. I enjoy
        providing solutions for the challenges businesses face to generate
        profit, keep clients happy and stay in touch with the latest tools and
        technologies along with exemplary support, following best practices and
        being proactive in learning.
      </Typography>
    </Paper>
  );
}
