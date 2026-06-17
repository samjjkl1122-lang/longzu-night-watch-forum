const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const rows = document.querySelectorAll(".thread-row");
const form = document.querySelector(".contact-card");
const statusLine = document.querySelector(".form-status");
const detailButtons = document.querySelectorAll("[data-detail]");
const detailPanel = document.querySelector("#detail-panel");
const detailKind = document.querySelector("#detail-kind");
const detailTitle = document.querySelector("#detail-title");
const detailSummary = document.querySelector("#detail-summary");
const detailClues = document.querySelector("#detail-clues");
const detailRelations = document.querySelector("#detail-relations");
const detailNote = document.querySelector("#detail-note");
const detailLinks = document.querySelector("#detail-links");
const detailReset = document.querySelector("#detail-reset");

const details = {
  "post-team": {
    kind: "THREAD / 人物复盘",
    title: "路明非、楚子航与恺撒的夜间复盘",
    summary: "这篇帖子把三个人放回卡塞尔学院的任务语境里看：路明非负责把荒诞变成现实，楚子航负责沉默地承担危险，恺撒负责把队伍拉回行动秩序。",
    clues: [
      "路明非的成长线适合写成“被迫上桌的人如何学会下注”。",
      "楚子航的关键词不是孤独本身，而是他如何把真相藏进纪律。",
      "恺撒的贵族感可以和论坛里的行动日志形成反差：越华丽，越像一种自我约束。",
      "诺诺适合作为观察者入口，她看见别人不愿承认的裂缝。"
    ],
    relations: ["路明非", "楚子航", "恺撒", "诺诺", "卡塞尔学院", "守夜人论坛"],
    note: "如果写成连载，我会让每一章都从一条匿名回复开始：有人吐槽任务报告太离谱，下一段却忽然接到诺玛的红色警报。",
    links: ["tag-team", "tag-cassell", "tag-word-spirit"]
  },
  "post-tools": {
    kind: "THREAD / 装备部",
    title: "装备部不完全工具箱",
    summary: "把个人博客的功能伪装成装备部工具：索引器、档案读取器、异常地点标注器和诺玛检索面板。",
    clues: [
      "cassell-index 用来管理文章、人物、地点和事件标签。",
      "norma-notes 记录每次更新的线索，适合做同人时间线。",
      "帖子详情面板像一台小型档案终端，点击标签就能重组阅读路径。",
      "外链区保留 GitHub 与 X，方便把创作进度和项目源码接起来。"
    ],
    relations: ["装备部", "诺玛", "GitHub", "X", "个人博客", "静态页面"],
    note: "装备部风格最好玩的地方，是把正常网页功能说得像随时会炸：搜索不是搜索，是高危档案解锁。",
    links: ["tag-tools", "tag-norma", "tag-build"]
  },
  "post-nibelungen": {
    kind: "THREAD / 地点猜想",
    title: "尼伯龙根入口猜想",
    summary: "把城市传闻整理成同人地图：雨夜的高架桥、无人地铁、废弃教学楼、旧书店和突然消失的站台。",
    clues: [
      "入口不一定宏大，可能是一盏一直闪烁的灯、一段重复播报的站名。",
      "尼伯龙根的恐怖感来自熟悉空间被轻轻改写。",
      "旧地铁适合承载时间错位，雨夜高架适合承载追逐戏。",
      "论坛可以把每个地点写成“目击报告 + 风险等级 + 关联人物”。"
    ],
    relations: ["尼伯龙根", "城市夜路", "旧地铁", "雨夜", "异常空间", "龙族设定"],
    note: "我想把地点写得像真的城市备忘录：白天它是普通路口，凌晨三点后才出现另一个名字。",
    links: ["tag-nibelungen", "tag-city", "tag-atmosphere"]
  },
  "post-bronze": {
    kind: "THREAD / 龙王档案",
    title: "青铜与火之王档案索引",
    summary: "用论坛索引重排龙王相关线索：事件顺序、角色视角、设定关键词和适合继续扩写的空白。",
    clues: [
      "龙王档案适合按“事件、地点、人物、言灵、未解疑点”五栏整理。",
      "青铜与火的意象可以落到页面色彩上：暗底、琥珀字、红色印章。",
      "索引不直接给结论，而是让读者沿着标签自己进入下一条帖子。",
      "每个档案都保留“论坛争议点”，让同人讨论更有参与感。"
    ],
    relations: ["青铜与火之王", "龙王档案", "言灵", "时间线", "卡塞尔学院", "守夜人论坛"],
    note: "比起百科式复述，我更想把龙王档案写成一堆深夜互相打脸的帖子：有人严肃考据，有人负责把气氛搅乱。",
    links: ["tag-dragon", "tag-bronze", "tag-timeline"]
  },
  "tag-cassell": {
    kind: "TAG / 学院",
    title: "卡塞尔学院",
    summary: "这里收纳学院制度、任务报告、诺玛提示、学生会气质和守夜人论坛里那些半真半假的校内传闻。",
    clues: ["学院不是背景板，而是所有荒诞事件变得合理的制度外壳。", "适合做“校内公告”“课程表”“任务单”“匿名投诉”四类内容。", "视觉上可继续加入档案编号、权限等级和学院徽章式排版。"],
    relations: ["诺玛", "装备部", "学生会", "狮心会", "守夜人论坛"],
    note: "卡塞尔学院的魅力，是它把怪物、青春和行政流程放在同一张桌子上。",
    links: ["post-team", "post-tools", "tag-norma"]
  },
  "tag-team": {
    kind: "TAG / 人物",
    title: "路明非小队",
    summary: "围绕路明非、楚子航、恺撒与诺诺建立的人物观察标签，重点记录关系张力和任务中的互相补位。",
    clues: ["路明非负责把命运的荒谬感带进故事。", "楚子航负责让沉默变得有重量。", "恺撒负责用秩序和骄傲撑住场面。", "诺诺像一条红色批注，提醒故事还有更锋利的读法。"],
    relations: ["路明非", "楚子航", "恺撒", "诺诺", "言灵"],
    note: "这个标签下的帖子会更像人物关系复盘，而不是单纯战力讨论。",
    links: ["post-team", "tag-word-spirit", "tag-cassell"]
  },
  "tag-dragon": {
    kind: "TAG / 档案",
    title: "龙王档案",
    summary: "用来整理龙王、龙族血统、事件节点和同人扩写空间的总标签。",
    clues: ["适合按龙王系谱和事件时间线双入口整理。", "每条档案保留“可扩写空白”，方便后续写文章。", "同人站里不要只做设定表，也要保留阅读时的震动感。"],
    relations: ["青铜与火之王", "白王", "黑王", "混血种", "卡塞尔学院"],
    note: "龙王档案最好不要写得太干，应该像一份刚从地下室翻出来的危险文件。",
    links: ["post-bronze", "tag-bronze", "tag-timeline"]
  },
  "tag-nibelungen": {
    kind: "TAG / 地点",
    title: "尼伯龙根",
    summary: "记录异常空间、城市入口、错位时间与现实世界边缘裂缝。",
    clues: ["城市里最普通的场景，越适合被改写成入口。", "页面后续可以加一张“异常地点清单”。", "每个地点都能关联一个人物的心理状态。"],
    relations: ["旧地铁", "雨夜", "高架桥", "异常空间", "龙族传闻"],
    note: "尼伯龙根不是地图上的点，它更像现实突然露出的背面。",
    links: ["post-nibelungen", "tag-city", "tag-atmosphere"]
  },
  "tag-norma": {
    kind: "TAG / 系统",
    title: "诺玛",
    summary: "诺玛标签负责模拟论坛的系统感：公告、权限、检索、提醒和危险档案提示。",
    clues: ["适合出现在页眉、详情面板、表单反馈和项目说明里。", "可以把每次站点更新写成一条诺玛广播。", "后续可加入搜索框或过滤器。"],
    relations: ["卡塞尔学院", "装备部", "档案权限", "论坛系统"],
    note: "诺玛越冷静，页面就越有那种“事情已经很糟但系统仍然在线”的味道。",
    links: ["post-tools", "tag-cassell", "project-norma"]
  },
  "tag-tools": {
    kind: "TAG / 项目",
    title: "装备部",
    summary: "收纳站点里的工具、项目、仓库和半开玩笑式功能设定。",
    clues: ["每个工具都可以写成装备部说明书。", "GitHub 仓库入口适合放在这个标签下。", "工具不需要真的复杂，但要有明确用途。"],
    relations: ["GitHub", "cassell-index", "norma-notes", "建站日志"],
    note: "装备部标签的语气可以更轻一点，像严肃文件里混进了危险玩笑。",
    links: ["post-tools", "project-index", "project-norma"]
  },
  "tag-word-spirit": {
    kind: "TAG / 设定",
    title: "言灵",
    summary: "整理言灵相关的设定感、人物映射和同人写作时的表现方式。",
    clues: ["言灵不是技能表，而是人物气质的放大器。", "写作时可以先写代价，再写效果。", "适合和人物复盘一起阅读。"],
    relations: ["楚子航", "恺撒", "混血种", "龙族血统"],
    note: "言灵最迷人的地方是限制：越强大的表达，越需要代价来让它站住。",
    links: ["post-team", "tag-team", "tag-dragon"]
  },
  "tag-city": {
    kind: "TAG / 传闻",
    title: "城市传闻",
    summary: "把路灯、旧站台、雨声、无人街区和普通生活中的异常感收进一个标签。",
    clues: ["城市传闻负责把龙族感拉回日常。", "适合写短篇、碎片和地点档案。", "可以与尼伯龙根标签互相跳转。"],
    relations: ["尼伯龙根", "旧地铁", "雨夜", "异常地点"],
    note: "越日常的地方，越适合在凌晨变得不对劲。",
    links: ["post-nibelungen", "tag-nibelungen", "tag-atmosphere"]
  },
  "tag-atmosphere": {
    kind: "TAG / 氛围",
    title: "雨夜",
    summary: "收纳深夜、雨声、路灯、旧城区和所有适合守夜人论坛开帖的情绪底色。",
    clues: ["雨夜可以统一视觉和叙事气氛。", "适合短句、片段、照片说明式文字。", "后续可做成手札栏目。"],
    relations: ["城市传闻", "尼伯龙根", "手札", "深夜档案"],
    note: "雨夜不是装饰，它是这座论坛的默认时区。",
    links: ["tag-city", "post-nibelungen", "x-latest"]
  },
  "tag-bronze": {
    kind: "TAG / 龙王",
    title: "青铜与火",
    summary: "青铜、火焰、炼金、地下空间和龙王档案的视觉与内容核心。",
    clues: ["适合继续做一个专门的档案页。", "颜色可围绕琥珀、暗红和旧金属扩展。", "索引里保留事件时间和人物视角。"],
    relations: ["青铜与火之王", "龙王档案", "炼金", "时间线"],
    note: "这个标签适合写得像被烧过的文件：留下边缘和编号，不急着解释全部。",
    links: ["post-bronze", "tag-dragon", "tag-timeline"]
  },
  "tag-timeline": {
    kind: "TAG / 索引",
    title: "时间线",
    summary: "把阅读顺序、事件顺序和同人更新顺序拆开管理，避免帖子越写越散。",
    clues: ["每条帖子都可以挂一个事件时间和发布时间。", "时间线适合后续做成交互过滤器。", "同人脑洞也可以标注为“未证实”。"],
    relations: ["龙王档案", "卡塞尔学院", "诺玛", "建站日志"],
    note: "时间线不是为了锁死解释，而是为了让读者知道可以从哪里继续追。",
    links: ["post-bronze", "tag-dragon", "tag-norma"]
  },
  "tag-build": {
    kind: "TAG / 建站",
    title: "建站日志",
    summary: "记录这个网站从静态首页变成论坛式个人博客的过程。",
    clues: ["当前版本增加了标签索引和详情面板。", "下一步可以加搜索、分页、独立文章页。", "所有内容仍然保持纯静态，方便 GitHub Pages 发布。"],
    relations: ["GitHub Pages", "HTML", "CSS", "JavaScript"],
    note: "建站日志可以写得像诺玛维护记录：每次更新都是一次系统广播。",
    links: ["post-tools", "project-index", "tag-norma"]
  },
  "project-index": {
    kind: "PROJECT / GitHub",
    title: "cassell-index",
    summary: "一个用于整理《龙族》同人帖子、人物标签、地点和事件线索的索引项目。",
    clues: ["支持按人物、地点、龙王、言灵四种入口整理文章。", "适合以后拆成 JSON 数据源。", "可以和 GitHub Pages 保持同步发布。"],
    relations: ["GitHub", "卡塞尔学院", "标签系统", "静态博客"],
    note: "这个项目的目标不是复杂，而是让所有帖子都有路可走。",
    links: ["tag-tools", "tag-build", "tag-cassell"]
  },
  "project-norma": {
    kind: "PROJECT / Notes",
    title: "norma-notes",
    summary: "把更新日志、角色观察和龙王线索写成诺玛风格的可检索笔记。",
    clues: ["适合记录阅读摘记、同人脑洞、页面更新计划。", "每条笔记都能关联到详情面板。", "后续可扩成搜索和筛选。"],
    relations: ["诺玛", "时间线", "Markdown", "守夜人论坛"],
    note: "它像一个私人版诺玛：不一定全知，但足够帮你记住下一步要写什么。",
    links: ["tag-norma", "tag-timeline", "post-tools"]
  },
  "x-latest": {
    kind: "X / 动态",
    title: "今晚继续把守夜人论坛做得更像卡塞尔学院内部匿名版",
    summary: "这条动态可以作为更新记录：本轮加入可点击标签、帖子详情、项目说明和更多《龙族》同人设定入口。",
    clues: ["适合发在 X 上当作发布说明。", "可以附 GitHub Pages 链接。", "下一条动态可以征集读者想看的龙族标签。"],
    relations: ["X", "守夜人论坛", "建站日志", "卡塞尔学院"],
    note: "社交动态不只是外链，它也可以成为论坛世界观的一部分。",
    links: ["tag-build", "tag-atmosphere", "project-index"]
  }
};

const renderList = (target, items) => {
  target.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }),
  );
};

const showDetail = (id, shouldScroll = true) => {
  const item = details[id] ?? details["post-team"];
  detailKind.textContent = item.kind;
  detailTitle.textContent = item.title;
  detailSummary.textContent = item.summary;
  detailNote.textContent = item.note;
  renderList(detailClues, item.clues);
  renderList(detailRelations, item.relations);
  detailLinks.replaceChildren(
    ...item.links.map((linkId) => {
      const link = document.createElement("a");
      link.href = "#detail-panel";
      link.dataset.detail = linkId;
      link.textContent = details[linkId]?.title ?? linkId;
      return link;
    }),
  );

  rows.forEach((row) => {
    row.classList.toggle("is-active", row.dataset.detail === id);
  });

  if (shouldScroll) {
    detailPanel.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

rows.forEach((row) => {
  row.addEventListener("click", () => {
    showDetail(row.dataset.detail);
  });

  row.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      row.click();
    }
  });
});

detailButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    showDetail(button.dataset.detail);
  });
});

detailLinks?.addEventListener("click", (event) => {
  const link = event.target.closest("[data-detail]");
  if (!link) return;
  event.preventDefault();
  showDetail(link.dataset.detail);
});

detailReset?.addEventListener("click", () => showDetail("post-team"));

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("contact");
  statusLine.textContent = email
    ? "信号已记录在本地演示状态。"
    : "请输入一个邮箱地址。";
});

showDetail("post-team", false);
