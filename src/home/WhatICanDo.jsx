import mobileApp from "../images/mobileApp.png";
import frontEnd from "../images/whatICanDo/FrontEnd.png";
import backend from "../images/whatICanDo/FrontEnd2.png";
import dataBase from "../images/whatICanDo/buildServer.png";
import style from './WhatICanDo.module.css';

function WhatICanDo() {
	return (
		<div className={style.abilitiesSection}>
			<h1>My proficiency</h1>
			<div className={style.abilities}>
				<div className={style.eachAbilities}>
					<img src={backend} alt="Server-side coding" />
					<div>Backend Development</div>
					<p>
						I have mastered spring boot with Java to deliver industry-standard, fast, robust server to keep backbone of application strong. 
						<hr />
						<strong>Technologies:</strong> Java, Spring Boot, multiple modules of Spring
					</p>
				</div>
				<div className={style.eachAbilities}>
					<img src={frontEnd} alt="Client-side coding" />
					<div>Frontend Development</div>
					<p>
						Proficient in creating immersive and user-friendly experience, developing visually stunning and intuitive UI.
						<hr />
						<strong>Technologies:</strong> HTML, CSS, JavaScript, TypeScript, <b>ReactJS</b>, SCSS, and various modern libraries.
					</p>
				</div>
				<div className={style.eachAbilities}>
					<img src={dataBase} alt="Database development coding" />
					<div>Database Management</div>
					<p>
						Creating and maintaining the database for best performance is one of my best when come to backend development.
						<hr />
						<strong>Technologies:</strong> SQL: MySQl and NoSQL: MongoDB
					</p>
				</div>
				<div className={style.eachAbilities}>
					<img src={mobileApp} alt="" />
					<div>Mobile App Development</div>
					<p>
						I am an occasional mobile app developer I code for Android and iOS both, with React Native, kotlin, swift.
						<hr />
						<strong>Technologies:</strong> React Native, Swift, and Kotlin
					</p>
				</div>
			</div>
		</div>
	)
}

export default WhatICanDo