import { Button, Table, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;
    
export const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
    
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

// export const StyledLink = styled('a')({
//     cursor: 'pointer',
//     textDecoration: "none",
//     color: "inherit",
// })