import { useOutletContext } from "react-router-dom";
import Feed from "../components/Feed";

const Home = () => {
  const { searchResults: posts } = useOutletContext();

  return (
    <main className="Home">
      {posts?.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}> No posts to display</p>
      )}
    </main>
  );
};

export default Home;
