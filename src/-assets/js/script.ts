import { Common } from '@/pages/common'
import { Top } from '@/pages/top'

// 実行
;(async () => {
  // ページごとに実行するscriptを分ける
  const pageScript = document.body.dataset.script

  // 共通の処理
  new Common()

  // ページごとの処理
  switch (pageScript) {
    case 'top':
      new Top()
      break
    case 'hoge':
      console.log('hoge')
      break
    default:
  }
})()
