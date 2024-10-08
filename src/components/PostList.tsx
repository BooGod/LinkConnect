import React, { useState, useEffect } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import styled from 'styled-components'
import PostCard from './PostCard'

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

interface PostListProps {
  supabase: SupabaseClient
}

const PostList: React.FC<PostListProps> = ({ supabase }) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching posts:', error)
    } else {
      setPosts(data)
    }
  }

  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}

export default PostList