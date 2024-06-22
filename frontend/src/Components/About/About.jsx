import React from 'react';
import animation from '../../assets/animations/aboutUsAnimation.gif'
import { Container, Fade } from '@mui/material';

const About = () => {
       // Scrolling Bug Fixed
       window.scroll({ top: 0 });
    return (
        <div className=" min-h-screen pt-20 px-2 flex items-center sm:px-6 lg:px-8">
            <Fade in={true}>
                <Container>
                    <div className="max-w-7xl pb-5 container mx-auto ">
                        <div className="lg:grid md:grid-cols-2">
                            {/* Animation */}
                            <div className='col flex order-last justify-center'>
                                <img
                                    className='xl:h-[30rem] lg:h-[28rem] md:h-[22rem] h-[17.5rem]'
                                    src={animation}
                                    alt="about_us" />
                            </div>
                            <div className="xl:space-y-7 lg:space-y-5 md:space-y-7 space-y-5 sm:mt-0 sm:px-0">
                                {/* Title */}
                                <h2 className="xl:text-3xl md:text-3xl lg:text-2xl text-2xl font-semibold text-gray-800">
                                    Welcome to Our Grocery Delivery App
                                </h2>
                                {/* Article */}
                                <p className=" text-justify xl:text-base lg:text-sm md:text-base text-sm text-gray-600">
                                Di <strong>Grocery Delivery App</strong>, kami berkomitmen untuk menyediakan produk-produk segar
                                dan berkualitas tinggi untuk kebutuhan sehari-hari Anda.
                                Rentang produk kami yang luas mencakup sayuran segar,
                                daging sapi pilihan, produk susu, kebutuhan dapur, dan banyak lagi. Kami dengan hati-hati
                                memilih pemasok kami untuk memastikan Anda hanya menerima yang terbaik.<br /><br />

                                Dengan antarmuka yang ramah pengguna dan layanan pengiriman yang handal, berbelanja kebutuhan
                                sehari-hari semakin mudah. Cukup telusuri pilihan kami yang luas, tambahkan barang ke keranjang, dan nikmati kenyamanan
                                pengiriman langsung ke pintu Anda. Katakan selamat tinggal pada antrian panjang di supermarket dan tas-tas berat.<br /><br />

                                Kami bangga dengan komitmen kami untuk menyediakan layanan pelanggan yang luar biasa. Tim dukungan kami
                                siap membantu Anda dengan pertanyaan atau kekhawatiran yang mungkin Anda miliki. Kepuasan Anda adalah
                                prioritas utama kami.<br /><br />

                                Rasakan kenyamanan dan kegembiraan berbelanja dari kenyamanan rumah Anda. Bergabunglah dengan kami di **Grocery** dan temukan cara baru untuk berbelanja kebutuhan harian Anda.<br /><br />

                                Mulailah berbelanja sekarang dan jadikan kehidupan sehari-hari Anda lebih sehat dan lebih nyaman.
                                                                </p>
                                <div className="mt-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fade>
        </div >
    );
};

export default About;
