import { RequisitesItem } from "../RequisitesItem/RequisitesItem";
import { ReqList } from "./RequisitesList.styled";
const RequisitesList = ({ requisites }) => {
  return (
    <ReqList>
      {requisites.map(({ id, attributes: { Name, number } }) => {
        return <RequisitesItem key={id} name={Name} number={number} id={id} />;
      })}
    </ReqList>
  );
};

export default RequisitesList;
