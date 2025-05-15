// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import blogPosts from "../data/posts";

const HeroSlider = () => {
  const featured = blogPosts.slice(0, 3); // ambil 3 artikel unggulan

  return (
    <section className="w-full bg-black text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[400px]"
      >
        {featured.map((post) => (
          <SwiperSlide key={post.id}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center text-center px-4"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <div className="bg-black/60 p-6 rounded-lg max-w-xl">
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <p className="mt-2">{post.excerpt}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
