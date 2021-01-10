import {
  Logo,
  NavbarStyled,
  NavIcon,
  NavLinkStyled,
  NavName,
  NavsStyled,
} from "./styles";

//Icons
import { ReactComponent as CoursesIcon } from "../../assets/icons/courses.svg";
import { ReactComponent as WebinarsIcon } from "../../assets/icons/webinar.svg";
import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as BlogIcon } from "../../assets/icons/blog.svg";
import { ReactComponent as TestsIcon } from "../../assets/icons/tests.svg";
import { ReactComponent as CareersIcon } from "../../assets/icons/careers.svg";

function NavbarLeft( { setPageName, left } ) {

  return (
    <NavbarStyled left={ left }>
      <Logo>
        {' '}
      </Logo>
      <NavsStyled>
        <NavLinkStyled onClick={ () => setPageName( "Курсы" ) } to={ "/" }>
          <NavIcon><CoursesIcon/></NavIcon>
          <NavName>Курсы</NavName>
        </NavLinkStyled>
        <NavLinkStyled onClick={ () => setPageName( "Вебинары" ) } to={ "/webinars" }>
          <NavIcon><WebinarsIcon/></NavIcon>
          <NavName>Вебинары</NavName>
        </NavLinkStyled>
        <NavLinkStyled onClick={ () => setPageName( "Форум" ) } to={ "/forum" }>
          <NavIcon><ForumIcon/></NavIcon>
          <NavName>Форум</NavName>
        </NavLinkStyled>
        <NavLinkStyled onClick={ () => setPageName( "Блог" ) } to={ "/blogs" }>
          <NavIcon><BlogIcon/></NavIcon>
          <NavName>Блог</NavName>
        </NavLinkStyled>
        <NavLinkStyled onClick={ () => setPageName( "Тесты" ) } to={ "/tests" }>
          <NavIcon><TestsIcon/></NavIcon>
          <NavName>Тесты</NavName>
        </NavLinkStyled>
        <NavLinkStyled onClick={ () => setPageName( "Карьера" ) } to={ "/careers" }>
          <NavIcon><CareersIcon/></NavIcon>
          <NavName>Карьера</NavName>
        </NavLinkStyled>
      </NavsStyled>
    </NavbarStyled>
  );
}

export default NavbarLeft;