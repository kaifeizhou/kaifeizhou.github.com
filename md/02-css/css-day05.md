# 定位(position)

## 目标  

* **理解**
  * 能说出为什么要用定位
  * 能说出定位的4种分类
  * 能说出四种定位的各自特点
  * 能说出我们为什么常用子绝父相布局
* **应用**
  * 能写出淘宝轮播图布局

## 1. CSS 布局的三种机制

> 网页布局的核心 —— 就是**用 CSS 来摆放盒子位置**。

CSS 提供了 **3 种机制**来设置盒子的摆放位置，分别是**普通流**、**浮动**和**定位**，其中：

1. **普通流**（**标准流**）

2. **浮动**
   * 让盒子从普通流中**浮**起来 —— **让多个盒子(div)水平排列成一行**。

3. **定位**
   * 将盒子**定**在某一个**位**置  自由的漂浮在其他盒子的上面  —— CSS 离不开定位，特别是后面的 js 特效。

## 2. 为什么使用定位



> **结论**：要实现以上效果，**标准流**或**浮动**都无法快速实现

pink老师一句话说出定位：

> 将盒子**定**在某一个**位**置  自由的漂浮在其他盒子(包括标准流和浮动)的上面 

所以，我们脑海应该有三种布局机制的上下顺序

标准流在最底层 (海底)  -------    浮动 的盒子 在 中间层  (海面)  -------   定位的盒子 在 最上层  （天空）

## 3. 定位详解

定位也是用来布局的，它有两部分组成：

> `定位 = 定位模式 + 边偏移`

### 3.1 边偏移

简单说， 我们定位的盒子，是通过边偏移来移动位置的。

在 CSS 中，通过 `top`、`bottom`、`left` 和 `right` 属性定义元素的**边偏移**：（方位名词）

| 边偏移属性 | 示例           | 描述                                                     |
| ---------- | :------------- | -------------------------------------------------------- |
| `top`      | `top: 80px`    | **顶端**偏移量，定义元素相对于其父元素**上边线的距离**。 |
| `bottom`   | `bottom: 80px` | **底部**偏移量，定义元素相对于其父元素**下边线的距离**。 |
| `left`     | `left: 80px`   | **左侧**偏移量，定义元素相对于其父元素**左边线的距离**。 |
| `right`    | `right: 80px`  | **右侧**偏移量，定义元素相对于其父元素**右边线的距离**   |

定位的盒子有了边偏移才有价值。 一般情况下，凡是有定位地方必定有边偏移。

### 3.2  定位模式 (position)

在 CSS 中，通过 `position` 属性定义元素的**定位模式**，语法如下：

```css
选择器 { position: 属性值; }
```
定位模式是有不同分类的，在不同情况下，我们用到不同的定位模式。
| 值         |     语义     |
| ---------- | :----------: |
| `static`   | **静态**定位 |
| `relative` | **相对**定位 |
| `absolute` | **绝对**定位 |
| `fixed`    | **固定**定位 |





#### 3.2.1 静态定位(static) - 了解

- **静态定位**是元素的默认定位方式，无定位的意思。它相当于 border 里面的none， 不要定位的时候用。
- 静态定位 按照标准流特性摆放位置，它没有边偏移。
- 静态定位在布局时我们几乎不用的 

#### 3.2.1 相对定位(relative) - 重要

- **相对定位**是元素**相对**于它  原来在标准流中的位置 来说的。（自恋型）

**效果图**：



相对定位的特点：（务必记住）
- 相对于 自己原来在标准流中位置来移动的
- 原来**在标准流的区域继续占有**，后面的盒子仍然以标准流的方式对待它。

#### 3.2.3 绝对定位(absolute) - 重要  

**绝对定位**是元素以带有定位的父级元素来移动位置 （拼爹型）

1. **完全脱标** —— 完全不占位置；  

2. **父元素没有定位**，则以**浏览器**为准定位（Document 文档）。

3. **父元素要有定位**

   * 将元素依据最近的已经定位（绝对、固定或相对定位）的父元素（祖先）进行定位。



绝对定位的特点：（务必记住）

- 绝对是以带有定位的父级元素来移动位置 （拼爹型） 如果父级都没有定位，则以浏览器文档为准移动位置
- 不保留原来的位置，完全是脱标的。

因为绝对定位的盒子是拼爹的，所以要和父级搭配一起来使用。

##### 定位口诀 —— 子绝父相

刚才咱们说过，绝对定位，要和带有定位的父级搭配使用，那么父级要用什么定位呢？

**子绝父相** —— **子级**是**绝对**定位，**父级**要用**相对**定位。

> **子绝父相**是使用绝对定位的口诀，要牢牢记住！

**疑问**：为什么在布局时，**子级元素**使用**绝对定位**时，**父级元素**就要用**相对定位**呢？

观察下图，思考一下在布局时，**左右两个方向的箭头图片**以及**父级盒子**的定位方式。



**分析**：

1. **方向箭头**叠加在其他图片上方，应该使用**绝对定位**，因为**绝对定位完全脱标**，完全不占位置。
2. **父级盒子**应该使用**相对定位**，因为**相对定位不脱标**，后续盒子仍然以标准流的方式对待它。
   * 如果父级盒子也使用**绝对定位**，会完全脱标，那么下方的**广告盒子**会上移，这显然不是我们想要的。

**结论**：**父级要占有位置，子级要任意摆放**，这就是**子绝父相**的由来。

#### 3.2.4 固定定位(fixed) - 重要

**固定定位**是**绝对定位**的一种特殊形式： （认死理型）   如果说绝对定位是一个矩形 那么 固定定位就类似于正方形

1. **完全脱标** —— 完全不占位置；
2. 只认**浏览器的可视窗口** —— `浏览器可视窗口 + 边偏移属性` 来设置元素的位置；
   * 跟父元素没有任何关系；单独使用的
   * 不随滚动条滚动。

> 案例演练：固定定位案例。



**提示**：IE 6 等低版本浏览器不支持固定定位。

## 4. 定位(position)的案例

### 4.1 哈根达斯

**案例截图**：



#### 哈根达斯分析

1. 一个大的 `div` 中包含 `3` 张图片；
2. 大的 `div` 水平居中；
3. `2` 张小图片**重叠**在**广告**图片上方 —— 脱标，不占位置，需要使用**绝对定位**；
4. `2` 张小图片分别显示在**左上角**和**右下角** —— 需要**使用边偏移确定准确位置**。

**案例小结**：

1. **子绝父相** —— **子元素**使用**绝对定位**，**父元素**使用**相对定位**；
2. **与浮动的对比**：
   * **绝对定位**：脱标，**利用边偏移指定准确位置**；
   * **浮动**：脱标，不能指定准确位置，**让多个块级元素在一行显示**。

> 课堂练习：模拟老师的随堂案例完成**哈根达斯**案例（5 分钟）。

### 4.2 仿新浪头部和广告



#### 新浪案例分析

1. 顶部图片**固定**在浏览器可视窗口顶部，不会随窗口一起滚动；
2. 左右两侧的广告图片**固定**在浏览器可视窗口的左右两侧，不会随窗口一起滚动；
3. 注意：**底部的内容图片**初始**显示在顶部图片的下方**，如何解决？

#### 步骤 1 —— 顶部图片和底部内容

```css
.top {
    /* 注意：使用固定定位时，如果盒子中没有内容，需要指定宽度 */
    width: 100%;
    height: 44px;
    background: url(images/top.png) no-repeat top center;
    position: fixed;
    left: 0px;
    top: 0px;
}

.box {
    width: 1002px;
    /* 顶部的 44px 的 margin 可以让 box 显示在顶部图片下方 */
    margin: 44px auto;
}
```

**注意**：

1. 在使用固定定位时，如果盒子中没有内容，需要指定宽度
2. 设置底部内容图片的**顶部 `margin`**，可以让底部盒子初始显示在顶部图片的下方。

#### 步骤 2 —— 左右两侧广告

```css
.ad-left,
.ad-right {
    position: fixed;
    top: 100px;
}

.ad-left {
    left: 0px;
}

.ad-right {
    right: 0px;
}
```

**注意**：不要同时使用 `left` 和 `right` 和边偏移属性。

**案例小结**：

1. **固定定位**的应用场景：**固定在浏览器可视窗口某个位置的布局**；
2. 在使用固定和绝对定位时，如果盒子中没有内容，需要指定宽度（稍后就讲）。

> 课堂练习：模拟老师的随堂案例完成**仿新浪头部和广告**案例（5 分钟）。

## 5. 定位(position)的扩展

### 5.1 绝对定位的盒子居中

> **注意**：**绝对定位/固定定位的盒子**不能通过设置 `margin: auto` 设置**水平居中**。

在使用**绝对定位**时要想实现水平居中，可以按照下图的方法：



1. `left: 50%;`：让**盒子的左侧**移动到**父级元素的水平中心位置**；
2. `margin-left: -100px;`：让盒子**向左**移动**自身宽度的一半**。

> 案例演示：相对定位案例。

#### 盒子居中定位示意图



> 课堂练习：实现**盒子左中、右中、中上、中下、中中定位**（5 分钟）。

### 5.2 堆叠顺序（z-index）

在使用**定位**布局时，可能会**出现盒子重叠的情况**。

加了定位的盒子，默认**后来者居上**， 后面的盒子会压住前面的盒子。

应用 `z-index` 层叠等级属性可以**调整盒子的堆叠顺序**。如下图所示：



`z-index` 的特性如下：

1. **属性值**：**正整数**、**负整数**或 **0**，默认值是 0，数值越大，盒子越靠上；
2. 如果**属性值相同**，则按照书写顺序，**后来居上**；
3. **数字后面不能加单位**。

**注意**：`z-index` 只能应用于**相对定位**、**绝对定位**和**固定定位**的元素，其他**标准流**、**浮动**和**静态定位**无效。

> 案例演示：堆叠顺序。

### 5.3 定位改变display属性

 前面我们讲过， display 是 显示模式， 可以改变显示模式有以下方式:

* 可以用inline-block  转换为行内块
* 可以用浮动 float 默认转换为行内块（类似，并不完全一样，因为浮动是脱标的）
* 绝对定位和固定定位也和浮动类似， 默认转换的特性 转换为行内块。

所以说， 一个行内的盒子，如果加了**浮动**、**固定定位**和**绝对定位**，不用转换，就可以给这个盒子直接设置宽度和高度等。

> 完善新浪导航案例

**同时注意：**

浮动元素、绝对定位(固定定位）元素的都不会触发外边距合并的问题。 （我们以前是用padding border overflow解决的）

也就是说，我们给盒子改为了浮动或者定位，就不会有垂直外边距合并的问题了。



## 6. 综合演练 - 淘宝轮播图



#### 圆角矩形设置4个角

圆角矩形可以为4个角分别设置圆度， 但是是有顺序的

```
border-top-left-radius:20px;
border-top-right-radius:20px;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
```

* 如果4个角，数值相同

  ~~~css
border-radius: 15px;
  ~~~

* 里面数值不同，我们也可以按照简写的形式，具体格式如下:

~~~css
border-radius: 左上角 右上角  右下角  左下角;
~~~

还是遵循的顺时针。

## 7. 定位小结

| 定位模式         | 是否脱标占有位置     | 移动位置基准           | 模式转换（行内块） | 使用情况                 |
| ---------------- | -------------------- | :--------------------- | ------------------ | ------------------------ |
| 静态static       | 不脱标，正常模式     | 正常模式               | 不能               | 几乎不用                 |
| 相对定位relative | 不脱标，占有位置     | 相对自身位置移动       | 不能               | 基本单独使用             |
| 绝对定位absolute | 完全脱标，不占有位置 | 相对于定位父级移动位置 | 能                 | 要和定位父级元素搭配使用 |
| 固定定位fixed    | 完全脱标，不占有位置 | 相对于浏览器移动位置   | 能                 | 单独使用，不需要父级     |

**注意**：

1. **边偏移**需要和**定位模式**联合使用，**单独使用无效**；
2. `top` 和 `bottom` 不要同时使用；
3. `left` 和 `right` 不要同时使用。





## 8. 网页布局总结

一个完整的网页，有标准流 、 浮动 、 定位 一起完成布局的。每个都有自己的专门用法。

#### 1). 标准流 

可以让盒子上下排列 或者 左右排列的

#### 2). 浮动

可以让多个块级元素一行显示  或者 左右对齐盒子   浮动的盒子就是按照顺序左右排列 

#### 3). 定位

定位最大的特点是有层叠的概念，就是可以让多个盒子 前后 叠压来显示。 但是每个盒子需要测量数值。