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
			<div className={styles.header}>
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
			</div>
		</div>
	);
}