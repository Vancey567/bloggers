import { Box } from '@mui/material';
import {Container, Image, Text, Heading, Details, Category } from './Style.Post';


const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://unsplash.com/photos/WiONHd_zYI4';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container key={post.id}>
            <Image src={url} alt="post"/>
            <Category>
                <Box>
                    <Text>Category: {post.categories}</Text>
                </Box>
                <Box>
                    <Text>Author: {post.username}</Text>
                </Box>
            </Category>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;