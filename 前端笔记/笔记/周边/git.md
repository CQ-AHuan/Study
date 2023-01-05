# Git 5*(工作天天用)

> 记录文件夹的增删改操作
>
> 文件夹 >> 仓库(repo)

## 买新电脑时应该做的

> 连接电脑和git账号

```shell
ssh-keygen -t ed25519 -C "随便什么字符串/最好是邮箱或者用户名"
# 一直回车

cat ~/.ssh/id_ed25519.pub
# 此时命令行中会打印一个长字符串 为公钥  复制粘贴至网页中配置即可

# git全局配置
git config --global user.name "用户名" # 用户名必须和账户名一致
git config --global user.email "邮箱地址"
```

## 开新仓库时需要做的(组长)

```shell
# 进入文件夹
cd "文件夹路径"

# 把文件夹变成git仓库
git init

# 把仓库中的改动加入本地
git add .

# 设置提交信息
git commit -m "改动标题: 改动内容"

# 连接远程仓库
git remote add origin 远程仓库路径

# 将本地修改推送至远程
git push # 会报错 把提示的内容粘下来执行
```

## 开新仓库时需要做的(组员)

```shell
# 把别人建好的仓库拉到自己的电脑上
git clone 远程仓库路径

# 拉取仓库所有信息
git fetch
```

## 更新仓库时需要做的(上班天天用的)

```shell
# 四部曲

# 把仓库中的改动加入本地
git add .

# 设置提交信息
git commit -m "改动标题: 改动内容"

# 拉取远程仓库的更新
# 可能会有冲突: 1. 留自己的 2. 留别人的 3. 都留下  选择之后 走三部曲(add >> commit >> push)
git pull origin dev

# 推送至远程
git push
```

## 分支

> 团队管理

```shell
# 查看分支
git branch

# 查看所有分支
git branch -a

# 切换到新分支
git checkout -b dev

# 切换分支
git checkout 创建过的分支名
```

## 常规操作

```shell
# 查看仓库状态
git status
```



## Q&A

```shell
# Failed to connect to 127.0.0.1 port 31181 after 2041 ms: Couldn't connect to server
git config --global --unset http.proxy
git config --global --unset https.proxy

# 每次都要输入用户名和密码
git config --global credential.helper store
```

