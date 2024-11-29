import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar className='sm:w-1/3 w-full' />
			<MessageContainer className='sm:w-2/3 w-full' />
		</div>
	);
};
export default Home;
