
### package.json 설정 
```json
  "bin": {
    "cli": "./index.js"
  }
```

### package
```
npm i commander@9 inquirer@8
```

### 내 파일(index.js) 등록(설치) 
```
npm i -g
```

```
npx cli
```

```
npm rm -g node-cli
```

## 정상적으로 적용되지 않는 경우
```
npm ls -g node-cli
```
```
rimraf cli cli.cmd cli.ps1
```
