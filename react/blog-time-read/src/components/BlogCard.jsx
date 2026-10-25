const WORDS_PER_MINUTE = 200;
const IMAGE_SECONDS = 12;

function BlogCard(props) {
    const words = props.text.trim().split(/\s+/).length;
    const readTime = Math.ceil(words / WORDS_PER_MINUTE + IMAGE_SECONDS / 60);

    return(
        <div className="blog-card">
            <div className="blog-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="blog-content">
                <span className="blog-category">{props.category}</span>
                <h2 className="blog-title">{props.title}</h2>
                <p className="blog-text">{props.text}</p>
                <p className="blog-read-time">{readTime} min read</p>
            </div>
        </div>
    )
}

export default BlogCard;
