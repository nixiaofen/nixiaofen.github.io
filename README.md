# 倪晓芬 · 个人主页

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
| `assets/resume.pdf` | "下载简历 PDF"按钮 | 由 `简历260918_一页版.docx` 另存为 PDF | 缺失（按钮会 404） |

**不放也没关系**：机构 logo 缺失时显示虚线占位块，不影响内容；只有 `resume.pdf` 缺失会让按钮失效，届时可删掉该按钮。

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

## 改文案

打开 `index.html`，中英文成对出现：

```html
<span class="zh">中文</span><span class="en">English</span>
```

只改其中一个即可，另一个不受影响。改配色看 `assets/style.css` 顶部的 `:root` 变量。
