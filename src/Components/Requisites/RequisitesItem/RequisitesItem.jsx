import { monoImg, jarImg, aPayImg, gPayImg } from "../../../media";
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
  JarIcon,
  ApayIcon,
  GpayIcon,
  PaymentImgWrapper,
  PaymentDesktopImgWrapper,
  DesktopImgWrapper,
  Wrapper,
} from "./RequisitesItem.styled";
import { Box, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

export const RequisitesItem = ({ name, number, id }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    if (number.length === 16) {
      const formattedStr = `${number.slice(0, 4)} ${number.slice(
        4,
        8
      )} ${number.slice(8, 12)} ${number.slice(12)}`;
      setCardNumber(formattedStr);
    }
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(number);
    setIsCopied(true);
  };

  return (
    <>
      <LineDivider />
      <BankWrapper>
        <BankName>{name}:</BankName>
        <PaymentDesktopImgWrapper>
          <BankRequisites>{cardNumber || number}</BankRequisites>
          {name === "Mono" && (
            <Wrapper>
              <JarIcon src={jarImg} alt="Монобанка" />
              <DesktopImgWrapper>
                <ApayIcon src={aPayImg} alt="Apple Pay" />
                <GpayIcon src={gPayImg} alt="Google Pay" />
              </DesktopImgWrapper>
            </Wrapper>
          )}
        </PaymentDesktopImgWrapper>
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

          {name === "Mono" && (
            <>
              <PaymentImgWrapper>
                <JarIcon src={jarImg} />
              </PaymentImgWrapper>
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
                <>
                  <PaymentImgWrapper>
                    <ApayIcon src={aPayImg} />
                    <GpayIcon src={gPayImg} />
                  </PaymentImgWrapper>
                  <BankLink
                    href="https://mui.com/material-ui/material-icons/"
                    aria-label="Клікніть щоб поповнити банку"
                  >
                    <BtnText>Перевести</BtnText>
                    <BankIcon src={monoImg} alt="monobank icon" />
                  </BankLink>
                </>
              </Tooltip>
            </>
          )}
        </BtnWrapper>
      </BankWrapper>
    </>
  );
};
