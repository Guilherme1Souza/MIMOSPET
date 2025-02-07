import { CarouselContainer, BrandSlide, BrandImage, DogImage } from "./style";
import React from "react";
import Slider from "react-slick";

export function CarrosselMarcas() {
    const brands = [
        { name: "Golden", src: "/golden.png" },
        { name: "Magnus", src: "/magnus.png" },
        { name: "Fórmula Natural", src: "/fmnatura.png" },
        { name: "Origens", src: "/origens.png" },
        { name: "Purina", src: "/purina.png" },
    ];

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        return (
            <CarouselContainer>
                <h2>Marcas que trabalhamos</h2>
                <Slider {...settings}>
                    {brands.map((brand, index) => (
                        <BrandSlide key={index}>
                            {brand.src ? <BrandImage src={brand.src} alt={brand.name} /> : null}
                        </BrandSlide>
                    ))}
                </Slider>
                <DogImage src="/src/images/dogEspiao.png" alt="Cachorro" />
            </CarouselContainer>
        )
    };