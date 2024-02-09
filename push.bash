#!/bin/bash

# 设置Downloads目录的路径
FILE_PATH=~/Desktop/网大考试/zywd/autoexam.js

# 找到最新的txt文件
LATEST_TXT=$(ls -t ~/Downloads/*.txt | head -1)

# 提取文件名并去除.txt后缀
FILE_NAME=$(basename "$LATEST_TXT" .txt)

# 显示最新的txt文件
echo "开始更新[$FILE_NAME]答案"

# 备份原文件
cp "$FILE_PATH" "${FILE_PATH}.bak"

# 删除`{...}`中间的内容并插入去除换行的新内容
awk -v new_content="$(tr -d '\n' < "$LATEST_TXT")" '
  /{\"/ { print new_content; skip=1 }
  /}/ { if (skip) {skip=0; next} }
  !skip
' "${FILE_PATH}.bak" > "$FILE_PATH"

# 删除.bak备份文件
rm "${FILE_PATH}.bak"

# 推送到GitHub仓库
git pull origin main
git add autoexam.js
git commit -m "更新[$FILE_NAME]答案"
git push origin main

