import { Layout, Breadcrumb, Card, Divider } from 'antd'
import { Link } from "react-router-dom"
function GetStart() {
  return (
    <Layout>
      <Layout.Content className="site-layout-content" style={{ padding: '0 0' }}>
        <Card title={<Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            新手入门
          </Breadcrumb.Item>
        </Breadcrumb>} bordered={false} >
          <div class="markdown-text"><h2>Node.js 入门</h2>
            <Divider />
            <p>《<strong>汇智网 Node.js 课程</strong>》</p>
            <p><a href="http://www.hubwiz.com/course/?type=nodes">http://www.hubwiz.com/course/?type=nodes</a></p>
            <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
            <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
            <p>《<strong>Node.js 包教不包会</strong>》</p>
            <p><a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>
            <p>《<strong>ECMAScript 6入门</strong>》</p>
            <p><a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a></p>
            <p>《<strong>七天学会NodeJS</strong>》</p>
            <p><a href="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</a></p>
            <p>《<strong>Node入门-<em>一本全面的Node.js教程</em></strong>》</p>
            <p><a href="http://www.nodebeginner.org/index-zh-cn.html">http://www.nodebeginner.org/index-zh-cn.html</a></p>
            <h2>Node.js 资源</h2>
            <Divider />
            <p>《<strong>node weekly</strong>》</p>
            <p><a href="http://nodeweekly.com/issues">http://nodeweekly.com/issues</a></p>
            <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
            <p><a href="https://github.com/youyudehexie/node123">https://github.com/youyudehexie/node123</a></p>
            <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
            <p><a href="https://github.com/sindresorhus/awesome-nodejs">https://github.com/sindresorhus/awesome-nodejs</a></p>
            <p>《<strong>Node.js Books</strong>》</p>
            <p><a href="https://github.com/pana/node-books">https://github.com/pana/node-books</a></p>
            <h2>Node.js 名人</h2>
            <Divider />
            <p>《<strong>名人堂</strong>》</p>
            <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
          </div>
        </Card>

      </Layout.Content>
      <Layout.Sider className="site-layout-sider" style={{ width: "600px" }}>
        <Card title="关于" size="small" bordered={false} >
          <p>CNode：Node.js专业中文社区</p>
          <p>在这里你可以：</p>
          <ul>
            <li>向别人提出你遇到的问题</li>
            <li>帮助遇到问题的人</li>
            <li>分享自己的知识</li>
            <li>和其它人一起进步</li>
          </ul>
        </Card>
      </Layout.Sider>
    </Layout>
  );
}
export default GetStart;
