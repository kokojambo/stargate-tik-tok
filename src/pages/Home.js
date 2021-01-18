import Follower from '../components/Follower'

const Home = () => {
  return (
      <div className="container">
          <Follower />
          <div className="feed">
              <h1>Home</h1>
          </div>
          <div className="suggested-box"></div>
      </div>
  );
}

export default Home