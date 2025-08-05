import { archivoBlack } from "@/components/Fonts";
import styles from "../page.module.css";
import { ProjectItem } from "@/components/ProjectItem";

export const Projects = () => {
  return (
    <div className={`${styles.projectsContainer}`}>
      <h2 className={archivoBlack.className}>Our Initiatives</h2>
      <div>
        <ProjectItem
          title="NextGen SolutionCrafts Challenge"
          icon="mdi:alpha"
          iconSize={"8rem"}
          content="The project aims to encourage teenagers to identify pressing societal problems and develop creative solutions to them using Arts or/and Technology. Teams of 2-4 participants (maximum age 18) will research, design, and present their solutions in a competitive format that celebrates both creativity and problem-solving. The results will be presented and assessed by judges with the top 3 presentations rewarded with a cash gift of 50,000 naira, 30,000 and 20,000 respectively.
 "
          action={
            <div className="project-item-anchor">
              <a href="https://forms.gle/5s6YFPPLbXL34xZ28" target="_blank">
                Register Now
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
};
