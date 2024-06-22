import { Container } from "@mui/material";
import ourQualitiesBg from '../../assets/backgrounds/2_bg.png';
import qualityMan from "../../assets/premium_qualityMan.png";
import serviceMan from '../../assets/deliveryMan.png';
import phone from '../../assets/phone.png';
import { useContext } from "react";
import { ourBestQualityContext } from "../Home/OurBestQualities/OurBestQualities";
import { servicesContext } from "../Home/OurServices/OurServices";
import { downloadApp } from "../Home/DownloadOurApp/DownloadOurApp";

const OurServicesAndQualities = ({ children }) => {
    // Get props from context 
    const isOurQuality = useContext(ourBestQualityContext);
    const isService = useContext(servicesContext);
    const isDownloadApp = useContext(downloadApp);

    return (
        <section id={!isOurQuality ? "services" : ''} style={isOurQuality ? { backgroundImage: `url(${ourQualitiesBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' } : isService ? { backgroundColor: 'white' } : {}}>
            <Container>
                <div className='grid py-3.5 gap-x-3 gap-y-4 sm:grid-cols-2 grid-cols-1'>
                    {/* Image */}
                    <div className="flex items-center justify-center">
                        <img
                            className={`xl:h-[29rem] lg:h-[27.5rem] md:h-[${isService ? '20.5rem' : isOurQuality ? '20.5rem' : '21rem'}] sm:h-[${isService ? '17.2rem' : isOurQuality ? '17.2rem' : '19rem'}] h-[18rem]`}
                            src={isOurQuality ? qualityMan : isService ? serviceMan : phone}
                            loading='lazy'
                            alt="Illustration"
                        />
                    </div>

                    {/* Texts */}
                    <div className={`flex md:max-w-none ${!isOurQuality && 'sm:order-first order-none'} max-w-[32rem] items-center`}>
                        <div className={isDownloadApp ? 'lg:space-y-10 sm:space-y-7 space-y-8' : isOurQuality ? 'lg:space-y-8 space-y-4' : 'lg:space-y-6 space-y-3.5'}>
                            <div className={`${isDownloadApp ? 'xl:space-y-6 space-y-4' : 'md:space-y-2.5 sm:space-y-1.5 space-y-2.5'} w-11/12`}>
                                {/* Title */}
                                <h1 className={`pb-0 md:text-2xl text-xl ${isDownloadApp ? 'font-bold' : 'font-semibold'} capitalize xl:tracking-wide`}>
                                    {isDownloadApp ?
                                        'Nikmati Grocery Delivery App kami untuk Hemat Waktu & Uang'
                                        : isOurQuality ?
                                            'Grocery Kualitas Terbaik'
                                            : isService ?
                                                'Mengapa Grocery Kami?'
                                                : ''}
                                </h1>
                                {/* Description */}
                                <p className='lg:text-base text-gray-700 md:text-sm sm:text-xs text-sm'>
                                    {isOurQuality ?
                                        'Kami memprioritaskan kualitas dalam setiap produk grocery kami. Makanan organik adalah makanan yang diproduksi secara alami dan sehat.'
                                        : isService ?
                                            'Kami menawarkan berbagai macam produk untuk dipilih sehingga Anda dapat menemukan segala yang Anda butuhkan untuk memenuhi kebutuhan keluarga Anda.'
                                            : 'Aplikasi pengiriman grocery kami memudahkan berbelanja di mana saja. Anda dapat menelusuri produk, membuat daftar belanja, dan memesan bahan makanan untuk diambil atau diantar.'
                                    }
                                </p>
                            </div>

                            {/* Child Component */}
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurServicesAndQualities;
