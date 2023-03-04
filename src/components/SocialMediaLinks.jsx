import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import { Box } from '@mui/system';


const AppLink = ({ href, children }) => (
    <Link sx={{ color: 'inherit', m: 1, }} href={href}>
        {children}

    </Link>
)

export default function SocialMediaLinks() {


    return (
        <Box sx={{ flexGrow: 0, p: 1 }}>
            <AppLink href="https://twitter.com/abm_dev">
                <TwitterIcon />

            </AppLink>
            <AppLink href="https://www.linkedin.com/in/auroiahmorgan/">
                <LinkedInIcon />

            </AppLink>
            <AppLink href="https://github.com/abmdev86">
                <GitHubIcon />

            </AppLink>
        </Box>
    )
}