module.exports = {
  //此项用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其用ESlint解析
  parser: 'babel-eslint',
  // 此项用来指定JavaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置module，指模块导入方式
  parserOptions: {
    sourceType: 'module'
  },
  // 此项指定环境的全局变量
  env: {
    // 下面的配置指定解析环境
    browser: true,
    node: true,
    es6: true
  },
  // https://github.com/airbnb/javascript
  // 此项用来配置airbnb的js风格
  extends: 'airbnb',
  // required to lin *.js files
  // 此项用来提供插件的，插件名称省略了eslint-plugin，下面这个配置是用来规范html的
  plugins: ['html'],
  // alias setting 此配置用来支持webpack别名
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['common', './src/common']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.less', '.jpg', '.png']
      }
    }
  },
  // add your custom rules here
  // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin
  // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  // "error" -> 2 开启错误规则
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'arrow-parens': 0, // allow paren-less arrow functions
    'generator-star-spacing': 0, // allow async-await
    'semi': ['warn', 'never'], // 无需分号
    'react/jsx-filename-extension': 0, // 不校验必须为jsx文件
    'react/no-unused-state': 1, // 未使用state
    'no-use-before-define': 0, // 未定义以前使用
    'no-console': 1, // 控制台打印
    'comma-dangle': 0, // 逗号
    'implicit-arrow-linebreak': 0, // 箭头函数是否换行
    'linebreak-style': 0, // 换行符格式
    'no-unused-vars': 1, // import 未使用
    'jsx-a11y/no-static-element-interactions': 0, //非交互HTML标签不能绑定时间
    'jsx-a11y/click-events-have-key-events': 0, // click事件是否需要绑定按键值
    'max-len': [2, 100], // 每行最大长度100
    'react/jsx-one-expression-per-line': 0, // 单行纯文本是否需要标签包裹
    'react/forbid-prop-types': 0, // 允许prop-types为object
    'react/destructuring-assignment': 0, // props 必须结构赋值
    'react/jsx-closing-bracket-location': 0, // 标签尖括号对齐
    'object-curly-newline': 0, // 强制在花括号中使用一致的空
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }], // 三元表达式格式
    'react/require-default-props': 0, // prop type 必须设置require默认值
    'prefer-destructuring': 0, // 必须解构赋值
    "eol-last": 2, // 文件末尾强制换行
  }
}