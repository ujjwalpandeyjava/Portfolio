import eeCSS from './EducationExperience.module.css'

export default function EducationExperience() {
	return (
		<div className={eeCSS.sectionEE}>
			<div className={eeCSS.qualification}>
				<div className={eeCSS.heading}>Qualification</div>
				<div className={eeCSS.subHeading}>My Education</div>
				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Masters of Compute Application'>MCA <span className={eeCSS.time}>(2023 - 2025 pursuing)</span> </div>
						<div className={eeCSS.someDetails}>Web Development from Amity University Online. Giving me full time to concentrate on job, learning, skill development.</div>
						<div className={eeCSS.type}>Masters from Amity University</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Cloud and mobile software engineering'>GNIIT <span className={eeCSS.time}>(2019 - 2022)</span> </div>
						<div className={eeCSS.someDetails}>BootCamp of 2+1 year with learning Full-stack Web development with java and javaScript technologies, where I scored 9 CGPA, it awarded me mastery over several technologies from basic of html to advanced handling of servers, and taught me the importance of never stopped learning!</div>
						<div className={eeCSS.type}>Web development Specialization</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Bachelors of Computer Application'>BCA <span className={eeCSS.time}>(2018 - 2021)</span> </div>
						<div className={eeCSS.someDetails}>Learned the basic development skills and attended the GNIIT regularly to enhance my Web and Cloud development skill, completed BCA in minimum duration alloted by University without even a single subject back.</div>
						<div className={eeCSS.type}>Graduation from IGNOU</div>
					</div>
				</div>
			</div>
			<div className={eeCSS.workExperience}>
				<div className={eeCSS.heading}>Work Experience</div>
				<div className={eeCSS.subHeading}>My Awesome Experience</div>
				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title=''>Safety Labs<span className={eeCSS.time}> (Feb/2022-Till date)</span> </div>
						<div className={eeCSS.someDetails}>Tele-Medicine Home-Based Health-Care company, originated from Canada.</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>Development and refinement of new and existing APIs and User Interfaces.</li>
								<li>Automation features for manual labour work.</li>
								<li>Super-headed the development of the Scheduler project.</li>
								<li>Managed the team to oversee the production of applications.</li>
								<li>Developed high-processing front-end for dedicated hardwares.</li>
								<li>Integrated enterprise chat-bots, Appointment bots with AIs for multi-level companies.</li>
								<li>Worked very close with Salesforce developers and admin.</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Java Developer &gt; Full-Stack Developer</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='3 Months'>Net Creative mind<span className={eeCSS.time}> (Oct/2021-Jan/022)</span> </div>
						<div className={eeCSS.someDetails}>Government product based company</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>Worked on project, as team member in building Digitization software for government documents keeping.</li>
								<li>Worked on DRDO and CEMILAC projects.</li>
									Identify and add validations in Java APIs and fix bugs for smooth transition of work. 
									
									
								<li>Created flows and implemented them on NewGen's software, including OmniDoc, OmniScanner.</li>
								<li>Developing Java APIs live following thorough validations & testing.</li>
								<li>Handled UI/UX development using Figma and coding them in JSP, HTML, CSS.</li>
								<li>Bug fixing to ensure the project online smoothly.</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Java Developer Trainee</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='While I was pursuing BCA and GNIIT'>Daily Brief app<span className={eeCSS.time}> (Aug/2021-Oct/2021)</span> </div>
						<div className={eeCSS.someDetails}>NEWS app</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>Did manual testing and shared informal reports</li>
								<li>Provided how the new UI is and provide figma</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Ambassador</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='While I was pursuing BCA and GNIIT'>NIIT Developer - Project based<span className={eeCSS.time}> (July/2020-Oct/2021)</span> </div>
						<div className={eeCSS.someDetails}>NEWS app</div>
						<details className={eeCSS.responsibilities}>
							<summary title='Click to expand'>Responsibilities</summary>
							<ul>
								<li>Started with User Interfaces (UI) with HTML, CSS, JS for the multiple assigned developers.</li>
								<li>In the end of this tenure, I became good work with Java, Servlets for APIs, and UI with JSP too.</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Front-end Developer</div>
					</div>
				</div>
			</div>
		</div>
	)
}