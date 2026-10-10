# 倪晓芬 · 个人主页

> 🌐 **个人主页已上线，点击直接访问 → [https://nixiaofen.github.io](https://nixiaofen.github.io)**

静态单页站点，纯 HTML / CSS / JS，无构建、无依赖。支持中英切换与深浅色切换。
内容全部取自现有简历，未虚构任何事实。

## 本地预览

在本目录执行：

```bash
python -m http.server 8777
```

浏览器打开 http://127.0.0.1:8777

## 需要准备的素材

把文件放进 `assets/img/`，**文件名保持一致即可直接覆盖，不用改代码**。

| 文件名 | 用途 | 建议 | 当前 |
|---|---|---|---|
| `avatar.jpg` | Hero 形象照 | 竖版 3:4，≥800×1070，正装、浅色或纯色背景，脸部占画面 1/3 | 占位图 |
| `logo-swupol.png` | 西南政法大学校徽 | 方形、透明底 PNG，≥200×200 | 占位图 |
| `logo-swufe.png` | 西南财经大学校徽 | 同上 | 占位图 |
| `logo-gameco.png` | GAMECO 标识 | 同上；拿不到可不放 | 占位图 |
| `logo-court.png` | 重庆五中院标识 | 同上；拿不到可不放 | 占位图 |
| `logo-zlwd.png` | 中伦文德标识 | 同上；拿不到可不放 | 占位图 |
| `assets/resume.pdf` | "下载简历 PDF"按钮 | 由 `简历260918_一页版.docx` 另存为 PDF | 缺失，**按钮已注释隐藏**（见下方"恢复简历按钮"） |

**不放也没关系**：机构 logo 缺失时显示虚线占位块，不影响内容。

### 恢复简历按钮

`index.html` 第 61–65 行整段是注释。把 PDF 放进 `assets/resume.pdf` 后，删掉第 61 行的 `<!--` 和第 65 行的 `-->`，按钮就回来了。

## 待补充的信息（可选）

- LinkedIn 主页链接（目前导航只有邮箱 / GitHub / 电话）
- 是否加"简历之外"区块（阅读、运动、旅行）——参考站有，但求职主页非必需
- GAMECO 段的英文公司全称如需更正式，可改 `index.html` 中对应文案

## 部署到 GitHub Pages

1. GitHub 新建仓库，仓库名必须是 **`nixiaofen.github.io`**（用户名 + `.github.io`），Public，不要勾选 README / .gitignore / License
2. 在本目录执行：

```bash
git init -b main
git add .
git commit -m "initial: personal homepage"
git remote add origin git@github.com:nixiaofen/nixiaofen.github.io.git
git push -u origin main
```

3. 仓库 Settings → Pages → Source 选 `main` / `/(root)`，保存
4. 一两分钟后访问 https://nixiaofen.github.io

之后每次改完：

```bash
git add . && git commit -m "update" && git push
```

## 文件结构

```
index.html              页面结构（中英文案都在里面，成对出现）
assets/style.css        样式与配色变量
assets/main.js          语言切换、深浅色切换、导航滚动效果
assets/img/             图片素材
```

## 怎么改内容

### 1. 改文字（最常见）

打开 `index.html`（用记事本、VS Code 都行），所有文案都在里面，**中英文成对出现**：

```html
<span class="zh">中文</span><span class="en">English</span>
```

两条要一起改，否则切到英文时会看到旧的。只改中文也行，英文版就维持现状。

**定位区块看行号**：

| 区块 | 行号 | 里面有什么 |
|---|---|---|
| Hero 头部 | 36–83 | 姓名、一句话身份、4 个标签、简介、联系方式 |
| 关于我 | 86–144 | 4 个数字统计块 + 3 张能力卡 |
| 教育背景 | 146–198 | 西政硕士、西财本科 |
| 实习经历 | 200–312 | 律所 / 法院 / GAMECO 三段 |
| 法律科技作品 | 314–415 | 3 个项目卡（含 GitHub 链接） |
| 科研经历 | 417–443 | 3 篇论文 |
| 荣誉与技能 | 445–468 | 证书语言、奖项 |
| 联系方式 | 470–498 | 邮箱、GitHub、电话 |

**改数字**：`关于我` 里的 `<b>90+</b>` 这类，直接改数字即可，标签在下面一行。

### 2. 换图片

`assets/img/` 里**覆盖同名文件**就行，不用改任何代码。文件名见上面素材表。

### 3. 改配色

`assets/style.css` 顶部 `:root` 是浅色，`body.dark` 是深色。改 `--accent`（主色）、`--bg`、`--text` 这几个变量即可，全站跟着变。

### 4. 本地预览

改完直接**双击 `index.html`** 就能在浏览器看效果；已经打开的话刷新页面即可（Ctrl+F5 强制刷新）。

### 5. 发布到线上

在本目录右键 Git Bash，执行：

```bash
git add . && git commit -m "update" && git push
```

约一分钟后 https://nixiaofen.github.io 生效。

> 不想自己敲命令：把要改的内容直接发给我，我改完一并推送。
