import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="container m-auto">
      <main className="container bg-white py-16 pb-32 shadow-lg rounded-lg">
        <h1 className="text-[100px] font-bold text-indigo-600 text-center">xiaogenban</h1>
        <div className="text-center text-4xl">晚上八点直播 分享编程技术</div>
      </main>
    </div>
  )
}