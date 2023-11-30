import "../../styles/sideIcons.scss";
import yoga from "../../assets/yoga.svg";
import swimmer from "../../assets/swimmer.svg";
import cyclist from "../../assets/cyclist.svg";
import dumbbell from "../../assets/dumbbell.svg";
import copyright from "../../assets/copyright.png"

const SideIcons = () => {
	return (
		<div>
			<div className="sideIconsContainer">
                <div className="sideIcons-icons">
                    <div className="yoga">
                        <img src={yoga} alt="" />
                    </div>
                    <div className="swimmer">
                        <img src={swimmer} alt="" />
                    </div>
                    <div className="cyclist">
                        <img src={cyclist} alt="" />
                    </div>
                    <div className="dumbbell">
                        <img src={dumbbell} alt="" />
                    </div>
                    <div className="copyright">
                        <img src={copyright} alt="" />
                    </div>
                </div>
			</div>
		</div>
	);
};

export default SideIcons;
