/*
  DADOS DOS JOGOS
  ================
  Para adicionar um novo jogo no site, copie um dos objetos abaixo,
  cole no final do array GAMES e troque os valores.

  Cada código dentro de "codes" tem:
    - code: o texto exato do código (copiado ao clicar)
    - reward: o que o código dá
    - status: "ativo" ou "expirado"
    - novo: true/false (mostra a etiqueta NOVO)
*/

const GAMES = [
  {
    slug: "anime-expeditions",
    name: "Anime Expeditions",
    tagline: "Tower defense com times de anime",
    emoji: "🗺️",
    cover: "https://tr.rbxcdn.com/180DAY-3b60f0e4096ab2cca5caa0276d297db8/500/280/Image/Jpeg/noFilter",
    color: "#FF3B3B",
    robloxUrl: "https://www.roblox.com/games/84515722934860/Anime-Expeditions",
    discordUrl: "https://discord.com/invite/animeexpeditions",
    lastUpdated: "2 de agosto de 2026",
    howTo: [
      "Abra o Anime Expeditions no Roblox.",
      "Toque no botão de três pontinhos (...) no canto superior esquerdo.",
      "Escolha a opção “Redeem Codes”.",
      "Cole o código na caixa de texto.",
      "Toque no botão verde “Redeem” para receber a recompensa."
    ],
    codes: [
      { code: "400mvisits", reward: "150 Trait Crystals, 90 Equipment Rerolls e 90 Stat Rerolls", status: "ativo", novo: true },
      { code: "300mvisits", reward: "150 Trait Crystals, 90 Equipment Rerolls e 90 Stat Rerolls", status: "ativo", novo: true },
      { code: "200klikes", reward: "150 Trait Crystals, 90 Equipment Rerolls e 90 Stat Rerolls", status: "ativo", novo: true },
      { code: "100mvisits", reward: "50 Trait Crystals, 25 Equipment Rerolls, 25 Stat Locks, 25 Stat Rerolls e 5.000 Gems", status: "ativo", novo: false },
      { code: "wfade", reward: "50 Trait Crystals, 25 Equipment Rerolls, 25 Stat Rerolls e 2.500 Gems", status: "ativo", novo: false },
      { code: "RELEASE", reward: "100 Trait Crystals e 2.500 Gems", status: "ativo", novo: false },
      { code: "100K!", reward: "50 Trait Crystals, 20 Stat Locks, 20 Stat Rerolls e 2.500 Gems", status: "ativo", novo: false },
      { code: "30KLIKES!", reward: "2.500 Gems", status: "ativo", novo: false },
      { code: "EXPEDITIONS", reward: "5.000 Gems (precisa ter desbloqueado o modo Expeditions, nível 20+)", status: "ativo", novo: false },
      { code: "SorryForBugs", reward: "25 Trait Crystals e 2.500 Gems", status: "ativo", novo: false },
      { code: "AE#1", reward: "5 Equipment Locks, 5 Equipment Rerolls, 5 Stat Locks, 5 Stat Rerolls e 1.000 Gems", status: "ativo", novo: false },
      { code: "EA", reward: "20 Trait Crystals e 2.500 Gems", status: "ativo", novo: false },
      { code: "EA+", reward: "30 Trait Crystals e 2.500 Gems (só quem comprou o acesso antecipado)", status: "ativo", novo: false },
      { code: "SorryForRestart", reward: "50 Trait Crystals", status: "expirado", novo: false },
      { code: "200KCCU", reward: "50 Trait Crystals, 10 Stat Locks, 10 Stat Rerolls e 2.500 Gems", status: "expirado", novo: false },
      { code: "1MGROUP!", reward: "Recompensa de marco de grupo", status: "expirado", novo: false },
      { code: "WeekendSurge", reward: "Recompensa de evento de fim de semana", status: "expirado", novo: false },
      { code: "sorryforguilds", reward: "Recompensa de compensação", status: "expirado", novo: false }
    ]
  },

  {
    slug: "blox-fruits",
    name: "Blox Fruits",
    tagline: "Aventura pirata inspirada em One Piece",
    emoji: "🍈",
    cover: "https://tr.rbxcdn.com/180DAY-d142678e2c044f2fe2090b412144cccc/500/280/Image/Jpeg/noFilter",
    color: "#3FA9FF",
    robloxUrl: "https://www.roblox.com/games/2753915549/Blox-Fruits",
    discordUrl: "",
    lastUpdated: "1 de agosto de 2026",
    howTo: [
      "Abra o Blox Fruits no Roblox.",
      "Toque no ícone de presente (🎁) perto da bússola.",
      "Cole o código na caixa de texto.",
      "Toque em “Redeem” para receber a recompensa."
    ],
    codes: [
      { code: "starcodeheo", reward: "2x XP por 20 minutos", status: "ativo", novo: true },
      { code: "EASTEREXP", reward: "2x XP por 20 minutos", status: "ativo", novo: true },
      { code: "Sub2Fer999", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "SUB2GAMERROBOT_RESET1", reward: "Reset de stats", status: "ativo", novo: false },
      { code: "Lightningabuse", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "KITT_RESET", reward: "Reset de stats", status: "ativo", novo: false },
      { code: "Sub2UncleKizaru", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "fudd10_v2", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "Fudd10", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "Bignews", reward: "Título “Big News” (cosmético)", status: "ativo", novo: false },
      { code: "kittgaming", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "Sub2CaptainMaui", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "Bluxxy", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "TheGreatAce", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "Axiore", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "StrawHatMaine", reward: "2x XP por 20 minutos", status: "ativo", novo: false },
      { code: "GAMER_ROBOT_1M", reward: "2x XP por 1h30", status: "expirado", novo: false },
      { code: "JULYUPDATE_RESET", reward: "Reset de stats", status: "expirado", novo: false }
    ]
  },

  {
    slug: "grow-a-garden",
    name: "Grow a Garden",
    tagline: "Simulador de jardinagem com mutações raras",
    emoji: "🌱",
    cover: "https://tr.rbxcdn.com/180DAY-24c1fa5e830a54e11a751e68e5077124/500/280/Image/Jpeg/noFilter",
    color: "#5CE65C",
    robloxUrl: "https://www.roblox.com/games/126884695634066/Grow-a-Garden",
    discordUrl: "",
    lastUpdated: "1 de agosto de 2026",
    howTo: [
      "Abra o Grow a Garden no Roblox.",
      "Toque na engrenagem (⚙️) e desça até “Redeem Codes”.",
      "Digite o código na caixa de texto.",
      "Toque em “Claim” para receber a recompensa."
    ],
    codes: [
      { code: "RDCAward", reward: "Cosmético: troféu do RDC", status: "ativo", novo: true },
      { code: "BEANORLEAVE10", reward: "Cosmético: câmara de feijão verde", status: "ativo", novo: false }
    ]
  },

  {
    slug: "blade-ball",
    name: "Blade Ball",
    tagline: "Desvie da bola, sobreviva e vire o campeão da arena",
    emoji: "⚔️",
    cover: "https://tr.rbxcdn.com/180DAY-43c63abc863eaf58623e5e25f4b55f6e/500/280/Image/Jpeg/noFilter",
    color: "#C64AFF",
    robloxUrl: "https://www.roblox.com/games/13772394625/Blade-Ball",
    discordUrl: "",
    lastUpdated: "1 de agosto de 2026",
    howTo: [
      "Abra o Blade Ball no Roblox.",
      "Toque em “Extra” no canto superior esquerdo.",
      "Escolha “Codes” no menu que abrir.",
      "Digite o código e toque no ícone de check (✓) para resgatar."
    ],
    codes: [
      { code: "4BVISITS", reward: "Skin de espada Bubble Wand", status: "ativo", novo: true },
      { code: "DUNGEONSRELEASE", reward: "50 Dungeon Runes", status: "ativo", novo: true },
      { code: "GIVEMELUCK", reward: "x4 de sorte por 10 minutos (no AFK World)", status: "ativo", novo: false },
      { code: "SUMMERSTARTSHERE", reward: "1 giro grátis na Roleta", status: "ativo", novo: false },
      { code: "GOODVSEVIL", reward: "1 giro grátis na Roleta", status: "ativo", novo: false },
      { code: "SHARKATTACK", reward: "1 giro grátis na Roleta", status: "ativo", novo: false },
      { code: "SORRY4DELAY", reward: "160 Coins", status: "expirado", novo: false },
      { code: "DELAYBALL", reward: "Skin de espada Midas Thorn", status: "expirado", novo: false },
      { code: "5BVISITS", reward: "Skin de espada comemorativa", status: "expirado", novo: false }
    ]
  },

  {
    slug: "steal-a-brainrot",
    name: "Steal a Brainrot",
    tagline: "Colecione, roube e negocie brainrots com outros jogadores",
    emoji: "🧠",
    cover: "https://tr.rbxcdn.com/180DAY-4ca7ace65f2423b66dfbf44e09fe8b69/500/280/Image/Jpeg/noFilter",
    color: "#7CFF3B",
    robloxUrl: "https://www.roblox.com/games/109983668079237/Steal-a-Brainrot",
    discordUrl: "",
    lastUpdated: "27 de julho de 2026",
    howTo: [
      "Abra o Steal a Brainrot no Roblox.",
      "Toque no botão “Codes” no lado esquerdo da tela.",
      "Digite o código na janela que abrir.",
      "Confirme para receber a recompensa."
    ],
    codes: [
      { code: "BESTBRAINROTEVER", reward: "Faz o brainrot secreto La Vacca Saturno Saturnita aparecer no Red Carpet (é preciso ter dinheiro suficiente pra comprá-lo antes de outros jogadores)", status: "ativo", novo: true },
      { code: "SUMMERUPD3", reward: "Rocketini Frostini ou Frullato Framingo", status: "expirado", novo: false },
      { code: "FREEOCTO555", reward: "Octo Lucky Block", status: "expirado", novo: false },
      { code: "CODESAREREAL321", reward: "John Pork", status: "expirado", novo: false },
      { code: "IMANEGG", reward: "Strawberry Elephant", status: "expirado", novo: false },
      { code: "PIZZAISYUM", reward: "Pizza and Ranch", status: "expirado", novo: false }
    ]
  }
];
