import "./main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
	const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

	return (
		<main className="main">
			<nav className="nav">
				<p>Gemini</p>
				<img src={assets.user_icon} alt="User icon" />
			</nav>
			<div className="main-container">
				{!showResult ? (
					<>
						<div className="greeting">
							<p>
								<span>Bonjour, Utilisateur</span>
							</p>
							<p>Comment est-ce que je peux t'aider aujourd'hui?</p>
						</div>
						<div className="cards">
							<div className="card">
								<p>Recommande moi des restaurants dans mon secteur pour une sortie entre amis ?</p>
								<img src={assets.compass_icon} alt="Compass Icon" />
							</div>
							<div className="card">
								<p>Explique moi comment fonctionnement une éclipse solaire</p>
								<img src={assets.bulb_icon} alt="Bulb Icon" />
							</div>
							<div className="card">
								<p>Propose des activités de consolidation d'équipe pour notre séminaire annuel.</p>
								<img src={assets.message_icon} alt="Message Icon" />
							</div>
							<div className="card">
								<p>Aide moi à trouver l'erreur dans mon code Javascript</p>
								<img src={assets.code_icon} alt="Code Icon" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon} alt="User icon" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="Gemini icon" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Inscrire votre requête ici..." />
						<div className="icons-wrapper">
							<img src={assets.gallery_icon} alt="Gallery Icon" />
							<img src={assets.mic_icon} alt="Mic Icon" />
							<img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" />
						</div>
					</div>
					<p className="bottom-info">
						Gemini peut retourner des informations inexactes, veuillez vérifier la validité les réponses indépendamment. Confidentialité et applications Gemini.
					</p>
				</div>
			</div>
		</main>
	);
};
export default Main;
