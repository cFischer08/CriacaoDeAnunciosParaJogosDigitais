import ImageWithFallback from "./ImageWithFallback";

const resources = [
  {
    title: "Meta Ads Manager",
    description: "Gerenciador de anúncios do Facebook e Instagram.",
    href: "https://adsmanager.facebook.com/adsmanager/manage/campaigns",
    category: "Ferramenta",
    image: "/images/LogoMeta.webp",
    imageAlt: "Imagem do Meta Ads Manager",
  },
  {
    title: "Google Ads",
    description: "Gerenciador de anúncios do Google, YouTube e parceiros.",
    href: "https://ads.google.com/",
    category: "Ferramenta",
    image: "/images/Google_Ads_Logo.webp",
    imageAlt: "Imagem do Google Ads",
  },
  {
    title: "Copywriter para Meta Ads",
    description: "GPT especializado em anúncios para Facebook e Instagram.",
    href: "https://chatgpt.com/g/g-68515cd4e4508191b8887d1f501f7889-copywriter-especialista-em-meta-ads",
    category: "Ferramenta",
    image: "/images/ChatGPT-Logo.webp",
    imageAlt: "Imagem do ChatGPT",
  },
];

const games = [
  {
    title: "Onikura",
    href: "https://store.steampowered.com/app/3008640/Onikura/?l=portuguese",
    image: "/images/onikura.jpg",
    imageAlt: "Imagem do jogo Onikura",
  },
  {
    title: "9 Kings",
    href: "https://store.steampowered.com/app/2784470/9_Kings/",
    image: "/images/9-kings.jpeg",
    imageAlt: "Imagem do jogo 9 Kings",
  },
  {
    title: "Super Mombo Quest",
    href: "https://store.steampowered.com/app/1262040/Super_Mombo_Quest/?l=portuguese",
    image: "/images/super-mombo-quest.jpeg",
    imageAlt: "Imagem do jogo Super Mombo Quest",
  },
  {
    title: "World of Tanks",
    href: "https://store.steampowered.com/app/1407200/World_of_Tanks/?l=portuguese",
    image: "/images/world-of-tanks.jpeg",
    imageAlt: "Imagem do jogo World of Tanks",
  },
  {
    title: "Hollow Knight: Silksong",
    href: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
    image: "/images/hollow-knight-silksong.avif",
    imageAlt: "Imagem do jogo Hollow Knight Silksong",
  },
  {
    title: "Hollow Knight",
    href: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    image: "/images/hollow-knight.jpg",
    imageAlt: "Imagem do jogo Hollow Knight",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function ResourceCard({
  title,
  description,
  href,
  category,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  href: string;
  category: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
    >
      <div className="relative aspect-video shrink-0 bg-zinc-200 dark:bg-zinc-800">
        <ImageWithFallback
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {category}
        </span>
        <h3 className="text-lg font-semibold group-hover:underline">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <span className="mt-5 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Acessar recurso ↗
        </span>
      </div>
    </a>
  );
}

function GameCard({
  title,
  href,
  image,
  imageAlt,
}: {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
    >
      <div className="relative aspect-video shrink-0 bg-zinc-200 dark:bg-zinc-800">
        <ImageWithFallback
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold group-hover:underline">{title}</h3>
        <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Acessar página do jogo ↗
        </p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <ImageWithFallback
                src="/images/AvancoMarketing.jpeg"
                alt="Logo da atividade"
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="font-bold">Marketing de Jogos</p>
              <p className="text-xs text-zinc-500">Material de apoio</p>
            </div>
          </a>

          <a
            href="https://avancomarketing.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-zinc-600 hover:text-blue-600 dark:text-zinc-300"
          >
            Avanço Marketing ↗
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <section className="mb-16">
          <div className="relative mb-8 aspect-16/5 overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 sm:aspect-16/3">
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                Guia de recursos
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-bold text-white sm:text-5xl">
                Criação de Anúncios para Jogos Digitais
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-200 sm:text-lg sm:leading-8">
                Principais ferramentas para veicular seus anúncios e alcançar o seu público ideal.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading
            eyebrow="Materiais e ferramentas"
            title="Comece por aqui"
            description="Acesse os recursos necessários para pesquisar, definir a persona e organizar a campanha de marketing."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Etapa 1</p>
              <h3 className="mt-2 font-bold">Pesquise o público</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Descubra tendências e entenda a persona.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Etapa 2</p>
              <h3 className="mt-2 font-bold">Planeje a campanha</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Defina metas, canais, orçamento e cronograma.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Etapa 3</p>
              <h3 className="mt-2 font-bold">Analise os resultados</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Compare os indicadores e justifique as decisões.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading
            eyebrow="Referências da atividade"
            title="Jogos mencionados no slide"
            description="Explore os jogos citados durante a apresentação para observar gênero, público, apresentação visual, avaliações e posicionamento."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading
            eyebrow="Sobre o projeto"
            title="Avanço Marketing"
            description="Conheça a empresa e acesse o perfil profissional do responsável pelo material."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <a
              href="https://avancomarketing.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-16/7 shrink-0 bg-zinc-200 dark:bg-zinc-800">
                <ImageWithFallback
                  src="/images/AvancoMarketing.jpeg"
                  alt="Imagem do site da Avanço Marketing"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold group-hover:underline">Site da empresa</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Conheça a Avanço Marketing.
                </p>
                <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
                  avancomarketing.com.br ↗
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/celso-fischer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-16/7 shrink-0 bg-zinc-200 dark:bg-zinc-800">
                <ImageWithFallback
                  src="/images/Celso-Fischer.jpeg"
                  alt="Imagem do perfil profissional no LinkedIn"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold group-hover:underline">
                  LinkedIn de Celso Fischer Neto
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Acesse o perfil profissional.
                </p>
                <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
                  Ver perfil no LinkedIn ↗
                </p>
              </div>
            </a>
          </div>
        </section>

        <section className="relative mb-0 overflow-hidden rounded-3xl bg-zinc-900 text-white">
          <div className="relative aspect-16/5 min-h-64">
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 flex flex-col justify-center p-7 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                Sua campanha começa aqui
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold sm:text-4xl">
                Transforme ideias em uma estratégia de marketing.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-200">
                Escolha um jogo, conheça seu público e planeje como utilizar o orçamento de R$ 5.000 para alcançar seus objetivos.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1iUqScEp2A0aMHlyMK_a6ZLo4T1VttMluf_0b2Msbm4E/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit rounded-xl bg-white px-5 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                Abrir planilha da atividade ↗
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 flex flex-col justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row dark:border-zinc-800">
          <p>Material de apoio • Marketing de Jogos Digitais</p>
          <a
            href="https://www.linkedin.com/in/celso-fischer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Celso Fischer Neto · LinkedIn ↗
          </a>
        </footer>
      </main>
    </div>
  );
}
