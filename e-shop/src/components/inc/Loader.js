import { FadeLoader } from "react-spinners";

import LeftPanel from '../inc/LeftPanel'
import TopHeader from '../inc/TopHeader'
import HeaderBottom from '../inc/HeaderBottom'
import Navigation from '../inc/Navigation'
import Footer from '../inc/Footer'
import Copyright from '../inc/Copyright'

const Loader = () => {

	return (
		<div>
			<TopHeader />
			<HeaderBottom />
			<Navigation />

			<div className="ads-grid py-5">
				<div className="container py-md-5 py-4">
                    <div className="row">
                        <FadeLoader color="#fdb03d" loading={true} size={150} width={8} margin={11} css="left: 50%;" />
                    </div>
    			</div>
			</div>
			
			<div className="overlay"></div>

			<Footer />
			<Copyright />    

		</div>
	)
}

export default Loader
