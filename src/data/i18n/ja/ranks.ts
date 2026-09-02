export const RANKED_REQUIREMENTS_JA = [
  "まず通常(アンランク)デュエルを10試合完了する——勝敗どちらもカウントされる。",
  "アカウント認証:電話番号、Robux消費額、またはID認証のいずれか(メール認証は対象外)。",
  "Robloxアカウントの作成から14日以上経過していること。",
  "初期ランクを判定するための配置戦を10試合完了する。",
];

export const RANKED_MECHANICS_JA = [
  "ランクマッチごとにELOが増減する。増減幅は自分と相手のELO差によって変わる——自分より数段階上の相手に勝つと、同格の相手に勝つよりELOの上昇幅が大きくなる。",
  "生のスタッツよりも勝敗の方が重要。キル数やダメージ量が多くても、特に上位帯では敗北を完全には相殺しない。",
  "パーティメンバーは互いに4ティア(約800ELO)以内でなければ一緒にキューに入れない。マッチメイキングはパーティのMMR平均を見るため、自分よりかなり上位のフレンドと組むと、より強い相手と当たりやすくなる。",
  "モード:1v1、2v2、3v3のすべてがランクマッチに含まれる。",
];

export const RANK_TIER_NAMES_JA: Record<string, string> = {
  Bronze: "ブロンズ",
  Silver: "シルバー",
  Gold: "ゴールド",
  Platinum: "プラチナ",
  Diamond: "ダイヤモンド",
  Onyx: "オニキス",
  Nemesis: "ネメシス",
  Archnemesis: "アークネメシス",
};

export const RANK_TIER_NOTES_JA: Record<string, string> = {
  Platinum: "このあたりからランク保護が薄れ始める——ティアの下限で負けると一気に降格しやすくなる。",
  Nemesis: "サブティアなし、Onyxの上。",
  Archnemesis: "頂点のランク。世界トップ200のArchnemesisプレイヤーは、シーズンごとに神話級コスメを獲得できる。",
};
