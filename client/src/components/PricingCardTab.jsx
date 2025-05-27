import React from 'react';
import PricingCard from '../components/PricingCard';

const PricingCardTab = () => {
  return (
    <div className="w-full px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Highlighted Mid Card - Most Popular */}
      <PricingCard
        type="Standard"
        title="Personal Dev Coaching"
        description={[
          "Weekly check-ins",
          "Project tracking",
          "Code reviews + progress map",
        ]}
        price={2999}
        isPopular={true}
      />

      {/* Pair Programming */}
      <PricingCard
        type="Pro"
        title="Pair Programming"
        description={[
          "Live coding sessions",
          "Build & debug together",
          "Work on real projects",
        ]}
        price={1999}
      />

      {/* Career Roadmap */}
      <PricingCard
        type="Plus"
        title="Career Roadmap Session"
        description={[
          "Custom roadmap (MERN, Freelance, etc.)",
          "Tech stack strategy",
          "Actionable milestones",
        ]}
        price={1499}
      />

      {/* Freelancing Kickstart */}
      <PricingCard
        type="Premium"
        title="Freelancing Kickstart"
        description={[
          "Find first client",
          "Proposal + communication strategy",
          "First delivery roadmap",
        ]}
        price={2499}
      />

      {/* Clarity Call */}
      <PricingCard
        type="Basic"
        title="1:1 Clarity Call"
        description={[
          "60-minute call",
          "Ask any dev-related questions",
          "Get unstuck in your journey",
        ]}
        price={999}
      />

      {/* Portfolio & Resume Review */}
      <PricingCard
        type="Review"
        title="Portfolio & Resume Review"
        description={[
          "Feedback on GitHub & resume",
          "Website UI/UX suggestions",
          "Tips to stand out",
        ]}
        price={799}
      />
    </div>
  );
};

export default PricingCardTab;
