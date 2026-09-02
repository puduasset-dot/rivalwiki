export const fovGuidanceZh: { mode: string; range: string; note: string }[] = [
  { mode: "1v1 / 2v2(对战模式)", range: "90 – 100", note: "较低的FOV在小规模模式中效果更好——有些攻略具体推荐97左右。" },
  { mode: "TDM / FFA(大规模模式)", range: "105 – 110", note: "更宽的FOV有助于在画面中追踪更多玩家。" },
  { mode: "通用基准", range: "85 – 95", note: "如果不想按模式单独调整,这个区间能在环境感知和目标大小之间取得平衡。" },
];

export const sensitivityStepsZh = [
  "没有放之四海皆准的最佳灵敏度——它取决于你的鼠标DPI和Roblox游戏内灵敏度倍率的组合,直接照搬职业选手的数值不一定适合你的设置。",
  "在Shooting Range里测试:从你目前的数值开始,选一个可以重复做出的滑动距离,目标是让这段距离对应大约180度转身。",
  "如果你总是甩过头命中目标,就调低;如果转不过近处的角度,就调高。每次只改一个变量。",
  "适中的DPI配合较低的游戏内滑块,通常比一味追求华丽360度转身的高灵敏度更能带来稳定可预测的准星落点。",
];

export const recommendedTogglesZh: { setting: string; value: string; why: string }[] = [
  { setting: "镜头晃动", value: "关闭", why: "冲刺/加速时减少画面干扰。" },
  { setting: "枪口火光", value: "隐藏", why: "开火时保持视野清晰。" },
  { setting: "伤害提示", value: "描边闪烁", why: "确认命中的同时不遮挡目标。" },
  { setting: "自动疾跑", value: "开启", why: "在这种高强度走位的游戏里少按一个键。" },
  { setting: "简易滑铲", value: "开启", why: "降低滑铲技巧所需的输入精度。" },
  { setting: "HUD边距", value: "开启", why: "让HUD元素不挡住战斗画面。" },
  { setting: "准星", value: "带描边的小圆点", why: "在各种地图和背景下都保持最佳可视性。" },
];
