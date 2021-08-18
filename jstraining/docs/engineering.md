# 前端工程簡介

---

## 持續整合流程

前端開發轉移到後端環境，意味著可以適用標準的軟體工程流程。

1. 本地開發（developing）
2. 靜態程式碼檢查（linting）
3. 單元測試（testing）
4. 合併進入主幹（merging）
5. 自動構建（building）
6. 自動發布（publishing）

---

## 持續整合的概念

Continuous Integration（簡稱 CI）：

開發程式碼頻繁地合併進主幹，始終保持可發布狀態的這個過程。

優點

- 快速發現錯誤
- 防止分支（branch）大幅偏離主幹（master）
- 讓產品可以快速迭代，同時還能保持高品質

---

## ESLint：靜態程式碼檢查工具

- 發現語法錯誤
- 發現風格錯誤
- 自動糾正錯誤

![](./images/eslint.png)

---

## 課堂練習：ESLint 的用法

進入 `demos/eslint-demo` 目錄，按照[《操作指南》](../demos/README.md#eslint)，完成練習。

---

## 為什麼寫測試？

Web 應用越來越複雜，意味著更可能出錯。測試是提高程式碼品質、降低錯誤的最好方法之一。

- 測試可以確保得到預期結果。
- 加快開發速度。
- 方便維護。
- 提供用法的文件。

對於長期維護的專案，測試可以減少投入時間，減輕維護難度。

---

## 測試的類型

- 單元測試（unit testing）
- 功能測試（feature testing）
- 整合測試（integration testing）
- 端對端測試 (End-to-End testing）

---

## 以測試為導向的開發模式

- TDD：測試驅動的開發（Test-Driven Development）
- BDD：行為驅動的開發（Behavior-Driven Development）

它們都要求先寫測試，再寫代碼。

思考題：測試導向的開發模式有明顯的優點，為什麼現實生活中採用的人不多？

---

## TDD vs. BDD

兩者側重點不一樣

- TDD：基於開發者角度，重點測試函式的輸入輸出
- BDD：基於使用者角度，重點測試對用戶行為的反應

比如，有一個計數器函式 `counter`，TDD 測試的是輸入 1，輸出的應該是 2；BDD 測試的是用戶訪問以後，計數器應該增加一次。

---

## Mocha

Mocha 是目前最常用的測試框架。

![](./images/mocha.png)

---

## 課堂練習：Mocha 的用法

進入 `demos/mocha-demo` 目錄，按照[《操作指南》](../demos/README.md#mocha)，練習寫單元測試。

---

## 功能測試

功能測試指的是，站在外部用戶的角度，測試軟體的某項功能。

與內部程式碼實現無關，只測試功能是否正常。

很多時候，單元測試都可以通過，但是整體功能會失敗。

![](./images/functional-test.jpg)

---

## 前端的功能測試

功能測試必須在真正瀏覽器做，現在有四種方法。

- 使用本機安裝的瀏覽器
- 使用 Selenium Driver
- 使用 Headless Chrome
- 使用 Electron

---

## Nightmare

- 使用 Electron 模擬真實瀏覽器環境
- 提供大量人性化、易用的 API
- 官網：[nightmarejs.org](http://www.nightmarejs.org/)

---

## 範例：Nightmare

打開 `demos/nightmare-demo/`，按照[《操作說明》](../demos/README.md#nightmare)，完成操作。

---

## 行動平台的自動化測試

目前，最常見的方案是使用 Appium。

- 基於 WebDriver
- 採用 客戶端/伺服器架構
- 可以在模擬器運行，也可以在真機運行

---

## Appium 測試流程

1. WebDriver 客戶端發出測試請求和測試內容
2. Appium 伺服器轉發到相應的測試運行器（Driver）
3. iOS 設備是 UIAutomation，Android 設備是 UiAutomator
4. 測試運行器將運行結果，返回給 Appium

---

## 持續整合服務平台

程式碼合併進主幹以後，就可以進行自動構建和發布了。

網路上有很多 PaaS 平台，提供持續整合服務。

Travis CI 就是其中最著名的一個，它可以根據你提供的腳本，自動完成構建和發布。

![](./images/travis-ci.png)

---

## 課堂練習：Travis CI

按照[《操作說明》](../demos/README.md#travis-ci)，完成練習。
