import { HeaderContainer } from "./styles";
import githubBlogLogo from '../../assets/githubBlogLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogo} />
    </HeaderContainer>
  );
}
