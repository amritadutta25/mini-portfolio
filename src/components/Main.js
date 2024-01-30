import Projects from "./Projects.js"

function Main(props){

    return (
        
        <div className="main"> 
            
            <Projects 
                name={"EasyStock Insight"} 
                img=  {"https://i.imgur.com/ff2Jnkv.png"}
                desc={"Discover the company of your choice, read about leading companies and more."}
                code={"https://github.com/amritadutta25/sealproject1"}
                site={"https://sealproject1-omega.vercel.app"}/>

            <Projects 
                name={"InvenTrack"} 
                img={"https://i.imgur.com/clF54Do.png"}
                desc={"Full CRUD app that lets business owners manage their inventory effectively."}
                code={"https://github.com/amritadutta25/project2"}
                site={"https://am-project2.onrender.com"}/>        
        
        </div>
    )
}

// export the component
export default Main