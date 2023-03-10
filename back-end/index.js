const express = require("express");
const app = express();
const port = 1314;
const path = require("path");
const cors = require("cors");
const user = require('./controller/user');

app.use(cors());
// 静态资源
app.use("/static", express.static(path.join(__dirname, "public")));
// 内置中间件 json包裹和解析
app.use(express.json());


// 直接获取所有用户
app.get("/api/users", user.getUserList);


// 错误捕获
app.use(function (err, req, res, next) {
  console.log(err.message);
});

app.listen(port, () => {
  console.log(`Expample app is listening on port ${port}`);
});
