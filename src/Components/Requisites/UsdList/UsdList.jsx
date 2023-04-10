import { RequisitesItem } from "../RequisitesItem/RequisitesItem";
import { UsdsList, CaptionText } from "./UsdList.styled";

const UsdList = ({ requisites }) => {
  return (
    <>
      <CaptionText variant="h3">USD</CaptionText>
      <UsdsList>
        {requisites.map(({ id, attributes: { name, number } }) => {
          return (
            <RequisitesItem key={id} name={name} number={number} id={id} />
          );
        })}
      </UsdsList>
    </>
  );
};

export default UsdList;
