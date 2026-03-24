/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Apple, Search, ShoppingBag, ChevronRight } from "lucide-react";

const Navbar = () => {
  const links = [
    "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", 
    "TV & Home", "Only on Apple", "Support", "Where to Buy"
  ];

  return (
    <nav className="fixed top-0 w-full z-50 h-12 bg-white/80 backdrop-blur-xl border-b border-transparent transition-all duration-300">
      <div className="max-w-[1024px] mx-auto h-full px-4 flex items-center justify-between">
        <a href="/" className="opacity-80 hover:opacity-100 transition-opacity">
          <Apple size={18} />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-[12px] text-[#1d1d1f] opacity-80 hover:opacity-100 transition-opacity font-normal"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-6 opacity-80">
          <button className="hover:opacity-100 transition-opacity cursor-pointer">
            <Search size={16} />
          </button>
          <button className="hover:opacity-100 transition-opacity cursor-pointer">
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ 
  title, 
  subtitle, 
  dark = false, 
  image, 
  imageAlt,
  links = ["Más información", "Comprar"]
}: { 
  title: string; 
  subtitle: string; 
  dark?: boolean; 
  image: string; 
  imageAlt: string;
  links?: string[];
}) => {
  return (
    <section className={`relative w-full h-[600px] md:h-[800px] overflow-hidden flex flex-col items-center pt-16 text-center ${dark ? 'bg-black text-white' : 'bg-white text-[#1d1d1f]'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="text-xl md:text-2xl mt-2 font-light">{subtitle}</p>
        <div className="mt-4 flex gap-6 justify-center">
          {links.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-[#0066cc] hover:underline flex items-center text-lg md:text-xl"
            >
              {link} <ChevronRight size={20} className="ml-0.5" />
            </a>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 w-full h-full mt-32 md:mt-40">
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const GridItem = ({ 
  title, 
  subtitle, 
  dark = false, 
  image, 
  imageAlt,
  logo = false,
  tag = "",
  links = ["Más información", "Comprar"]
}: { 
  title?: string; 
  subtitle: string; 
  dark?: boolean; 
  image?: string; 
  imageAlt?: string;
  logo?: boolean;
  tag?: string;
  links?: string[];
}) => {
  return (
    <div className={`relative h-[500px] md:h-[600px] overflow-hidden flex flex-col items-center pt-12 text-center ${dark ? 'bg-black text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="z-10 px-4"
      >
        {logo ? (
          <div className="flex items-center justify-center mb-1">
            <Apple size={24} className="mr-1" />
            <span className="text-xl font-bold tracking-tight">WATCH</span>
          </div>
        ) : (
          title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        )}
        {tag && <span className="text-[#ef4444] text-[10px] font-bold tracking-widest uppercase block mb-1">{tag}</span>}
        <p className="text-lg md:text-xl mt-1 font-normal max-w-[300px] mx-auto">{subtitle}</p>
        <div className="mt-3 flex gap-4 justify-center">
          {links.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-[#0066cc] hover:underline flex items-center text-base md:text-lg"
            >
              {link} <ChevronRight size={16} className="ml-0.5" />
            </a>
          ))}
        </div>
      </motion.div>
      {image && (
        <div className="absolute bottom-0 w-full h-2/3">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-contain object-bottom"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};

const TVCarousel = () => {
  const shows = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuADnrmI8xHZP6Ll73qDKC24lqg50lt_NFjmHohTEK977egLOdkTs2FoBsRJAiSC7WAF1clDwy9THhPsI4GgLv0d4Zhu8dxHCT6z3um4RLabgNx9m1czkRxZnGRyX43CRRLIN6UjNUmLW8qOO74lvVWDTSBJtdntLWpIUUWyBoSX3eI6b-8zW70UUG7ry9ji0HzLJFDnIuqo7eMJENh1US3lcWri9O6I2gTdRHictkTIiEC1xPvwPjCkEMhQ_AmIjOJ6ySmM5Y4w9FY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBD4Bx63ZCYTmjC2G8BHRBWVT4kdfxPVnGeLMGCvc4eYic1SlUkEYpfaBPbaS5bsTZ181ojJkkzUW9kMgBWgzmmdBnA8ke8NmHnm3ep0eTcICYiuMr8OEc3hSz0ALcPpaq9pgJ3aRBb1tk605pFE0L2qBgMYmSztthc3z1hXhi2JHxyGVs0IXBZt5WIHbGHvqUYkQtAnkQqv4A2n1ps1Eu40hTkMtIHR0kUVhqS_zLSHp3-OvXv5LHWbVvDAR7g1q8BXaM38pulrZ4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB38FRqHDx4xyAHsHoP4LO6HiMyCq-vKpl2uZ8RZ87fSSyC1U5LZmRh3YFU7fqCVPjQOE3K8W2molyGecl69ruVjSPPzyJID6EE5krNFk-x-V8OZRy9CKchrLTlDxQNZ48LbIAreVVSj0EiM5-TuConJhjtKAFD7PId8DOGqPre22LQHeEMGQnPIeAPC_vy5jvVRS8DajLmIaOrRI1kzmdBwf_ENxsSGQx81bxJxLuSWHqaZm2iUj0L1DGWyfQCeO8GHuZJJugLYCU"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10 flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Apple TV+</h2>
        <a href="#" className="text-[#0066cc] hover:underline flex items-center text-lg">
          Explorar todos los títulos <ChevronRight size={18} className="ml-0.5" />
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto px-10 no-scrollbar pb-10 snap-x">
        {shows.map((show, i) => (
          <div key={i} className="flex-none w-[300px] md:w-[400px] aspect-video bg-[#f5f5f7] rounded-xl overflow-hidden shadow-lg relative group snap-center">
            <img 
              src={show} 
              alt="TV Show" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-[#1d1d1f] px-6 py-2 rounded-full font-bold text-sm hover:bg-white/90 transition-colors">
                Ver ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const sections = [
    {
      title: "Explorar",
      links: ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV y Casa"]
    },
    {
      title: "Servicios",
      links: ["Apple Music", "Apple TV+", "Apple Arcade", "iCloud", "Apple One"]
    },
    {
      title: "Cuentas",
      links: ["Administrar tu Apple ID", "Cuenta de iCloud.com"]
    },
    {
      title: "Para la Empresa",
      links: ["Apple y la Empresa", "Comprar para tu empresa"]
    },
    {
      title: "Valores de Apple",
      links: ["Accesibilidad", "Medio Ambiente", "Privacidad"]
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] pt-8 pb-12">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="border-b border-[#d2d2d7] pb-6 mb-6 text-[12px] leading-relaxed space-y-4">
          <p>
            1. El valor de canje varía según la condición, el año y la configuración del dispositivo que entregues. Debes ser mayor de edad. No todos los dispositivos son elegibles para recibir crédito. Apple o sus socios de canje se reservan el derecho de rechazar o limitar cualquier transacción de canje por cualquier motivo. El valor de tu dispositivo actual se puede aplicar a la compra de un nuevo dispositivo Apple. Se pueden aplicar términos adicionales de Apple o de los socios de canje de Apple.
          </p>
          <p>
            La disponibilidad de las aplicaciones está sujeta a cambios. Algunos títulos de Apple TV+ estarán disponibles a finales de este año.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2 text-[12px]">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline hover:text-[#1d1d1f] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#d2d2d7] text-[12px]">
          <p className="mb-4">Más formas de comprar: <a href="#" className="text-[#0066cc] hover:underline">Busca un distribuidor</a> cerca de ti.</p>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-4">
              <span>Copyright © 2024 Apple Inc. Todos los derechos reservados.</span>
              <div className="flex flex-wrap gap-x-4">
                {["Política de privacidad", "Uso de cookies", "Condiciones de uso", "Ventas y reembolsos", "Avisos legales", "Mapa del sitio"].map((link) => (
                  <a key={link} href="#" className="hover:underline">{link}</a>
                ))}
              </div>
            </div>
            <a href="#" className="hover:underline text-[#1d1d1f]">Colombia</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-12">
        <Hero 
          title="MacBook Pro" 
          subtitle="Mente brillante. M3 para todo." 
          dark 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCn7MJzwwjW5SQu7bSD6-ikdL-A7vX5yRmHUrDeIMO5iI24JRT6rcz-KRissxiWYjwNJWOaXrcn2RUnB1OxRCaNzxHSEfD88CQP406IkwJ7sDFIfYIs4yIp3X-ZVSibIvdNdcFnSToOCgd8MYlqRZX_6red9tA9LYr6LmtlpixDbTzytsqM8DA7aud_Yzl95YOnF-qQxx6DA7cSLsA7DLt7_gX-jD-tBICB1UBTkY_fOvhrxLc5xcYyp7M8wKJoKEBS-bsNkNFL7DY"
          imageAlt="MacBook Pro M3"
        />
        <Hero 
          title="iPhone 15 Pro" 
          subtitle="Titanio. Tan fuerte. Tan ligero. Tan Pro." 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCdKMpdf5UfKmGEJxTpQP42kdbq28lTYwDrdFXdNf07i93gdVv4RDi-si9fuGMKcSJLdKe9vkt9awqmumK1FtGNlYUaMvU5nQnA1SSmuc_FMYGC33BMRllE6nKnSVie1T1DL8TEqCMuuB-S0s-vdvQUUI0dfJ0AsUkV8Jqqb40Zq2bIek4s7g2kKx0Igw5QXeF9O-UrIwayReeUv6A8f8yBs5B5gFHvw-iNtGwrsC4Bhh-3hUDoZlUxcLnSNAE7SvU7SE6ahYUtaBg"
          imageAlt="iPhone 15 Pro Titanium"
        />
        <Hero 
          title="iPad Air" 
          subtitle="Dos tamaños. Chip M2. Posibilidades infinitas." 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDdz1czjlXwOhgFSkzRvrcXGBAKzGsF-ge3eRlzkL1HNQpt6Y4Z6HtMkbch5W4ebNjdW5NDVwFfdPBHmfAUVB1tlhke9uh40iJGUF7x7oEKE69AfZogl_1L9_yHZa_A7Hr4oZ0GWKH3-7AC4P-mJX474JbSHwmxHsC-Yd2cXsdgrgtN9D-AjnFLBGiDRJk7chjJdeNDmc86oV8f7tmGf5sHv-y0fsU7RWZktzQwAq_B1o7kNkOtxbtSx5Vub4y7XhJaXCA-eLP-9kM"
          imageAlt="iPad Air M2"
        />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white">
          <GridItem 
            title="AirPods Max" 
            subtitle="Sonido de alta fidelidad. Diseño exquisito." 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuChvgxzVQJmHN-rt2YUM6R8bEkGvg6bqsnV6BD8uJbgTOmKG2wXx8ganr62J4_D6uLR5DFkNnxDSEch53mERNDxU5mXthg1x8Um7rtLZ3ZWE0xbBldIo3UYqtMY6j3d7Xe0BncnN51MEEkrRqSrx0tkGlpFcuHB92h-xjz-rb777dfhx3SiuSy_OGfbp9jwlrb4Q9ytRrJx2R2BHhaDCq1kyl-dn_Y_j8n9VhwaP6Bo28A3Ny4McYa2EUj-aarQ41sw6QYQh2g5pEk"
            imageAlt="AirPods Max"
          />
          <div className="relative h-[500px] md:h-[600px] bg-black overflow-hidden flex flex-col items-center justify-center text-center px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="z-10"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">50 años de<br/>pensar diferente.</h2>
              <p className="text-lg text-white/80 mt-4 max-w-sm mx-auto">Celebra cinco décadas de innovación y creatividad que cambiaron el mundo.</p>
              <a href="#" className="mt-6 inline-flex items-center text-white hover:underline text-lg">
                Ver el tributo <ChevronRight size={18} className="ml-0.5" />
              </a>
            </motion.div>
            <div className="absolute inset-0 opacity-40">
              <div className="w-full h-full bg-gradient-to-tr from-blue-900 via-purple-900 to-red-900"></div>
            </div>
          </div>
          <GridItem 
            title="MacBook Air" 
            subtitle="Superligera. Superpotente. Superchip M3." 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZ1FT3D3EFlfWf72cc9UCQE9yxFRHp2fE-wyZZHLOlI9qWqmmTct-AmhIBa7v-O8-3X1SaYuip9KGIfY540jQ4rbdT9cC8x4FJNgwQdvAcbm6ipqoJKAXg_dkB_atazSa-RE5FeVBQ3mhXWnJ4DDAYx1Fl4P1oeFTQ5vFRb8zwr5i42zU-P9_UnmyQNMMj_h_3b-sT5VoATOy4e4epgUz7F6HwzWgVqs5qrtacLWfdTtDifgHHL7TUifBmOAsXTQioatCEYU3oiI"
            imageAlt="MacBook Air M3"
          />
          <GridItem 
            logo 
            tag="Series 11" 
            subtitle="Más inteligente. Más brillante. Más capaz." 
            dark 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGGUOSvrGguDa-Xx0lDsN1ilvcLsDp-0x40f6puBZa282TnQUFkGa4yFSF7enHz0wneC1Ohiq7I4o8cy4bfO_BgtuTq7hfJ_J77eo36UCUsCRf1WaMsYhIU2R-12duiLrgV-as0g2MpgEH5e34EOhVX72cD1RlSnfu-qkPwHDFRxqvDWaHqD7iDB9OHh6R4zCifH6680rnTltLNMsuirFC5Nnid8LKAGBTdS8E0sc4W4KvGpwqa-yIEuRtcndlYm6YdCdET32lOQ"
            imageAlt="Apple Watch Series 11"
          />
          <GridItem 
            title="iPad Pro" 
            subtitle="Increíblemente delgado. Imposiblemente potente." 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ELmp1Bgx50gkpvPF6ewoY6q0AivA9-1v2NqsSPm2CI2KMrtN9n8itu1mOHD62KqRZzRpVhWfsjc7sNLti76ZzjoEqik8Dg2rk4vdOTTLWFSIL8Ay03LOl1TjljwGn9eYMQQZgOt08f-MGVdJgqJrCqrUurKEqh7Aj1OnpLl3qdZd2bqsAz0zfhUlXA6JfwlW27g2qxphC97IX2X4qXKYZIhl8WmlRgkzybFcPdiRY-9DibG_BDwwFpC-1II2sBJvDe5ELhMH3dE"
            imageAlt="iPad Pro"
          />
          <GridItem 
            title="AirPods Pro" 
            subtitle="Audio adaptativo. Ahora en todas partes." 
            dark 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBlamplgI8N30bkMc6HP25YtAsLxvVkj8kQrVM3EH1cJzqT59VC0-iItUL7ogEI1f5KJgAhiilo1fOUPnwRxdRcPKGqexenzDK37OJ_IoLlJNDvwoxR1FJVQkyOzqJxDV-0xnTxNGx-dD5bhvDMdD2AETgaphm7Cthf_vzwGh7UU5QjpWOI11gz9ocrqX2mgwEaD3GDYy_sXvV4BR7gXqbmvckOotvxuhTMkOsvHas6Bk2Dqsu1tky9zeKoxqh9qLG91Xdik_GNWHM"
            imageAlt="AirPods Pro"
          />
        </section>

        <TVCarousel />
      </main>
      <Footer />
    </div>
  );
}
