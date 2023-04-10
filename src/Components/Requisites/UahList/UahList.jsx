import { RequisitesItem } from "../RequisitesItem/RequisitesItem";
import { UahsList, CaptionText } from "./UahList.styled";

const UahList = ({ requisites }) => {
  return (
    <>
      <CaptionText variant="h3">UAH</CaptionText>
      <UahsList>
        {requisites.map(({ id, attributes: { name, number } }) => {
          return (
            <RequisitesItem key={id} name={name} number={number} id={id} />
          );
        })}
      </UahsList>
    </>
  );
};

export default UahList;
