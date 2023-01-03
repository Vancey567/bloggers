import { Box, Typography, Link } from '@mui/material';
import { LinkedIn, Email } from '@mui/icons-material';
import {Banner, Wrapper, Text} from './Style.Contact';

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Wanna Talk!</Typography>
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://linkedin.com/in/jay-mishra-4a15b01a9" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:jayisatwork1@gmail.com?Subject=Reaching via your blog" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;