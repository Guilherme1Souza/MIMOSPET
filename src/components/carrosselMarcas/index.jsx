import { CarouselContainer, BrandSlide, BrandImage, DogImage } from "./style";
import React from "react";
import Slider from "react-slick";

export function CarrosselMarcas() {
    const brands = [
        { name: "Golden", src: "/src/images/golden.png" },
        { name: "Magnus", src: "/src/images/magnus.png" },
        { name: "Fórmula Natural", src: "/src/images/fmnatura.png" },
        { name: "Origens", src: "/src/images/origens.png" },
        { name: "Purina", src: "/src/images/purina.png" },
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