import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Spinner } from '../../../../components/Spinner'
import { relativeDateFromatter } from '../../../../utils/formatter'
import { IPost } from '../../../Home'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1) // Mandando um número no Hook useNavigate => Navega aquela quantidade de páginas
  }

  const isCommentsPlural = postData.comments <= 1 ? "comentário" : "comentário"

  const formattedDate = relativeDateFromatter(postData?.created_At)

  return (
    <PostHeaderContainer>
      {isLoading ? <Spinner /> :
        <>
          <header>
            <ExternalLink
              as="button"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              onClick={goBack}
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} {isCommentsPlural}
            </li>
          </ul>
        </>}
    </PostHeaderContainer>
  )
}