import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ServicesComponent = ({ title, description, icon: Icon }) => {
    return (
        <Card 
            elevation={3}
            sx={{
                maxWidth: 300,
                padding: 2,
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                }
            }}
            className="m-4"
        >
            <Box sx={{ display: 'flex', mb: 1, ms:3 }}>
                <Icon sx={{ fontSize: 60, color: 'primary.main' }} />
            </Box>
            <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom sx={{fontSize: "20px"}}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ServicesComponent;
