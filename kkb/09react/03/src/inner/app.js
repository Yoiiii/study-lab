import React, { PureComponent } from "react"
let inner = `
<section>
<header><h1>这是文章标题</h1></header>
<p>文章内容</p>
<p>文章内容</p>
<p>文章内容</p>
<p>文章内容</p>
</section>
`
class App extends PureComponent {
  render() {
    return <div dangerouslySetInnerHTML={{
      __html: inner
    }}>
    </div>
  }
}
export default App