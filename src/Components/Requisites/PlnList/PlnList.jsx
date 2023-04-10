import { RequisitesItem } from "../RequisitesItem/RequisitesItem";
import { PlnsList, CaptionText } from "./PlnList.styled";

const PlnList = ({ requisites }) => {
  return (
    <>
      <CaptionText variant="h3">PLN</CaptionText>
      <PlnsList>
        {requisites.map(({ id, attributes: { name, number } }) => {
          return (
            <RequisitesItem key={id} name={name} number={number} id={id} />
          );
        })}
      </PlnsList>
    </>
  );
};

export default PlnList;
