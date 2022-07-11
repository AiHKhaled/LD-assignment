import { FC } from "react";
import ParentCard from "../cards/Card";
import Configure from "../cards/Configure";
import Orders from "../cards/Orders";
import Visitors from "../cards/Visitors";

const Dashboard: FC = () => {
  return (
    <div>
      <ParentCard />
      <Visitors />
      <Orders />
      <Configure />
    </div>
  );
};

export default Dashboard;
