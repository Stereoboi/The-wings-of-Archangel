import monoImg from "../../../media/images/mono.png";
import {
  BankWrapper,
  BankName,
  BankRequisites,
  LineDivider,
  CopyBtn,
  BtnText,
  CopyIcon,
  BtnWrapper,
  BankLink,
  BankIcon,
} from "./RequisitesItem.styled";
import { Tooltip } from "@mui/material";
import { useState } from "react";

export const RequisitesItem = ({ name, number, id }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(number);
    setIsCopied(true);
  };

  return (
    <>
      <LineDivider />
      <BankWrapper>
        <BankName>{name}:</BankName>
        <BankRequisites>{number}</BankRequisites>
        <BtnWrapper>
          <Tooltip
            title={
              isCopied
                ? "Скопійовано до буфферу обміну"
                : "Клікніть щоб скопіювати"
            }
          >
            <CopyBtn
              type="button"
              onClick={handleCopyClick}
              aria-label="Клікніть щоб скопіювати"
            >
              <BtnText>Копіювати</BtnText>
              <CopyIcon />
            </CopyBtn>
          </Tooltip>

          {name === "Monobank" && (
            <>
              <Tooltip title={"Поповнити через Apple Pay"}>
                <BankLink
                  href="https://mui.com/material-ui/material-icons/"
                  aria-label="Клікніть щоб поповнити банку"
                >
                  <BtnText>Поповнити</BtnText>
                  <BankIcon src={monoImg} alt="monobank icon" />
                </BankLink>
              </Tooltip>
              <Tooltip title={"Поповнити через Google Pay"}>
                <BankLink
                  href="https://mui.com/material-ui/material-icons/"
                  aria-label="Клікніть щоб поповнити банку"
                >
                  <BtnText>Поповнити</BtnText>
                  <BankIcon src={monoImg} alt="monobank icon" />
                </BankLink>
              </Tooltip>
            </>
          )}
        </BtnWrapper>
      </BankWrapper>
    </>
  );
};
