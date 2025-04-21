import { Result, Button } from 'antd'

const E404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="你访问的内容不存在."
      extra={<Button type="primary">返回首页</Button>}
    />
  )
}

export default E404
