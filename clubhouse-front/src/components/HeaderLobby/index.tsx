import Link from "next/link";
import styles from "./index.module.scss";
import {
	AiOutlineSearch,
	AiOutlineMessage, 
	AiOutlineCalendar
} from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";

export default function Header(): JSX.Element {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<button>
					<AiOutlineSearch size={30}/>
				</button>
				<nav className={styles.userInformation}>
					<button>
						<AiOutlineMessage size={30}/>
					</button>
					<button>
						<AiOutlineCalendar size={30}/>
					</button>
					<button>
						<GoBell size={30}/>
					</button>
					<button>
						<BsFillPersonFill size={30}/>
					</button>
				</nav>
			</header>
			<main className={styles.mainContent}>
				<h1>Rooms</h1>
				<div className={styles.showAllRooms}>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>

					<div className={styles.room}>
						<div className={styles.admInformation}>
							<BsFillPersonFill 
								size={130} 
								color="white"
							/>
							<h3>Eduardo</h3>
						</div>
						<div className={styles.roomInformation}>
							<h2>Just talking</h2>
							<p>We are just having a good conversation, let's go, it's nice</p>
							<span>
								200<BsFillPersonFill size={19}/>/03<AiOutlineMessage size={19}/>
							</span>
							<Link href="">
								<button>
									Enter the room
								</button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}