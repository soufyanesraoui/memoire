import PostList from '../../components/posts/PostList'
import SocialMedia from '../../components/header/SocialMedia'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from '../../redux/apiCalls/postApiCall'
const Home = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.post)

  useEffect(() => {
    dispatch(fetchPosts(1))
  }, [dispatch])
  return (
    <>
      <section className='home'>
        <div className='home-hearo-header'>
          <SocialMedia />
          <div className='home-hero-header-layout'>
            <h1 className='home-title'>Welcome to T-constantine</h1>
          </div>
        </div>

        <div className='home-latest-post'>Latest posts</div>
        <div className='home-container'>
          <PostList posts={posts} />
          <Sidebar />
        </div>
        <div className='home-see-posts-link'>
          <Link className='home-link' to='/posts'>
            See All Posts
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
