document.addEventListener('DOMContentLoaded', function () {
    const aboutMeContent = document.querySelector('.about-me-content');
    const myDreamContent = document.querySelector('.my-dream-content');
    const myJourneyContent = document.querySelector('.my-journey-content');
    const sections = [aboutMeContent, myDreamContent, myJourneyContent];
    const padding = 20;
  
    function setContentHeight(section, padding) {
      if (section.style.height === '90px' || section.style.height === '') {
        section.style.height = `${section.scrollHeight + padding}px`;
      } else {
        section.style.height = '90px';
      }
    }
  
    function expandSectionOnClick(section, padding) {
      section.addEventListener('click', () => {
        setContentHeight(section, padding);
      });
    }
  
    sections.forEach((section) => expandSectionOnClick(section, padding));
  });
  