
import { Button, Result } from 'antd';

const E403 = () => (
  <Result
    status="403"
    title="403"
    subTitle="很抱歉，你没有访问权限."
    extra={<Button type="primary">返回首页</Button>}
  />
);

export default E403;