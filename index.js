// 引入必要的模块
const express = require('ultimate-express');
const path = require('path');

// 创建 Express 应用
const app = express();
const PORT = process.env.PORT || 5000; // 设置端口号

// 配置静态文件夹的位置
const staticPath = path.join(__dirname, 'public'); // 假设你的静态文件位于 'public' 文件夹中
app.use(express.static(staticPath));


// 监听端口
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});