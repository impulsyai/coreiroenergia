// ============================================================
//  CORDEIRO ENERGIA — config.js
//  Hub de Soluções Energéticas & Engenharia Solar em Minas Gerais
// ============================================================

const siteConfig = {
  brand: {
    name: "Cordeiro Energia",
    groupName: "Grupo Cordeiro Energia",
    tagline: "Energia solar inteligente para reduzir seus custos.",
    subheadline: "Projetos fotovoltaicos, manutenção, armazenamento e mobilidade elétrica para residências, empresas e propriedades rurais.",
  },

  contacts: {
    whatsappMatriz: "5538997350343",          // (38) 9 9735-0343 (Curvelo / Matriz)
    whatsappSecundario: "5538992605508",      // (38) 9 9260-5508 (Montes Claros)
    whatsappSac: "5538998506608",             // (38) 9 9850-6608 (SAC)
    email: "comercial@cordeiroenergia.com.br",
    instagram: "https://www.instagram.com/cordeiroenergia/",
    facebook: "https://www.facebook.com/cordeiroenergia",
    googleMapsLink: "https://maps.google.com/?cid=14379247900480255548",
    
    addresses: {
      matriz: {
        city: "Curvelo - MG",
        address: "Rua Bandeirantes, 28 - Bairro Bela Vista, Curvelo/MG — CEP 35790-000",
        hours: "Segunda a Sexta: 07:30 às 18:00 | Sábado: 08:00 às 12:00",
        phone: "(38) 9 9735-0343"
      },
      eletroposto: {
        city: "Curvelo - MG (CoenergyGO)",
        address: "Av. Bias Fortes, nº 1922 - Curvelo/MG",
        hours: "Ponto de recarga para veículos elétricos e híbridos",
        phone: "(38) 9 9735-0343"
      },
      montesClaros: {
        city: "Montes Claros - MG",
        address: "Atendimento comercial e técnico para todo o Norte de Minas",
        hours: "Segunda a Sexta: 08:00 às 18:00",
        phone: "(38) 9 9260-5508"
      },
      jaiba: {
        city: "Jaíba - MG",
        address: "Atendimento regional especializado no agronegócio e irrigação",
        hours: "Segunda a Sexta: 08:00 às 18:00",
        phone: "(38) 9 9735-0343"
      }
    }
  },

  pillars: [
    {
      title: "Engenharia Especializada",
      desc: "Projetos desenvolvidos e acompanhados por engenheiros credenciados no CREA-MG, assegurando segurança estrutural e elétrica."
    },
    {
      title: "Atendimento Regional",
      desc: "Presença física com matriz em Curvelo e atuação direta em Montes Claros, Jaíba e cidades vizinhas de Minas Gerais."
    },
    {
      title: "Projetos Personalizados",
      desc: "Dimensionamento sob medida para o perfil real de consumo da sua casa, comércio, indústria ou propriedade rural."
    },
    {
      title: "Acompanhamento Técnico",
      desc: "Suporte pós-venda permanente, monitoramento de geração e serviços especializados de operação e manutenção (O&M)."
    }
  ],

  divisions: [
    {
      id: "geracao",
      name: "Cordeiro Energia",
      subtitle: "Projetos e Instalação Fotovoltaica",
      description: "Engenharia completa para geração própria de energia em residências, empresas, indústrias e propriedades rurais. Redução significativa da dependência da rede elétrica e previsibilidade financeira.",
      image: "assets/rooftop-commercial.jpg",
      features: [
        "Sistemas conectados à rede (On-Grid) e sistemas isolados",
        "Instalações em telhados cerâmicos, metálicos e usinas de solo",
        "Equipamentos homologados e certificados pelo INMETRO",
        "Homologação e aprovação técnica completa junto à CEMIG"
      ]
    },
    {
      id: "service",
      name: "Cordeiro Service",
      subtitle: "Operação, Manutenção & Limpeza Técnica",
      description: "Divisão dedicada à preservação da vida útil e máxima eficiência dos sistemas fotovoltaicos. Realizamos manutenção preventiva, limpeza técnica dos módulos e diagnóstico elétrico.",
      image: "assets/service-maintenance.jpg",
      features: [
        "Lavagem técnica com água desmineralizada e escovas adequadas",
        "Monitoramento contínuo de desempenho e identificação de falhas",
        "Inspeções periódicas de conexões e inversores",
        "Atendimento para sistemas instalados pela Cordeiro ou por terceiros"
      ]
    },
    {
      id: "bess",
      name: "Sistemas BESS",
      subtitle: "Armazenamento de Energia em Baterias",
      description: "Soluções avançadas para armazenar a energia gerada durante o dia. Permite utilizar energia em horários de pico, protege contra oscilações da rede e garante autonomia ininterrupta para operações críticas.",
      image: "assets/bess-industrial.jpg",
      features: [
        "Autonomia durante quedas e instabilidades da rede elétrica",
        "Deslocamento estratégico do consumo no horário de ponta",
        "Baterias de lítio de alta densidade e segurança operacional",
        "Ideal para clínicas, indústrias, comércios e fazendas"
      ]
    },
    {
      id: "fasttrack",
      name: "Fast Track CEMIG",
      subtitle: "Agilidade na Aprovação de Projetos",
      description: "Fluxo técnico otimizado para acelerar a aprovação e implantação de sistemas fotovoltaicos de pequeno porte (até 7,5 kW), reduzindo burocracias e prazos de liberação.",
      image: "assets/solar-farm-ground.jpg",
      features: [
        "Processo desburocratizado junto à concessionária",
        "Menor tempo de espera entre o projeto e a conexão à rede",
        "Documentação técnica e ART conduzidas por engenheiros"
      ]
    },
    {
      id: "coenergy",
      name: "Coenergy",
      subtitle: "Energia Solar por Assinatura",
      description: "Solução prática para quem deseja economizar na conta de luz sem necessidade de obras, compra de equipamentos ou reformas no imóvel. A energia é gerada em fazendas solares e creditada na sua conta CEMIG.",
      image: "assets/solar-farm-ground.jpg",
      features: [
        "Sem necessidade de instalar placas ou furar telhados",
        "Sem investimento inicial em equipamentos",
        "Desconto aplicado diretamente na sua fatura da CEMIG",
        "Ideal para imóveis alugados, condomínios e pequenos comércios"
      ]
    },
    {
      id: "coenergygo",
      name: "CoenergyGO",
      subtitle: "Mobilidade Elétrica & Eletropostos",
      description: "Infraestrutura de recarga para veículos elétricos e híbridos plug-in, promovendo a mobilidade sustentável no interior de Minas Gerais.",
      image: "assets/ev-charging.jpg",
      features: [
        "Ponto de recarga em Curvelo: Av. Bias Fortes, nº 1922",
        "Recargas práticas, seguras e com energia renovável",
        "Projetos de carregadores residenciais e corporativos dedicados"
      ]
    }
  ],

  realProjects: [
    {
      client: "Mercearia Nivete",
      location: "Curvelo - MG",
      details: "Instalação comercial sobre cobertura metálica, reduzindo o custo operacional de refrigeração.",
      type: "Comercial"
    },
    {
      client: "Mercearia Robinho",
      location: "Corinto - MG",
      details: "Sistema de alta potência dimensionado para demanda comercial e abastecimento contínuo.",
      type: "Comercial"
    },
    {
      client: "Cooperativa de Consumo CMM",
      location: "Três Marias - MG",
      details: "Projeto corporativo de grande porte para compensação energética compartilhada.",
      type: "Corporativo"
    },
    {
      client: "Distribuidora Curvelo",
      location: "Curvelo - MG",
      details: "Usina solar dimensionada para centro logístico e câmaras de estocagem.",
      type: "Comercial"
    }
  ],

  faqs: [
    {
      question: "Qual a diferença entre instalar um sistema próprio e a assinatura Coenergy?",
      answer: "No **sistema próprio (Cordeiro Energia)**, os painéis fotovoltaicos são instalados no telhado ou terreno do seu imóvel. Você passa a gerar sua própria energia e conquista independência a longo prazo. Na **assinatura (Coenergy)**, você não realiza nenhuma obra nem instala placas: a energia é gerada em usinas solares da Cordeiro e os créditos de desconto são aplicados diretamente na sua conta de luz da CEMIG, sem investimento inicial."
    },
    {
      question: "Como funciona a manutenção de uma usina solar?",
      answer: "A poeira, folhas e poluição acumuladas sobre os painéis solares reduzem a captação de luminosidade e diminuem a geração de energia ao longo do tempo. A **Cordeiro Service** oferece lavagem técnica com ferramentas adequadas para não arranhar os vidros solares, além de verificação de cabeamento, inspeção de inversores e testes de segurança elétrica."
    },
    {
      question: "O que é o sistema BESS e quando ele é recomendado?",
      answer: "BESS (Battery Energy Storage System) é um sistema de baterias de alta performance que armazena a energia solar gerada durante o dia para ser usada nos momentos em que a tarifa é mais alta ou quando há interrupção no fornecimento da rede da concessionária. É altamente recomendado para negócios e residências que não podem sofrer com quedas de energia, como clínicas, supermercados e fazendas com sistemas de irrigação."
    },
    {
      question: "O sistema solar continua gerando energia em dias nublados ou chuvosos?",
      answer: "Sim. A tecnologia fotovoltaica necessita de irradiação solar (luz), e não de calor. Mesmo em dias com nuvens ou chuva branda, os painéis continuam gerando eletricidade, ainda que em intensidade proporcional à claridade do dia."
    },
    {
      question: "Quais regiões são atendidas pela Cordeiro Energia?",
      answer: "Nossa sede principal está localizada em Curvelo/MG, com atuação direta e frequente em Montes Claros, Jaíba, Diamantina, Corinto, Três Marias, Sete Lagoas e em diversos outros municípios de Minas Gerais atendidos pela CEMIG."
    }
  ]
};
