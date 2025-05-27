import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from '@mui/joy';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function PricingCard({ type, title, description, price, isPopular = false }) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 'lg',
        },
      }}
    >
      <Card
        size="lg"
        variant="outlined"
        sx={{
          borderWidth: isPopular ? 2 : 1,
          borderColor: isPopular ? 'primary.outlinedBorder' : 'neutral.outlinedBorder',
          boxShadow: isPopular ? 'lg' : 'sm',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {isPopular && (
          <Chip
            color="primary"
            size="sm"
            variant="solid"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Best Value
          </Chip>
        )}

        <Typography
          level="body-sm"
          textTransform="uppercase"
          fontWeight="md"
          color="text.secondary"
          mt={isPopular ? 3 : 0}
        >
          {type}
        </Typography>

        <Typography
          level="h3"
          fontWeight="xl"
          mt={0.5}
          mb={1}
          sx={{
            fontSize: '1.5rem',
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Divider inset="none" sx={{ my: 1 }} />

        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))', mb: 2 }}>
          {description.map((item, i) => (
            <ListItem key={i}>
              <ListItemDecorator>
                <Check sx={{ fontSize: '1.2rem', color: 'success.600' }} />
              </ListItemDecorator>
              <Typography level="body-sm" color="text.primary">
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>

        <Divider inset="none" />

        <CardActions sx={{ mt: 1 }}>
          <Box>
            <Typography
              level="title-lg"
              fontWeight="xl"
              sx={{ fontSize: '1.8rem' }}
            >
              ₹{price}
            </Typography>
            <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
              One-time payment
            </Typography>
          </Box>
          <Button
            variant={isPopular ? 'solid' : 'soft'}
            color={isPopular ? 'primary' : 'neutral'}
            endDecorator={<KeyboardArrowRight />}
            sx={{ fontWeight: 600 }}
          >
            Book Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
