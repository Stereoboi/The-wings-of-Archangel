import { ReqTitle, ReqWrapper, ReqTitleMain } from "./Title.styled";
import { Grow } from "@mui/material";

const RequisitesTitle = () => {
  return (
    <ReqWrapper>
      <Grow in timeout={1000} timeoutAppear={500}>
        <ReqTitle variant="body1">ПІДТРИМАЙ 77 БРИГАДУ</ReqTitle>
      </Grow>
      <Grow in timeout={1000} timeoutAppear={500}>
        <ReqTitleMain variant="h1">
          Реквізити благодійного фонду 77 БРИГАДИ
        </ReqTitleMain>
      </Grow>
      <Grow in timeout={1000} timeoutAppear={500}>
        <ReqTitle variant="body1">
          ВИ МОЖЕТЕ ЗРОБИТИ ВНЕСОК ДО НАШОГО БЛАГОДІЙНОГО ФОНДУ БУДЬ-ЯКИМ
          ЗРУЧНИМ ДЛЯ ВАС СПОСОБОМ
        </ReqTitle>
      </Grow>
    </ReqWrapper>
  );
};

export default RequisitesTitle;
