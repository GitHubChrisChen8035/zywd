#!/bin/bash

# 找到最新的txt文件,剪切到git项目路径
LATEST_TXT=$(ls -t ~/Downloads/*.txt | head -1)
mv "$LATEST_TXT" ./答案集

# 提取文件名
FILE_NAME=$(basename "$LATEST_TXT" .txt)

# 显示最新的txt文件
echo "开始更新[$FILE_NAME]答案"

# 推送到GitHub仓库
git pull origin main
git add 答案集/"$(basename "$LATEST_TXT")"
git commit -m "[$FILE_NAME] 答案"
git push origin main

