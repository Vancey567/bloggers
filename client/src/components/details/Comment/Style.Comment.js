import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

export const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

export const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

export const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

export const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

export const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;