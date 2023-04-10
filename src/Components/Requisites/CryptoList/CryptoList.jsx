import { RequisitesItem } from "../RequisitesItem/RequisitesItem";
import { CrpList, CaptionText } from "./CryptoList.styled";

const CryptoList = ({ requisites }) => {
  return (
    <>
      <CaptionText variant="h3">BTC</CaptionText>
      <CrpList>
        {requisites.map(({ id, attributes: { name, number } }) => {
          return (
            <RequisitesItem key={id} name={name} number={number} id={id} />
          );
        })}
      </CrpList>
    </>
  );
};

export default CryptoList;
