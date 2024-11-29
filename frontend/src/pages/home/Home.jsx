import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar className='flex-1 sm:flex-none sm:w-1/3' />
			<MessageContainer className='flex-1 sm:flex-none sm:w-2/3' />
		</div>
	);
};
export default Home;
