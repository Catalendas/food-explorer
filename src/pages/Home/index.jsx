import React, { useEffect, useState } from "react"
import { Container, Content } from "./styles"

import { SwiperSlide } from 'swiper/react';

import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { api } from "../../services/api";
import { useSearchHook } from "../../hook/searchHook";
import { SwipperComponent } from "../../components/Swipper";


export function Home() {

    const [data, setData] = useState([])

    const { search } = useSearchHook()

    async function getDish() {

        try {
            const response = await api.get(`/dish?title=${search}`)

            setData(response.data)

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            }
        }
    }

    useEffect(() => {
        getDish()
    }, [search])

    return (
        <Container>
            <Content>
                <Banner />

                <div>
                    <Section title="Refeições">
                        <SwipperComponent>
                            {data.map((e) => {
                                if (e.category == "snack") {
                                    return (
                                        <SwiperSlide key={e.id}>
                                            <Card 
                                                title={e.title}
                                                description={e.description}
                                                id={e.id}
                                                image={e.image}
                                                price={e.price}
                                            />
                                        </SwiperSlide>
                                    )
                                }
                            })}
                        </SwipperComponent>
                    </Section>

                    <Section title="Sobremesas">
                        <SwipperComponent>
                            {data.length && data.map((e) => {
                                if (e.category == "Dessert") {
                                    return (
                                        <SwiperSlide key={e?.id}>
                                            <Card 
                                                title={e?.title}
                                                description={e?.description}
                                                id={e?.id}
                                                image={e?.image}
                                                price={e.price}
                                            />
                                        </SwiperSlide>
                                    )
                                }
                            })}
                        </SwipperComponent>
                    </Section>

                    <Section title="Bebidas">
                        <SwipperComponent>
                            {data.length && data.map((e) => {
                                if (e.category == "drink") {
                                    return (
                                        <SwiperSlide key={e?.id}>
                                            <Card 
                                                title={e?.title}
                                                description={e?.description}
                                                id={e?.id}
                                                image={e?.image}
                                                price={e.price}
                                            />
                                        </SwiperSlide>
                                    )
                                }
                            })}
                        </SwipperComponent>
                    </Section>
                </div>
            </Content>
        </Container>
    )
} 