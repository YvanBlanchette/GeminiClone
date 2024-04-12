import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
	const [extended, setExtended] = useState(false);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};

	return (
		<div className="sidebar">
			<div className="top">
				<img onClick={() => setExtended((prev) => !prev)} src={assets.menu_icon} alt="menu icon" className="menu" />
				<div onClick={() => newChat()} className="new-chat">
					<img src={assets.plus_icon} alt="Plus icon" />
					{extended ? <p>Nouvelle Discussion</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">Récent</p>
						{prevPrompts.map((item, index) => {
							return (
								<div onClick={() => loadPrompt(item)} className="recent-entry">
									<img src={assets.message_icon} alt="Message icon" />
									<p>{item.slice(0, 18)} ...</p>
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<img src={assets.question_icon} alt="Question icon" />
					{extended ? <p>Aide</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.history_icon} alt="History icon" />
					{extended ? <p>Historique</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.setting_icon} alt="Setting icon" />
					{extended ? <p>Configurations</p> : null}
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
