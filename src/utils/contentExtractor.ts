
/**
 * Extracts text content from the website based on section IDs
 * @returns {string} The extracted content from the website
 */
export const extractSiteContent = (): string => {
  const sections = [
    "about",
    "skills",
    "experience",
    "services",
    "articles",
    "contact"
  ];
  
  let extractedContent = "";
  
  // Extract content from each section
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section heading
      const heading = section.querySelector("h2")?.textContent || sectionId.toUpperCase();
      extractedContent += `SECTION: ${heading}\n`;
      
      // Get all text elements within the section
      const textElements = section.querySelectorAll("p, h3, h4, li, .text-content");
      textElements.forEach(element => {
        const text = element.textContent?.trim();
        if (text && text.length > 10) { // Only include substantial text
          extractedContent += `${text}\n`;
        }
      });
      
      extractedContent += "\n\n";
    }
  });
  
  return extractedContent;
};
