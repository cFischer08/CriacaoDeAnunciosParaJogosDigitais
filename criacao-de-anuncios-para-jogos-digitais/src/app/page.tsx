import ImageWithFallback from "./ImageWithFallback";

type Resource = {
  title: string;
  description: string;
  href: string;
  category: string;
  image: string;
  imageAlt: string;
};

type Game = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  tag: string;
};

const resources: Resource[] = [
  {
    title: "Gerenciador de Anúncios da Meta",
    description:
      "Crie, configure e acompanhe campanhas para os posicionamentos da Meta, como Facebook e Instagram.",
    href: "https://adsmanager.facebook.com/adsmanager/manage/campaigns",
    category: "Ferramenta",
    image: "/images/LogoMeta.webp",
    imageAlt: "Logo da Meta",
  },
  {
    title: "Google Ads",
    description:
      "Plataforma para criar e gerenciar campanhas na Pesquisa Google, YouTube e outros espaços de publicidade do Google.",
    href: "https://ads.google.com/",
    category: "Ferramenta",
    image: "/images/Google_Ads_Logo.webp",
    imageAlt: "Logo do Google Ads",
  },
  {
    title: "Biblioteca de Anúncios da Meta",
    description:
      "Pesquise anúncios disponíveis na biblioteca para estudar criativos, textos, formatos e anunciantes.",
    href: "https://www.facebook.com/ads/library/",
    category: "Pesquisa de referências",
    image: "/images/LogoMeta.webp",
    imageAlt: "Logo da Meta",
  },
  {
    title: "Central de Transparência de Anúncios do Google",
    description:
      "Pesquise anunciantes e anúncios veiculados nas plataformas do Google, incluindo o YouTube. A disponibilidade de filtros e dados pode variar.",
    href: "https://adstransparency.google.com/?hl=pt-BR&region=BR",
    category: "Pesquisa de referências",
    image: "/images/Google_Ads_Logo.webp",
    imageAlt: "Logo do Google Ads",
  },
  {
    title: "Tipos de campanha do Google Ads",
    description:
      "Documentação oficial para entender as opções de campanha e escolher uma de acordo com o objetivo de marketing.",
    href: "https://support.google.com/google-ads/answer/2567043?hl=pt-BR",
    category: "Documentação oficial",
    image: "/images/Google_Ads_Logo.webp",
    imageAlt: "Logo do Google Ads",
  },
  {
    title: "Copywriter para Meta Ads",
    description:
      "Assistente de IA para ajudar a elaborar ideias de textos e chamadas de anúncios. Revise e adapte sempre o resultado ao jogo e ao público.",
    href: "https://chatgpt.com/g/g-68515cd4e4508191b8887d1f501f7889-copywriter-especialista-em-meta-ads",
    category: "Ferramenta de apoio",
    image: "/images/ChatGPT-Logo.webp",
    imageAlt: "Logo do ChatGPT",
  },
];

const games: Game[] = [
  {
    title: "Hollow Knight: Silksong",
    description:
      "Aventura de ação em um mundo interconectado, com exploração, combates desafiadores e habilidades que evoluem ao longo da jornada.",
    href: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
    image: "/images/silksong.avif",
    imageAlt: "Imagem do jogo Hollow Knight: Silksong",
    tag: "Indie Metroidvania",
  },
  {
    title: "Hades II",
    description:
      "Roguelike de ação com combates intensos, poderes divinos, combinações de habilidades e tentativas que oferecem novas possibilidades a cada jornada.",
    href: "https://store.steampowered.com/app/1145350/Hades_II/",
    image: "/images/hadesii.jpg",
    imageAlt: "Imagem do jogo Hades II",
    tag: "Roguelike de Ação",
  },
  {
    title: "Honkai: Star Rail",
    description:
      "RPG de fantasia científica com combates por turnos, personagens colecionáveis, exploração de mundos e uma história desenvolvida por atualizações.",
    href: "https://hsr.hoyoverse.com/ua2?utm_source=BR_google_US_search_NewA&hoyotrace_channel=ga_channel&gad_source=1&gad_campaignid=21212509582&gclid=CjwKCAjw3NHWBhANEiwAtpwId6cnOkmpIbZCArBgSDqOHEOPThTku3CQmXddvQ8GuG-Gq_DobHWY0xoCs9MQAvD_BwE",
    image: "/images/Honkai-Star-Rail.webp",
    imageAlt: "Imagem do jogo Honkai: Star Rail",
    tag: "RPG Gacha",
  },
  {
    title: "Valorant",
    description:
      "FPS tático competitivo que combina precisão, trabalho em equipe e agentes com habilidades únicas em partidas estratégicas.",
    href: "https://playvalorant.com/pt-br/",
    image: "/images/valorant.jpg",
    imageAlt: "Imagem do jogo Valorant",
    tag: "FPS Tático",
  },
  {
    title: "Zenless Zone Zero",
    description:
      "RPG de ação com combates dinâmicos, equipes de personagens com estilos próprios e uma ambientação urbana estilizada em um mundo de fantasia científica.",
    href: "https://store.steampowered.com/app/4162040/Zenless_Zone_Zero/",
    image: "/images/zzz.webp",
    imageAlt: "Imagem do jogo Zenless Zone Zero",
    tag: "Gacha RPG de Ação",
  },
  {
    title: "League of Legends",
    description:
      "MOBA competitivo em que duas equipes disputam objetivos estratégicos, combinando campeões com habilidades distintas, cooperação e tomada de decisões.",
    href: "https://www.leagueoflegends.com/pt-br/",
    image: "/images/lol.jpg",
    imageAlt: "Imagem do jogo League of Legends",
    tag: "MOBA",
  },
];

const metaObjectives = [
  {
    title: "Reconhecimento",
    description:
      "Apresentar o jogo a pessoas que talvez ainda não o conheçam e ampliar o alcance ou a lembrança da marca.",
    example: "Exemplo: divulgar o trailer de revelação de um jogo novo.",
  },
  {
    title: "Tráfego",
    description:
      "Levar pessoas a um destino, como uma página própria, uma página de jogo na Steam ou um site de pré-registro.",
    example: "Exemplo: gerar visitas à página do jogo.",
  },
  {
    title: "Engajamento",
    description:
      "Estimular interações, visualizações de vídeo ou conversas, conforme as opções disponíveis na configuração.",
    example: "Exemplo: promover um vídeo de gameplay ou iniciar conversas.",
  },
  {
    title: "Leads",
    description:
      "Conseguir contatos ou inscrições por meio de formulários ou de uma página de destino.",
    example: "Exemplo: cadastrar pessoas interessadas no teste beta.",
  },
  {
    title: "Promoção do app",
    description:
      "Promover instalações ou ações dentro de um aplicativo, quando o jogo é distribuído como app e a medição está configurada.",
    example: "Exemplo: incentivar a instalação de um jogo mobile.",
  },
  {
    title: "Vendas",
    description:
      "Buscar compras ou outras conversões definidas pelo anunciante, quando há destino e mensuração adequados.",
    example: "Exemplo: vender uma expansão ou uma moeda virtual pelo site ou app.",
  },
];

const googleGoals = [
  {
    title: "Vendas",
    description: "Buscar compras ou outras ações de valor, como a compra do jogo ou de uma expansão.",
  },
  {
    title: "Leads",
    description: "Conseguir inscrições, contatos ou cadastros, como uma lista de interessados em um beta.",
  },
  {
    title: "Tráfego do site",
    description: "Levar pessoas à página do jogo, à página de lançamento ou a uma página de pré-registro.",
  },
  {
    title: "Promoção de app",
    description: "Aumentar instalações, pré-registros ou ações no aplicativo, conforme a configuração.",
  },
  {
    title: "Alcance, visualizações e engajamentos do YouTube",
    description: "Divulgar trailers, teasers ou vídeos de gameplay para ampliar alcance e visualizações.",
  },
  {
    title: "Visitas a lojas locais e promoções",
    description: "Objetivo voltado a negócios com locais físicos; em geral, não é prioridade para divulgar um jogo digital.",
  },
  {
    title: "Criar campanha sem orientação",
    description: "Permite escolher manualmente o tipo de campanha, quando essa opção estiver disponível na interface.",
  },
];

const googleCampaignTypes = [
  {
    title: "Pesquisa",
    description:
      "Anúncios de texto que podem aparecer quando alguém pesquisa termos relacionados ao jogo, ao gênero ou ao lançamento.",
    use: "Útil para alcançar quem já procura informações sobre um jogo ou uma categoria.",
  },
  {
    title: "Performance Max",
    description:
      "Usa diferentes inventários do Google em uma mesma campanha e otimiza a entrega para as metas de conversão definidas.",
    use: "Exige objetivos e sinais de conversão bem pensados, além de bons recursos criativos.",
  },
  {
    title: "Geração de demanda",
    description:
      "Combina recursos de imagem e vídeo em superfícies visuais do Google, incluindo YouTube e Shorts, Discover e Gmail.",
    use: "Interessante para apresentar o jogo a públicos que ainda não estão pesquisando por ele.",
  },
  {
    title: "Vídeo",
    description:
      "Veicula criativos em vídeo no YouTube e em outros espaços elegíveis, de acordo com o subtipo e as configurações.",
    use: "Boa opção para trailers, teasers, gameplay e vídeos de atualização.",
  },
  {
    title: "Rede de Display",
    description:
      "Historicamente, exibe anúncios gráficos em sites e apps parceiros. As opções e o fluxo de criação estão mudando no Google Ads.",
    use: "Confira a interface atual: o Google está migrando campanhas de Display para Geração de demanda.",
  },
  {
    title: "Shopping",
    description:
      "Apresenta produtos de um feed do Merchant Center. Normalmente é mais indicado para produtos de catálogo do que para divulgar um jogo digital em si.",
    use: "Incluído para reconhecer o tipo de campanha mostrado nos slides; não costuma ser a primeira escolha para esse exercício.",
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
}: Resource) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
    >
      <div className="relative aspect-video shrink-0 bg-zinc-100 dark:bg-zinc-800">
        <ImageWithFallback
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-contain p-8 transition duration-300 group-hover:scale-[1.03]"
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
          Abrir recurso ↗
        </span>
      </div>
    </a>
  );
}

function InfoCard({
  title,
  description,
  detail,
}: {
  title: string;
  description: string;
  detail?: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      {detail ? (
        <p className="mt-3 rounded-lg bg-zinc-50 p-3 text-sm leading-6 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {detail}
        </p>
      ) : null}
    </article>
  );
}

function GameCard({
  title,
  description,
  href,
  image,
  imageAlt,
  tag,
}: Game) {
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
          {tag}
        </span>
        <h3 className="font-semibold group-hover:underline">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Abrir página do jogo ↗
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
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <ImageWithFallback
                src="/images/AvancoMarketing.jpeg"
                alt="Logo da Avanço Marketing"
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="font-bold">Criação de Anúncios para Jogos</p>
              <p className="text-xs text-zinc-500">Material de apoio • XX Semana de Tecnologia</p>
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

      <main id="inicio" className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <section className="mb-16">
          <div className="relative mb-8 overflow-hidden rounded-3xl bg-zinc-900 text-white">
            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-zinc-900/25" />
            <div className="relative flex min-h-80 flex-col justify-center p-6 sm:min-h-90 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                Guia prático do minicurso
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">
                Criação de Anúncios para Jogos Digitais
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-200 sm:text-lg sm:leading-8">
                Um material de consulta para planejar campanhas, conhecer as ferramentas de anúncios e escolher públicos, objetivos e formatos para divulgar jogos digitais.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#meta-ads" className="rounded-xl bg-white px-5 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200">
                  Explorar Meta Ads
                </a>
                <a href="#google-ads" className="rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                  Explorar Google Ads
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16" id="recursos">
          <SectionHeading
            eyebrow="Links úteis"
            title="Ferramentas e referências"
            description="Acesse as plataformas usadas no minicurso, consulte a documentação oficial e pesquise exemplos reais de anúncios antes de planejar sua própria campanha."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Dica: encontrar um jogo na biblioteca de anúncios confirma que há registros de anúncios associados ao anunciante, mas não significa necessariamente que toda campanha esteja ativa no Brasil neste momento. Confira país, período e identidade do anunciante.
          </p>
        </section>

        <section className="mb-16" id="escolha-plataforma">
          <SectionHeading
            eyebrow="Planejamento"
            title="Quando considerar cada plataforma?"
            description="A escolha depende do jogo, do público, do destino da campanha e do objetivo de marketing. Os exemplos abaixo são tendências para orientar o planejamento, não regras absolutas."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              title="Meta Ads: descoberta e alcance"
              description="Pode ser uma boa opção para jogos mobile, jogos gratuitos ou campanhas que precisam apresentar o produto a pessoas que ainda não o conhecem. Os criativos podem aparecer em ambientes como Facebook e Instagram."
              detail="Pense em vídeos curtos de gameplay, personagens, momentos surpreendentes e chamadas claras para conhecer ou instalar o jogo."
            />
            <InfoCard
              title="Google Ads: intenção e vídeo"
              description="Pode ser interessante para jogos de PC, multiplataforma ou jogos com atualizações contínuas. A Pesquisa pode alcançar quem já procura o jogo; o YouTube pode apresentar trailers, atualizações e gameplay."
              detail="Considere para onde o anúncio leva: página própria, página da loja, página de pré-registro ou página de uma atualização."
            />
          </div>
        </section>

        <section className="mb-16" id="meta-ads">
          <SectionHeading
            eyebrow="Parte 1 • Meta Ads"
            title="Preparar a conta e estruturar a campanha"
            description="O Gerenciador de Anúncios permite criar e gerenciar campanhas para os posicionamentos da Meta. Antes de começar, confira se você tem os acessos e ativos necessários."
          />
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <InfoCard
              title="1. Conta do Facebook"
              description="É a conta pessoal usada para acessar e administrar os ativos empresariais, respeitando as permissões da plataforma."
            />
            <InfoCard
              title="2. Página e portfólio empresarial"
              description="O portfólio empresarial ajuda a organizar os ativos e as permissões, como Página, conta do Instagram e conta de anúncios, conforme a configuração do negócio."
            />
            <InfoCard
              title="3. Conta de anúncios"
              description="É onde são configurados orçamento, campanhas, conjuntos, anúncios, cobrança e acompanhamento de resultados."
            />
          </div>

          <h3 className="mb-4 text-xl font-bold">Objetivos de campanha no Meta Ads</h3>
          <p className="mb-5 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Escolha o objetivo com base na ação que você quer incentivar. Os nomes e as opções exibidas podem mudar conforme a atualização da plataforma, o destino e as configurações da conta.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metaObjectives.map((objective) => (
              <InfoCard
                key={objective.title}
                title={objective.title}
                description={objective.description}
                detail={objective.example}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <InfoCard
              title="Públicos personalizados"
              description="Públicos formados a partir de interações ou dados disponíveis ao anunciante, usados em estratégias de remarketing e relacionamento quando a conta tem os recursos e as permissões necessários."
              detail="Exemplos dos slides: pessoas que entraram no site, assistiram a grande parte de um vídeo, interagiram com o Instagram ou Facebook, enviaram um formulário ou estão em uma lista de clientes."
            />
            <InfoCard
              title="Conjunto de anúncios"
              description="É o nível em que se definem configurações como orçamento e programação, público, localização, idade, posicionamentos e, conforme a campanha, evento de otimização."
              detail="Os campos disponíveis variam de acordo com o objetivo, o tipo de compra, o destino e a configuração selecionada."
            />
          </div>

          <div className="mt-5">
            <InfoCard
              title="Anúncio: a mensagem que o público vê"
              description="O anúncio reúne os criativos (imagem ou vídeo), texto principal, título, descrição quando aplicável, chamada para ação e destino, como site, página de loja ou outro canal permitido pela configuração."
              detail="O criativo deve mostrar rapidamente o que torna o jogo interessante. Evite prometer funcionalidades que não existem ou usar imagens que não representem o produto."
            />
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
            <h3 className="font-bold text-blue-950 dark:text-blue-100">A estrutura em três níveis</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl bg-white p-4 dark:bg-zinc-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Nível 1</p>
                <p className="mt-1 font-bold">Campanha</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Define o objetivo geral.</p>
              </div>
              <div className="rounded-xl bg-white p-4 dark:bg-zinc-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Nível 2</p>
                <p className="mt-1 font-bold">Conjunto de anúncios</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Organiza público, entrega, orçamento e programação conforme a configuração.</p>
              </div>
              <div className="rounded-xl bg-white p-4 dark:bg-zinc-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Nível 3</p>
                <p className="mt-1 font-bold">Anúncio</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Contém o criativo, a mensagem e o destino.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16" id="atividade-meta">
          <SectionHeading
            eyebrow="Atividade prática 1"
            title="Planeje campanhas no Meta Ads"
            description="Trabalhem em grupos de 2 a 4 pessoas. O objetivo é praticar o raciocínio de planejamento; sigam a orientação do professor para decidir se a configuração será feita como rascunho ou apenas como plano."
          />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-200">Briefing</span>
              <h3 className="mt-4 text-xl font-bold">Uma campanha para um jogo</h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                Escolham um jogo existente ou inventado e um cenário: lançamento, evento de atualização, aniversário do jogo ou lançamento de uma sequência.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-500">Orçamento fictício</p>
                  <p className="mt-1 text-2xl font-bold">R$ 2.000</p>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-500">Duração da campanha</p>
                  <p className="mt-1 text-2xl font-bold">7 dias</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                O orçamento é fictício para o exercício. Não publiquem anúncios nem adicionem forma de pagamento sem autorização explícita do responsável pela conta.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-bold">O que o grupo precisa entregar</h3>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <li><strong className="text-zinc-900 dark:text-zinc-100">1.</strong> Criar uma campanha planejada para cada integrante, com um objetivo diferente por campanha.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">2.</strong> Dividir os R$ 2.000 entre as campanhas como o grupo considerar adequado.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">3.</strong> Definir público, destino, formato de anúncio e ideia de criativo para cada campanha.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">4.</strong> Justificar as decisões e explicar qual resultado esperam obter.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-16" id="google-ads">
          <SectionHeading
            eyebrow="Parte 2 • Google Ads"
            title="Do objetivo ao tipo de campanha"
            description="No Google Ads, o objetivo descreve o resultado que se busca; o tipo de campanha define principalmente os formatos e os espaços em que os anúncios podem aparecer. A combinação correta depende do jogo e do destino escolhido."
          />
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <InfoCard
              title="1. Conta Google"
              description="Use uma conta Google que atenda aos requisitos atuais da plataforma e às regras de idade para administrar a publicidade."
            />
            <InfoCard
              title="2. Conta do Google Ads"
              description="É o espaço de criação e gerenciamento das campanhas, cobrança, configurações e relatórios."
            />
            <InfoCard
              title="3. Canal do YouTube"
              description="Para anúncios de vídeo, o criativo normalmente precisa estar hospedado no YouTube. Configure o canal e os acessos antes da atividade."
            />
          </div>

          <h3 className="mb-4 text-xl font-bold">Objetivos de campanha</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {googleGoals.map((goal) => (
              <InfoCard key={goal.title} title={goal.title} description={goal.description} />
            ))}
          </div>

          <h3 className="mb-4 mt-10 text-xl font-bold">Tipos de campanha apresentados nos slides</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {googleCampaignTypes.map((campaignType) => (
              <InfoCard
                key={campaignType.title}
                title={campaignType.title}
                description={campaignType.description}
                detail={campaignType.use}
              />
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Observação: o Google atualiza seus tipos e fluxos de campanha. A documentação oficial informa que as campanhas da Rede de Display estão migrando para Geração de demanda; confira quais opções aparecem na conta durante a demonstração.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard
              title="Grupo de anúncios"
              description="Agrupa anúncios e configurações de segmentação. Dependendo do tipo de campanha, pode envolver público, localizações, idiomas, posicionamentos, temas, palavras-chave ou outros critérios."
              detail="Nem todas as campanhas oferecem os mesmos campos. Use apenas as opções disponíveis no tipo escolhido."
            />
            <InfoCard
              title="Anúncio no Google Ads"
              description="Pode reunir vídeos, imagens, títulos, descrições, URL final, nome da empresa e recursos como sitelinks, conforme o formato."
              detail="A URL final deve levar a uma página relevante para a mensagem. Revise a experiência no celular e no computador antes de publicar."
            />
          </div>

          <div className="mt-5">
            <InfoCard
              title="Posição e classificação do anúncio"
              description="A posição não depende apenas de quem oferece o maior lance. O Google calcula uma classificação considerando fatores como lance, qualidade do anúncio e da página, contexto da pesquisa e impacto esperado dos recursos."
              detail="Lance é quanto você está disposto a pagar segundo a estratégia escolhida; qualidade e relevância ajudam a determinar se o anúncio é útil para aquela busca ou contexto."
            />
          </div>
        </section>

        <section className="mb-16" id="atividade-google">
          <SectionHeading
            eyebrow="Atividade prática 2"
            title="Planeje campanhas no Google Ads"
            description="A atividade segue a mesma lógica do exercício do Meta Ads, mas as decisões devem considerar os tipos de campanha e os espaços disponíveis no Google."
          />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-200">Briefing</span>
              <h3 className="mt-4 text-xl font-bold">Escolha o jogo e a ocasião</h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                Em grupos de 2 a 4 pessoas, escolham um jogo e um cenário: lançamento, atualização, aniversário ou lançamento de uma sequência. Considerem se faz mais sentido aparecer na Pesquisa, em vídeo no YouTube ou em outro espaço do Google.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-500">Orçamento fictício</p>
                  <p className="mt-1 text-2xl font-bold">R$ 4.000</p>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-500">Duração</p>
                  <p className="mt-1 text-2xl font-bold">7 dias</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-bold">O que o grupo precisa entregar</h3>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <li><strong className="text-zinc-900 dark:text-zinc-100">1.</strong> Planejar uma campanha para cada integrante, escolhendo objetivos diferentes.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">2.</strong> Dividir o orçamento fictício entre as campanhas.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">3.</strong> Escolher o tipo de campanha, público, criativo e página de destino mais coerentes.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">4.</strong> Explicar por que escolheram cada configuração e qual resultado esperam obter.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-16" id="roteiro">
          <SectionHeading
            eyebrow="Checklist de campanha"
            title="Antes de apresentar, confira estes pontos"
            description="Use o roteiro como uma lista de revisão. Uma campanha precisa conectar objetivo, público, mensagem, destino e orçamento — não apenas preencher os campos da plataforma."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Objetivo" description="A ação desejada está clara e combina com o momento do jogo?" />
            <InfoCard title="Público" description="O grupo consegue explicar quem quer alcançar e por quê?" />
            <InfoCard title="Criativo e mensagem" description="O vídeo ou imagem mostra o diferencial do jogo e tem uma chamada clara?" />
            <InfoCard title="Destino" description="A página para onde a pessoa será enviada corresponde à promessa do anúncio?" />
            <InfoCard title="Orçamento e período" description="A soma das campanhas fecha em R$ 4.000 para sete dias?" />
            <InfoCard title="Resultado esperado" description="O grupo definiu como avaliaria a campanha, por exemplo, visitas, visualizações, instalações ou cadastros?" />
          </div>
        </section>

        <section className="mb-16" id="jogos">
          <SectionHeading
            eyebrow="Referências para a atividade"
            title="Jogos para usar como estudo de caso"
            description="Escolha um dos exemplos abaixo ou traga outro jogo. Observe gênero, público, proposta de valor, identidade visual e o que um anúncio precisaria comunicar. Estes links são referências de produto, não confirmação de que os jogos estejam anunciando atualmente."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </section>

        <section className="mb-16" id="sobre">
          <SectionHeading
            eyebrow="Sobre o minicurso"
            title="Avanço Marketing"
            description="Este material complementa a apresentação da XX Semana de Tecnologia da Fatec Ourinhos e reúne links, conceitos e roteiros para continuar estudando depois do minicurso."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <a
              href="https://avancomarketing.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-video shrink-0 bg-zinc-100 dark:bg-zinc-800">
                <ImageWithFallback
                  src="/images/AvancoMarketing.jpeg"
                  alt="Imagem da Avanço Marketing"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold group-hover:underline">Site da Avanço Marketing</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Conheça a empresa.</p>
                <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">avancomarketing.com.br ↗</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/celso-fischer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-video shrink-0 bg-zinc-100 dark:bg-zinc-800">
                <ImageWithFallback
                  src="/images/Celso-Fischer.jpeg"
                  alt="Imagem do perfil profissional no LinkedIn"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold group-hover:underline">LinkedIn de Celso Fischer Neto</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Acesse o perfil profissional.</p>
                <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">Ver perfil no LinkedIn ↗</p>
              </div>
            </a>
          </div>
        </section>

        <section className="relative mb-0 overflow-hidden rounded-3xl bg-zinc-900 text-white">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/65 to-transparent" />
            <div className="relative flex min-h-70 flex-col justify-center p-7 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                Da ideia à campanha
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold sm:text-4xl">
                Um bom anúncio começa com uma boa estratégia.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-200">
                Escolha um jogo, entenda o público, defina o resultado desejado e conecte o criativo ao destino. Use as plataformas de forma responsável e revise tudo antes de publicar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#meta-ads" className="inline-flex w-fit rounded-xl bg-white px-5 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200">
                  Revisar Meta Ads ↑
                </a>
                <a href="#google-ads" className="inline-flex w-fit rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                  Revisar Google Ads ↑
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 flex flex-col justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row dark:border-zinc-800">
          <p>Material de apoio • Criação de Anúncios para Jogos Digitais</p>
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
