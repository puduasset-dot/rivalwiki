export interface CuratedLoadoutJa {
  name: string;
  bestFor: string;
  primary: string;
  secondary: string;
  melee: string;
  utility: string;
  reason: string;
}

export const curatedLoadoutsJa: CuratedLoadoutJa[] = [
  { name: "初心者向け/無課金スタート", bestFor: "まだキーを使っていない新規プレイヤー向け", primary: "assault-rifle", secondary: "handgun", melee: "fists", utility: "flashbang", reason: "アサルトライフルと拳銃はどちらも無料で、どの距離でも安定して戦える。キーを一切使わずに戦えるので、序盤の負担がない。素手は移動練習にもなる無料のダブルジャンプを提供する。" },
  { name: "近距離アグレッシブ", bestFor: "突撃プレイ、BackroomsやConstructionのような狭いマップ", primary: "shotgun", secondary: "uzi", melee: "knife", utility: "flashbang", reason: "ショットガンとウジはどちらも近距離で高いダメージを前段階で発揮し、ナイフが素早いフィニッシャーとなる。スタングレネードは部屋への突入をカバーしてくれる。" },
  { name: "長距離/デュエル特化", bestFor: "1v1や、Bridge・Chessのような開けたマップ", primary: "sniper", secondary: "revolver", melee: "katana", utility: "medkit", reason: "スナイパーはデュエルで求められる精密さに報いる武器。リボルバーは距離を詰められた際の保険になり、救急キットは5本先取制のセットを通して体力を維持してくれる。" },
  { name: "チーム戦(4v4 / 5v5)", bestFor: "大人数チームモードやTDM", primary: "burst-rifle", secondary: "spray", melee: "chainsaw", utility: "medkit", reason: "バーストライフルはチーム戦の中距離の混戦において、コストに対して高い価値を発揮する。スプレーは近距離での援護に、救急キットは繰り返しの交戦を通して戦線に留まらせてくれる。" },
];
