/**
 * 星垂 · 卡面翻转 — 原生扩展入口
 * 样式与逻辑都放在 src/ 里，原生扩展和酒馆助手脚本共用同一份。
 */

const base = new URL('.', import.meta.url);

try {
    const response = await fetch(new URL('src/style.css', base), { cache: 'no-cache' });
    if (!response.ok) throw new Error(`style.css ${response.status}`);
    const css = await response.text();
    const { start } = await import(new URL('src/core.js', base).href);
    start(css);
} catch (error) {
    console.error('[star-flip] 载入失败', error);
}
