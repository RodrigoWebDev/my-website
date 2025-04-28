import avatar from "../../images/avatar.jpg";

export const Hero = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={avatar} class="max-w-full w-[350px] rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold mb-4">Rodrigo Queiroz</h1>
          <h2 class="italic">
            Desenvolvedor Frontend React, React Native, Javascript, Typescript
          </h2>
          <p class="py-6">
            Estou no mercado de desenvolvimento de software desde 2017,
            autodidata, especializado em Frontend Web e mobile com React e React
            Native, e com conhecimentos em backend com Node.js. Tenho foco em
            criar soluções de alta performance e experiências de usuário
            excepcionais, integrando eficientemente as diferentes camadas de um
            projeto. Estou sempre em busca de inovação e pronto para agregar
            valor a equipes com soluções modernas e escaláveis. Aqui você
            encontra informações como minhas experiências profissionais,
            projetos, contato e entre outros.
          </p>
          <div class="flex flex-wrap">
            <a
              href="https://www.linkedin.com/in/rodrigo-queiroz-chagas"
              class="btn btn-primary mr-2"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://wa.me/5561998102827"
              class="btn btn-success mr-2"
              target="_blank"
            >
              Whats app
            </a>
            <a
              href="https://github.com/RodrigoWebDev"
              class="btn btn-secondary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
