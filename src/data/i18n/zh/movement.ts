export interface MovementTechZh {
  name: string;
  difficulty: "新手" | "进阶" | "高阶";
  howTo: string;
}

export const movementTechsZh: MovementTechZh[] = [
  { name: "滑铲跳", difficulty: "新手", howTo: "冲刺后按滑铲(Ctrl),然后立刻跳跃。能让你移动更快、更难被命中——没有任何前置条件,随时可用。搭配匕首或双刀这类加速武器效果更好。" },
  { name: "双跳", difficulty: "新手", howTo: "装备拳头或弓——两者都能提供二段跳。向平台冲刺,跳一次,到最高点时再跳一次。" },
  { name: "滑铲取消", difficulty: "进阶", howTo: "滑铲(Ctrl)后立刻跳跃(空格),可以取消滑铲的减速动画,同时保持冲刺速度。连续滑铲→跳跃→滑铲→跳跃比单纯冲刺更快。" },
  { name: "三连跳", difficulty: "进阶", howTo: "在具备二段跳条件时(装备拳头或弓),在空中快速切换拳头和弓,可以再多接一次跳跃。" },
  { name: "贴墙滑行", difficulty: "进阶", howTo: "斜向朝墙壁冲刺并按住Ctrl,可以在保持速度的同时沿墙滑行——适合在不损失速度的情况下通过狭窄拐角。" },
  { name: "四连跳", difficulty: "高阶", howTo: "先蓄力一颗手雷,滑铲跳获得手雷助推,然后快速切换弓、双刀和拳头——每次跳跃都配合一次切武器——即可再多接一次跳跃。" },
  { name: "战斧冲刺", difficulty: "高阶", howTo: "使用狙击枪开镜时,装备战斧并在按住 strafe 方向键的同时右键,可以在不脱镜的情况下朝 strafe 方向冲刺约10个单位——适合躲避来袭子弹。" },
];
