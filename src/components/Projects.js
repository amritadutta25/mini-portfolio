// the component function
function Projects(props) {
    console.log(props.github, props.site)

    return (
        <div className="project">
            <div className="project-image">
                <img src={props.img}></img>
            </div>
            <div className="project-name">
                <h2>{props.name}</h2>
                <div className="project-details">
                
                    <p>{props.desc}</p>
                    <div className="project-links">
                        <a className="button" href={props.code}>View Code</a>
                        <a className="button" href={props.site}>View Website</a>
                    </div>
                
                </div>
            </div>

        
        </div>
    )
}

// export the component
export default Projects