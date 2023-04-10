import { RequisitesItem } from "../RequisitesItem/RequisitesItem";
import { EursList, CaptionText } from "./EurList.styled";

const EurList = ({ requisites }) => {
  return (
    <>
      <CaptionText variant="h3">EUR</CaptionText>
      <EursList>
        {requisites.map(({ id, attributes: { name, number } }) => {
          return (
            <RequisitesItem key={id} name={name} number={number} id={id} />
          );
        })}
      </EursList>
    </>
  );
};

export default EurList;
