import { IPost } from "../..";
import { relativeDateFromatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFromatter(post.created_At)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}