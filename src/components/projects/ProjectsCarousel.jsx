/* eslint-disable react/prop-types */
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projectsList";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';

export const ProjectsCarousel = ({ selectedSkill }) => {

    const filteredProjects = selectedSkill
        ? projects.filter((project) => project.skill === selectedSkill)
        : projects;

    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                    <ProjectCard {...project} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
