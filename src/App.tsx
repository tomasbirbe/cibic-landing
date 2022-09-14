import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

export default function App() {
  return (
    <>
      <nav>
        <div className=" bg-gray-100 h-[40px] grid place-items-center">
          <p className=" text-[#43a697] font-bold text-[14px] leading-none">
            Sé parte de nuestro Equipo
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 h-[44px] border-b">
          <a>
            <RiLinkedinBoxFill className="text-gray-400" size="23px" />
          </a>
          <a>
            <FaYoutube className="text-gray-400" size="23px" />
          </a>
        </div>
        <ul>
          <li>Institucional</li>
          <li>C. de atencion</li>
          <li>Pacientes</li>
          <li>Medicos</li>
          <li>Heritas</li>
          <li>Lab colegas</li>
          <li>Mi cibic</li>
        </ul>
      </nav>
      <header />
      <main>
        <section>
          cards
          <article>pacientes</article>
          <article>mi cibic</article>
          <article>heritas</article>
        </section>
        <section>
          carroussel
          <article />
          <article />
          <article />
        </section>
      </main>
      <section>
        <article />
      </section>
      <section>
        cibic eco data
        <article />
        <article />
        <article />
      </section>
      <section>
        cibic niños
        <article />
        <article />
        <article />
      </section>
      <section>experiencia cibic - carroussel</section>
      <section>
        acreditaciones y certificaciones
        <article />
        <article />
        <article />
        <article />
        <article />
        <article />
      </section>
      <footer>
        <section>cibic laboratorios</section>
        <section>ultimas noticias</section>
        <section>contacto</section>
        <section>copyright</section>
      </footer>
    </>
  );
}
