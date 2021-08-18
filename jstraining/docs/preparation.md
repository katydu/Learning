# 環境準備

參加培訓的學員，事先應該準備好開發環境。

## 安裝 Git

請到官網 [git-scm.com](https://git-scm.com/) 下載安裝檔。

## 安裝 Node

請到 Node 官網 [nodejs.org](https://nodejs.org) 下載最新版本的安裝檔。

安裝完成後，命令行執行下面的命令，確認是否安裝成功。

```bash
$ node -v
```

Node 的模組管理器 npm 會一起安裝好。

```bash
$ npm config set registry https://registry.npm.taobao.org/
```

執行下面的命令，確認是否切換成功。

```bash
$ npm config get registry
```

## 安裝程式碼編輯器

選擇以下之一（或其他任何一套你喜歡的）

- [Visual Studio Code](https://code.visualstudio.com/) （Recommended）
- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)

## 安裝 Postman

Postman 是一個 HTTP 通訊測試工具，REST API 的練習會用到它。

請到官網 [GetPostman.com](https://www.getpostman.com/) 下載獨立安裝檔。

## 安裝範例程式碼

所有的講義和練習原始碼，都是開源的，網址是 [github.com/punwave/jstraining](https://github.com/punwave/jstraining)。執行下面的命令，將這個儲存庫複製到你的硬碟上。

```bash
# Linux & Mac
$ git clone git@github.com:punwave/jstraining.git

# Windows
$ git clone https://github.com/punwave/jstraining.git
```

如果因為種種原因，Git 命令行無法使用，也可以直接下載壓縮檔，地址是 https://github.com/punwave/jstraining/archive/master.zip 。