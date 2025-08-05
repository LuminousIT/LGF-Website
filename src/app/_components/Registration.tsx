import styles from "../page.module.css";

export const Registration = ({}) => {
  return (
    <div className={`${styles.projectsContainer}`}>
      {/* <Icon icon={icon} fontSize={iconSize} /> */}

      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdjhuYu20QoaGQUxHTJsvO7ePRj2UccessV4KclruQCCXUiSg/viewform?embedded=true"
          width="640"
          height="1375"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
