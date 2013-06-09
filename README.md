select-to-datalist
==================

自动将 html 页面 现有的 select 改变成类似 datalist ，但有不影响现有任何功能。

开发背景：  一个系统N多页面使用select 下拉选项超过200个甚至更多，每天使用人员都要在多个下拉内容中寻找，使用非常痛苦。
虽然html5 有datalist  但是 datalist 的事件使用不如 select 舒服。 最重要的是 这么多页面不能都去 修改吧，这样工作量大，
而且换成datalist 会有人不适应，因为要把输入框内文字全部删除才能出现全部下来菜单。
    
所以我决定在不改变任何后台代码情况下 改善用户体验，想到用js实现了。于是就写了这个 基于 jquery 的 js文件。
    
实现功能 就是页面加载完毕后，将页面内所有 select 选项超过20个的 进行转换，转换成类似datalist ，但是下拉选项还是
全部都在，只是将文本中含有的内容复制一份放到了最上面，这样用户可以不去清除文本内容就可以查看全部下拉选项了。


插件使用方法：
直接在html中引用这个js文件就好,如：

    <script type="text/javascript" src="selecttolist.js"></script>

  
对比 demo.html 和old.html 两个文件 能发现 这个js文件的实现效果。 
 
