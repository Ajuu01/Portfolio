import Project from "./Project";
import css from './About.module.css'
const About=()=>{
    return(
        <div className={css.Proj}>
            <h1>About Me</h1>
            <p>I am interested in Web Development and aspire to learn Full Stack Web Development.So I have taken part in few extra classes other than academic classes focusing on web devlopment.</p>
            <p className={css.line}>Some of my projects are:</p>
            <div className={css.projects}>
                <Project name={"TodoList"} desc={"This is a simple to do list Using HTML,CSS and JS"}/>
                <Project name={"TicTacToe"} desc={"This is a simple TicTactoe game Using HTML,CSS and JS"}/>
                <Project name={"Calculator"} desc={"This is a simple Calculator Using HTML,CSS and JS"}/>
            </div>
            
        </div>
        
    );
}
export default About;