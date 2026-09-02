export interface CuratedLoadoutZh {
  name: string;
  bestFor: string;
  primary: string;
  secondary: string;
  melee: string;
  utility: string;
  reason: string;
}

export const curatedLoadoutsZh: CuratedLoadoutZh[] = [
  { name: "新手 / 零氪起步", bestFor: "还没花过钥匙的新玩家", primary: "assault-rifle", secondary: "handgun", melee: "fists", utility: "flashbang", reason: "突击步枪和手枪都是免费的,而且在任何距离都表现稳定,不花一把钥匙也能正常对战。拳头还附带免费的二段跳,可以顺便练习走位。" },
  { name: "近战突进流", bestFor: "冲脸打法,以及 Backrooms、Construction 这类狭窄地图", primary: "shotgun", secondary: "uzi", melee: "knife", utility: "flashbang", reason: "霰弹枪和乌兹冲锋枪都能在近距离前段打出高伤害,匕首负责快速补刀,闪光弹则能掩护你冲入房间。" },
  { name: "远程 / 对战向", bestFor: "1v1 以及 Bridge、Chess 这类开阔地图", primary: "sniper", secondary: "revolver", melee: "katana", utility: "medkit", reason: "狙击枪最能发挥对战所需的精准度,左轮手枪在被拉近距离时能兜底,医疗包能帮你撑过一整个五局三胜的对局。" },
  { name: "团队作战(4v4 / 5v5)", bestFor: "大规模团队模式和团队死斗", primary: "burst-rifle", secondary: "spray", melee: "chainsaw", utility: "medkit", reason: "连发步枪在团战的中距离混战中性价比很高,微冲负责近身补位,医疗包能让你在反复交火中持续留在场上。" },
];
