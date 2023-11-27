import Profile from '../assets/images/profile.png' 




const Header = () => {
    return (
        <header className='md:flex justify-between items-center mx-5 p-4 border-b-2'>
            <h1 className='text-5xl font-semibold'>Knowlage Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;