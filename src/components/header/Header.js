import { ReactComponent as Logo } from './../../assets/logo.svg';
import { MdSearch } from 'react-icons/md';
import ThemeButton from './ThemeButton';
import APIButton from './APIButton';

const Header = () => {

    return (
        <header className='flex items-center gap-x-[25px] bg-l-sec-c dark:bg-d-sec-c px-[40px] py-[20px] max-w-[1920px] mx-auto flex-wrap gap-y-[15px] w-full'>
            <div className='flex items-center gap-x-[10px]'>
                <Logo className='min-w-[2rem] w-8 h-9 text-l-on-bg dark:text-d-on-bg'></Logo>
                <h1 className='text-neu1-9 dark:text-neu1-2 font-Poppins font-bold uppercase text-[18px]'>Video Game Library</h1>
            </div>
            <div className='flex gap-x-[10px] grow'>
                <div className='border border-neu1-4 dark:border-neu1-6  p-2.5 h-9 gap-x-2.5 rounded-full flex items-center px-5  max-w-[400px] grow'>
                    <MdSearch size={'24px'} className='text-neu1-7 dark:text-text2-dark '></MdSearch>
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent outline-0 text-neu1-10 dark:text-neu1-1 text-sm placeholder:font-normal placeholder:text-l-on-sec-c/40 dark:placeholder:text-d-on-sec-c/40 w-full font-OpenSans font-semibold'
                        autoComplete='off'
                        spellCheck='false'>
                    </input>
                </div>
                <div className='ml-auto flex gap-x-[10px]' >
                    <APIButton></APIButton>
                    <ThemeButton></ThemeButton>
                </div>
            </div>
        </header>
    )

};

export default Header;