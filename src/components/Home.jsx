import css from './Home.module.css'
const Home=()=>{
    return(
        <div className={css.container}>
            <h1>Portfolio</h1>
            <div className={css.image}>
                <img src="profile.png" alt="profile-pic"/>
            </div>
            <div className={css.intro}>
                <h2>Hello Everyone!!</h2>
                <p>I am Ajuna Rai, currently in Fourth Semester, BIT in Padmakanya Multiple Campus.</p>
            </div>
        </div>
    );
}
export default Home;