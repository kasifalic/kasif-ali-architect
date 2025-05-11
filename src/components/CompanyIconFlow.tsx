import React from 'react';
import BrandMarquee from './BrandMarquee';

const CompanyIconFlow = () => {
  // Focused list of brands with recognizable logos
  const brandGroups = [
    // First row - Cloud & Major Tech
    [
      'AWS', 'Microsoft', 'Google', 'IBM', 'Oracle', 'Salesforce', 'Adobe', 'SAP'
    ],
    // Second row - Infrastructure & Security
    [
      'Cisco', 'VMware', 'Dell', 'HP', 'Intel', 'Fortinet', 'Palo Alto', 'Red Hat'
    ],
    // Third row - Tools & Platforms
    [
      'GitHub', 'Atlassian', 'Slack', 'Docker', 'Kubernetes', 'MongoDB', 'Elastic', 'Splunk'
    ]
  ];

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Gradient fade on sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80 z-10 pointer-events-none"></div>
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-tahoma font-bold">Trusted by Industry Leaders</h3>
        <p className="text-muted-foreground mt-2">Technologies I've worked with throughout my career</p>
      </div>
      
      <div className="space-y-8">
        <BrandMarquee 
          brands={brandGroups[0]} 
          speed={25} 
          direction="left" 
        />
        
        <BrandMarquee 
          brands={brandGroups[1]} 
          speed={30} 
          direction="right" 
        />
        
        <BrandMarquee 
          brands={brandGroups[2]} 
          speed={20} 
          direction="left" 
        />
      </div>
      
      <div className="flex justify-center mt-8">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
          <span>And many more...</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyIconFlow;
