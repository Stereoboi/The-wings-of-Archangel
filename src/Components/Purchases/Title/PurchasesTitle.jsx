import {
  ReqTitle,
  ReqWrapper,
  ReqTitleMain,
} from "../../Requisites/Title/Title.styled";
import { Grow } from "@mui/material";

const PurchasesTitle = () => {
  return (
    <ReqWrapper>
      <Grow in timeout={1000} timeoutAppear={500}>
        <ReqTitle variant="body1">ПІДТРИМАЙ 77 БРИГАДУ</ReqTitle>
      </Grow>
      <Grow in timeout={1000} timeoutAppear={500}>
        <ReqTitleMain variant="h1">ЗАКУПІВЛІ 77 бригади</ReqTitleMain>
      </Grow>
      <Grow in timeout={1000} timeoutAppear={500}>
        <ReqTitle variant="body1">
          ДРУЗІ! НА ЦІЙ СТОРІНЦІ МИ РЕГУЛЯРНО ПУБЛІКУЄМО ІНФОРМАЦІЮ ПРО
          ПРИДБАННЯ, НА ЗАПИТ ПІДРОЗДІЛУ. ДІЗНАЙТЕСЬ, ЯКУ САМЕ КОРИСТЬ ПРИНОСИТЬ
          ВАША ЩИРА ДОПОМОГА. РАЗОМ ДО ПЕРЕМОГИ!
        </ReqTitle>
      </Grow>
    </ReqWrapper>
  );
};

export default PurchasesTitle;
