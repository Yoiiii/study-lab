import RouteList from './routes/index'
import Header from './component/Header'
import './static/less/index.less'
import { Layout } from 'antd'
function App() {
  return (
    <div>
      <Layout className="layout">
        <Header />
        <Layout.Content style={{ padding: '0 0' }}>
        <div className="site-layout-content">
        <RouteList />
        </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>React cnode.js ©2021 Created by Yoi</Layout.Footer>
      </Layout>,
    </div>
  );
}

export default App;
