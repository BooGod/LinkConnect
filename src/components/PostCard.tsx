import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Content = styled.div`
  padding: 16px;
`

const Description = styled.p`
  margin-bottom: 16px;
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Stats = styled.div`
  display: flex;
  gap: 16px;
`

const Button = styled.button`
  background-color: #45B7D1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #3CA1B9;
  }
`

interface Post {
  id: string
  user_id: string
  image_url: string
  description: string
  affiliate_link?: string
  likes: number
  comments: number
  created_at: string
}

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const handleRevealLink = () => {
    // TODO: Implement reveal link functionality
    console.log('Reveal link clicked')
  }

  return (
    <Card>
      <Image src={post.image_url} alt="Post" />
      <Content>
        <Description>{post.description}</Description>
        <Actions>
          <Stats>
            <span>❤️ {post.likes}</span>
            <span>💬 {post.comments}</span>
          </Stats>
          <Button onClick={handleRevealLink}>Reveal Link (2€)</Button>
        </Actions>
      </Content>
    </Card>
  )
}

export default PostCard