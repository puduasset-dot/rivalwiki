export type Locale = "ja" | "zh";

export const labels: Record<Locale, {
  allWeapons: string;
  weaponsTitle: string;
  weaponsTracked: (n: number) => string;
  category: string;
  cost: string;
  damage: string;
  fireRate: string;
  ammo: string;
  reload: string;
  overview: string;
  compareWith: (name: string) => string;
  categories: { primary: string; secondary: string; melee: string; utility: string };
  vs: string;
  theNumbersSay: string;
  compareAnother: string;
  noOverview: string;
  allMaps: string;
  mapsTitle: string;
  allGameModes: string;
  gameModesTitle: string;
  scaledUpFrom: string;
  otherModesIn: (category: string) => string;
  checkTierList: string;
  seeLoadouts: string;
}> = {
  ja: {
    allWeapons: "← 武器一覧に戻る",
    weaponsTitle: "RIVALS 武器データベース",
    weaponsTracked: (n) => `${n} 種類の武器を掲載中。`,
    category: "カテゴリー",
    cost: "コスト",
    damage: "ダメージ",
    fireRate: "連射速度",
    ammo: "弾数",
    reload: "リロード",
    overview: "概要",
    compareWith: (name) => `${name} を他の武器と比較する →`,
    categories: { primary: "プライマリー", secondary: "セカンダリー", melee: "近接", utility: "ユーティリティ" },
    vs: "対",
    theNumbersSay: "数値で見ると",
    compareAnother: "別の武器の組み合わせを比較する →",
    noOverview: "概要はまだ用意されていません。",
    allMaps: "← マップ一覧に戻る",
    mapsTitle: "RIVALS マップ一覧",
    allGameModes: "← モード一覧に戻る",
    gameModesTitle: "RIVALS ゲームモード",
    scaledUpFrom: "の拡大版マップ:",
    otherModesIn: (category) => `他の${category}モード`,
    checkTierList: "潜る前に武器ティアリストをチェック →",
    seeLoadouts: "このモード向けのロードアウトを見る →",
  },
  zh: {
    allWeapons: "← 返回武器列表",
    weaponsTitle: "RIVALS 武器数据库",
    weaponsTracked: (n) => `已收录 ${n} 件武器。`,
    category: "类别",
    cost: "价格",
    damage: "伤害",
    fireRate: "射速",
    ammo: "弹药",
    reload: "装填时间",
    overview: "概览",
    compareWith: (name) => `将 ${name} 与其他武器对比 →`,
    categories: { primary: "主武器", secondary: "副武器", melee: "近战", utility: "功能道具" },
    vs: "对比",
    theNumbersSay: "数据说话",
    compareAnother: "对比另一组武器 →",
    noOverview: "暂无概览内容。",
    allMaps: "← 返回地图列表",
    mapsTitle: "RIVALS 地图一览",
    allGameModes: "← 返回模式列表",
    gameModesTitle: "RIVALS 游戏模式",
    scaledUpFrom: "的加大版地图：",
    otherModesIn: (category) => `其他${category}模式`,
    checkTierList: "开局前先看看武器梯度榜 →",
    seeLoadouts: "查看适合这个模式的配装 →",
  },
};
