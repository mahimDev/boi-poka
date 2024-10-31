import bannerImg from '../../assets/bannerImg.avif';

const Banner = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img className='w-full h-full' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;