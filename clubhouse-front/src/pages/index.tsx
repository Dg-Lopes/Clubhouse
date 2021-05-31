import styles from "./index.module.scss";
import {AiFillGithub} from "react-icons/ai";

export default function Home(): JSX.Element {
	return (
		<div className={styles.container}>
			<title>Clubhouse | Login</title>
			<div className={styles.content}>
				<h1>🔥 Welcome to Clubhouse</h1>
				<div className={styles.description}>
					<p>
						We're working hard to get Clubhouse ready for everyone! 
						While we wrap up the finishing touches, we're adding 
						people gradually to make sure nothing breaks. :)
					</p>
					<br/>
					<br/>
					<br/>
					<p>
						Anyone can join with an invite from an existing user -- or 
						reserve your username and we'll text you if you have 
						a friend on the app who can let you in. We are so grateful 
						you're here and can't wait to have you join us! 🙏
					</p>
					<button type="submit">
						<div><AiFillGithub size={30} /></div>	Login with Github
					</button>
				</div>
			</div>
		</div>
	);
}
