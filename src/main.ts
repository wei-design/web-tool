import './style.css'
import { setCookie} from '../package/main';
setCookie()
// 将所有内容导入为一个对象【包括default】
import * as tool from '../package/main';
tool.setCookie()

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<!--  <h1>we-tool</h1>-->
`
