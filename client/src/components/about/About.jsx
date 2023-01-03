
import { Box, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

import {Banner, Wrapper, Text} from './Style.About'

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Hello There, I'm Jay Mishra</Typography>
                <Text variant="h5">As a final year undergraduate student in B-Tech IT and an aspiring software engineer based in India, 
                    I have gained a lot of experience in web development. I have built many websites, and if you are interested, you can view some of my favorite projects by following me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/vancey567" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                    <br />
                    <br />
                    I am constantly looking for ways to improve my skills and stay up-to-date with industry trends, and I am excited to see where my career as a software engineer takes me.
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://linkedin.com/in/jay-mishra-4a15b01a9" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:jayisatwork1@gmail.com?Subject=Reaching via your blog" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;