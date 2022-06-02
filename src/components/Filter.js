/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ value, onChange }) {

  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, 'A')}
        className={value === 'A' ?  'is-active' : ''}
      >全て</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'F')}
        className={value === 'F' ?  'is-active' : ''}
      >未完了</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'T')}
        className={value === 'T' ?  'is-active' : ''}
      >完了済み</a>
    </div>
  );
}

export default Filter