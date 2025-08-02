import { CardItem } from "@/components/CardItem";
import styles from "../page.module.css";

const CompanyDetails = () => {
  return (
    <div className={`${styles.companyDetails}`}>
      <CardItem
        icon="octicon:goal-16"
        title="Our Goals"
        iconSize={"5rem"}
        content="To be a Spark that help a child dream big"
      />
      <CardItem
        icon="token:future"
        title="Our Vision"
        iconSize={"5rem"}
        content="To contribute our quota in helping to raise a generation that are responsible to themselves, their family, society, country, and the world."
      />
    </div>
  );
};

export default CompanyDetails;
