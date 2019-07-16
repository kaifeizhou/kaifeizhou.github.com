# 









#  前端三层

>         浏览器只能识别HTML代码、CSS代码和JavaScript代码.  如果服务器响应的内容包含了其它的代码(如Python、C#、Java)，那么浏览器是无法正确解析识别的。所以，服务器返回给浏览器的代码一定是HTML+CSS+JavaScript

那么HTML、CSS、JavaScript这三类代码他们有什么作用呢？

* HTML  HyperText Markup Language 超文本标记(标签)语言  用于描述网页上有什么内容.  **结构层**

* CSS   Cascading Style Sheets  层叠样式表    用于描述网页上的内容长什么样子  **表现层 样式层**

* JavaScript  用于描述网页上的内容具备什么样的行为.  **行为层**


| 标准 | 说明                                                         | 备注                           |
| :--- | :----------------------------------------------------------- | :----------------------------- |
| 结构 | 结构用于对**网页元素**进行整理和分类，咱们主要学的是HTML。   | <img src='media/htmll.jpg' />  |
| 表现 | 表现用于设置网页元素的版式、颜色、大小等**外观样式**，主要指的是CSS | <img src='media/css.jpg' />    |
| 行为 | 行为是指网页模型的定义及**交互**的编写，咱们主要学的是 Javascript | <img src='media/search.gif' /> |



## 3.1 Web开发标准

建议，在开发的过程中，将html代码、CSS代码、JavaScript代码，分别写在三个不同的文件中. 这样做的好处

*  代码阅读更简单  
*  代码维护成本更低  
*  提高浏览器渲染速度  
*  内容可以被更多设备浏览

# 04. 浏览器内核

## 4.1 浏览器软件

是一类软件，这个软件可以展示网页.

浏览器是用来查看网页的一种软件，浏览器软件有很多种.

![](./media/03-expl.jpg) 

[百度统计](http://tongji.baidu.com/data/browser)

## 浏览器的内核

浏览器的底层有1个组件叫做 内核/解析引擎, 它就是用来负责解析html css js, 负责将这些代码展现为图形化的界面. 目前市面上有很多内核. 都是不同厂家制造的.

不同的内核在解析html css js代码的时候，遵守的规则可能是不一样的.

我们在编写html css js代码的时候，可能会出现这样一种情况

明明是一样的代码，但是在不同的内核的浏览器上出现的效果确实不一样的.

        你可能有时候会发现一个问题，同样的一份前端代码，不同的浏览器解析出来的效果可能并不是完全一致的。原因就在于，浏览器底层用来解析html+css+js代码的解析引擎也叫做内核，不同的浏览器所使用的是不一样的，不同的内核在解析代码的时候，出于种种原因，他们多少有些细微的差别.  **实例演示**

常见浏览器内核 

* Trident [ˈtraɪdnt]  (IE) MicroSoft

- Gecko [ˈgekəʊ]  (Firefox)
- Webkit (Safari)
- Chromium/Blink(Chrome)
- Chakra (Edge)

国内浏览器几乎都是基于这其中的1个或者两个内核(双核心浏览器), 大多数国内浏览器基于Blink核心.

不同的内核在解析同样一份html、css、js代码的时候，解析出来的效果有时候并不是完全一致，这1点作为前端工程师要尤其注意，我们必须要保证我们的代码能够兼容市面上主流的浏览器.



# 05. 第一个HTML网页(^)

## 5.1 HTML

> HTML - Hyper Text Markup Language 超文本标记(标签)语言 用来描述网页上有什么内容.
>
> 标签语言的特点：  都是以1对对的标签来定义内容的.



## 5.2  编写html网页的步骤

- 新建1个后缀名为.html或者.htm的文件.
- 使用任意类型的纯文本编辑工具(如记事本、Editplus、sublime等)打开这个文件
- 在这个文件中编写html代码.
- 编写完成后,使用浏览器打开这个文件，就能看到浏览器解析html代码的效果.



## 5.3 HTML骨架

任何一个html网页的代码，都应该具备如下的骨架

```html
<html>
    <head>
        
    </head>
    <body>
        
    </body>
</html>
```

html标签是根标签，一个html文件中有且只能有1个html标签.

head标签中用来写网页描述信息，比如网页标题、摘要、编码信息等.

body标签中用来写网页显示的内容，一般情况下，要显示在网页上的内容，我们都写在body标签中.



## 5.4 head标签

### 5.4.1 title标签

首先，title标签只能写在head标签中，用来定义网页的标题. 

```html
<html>
    <head>
        <title>黑马程序员</title>
    </head>
    <body>
        
    </body>
</html>
```

这样当我们打开这个网页，你会发现网页的标题就是title标签中的内容

![](./media/01-title.png)   

所以, 当你想要为你的网页定义1个标题的时候, 只需要将标题写在head标签下的title标签中就可以.



### 5.4.2 meta标签

定义html文件的编码.

今天各位同学先照着这样写，编码的意义我们后面会有机会详细说明.

```html
<html>
    <head>
        <meta charset="utf-8"> <!-- 这句代码的意义  是告诉浏览器，当前网页的字符编码为 UTF-8 -->
        <title>黑马程序员</title>
    </head>
    <body>
        
    </body>
</html>
```

- [ ] **练习时间** 

# 06. VSCode的使用

## 6.1 官网

https://code.visualstudio.com/

## 6.2 下载安装

## 6.3 插件的安装





# 07. 常见内容标签(^)

## 7.1 文章标题标签 h1~h6

h标签用来表示文章的标题. 

其特点:

- 字体从h1-h6依次减小
- 加粗显示
- 每1个h标签都会独占一行

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>黑马程序员</title>
    </head>
    <body>
        <h1>背影</h1>
    </body>
</html>
```



## 7.2 段落标签 p

p标签用来表示文章的1个段落.

其特点:

- 独占一行, 如果内容一行占不下，会另外起1行.
- 每1个段落的前后会留些许空白.

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>黑马程序员</title>
    </head>
    <body>
        <h1>背影</h1>
        <p>我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”</p>
        <p>回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。</p>
        <p>到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有甚么要紧的了。他踌躇了一会，终于决定还是自己送我去。我两三回劝他不必去；他只说，“不要紧，他们去不好！”</p>
    </body>
</html>
```

显示效果如下

![](./media/02-p.png) 

## 7.3 水平线标签 hr

  该标签的作用是在网页上展示一条水平线.

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>黑马程序员</title>
    </head>
    <body>
        <h1>背影</h1>
        <hr> <!-- 水平线标签，就会在标题下面，第1个段落上面产生一条水平线 -->
        <p>我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”</p>
        <p>回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。</p>
        <p>到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有甚么要紧的了。他踌躇了一会，终于决定还是自己送我去。我两三回劝他不必去；他只说，“不要紧，他们去不好！”</p>
    </body>
</html>
```

显示效果如下

![](./media/03-hr.png) 

## 7.3 换行标签 br

  无论我们在html代码中写多少个空格或者换行, 浏览器在解析的时候，只会解析为一个空格符.

  当我们需要网页上的内容进行换行的时候，可以使用br标签.

   ```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>背影</title>
    </head>
    <body>
        <h1>背影</h1>
        <hr>
        <p>我与父亲不相见已二年余了，我最不能忘记的是他的背影。<br>那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”</p>
        <p>回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。</p>
        <p>到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有甚么要紧的了。他踌躇了一会，终于决定还是自己送我去。我两三回劝他不必去；他只说，“不要紧，他们去不好！”</p>
    </body>
</html>
   ```

显示效果如下

![](./media/04-br.png) 

 ## 课堂练习

![](./media/12-hw.jpg) 

 

 # 08. 文档类型

你有没有想过一个问题?

是谁？是谁规定html代码是这样写的？

## 8.1 W3C组织

- **W**orld **W**ide **W**eb Consortium  万维网联盟  HTML  CSS的规范.  js ECMA 
- 是Web技术领域最具权威和影响力的国际中立性技术标准机构 
- 该组织制定了HTML标准. HTML由该组织来维护.
- 也就是说，它规定了HTML代码应该如何编写，浏览器内核应该如何去解析.

时至今日，W3C已经提出多个版本的HTML. 

- HTML 2.0——1995年11月作为RFC 1866发布，在RFC 2854于2000年6月发布之后被宣布已经过时 
- HTML 3.2——1997年1月14日，[W3C](https://baike.baidu.com/item/W3C)推荐标准 
- HTML 4.0——1997年12月18日，W3C推荐标准   50个标签.
- HTML 4.01（微小改进）——1999年12月24日，W3C推荐标准  70
- HTML 5——2014年10月28日，W3C推荐标准   100
- HTML6

> 首先版本的意思，请各位小白同学要明白版本之间的区别
>
> 你可以这么去理解：qq5.0 与 qq4.0 的区别， 无非就是删除了一些过时的功能 增加了一些新的功能.
>
> 所以, HTML5.0与HTML4.01的区别无非就是:  删除了一些过时的标签，新增了一些现代的标签.

​    

## 8.2 DOCTYPE文档声明

    浏览器内核在解析不同版本的HTML时候，解析规则可能是不一样的，所以我们最好告诉浏览器我们编写html代码所使用的html版本. 这样浏览器就能准确的根据我们预定义的版本解析. 使用DOCTYPE文档声明就可以告诉浏览器我们使用的html版本.

- DOCTYPE标签只能写在html文档的第1行.
- 该标签的作用是告诉浏览器我们编写html文档所使用的html的版本 以便浏览器更合适的去解析
- 我们现在所使用的html版本都是5.0版本的，使用如下标签告诉浏览器我们使用的是HTML5

```html
<!DOCTYPE html> <!-- 文档声明 告诉编译器我们使用的html版本是HTML5 浏览器会使用对应机制解析 -->
<html>
    <head>
        
    </head>
    <body>
        
    </body>
</html>
```

## 8.3 W3C规范



# 09. 标签分类

## 9.1 双标签

像body标签、p标签这样的标签，有开始标签和结束标签，这样的标签叫做双标签.

双标签的特点

- 有开始和标签和结束标签
- 开始标签用<>括起来
- 结束标签用</>括起来
- 中间可以包含其他的标签

像我们学习过的html标签、head标签、body标签、title标签、p标签都是双标签.

## 9.2 单标签

只有开始标签没有结束标签的标签我们叫做单标签. 

单标签的特点

- 只有开始标签
- 不能包含其他标签

像我们学习过的meta标签、hr标签就是单标签.

需要注意的是，单标签的写法可以有两种

- 直接使用<>包围起来 比如这样  <hr>
- 也可以 <hr />  单标签这样写也可以， 所以单标签也叫做自闭和标签.

# 10. 标签之间的关系

## 10.1 嵌套关系(父子关系)

当A标签包含B标签时,那么它们之间的关系就是嵌套关系或者叫做父子关系

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>背影</title>
    </head>
    <body>
        <h1>背影</h1>
        <hr> <!-- 水平线标签，就会在标题下面，第1个段落上面产生一条水平线 -->
        <p>我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”</p>
    </body>
</html>
```

head标签与title标签就是嵌套关系。他们之间的关系也叫做父子关系。

我们称head标签为父标签，title标签为子标签.

我们在书写嵌套关系的标签时候，需要正确的嵌套，交叉嵌套的写法是错误的，比如下面这样

```html
<head>
    <title>
</head>
    </title>    <!-- 这样的写法是错误的 不允许交叉嵌套-->
```

**特别提醒： 我们在书写代码的时候，为了便于代码的查看，子标签相对于父标签另起一行，并且保持1个tab缩进，这样我们的代码变更具备良好的可读性**



## 10.2 并列关系(兄弟关系)

以上面的代码为例子.

head标签与body标签就是兄弟关系。h1标签和hr标签还有p标签就是兄弟关系

兄弟关系的标签建议保持同样的缩进，以便提升代码的阅读性.



# 11. 文本格式化标签(^)

| 标签                           |            显示效果             |          推荐使用 |
| ------------------------------ | :-----------------------------: | ----------------: |
| <b></b> 或者 <strong></strong> |    **被包裹的文本加粗显示**     | <strong></strong> |
| <i></i> 或者 <em></em>         |     *被包裹的文本斜体显示*      |         <em></em> |
| <s></s>或者 <del></del>        |  ~~被包裹的文本以删除线显示~~   |       <del></del> |
| <u></u>或者<ins></ins>         | <u>被包裹的文字以下划线显示</u> |       <ins></ins> |

## 课堂练习

![](./media/13-hw.jpg) 

# 12. 标签属性

大多数html标签是可以支持属性的. 用来规定这个标签的状态.

```html
<标签 属性名1="值1" 属性名2="值2" ...... >    </标签>
```

如meta标签可以有一个charset属性，来指定文档编码

再比如html标签，可以有1个lang属性 来指定文档语言，以便第三方辅助设备识别

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```

lang属性的值可以是:  en、zh-CN 等等.

需要注意的是:

* 如果是双标签的属性，属性必须写在开始标签中.
* 属性的值要使用双引号引起来.



# 13. 图片标签 img

img标签的作用用于在网页上显示一张图片

| 属性名 | 属性值              | 作用详解                                     |
| ------ | ------------------- | -------------------------------------------- |
| src    | url或者图片本站路径 | 指定要显示的图片的路径                       |
| title  | 文本                | 鼠标悬停时显示的内容                         |
| alt    | 文本                | 图片无法显示时显示的内容（建议这个属性必须） |
| width  | 数字                | 设置显示的图形宽度 默认就是图片本身的宽度    |
| height | 数字                | 设置显示的图形高度 默认就是图片本身的高度    |
| border | 数字                | 设置显示的图形边框 默认就是图片没有边框      |

案例如下

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
    <img src="images/logo.png" title="黑马程序员" alt="图片暂时无法显示"></img>
</body>
</html>
```



# 14. 文件路径(^)

**文件的路径指的是这个文件在磁盘上所处的位置的字符串表现形式**

## 14.1 绝对路径

* 我们可以写1个从盘符开始的本地绝对路径.  这样写的话，移植性很低 (把文档拷贝到另外1台电脑上，这个图片的路径就发生变化了)

  ```html
  <img src="E:\工作文件夹\前端基础班\Day01-HTML\备课代码\images\logo.png" alt="">
  ```

* 像这样的路径 - 从盘符开始写的一个路径，我们称之为绝对路径



## 14. 2 相对路径

相对路径是指**目标文件相当于当前文件的路径**

如有以下结构的目录文件.

![](./media/05-path.png) 

我们要在***photo.html***文件中使用***img***标签来显示***logo.png***图片.

那么`src`属性就可以这么写

```html
<img src="images/logo.png" alt="">
```



## 14.3 相对路径指代

`../` 代表当前文件的上1级目录

如有以下结构的目录文件.

![](./media/06-path.png)  

我们要在`login.html`文件中使用***img***标签来显示***logo.png***图片.

那么`src`属性就可以这么写
```html
<img src="../images/logo.png" alt="">
```

## 课堂作业



# 15. 超链接

要在网页上显示一个超链接，需要使用a标签.

超链接的文本使用a标签包围起来, 超链接指向的地址使用href属性来指定.

```html
<a href="http://www.itheima.com">黑马程序员</a>
<a href="login.html">登录</a>
```

a标签属性详解

| 属性名 | 取值                 | 详解                                                    |
| ------ | -------------------- | ------------------------------------------------------- |
| href   | 外部链接或者内部链接 | 外部链接写完整URL, 内部链接写相对地址即可               |
| target | _self    _blank      | _self默认值代表在当前窗口打开页面. _blank在新窗口中打开 |

## 15.1 空链接

如果在编写代码的时候，暂时不知道超链接指向的地址，可以先给href属性1个"#"值.
```html
<a href="#">黑马程序员</a>
```

## 15.2 多媒体超链接

不仅可以创建文本超链接，在网页中各种网页元素，如图像、表格、音频、视频等都可以添加超链接

```html
<a href="#">
    <img src="images/clickme.png">
</a>
```

#  16. base标签

base标签的作用在于设置页面上所有a标签target的值.

base标签写在head标签里面

```html
<head>
    <base target="_blank">
</head>
```

# 17. 锚链接

锚链接的作用在于: 单击超链接的时候跳转到到页面指定的地方.

如我们经常见到的 **回到顶部**功能

实现锚链接的步骤

- 先为欲跳转到的目的元素设置1个id属性,并为其设置值.
- 在a链接的href属性的值写上"#要跳转到的元素的id值"

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
   <p id="top">这是顶部1</p>
   <p>这是顶部2</p>
   <p>这是顶部3</p>
   <p>这是顶部4</p>
   <p>这是顶部5</p>
   <p>这是顶部6</p>
   <p>这是顶部7</p>
   <p>这是顶部8</p>
   <p>这是顶部9</p>
   *******
   <a href="#top">回到顶部</a> <!-- 点击该超链接的时候 就会跳转到页面上id为top的元素 -->
</body>
</html>
```

# 18. 转义符

在HTML当中某些特殊的字符是无法直接显示的，因为他们有特别的意义. 如果要显示这些特殊的字符的话，就需要使用对应的转义符来表示

![](./media/07-zifu.png) 

# 19. 注释标签

注释标签用于在HTML文档中做注解。注释标签不会被浏览器解析，它的作用仅仅是我们在写代码的时候，如果结构比较复杂，我们对这段代码使用注释标签做1个解释，这样方便下次我们代码的阅读

建议, 不要写一些无聊的注释 因为

* 它会被下载到浏览器被用户看到
* 也会浪费网络流量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
   <p id="top">这是顶部1</p>  <!-- 页面最顶部的标签我们为其设置1个id属性 -->
   <p>这是顶部2</p>
   <p>这是顶部3</p>
   <p>这是顶部4</p>
   <p>这是顶部5</p>
   <p>这是顶部6</p>
   <p>这是顶部7</p>
   <p>这是顶部8</p>
   <p>这是顶部9</p>
   *******
   <a href="#top">回到顶部</a> <!-- 点击该超链接的时候 就会跳转到页面上id为top的元素 -->
</body>
</html>
```

# 20. 列表标签

列表标签的作用: 用来展示一组数据.

## 20.1 无序列表  

无序列表用来展示一组没有顺序的数据

语法: 最外层是一个ul标签  表示ul标签范围之内的数据都是属于这个无序列表的，每一个数据项就使用1个li标签来表示

便于记忆，你可以这么理解

* ul ==> unordered list 
* li  ==>  list item 

案例演示

```html
  <h3>我最喜欢的歌曲</h3>
  <ul>
      <li>小小竹排江中游</li>
      <li>中国我爱你</li>
      <li>大花轿</li>
      <li>爱你一万年</li>
      <li>海阔天空</li>
      <li>浪漫人生路</li>
  </ul>
```

![](./media/08-ul.png) 

需要注意的是

- 无序列表中的各项数据没有先后之分。可以调换位置。
- `ul`标签中只能有`li`标签. 不能有其他标签.
- `ul`标签中不能单独出现,就是说,不能只写一个`ul`标签,中间不包含任何内容.
- `li`标签是一个容器,可以放其它标签.

案例演练: 新闻列表 

![](./media/09-ul.png) 

## 20.2 有序列表

有序列表展示的是一组有顺序的数据.

```html
  <ol>
      <li>列表数据1</li>
      <li>列表数据2</li>
      <li>列表数据3</li>
      <li>列表数据4</li>
      <li>列表数据5</li>
  </ol>
```

方便记忆，你可以记住 `ol` 是` orderded list` 的缩写

案例演示

```html
  <h3>购物步骤</h3>
  <ol>
      <li>注册账号</li>
      <li>挑选商品</li>
      <li>加入购物车</li>
      <li>在线支付</li>
      <li>等待收货</li>
      <li>商品评价</li>
  <ol>
```

![](./media/11-ol.png)   

使用注意：

- 其实和ul使用是一样的
- 唯一的区别就是外层ol包围.
- 表示的数据是有顺序的.

## 20.3 自定义列表(了解)

自定义列表的作用主要是两个方面

* 显示带层级关系的列表
* 解释名词的格式 

### 20.3.1 使用自定义列表显示带层级关系的列表

```html
  <dl>
      <dt>家用电器</dt>
      <dd>电视</dd>
      <dd>空调</dd>
      <dd>洗衣机</dd>
      <dd>冰箱</dd>
      <dd>厨卫大电</dd>
      <dd>家庭影音</dd>
      <dt>电脑办公</dt>
      <dd>电脑整机</dd>
      <dd>电脑配件</dd>
      <dd>外设产品</dd>
      <dd>游戏设备</dd>
      <dd>网络设备</dd>
      <dd>办公设备</dd>
  </dl>
```

![](./media/12-dl.png) 

 ### 20.3.2 使用自定义列表显示解释名词的格式

```html
  <dl>
      <dt>黑马程序员</dt>
      <dd>黑马程序员专注于Android培训、Java培训、JavaEE培训、iOS培训、
      UI设计培训、PHP培训、C++培训、WEB前端培训、移动端WEB前端培训，
      并提供Android培训、Java培训、JavaEE 培训、iOS培训、UI设计培训、
      PHP培训、C++培训、WEB前端培训、移动端WEB前端培训服务。</dd>
</dl>
```

![](./media/13-dl.png) 

# 21. 表格 table

 * 作用: 展示有行有列的表格数据. 展示N行N列的表格数据.
* 进一步理解:
    * 表格中有行.
    * 每一行中有单元格
    * 真正的数据是存储在单元格中的.

## 21.1 表格的基本使用

* `table`标签表示定义一个表格.
* `tr`标签在`table`标签中表示定义了一行.
* `td`标签在`tr`标签中表示定义了一个单元格.
* 最终,我们将数据存储在`td`单元格中.

   ```html
    <table> <!-- table标签定义一个表格 -->
        <tr> <!-- tr标签定义了一行 -->
            <td>数据1</td> <!--td标签表示在第1行中定义了1个单元格 -->
            <td>数据2</td>
            <td>数据3</td>
            <td>数据4</td>
        </tr>
        <tr> <!-- tr标签定义了一行 -->
            <td>数据5</td> <!--td标签表示在第1行中定义了1个单元格 -->
            <td>数据6</td>
            <td>数据7</td>
            <td>数据8</td>
        </tr>
        <tr> <!-- tr标签定义了一行 -->
            <td>数据9</td> <!--td标签表示在第1行中定义了1个单元格 -->
            <td>数据10</td>
            <td>数据11</td>
            <td>数据12</td>
        </tr>
    </table>
    <!-- 表示定义了一个表格,这个表格有3行,每一行有4个单元格,将数据存储在单元中 -->
   ```

![](./media/table1.png) 

**案例演示: 班级人数统计**

```html
<table>
    <tr>
        <td>序号</td>
        <td>班级名称</td>
        <td>班级人数</td>
        <td>开班时间</td>
        <td>教室</td>
        <td>班主任</td>
    </tr>
    <tr>
        <td>1</td>
        <td>深圳前端就业班01期</td>
        <td>109</td>
        <td>2016/9/12</td>
        <td>1301</td>
        <td>小花老师</td>
    </tr>
    <tr>
        <td>2</td>
        <td>深圳前端就业班02期</td>
        <td>100</td>
        <td>2016/10/6</td>
        <td>1303</td>
        <td>小李老师</td>
    </tr>
    <tr>
        <td>3</td>
        <td>深圳前端就业班03期</td>
        <td>98</td>
        <td>2016/10/1</td>
        <td>1308</td>
        <td>小隆老师</td>
    </tr>
    <tr>
        <td>4</td>
        <td>深圳前端就业班04期</td>
        <td>99</td>
        <td>2016/11/12</td>
        <td>1314</td>
        <td>小泽老师</td>
    </tr>
</table>
```
![](media/table2.png) 

  ## 21.2 表格属性

### 21.2.1 设置表格及单元格的边框

* `table`标签有一个属性`border`可以定义表格边框的宽度.
  ​    ```html
  ​    <table border="1">
  ​        ......
  ​    </table>
  ​    ```

* 效果展示

    ![](media/table3.png)  

### 21.2.2 设置单元格与单元格之间的距离

* 默认情况下,每一个单元格之间是有一小小段距离的.
* 单元格与单元格之间的距离我们是可以自定义的增大或者减小的.
* 如果我们将单元格之间的距离设置为比较大的数,那么单元格与单元格之间的距离将会远一些.
* 如果我们将单元格之间的距离设置为0,那么单元格与单元格的边线就会重叠在一起.
* 通过`cellspacing`属性,可以设置单元格之间的距离

 ```html
	<table border="1" cellspacing="0">
        ......
    </table>
 ```

* 效果演示:

    ![](media/table4.png)  

### 21.2.3 设置单元格内容的内边距

* 默认情况下,单元格的内容与单元格之间的距离挨的很近.

* 这样的话,整个表格看起来就比较紧凑.

* 我们可以调整单元格内容与单元格边框的距离.

* 通过`cellpadding`属性设置.
    ```html
     <table border="1" cellspacing="0" cellpadding="5">
        ......
     </table>
    ```

* 这样设置的话,内容与单元格之间的距离就设置成为了5个像素,这样看起来表格就比较松散一些.

    ![](media/table5.png) 

### 21.2.4 设置表格的宽度和高度

 默认情况下,表格的宽度和高度是根据表格的内容自动适应的.
* 但是我们可以通过相关属性对表格的宽度个高度重新定义.

* `width`属性可以设置表格的宽度

* `height`属性可以设置表格的高度

* 代码展示
    ```html
    <table border="1" cellspacing="0" cellpadding="5" width="800" height="400">
        ......
    <table>
    ```

* 效果展示
    ![](media/table7.png) 

 ## 21.3 单元格跨列

* 某些情况下,某一个单元格可能需要跨列显示.
* 意思就是说,某一行的某一个单元格需要占用同一行的两个单元格或者多个单元格的位置.
* 那么这个时候,我们就可以为该单元格设置`colspan`属性.指定其跨列的个数.

 * 代码演示:
    ```html
    <table border="1" cellpadding="15" cellspacing="0">
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td colspan="2">1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td colspan="3">1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>
    ```

*  效果展示:

    ![](media/table8.png) 

* 跨列注意:
    * 只能左边的单元格往右边的单元格跨. 不能从右往左跨.
    * 保证跨完以后,总的列数保持一致,否则就会畸形显示.

     

## 21.4 单元格跨行

* 某些情况下,某一个单元格可能需要跨行显示.

* 意思就是说,某一行的某一个单元格需要占用同一列的两个单元格或者多个单元格的位置.

* 那么这个时候,我们就可以为该单元格设置`rowspan`属性.指定其跨行的个数.

* 代码演示:
    ```html
    <table border="1" cellpadding="15" cellspacing="0">
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td rowspan="3">1</td>
        </tr>
         <tr>
            <td rowspan=2>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
         <tr>
            <td>1</td>
            <td>1</td>
        </tr>
         <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>
    
    ```

* 效果展示

    ![](media/table9.png) 

* 跨行注意:
    * 只能上边的单元格往下边的单元格跨. 不能从下往上跨.
    * 保证跨完以后,总的单元格数保持一致,否则就会畸形显示.


## 21.5 设置单元格内容的对齐方式

* 我们可以设置单元格内容的对齐方式.
* 使用属性`align`就可以设置 其值可选`left`、`center`、`right`。
* 该属性可以写在table标签上.如果写在table标签上 是整个表格居左、居中、居右显示.
* 该属性可以写在tr标签上.如果写在tr标签上 那么只有该行的单元格中的内容都起作用.
* 该属性可以写在td单元格标签上.如果写在单元格标签上 那么仅仅该单元格的内容都起作用.

## 21.6 符合W3C规范的表格

* 表格一般分为`标题`、`表头`、`表主体`、`表尾`组成.
* W3C建议我们最好将表格数据分为这么几个部分
* `caption`标签定义表格的标题.
* `thead`标签定义表格的头部
* `tbody`标签定义表格的主体
* `tfoot`标签定义表格的尾部
* W3C使用建议: 如果我们同时使用了thead tbody tfoot 建议出现顺序thead tfoot tbody.

   ```html
    <table>
        <caption>深圳黑马前端学院开班记录表</caption> <!-- 定义表格的标题 -->
        <thead> <!-- 表格的头部 一般用来表示表格的头部标题-->
            <tr> <!-- 定义行 -->
                <th>序号</th> <!-- th也表示单元格,只不过这个单元格是来装表头数据的 -->
                <th>班级名称</th>
                <th>班级人数</th>
                <th>开班时间</th>
                <th>教室</th>
                <th>班主任</th>
            </tr>
        </thead>
         <tfoot> <-- 定义表格的尾部 -->
            <tr>
                <td colspan="6" align="right">统计时间:2017/3/1 13:34</td>
            </tr>
        </tfoot>
        <tbody><!-- 定义表格的主体 -->
            <tr>
                <td>1</td>
                <td>深圳前端就业班01期</td>
                <td>109</td>
                <td>2016/9/12</td>
                <td>1301</td>
                <td>小花老师</td>
            </tr>
            <tr>
                <td>2</td>
                <td>深圳前端就业班02期</td>
                <td>100</td>
                <td>2016/10/6</td>
                <td>1303</td>
                <td>小李老师</td>
            </tr>
            <tr>
                <td>3</td>
                <td>深圳前端就业班03期</td>
                <td>98</td>
                <td>2016/10/1</td>
                <td>1308</td>
                <td>小隆老师</td>
            </tr>
            <tr>
                <td>4</td>
                <td>深圳前端就业班04期</td>
                <td>99</td>
                <td>2016/11/12</td>
                <td>1314</td>
                <td>小泽老师</td>
            </tr>
        </tbody>
    </table>
   ```

![](./media/table6.png) 

## 21.7 表格属性总结

![](./media/14-table.png) 





# 22. 表单元素

> 在此之前，我们学习的都是展示类标签，将数据展示在网页上。但是我们如何在网页上输入数据，并将数据提交到服务器呢？这就要学习表单元素了.

 

## 22.1 form表单（了解）
> 这个标签，并不会在页面上显示。如果我们填写的数据需要被提交到服务器，那么这些收集数据的元素就必须放到form表单元素中。 该知识点之所以了解是因为form元素的特性会在后面的课程中深入讲解.
### form表单属性
| 属性名 | 属性值 | 作用详解                   |
| ------ | ------ | -------------------------- |
| action | 文本   | 提交到服务器的url          |
| method | 文本   | 提交数据的方式 get/post 等 |

## 22.2  input元素

> input元素是多数情况下用到的表单元素. 该标签用来让用户在网页上输入各种类型的数据. 通过input标签的type属性，可以展示出不同的输入类型元素.

### input属性

| 属性名    | 属性值                    | 作用详解                    |
| --------- | ------------------------- | --------------------------- |
| type      | text                      | 文本输入框                  |
|           | password                  | 密码输入框                  |
|           | checkbox                  | 复选按钮                    |
|           | radio                     | 单选按钮                    |
|           | button                    | 普通按钮                    |
|           | submit                    | 提交按钮                    |
|           | reset                     | 表单重置按钮                |
|           | image                     | 图像形式的提交按钮          |
|           | file                      | 选择文件按钮                |
|           | hidden                    | 隐藏元素，用于与服务器交互  |
| name **   | 文本,程序员自定义         | 元素名称                    |
| value     | 文本,程序员自定义         | input控件中的默认文本值     |
| size      | 正整数                    | input控件中在页面显示的宽度 |
| checked   | 任意值(checked)/无此属性  | 定义选择控件的默认选中项    |
| maxlength | 正整数                    | 控件允许输入的最大字符数    |
| readonly  | 任意值(readonly)/无此属性 | 文本框内的数据是否可编辑    |


### 22.2.1 文本输入框

当`input`标签的`type`属性的值设定为`text`时, 就会展示一个文本输入框，让用户在网页上输入文本.

```html
<form action="regist.php" method="get">
    用户名: <input type="text">
</form>
```

![](./media/01-text.jpg) 

*  `value`属性，决定文本框中的默认文本
* `readonly`属性, 决定文本框内的数据是否允许被编辑
* `size`
* `maxlength`



 ### 22.2.2 提交按钮

当`input`标签的`type`属性的值设定为`submit`时, 就会展示一个提交按钮，用户点击这个按钮，就可以将页面上填写的数据提交指定的服务器url.  可以通过value属性，修改提交按钮的文本.

```html
<form action="regist.php" method="get">
    用户名: <input type="text"> <br>
    <input type="submit">
</form>
```

![](./media/02-submit.jpg) 

**需要特别注意**的是， 如果我们就这么写，我们在页面上填写的数据是不会被提交到指定的url路径的，只有当form表单中的表单元素被设置了name属性，被设置了name属性的表单控件，用户输入的值才会被提交到服务器.

![](./media/03-name.jpg) 

![](./media/04-name.jpg) 

 **提交的形式是** `name1=value1&name2=value2&name3=value3......`

### 22.2.3 密码输入框

当`input`标签的`type`属性的值设定为`password`时, 就会展示一个密码输入框，无论用户输入什么内容，都是以*显示

```html
<form action="regist.php" method="get">
    用户名: <input type="text" name="uName"> <br>
    登录密码: <input type="password"  name="pwd1"> <br>
    确认密码: <input type="password"  name="pwd2"> <br>
    <input type="submit">
</form>
```

![](./media/05-pwd.jpg) 

### 22.2.4 复选按钮

当`input`标签的`type`属性的值设定为`checkbox`时, 就会展示一个复选框.

```html
<form action="regist.php" method="get">
    用户名: <input type="text" name="uName"> <br>
    登录密码: <input type="password"  name="pwd1"> <br>
    确认密码: <input type="password"  name="pwd2"> <br>
    爱好:  <input type="checkbox" name="ah_program">编程 
    <input type="checkbox" name="ah_study">学习 
    <input type="checkbox" name="ah_noSleep">熬夜<br>
    <input type="submit">
</form>
```

如果复选框被选中，那么在被提交的时候,  提交数据的格式为:  `复选框name=on`

`checked`属性，用来决定默认选中项

### 22.2.5 label标签

单击文本的时候，关联所属的单选按钮或者复选按钮.

使用步骤

* 使用`label`标签将文本包裹起来.
* 为要获取焦点的控件给1个id属性.
* 指定`label`标签指定`for`属性为关联控件的`id`属性的值.

```html
<form action="regist.php" method="get">
    用户名: <input type="text" name="uName"> <br>
    登录密码: <input type="password"  name="pwd1"> <br>
    确认密码: <input type="password"  name="pwd2"> <br>
    爱好:  <input type="checkbox" name="ah_program" id="idProgram"> 
          <label for="idProgram">编程</label>
          <input type="checkbox" name="ah_study" id="idStudy"> 
          <label for="idStudy">学习</label>
          <input type="checkbox" name="ah_noSleep" id="idNoSleep"> 
          <label for="idNoSleep">熬夜</label> <br>
    <input type="submit">
</form>
```

### 22.2.6 单选按钮

当`input`标签的`type`属性的值设定为`radio`时, 就会展示一个单选框.

```html
	<form action="regist.php" method="get">
    	用户名: <input type="text" name="uName"> <br>
    	登录密码: <input type="password"  name="pwd1"> <br>
    	确认密码: <input type="password"  name="pwd2"> <br>
    	爱好:  <input type="checkbox" name="ah_program" id="idProgram"> 
    	      <label for="idProgram">编程</label>
    		  <input type="checkbox" name="ah_study" id="idStudy">
    		  <label for="idStudy">学习</label>
    		  <input type="checkbox" name="ah_noSleep" id="idNoSleep">
    		  <label for="idNoSleep">熬夜</label> <br>
    	性别: <input type="radio" name="gender" id="gender_male">
    	      <label for="gender_male">男</label>
    	      <input type="radio" name="gender" id="gender_female">
    	      <label for="gender_female">女</label> <br>
    	<input type="submit">
	</form>
```

多个单选按钮如果要求互斥，那么使用同1个name属性就可以.

`checked`属性，用来决定默认选中项

### 22.2.7 普通按钮

当`input`标签的`type`属性的值设定为`button`时, 就会展示一个普通的按钮, 使用`value`属性来定义按钮的文本

```html
<input type="button" value="注册为会员">
```



### 22.2.8 表单重置按钮

当`input`标签的`type`属性的值设定为`reset`时, 就会展示一个重置按钮,点击会将form表单内的表达元素重置为初始值.

```html
<input type="resrt">
```



### 22.2.9 image提交按钮

当`input`标签的`type`属性的值设定为`image`时, 就会展示一个图片提交按钮，再使用src属性指定图片的路径.

```html
<input type="image" src="images/button-sure.png">
```



### 22.2.10 文件域

当`input`标签的`type`属性的值设定为`file`时, 就会展示一个文件选择按钮，供我们选择文件以便上传到服务器.

```html
<input type="file" name="photo">
```



### 22.2.11 隐藏域（了解)

当`input`标签的`type`属性的值设定为`hidden`时, 这个元素不会显示在页面上，一般用来与服务器交互的时候，浏览器存储一些数据.

```html
<input type="hidden" name="xid" value="11901">
```



## 22.3 下拉列表

`select`标签，用来展示1个下拉列表数据.

* 最外围是1个`select`标签
* 其中是1个1个的`option`标签,每1个`option`就是1个 下拉数据.

```html
<select>
     <option>广东</option>
     <option>黑龙江</option>
     <option>江西</option>
     <option>四川</option>
     <option>香港</option>
     <option>内蒙古</option>
</select>
```

![](./media/06-select.jpg) 

* 为`option`标签指定`selected`属性，以默认选中该项.



### 22.3.1 下拉项分组

```html
<select>
	<optgroup label="北方">
		<option>黑龙江</option>
		<option>吉林</option>
		<option>辽宁</option>
		<option>内蒙古</option>
	</optgroup>
	<optgroup label="南方">
	  	<option>广东</option>
     	<option>江西</option>
     	<option>四川</option>
    	<option>香港</option>
	</optgroup>
</select>
```

![](./media/07-select.jpg) 



## 22.4 textarea 文本域

> 文本框只能显示一行文本,  而textarea文本域可以显示编辑多行文本.

```html
<textarea  cols="30" rows="5">这里是文本域，可以输入多行文本!</textarea>
```

`cols`属性文本域的列数

`rows`属性文本域的行数.

# 23. 布局标签

> div和span标签，没有任何显示作用. 他们被做为一个容器来容纳其它标签，以便适应CSS来统一布局.





# 24. 其它不常用标签

## 24.1 框架标签 iframe

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

通过iframe标签的src属性，可以指定内联的网页.

```html
<iframe src="news.html"></iframe>
```

![](./media/11-ifr.jpg) 

## 24.2  fieldset标签

```html
<fieldset>
    <legend>基本信息</legend>
    姓名: <input type="text" /> <br>
    年龄: <input type="text" />
</fieldset>
<fieldset>
    <legend>健康信息</legend>
    身高: <input type="text" /> <br>
    体重: <input type="text" />
</fieldset>
```

![](./media/10-fs.jpg) 

# 25. HTML语义化

> 适应合适的标签包裹合适的内容. 便于SEO解析网页



## 25.1 SEO标签

```html
<meta name="description" content="这是王绚文的个人网站,王绚文,人称老王,现就职于黑马程序员,做学员的梦想摆渡人,在这里将向你展示最全面的老王,老王将在这里分享工作和生活的点点滴滴!">
<meta name="keywords" content="王绚文 xuanwen xuanwen.wang 绚文 绚文王 隔壁老王 老王 个人网站 黑马老王 highven highven.wang">
<meta name="author" content="王绚文 highven">
```



