import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); // custom hooks
    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} /> }       
            { isPending && <div>Loading...</div>} 
            {error && <div>{error}</div>}       
        </div>
    );
}
 
export default Home;  