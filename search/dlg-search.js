let $searchDlg=(function(){
  let content=`
    <div class="notepad-dlg-search">
    <div class="dialogbox notepad-dlgbox">
      <div class="notepad-dlg-titlebar">
        <p class="title">查找</p>
        <span class="close-btn">✖</span>
      </div>
      <div class="main notepad-dlg-main">
        <label for="">查找内容(N):</label>
        <input class="txt-content" type="text" autofocus><br>
        <input type="checkbox" class="check-search" value="capital-sense"> 区分大小写(C)
        <input type="checkbox" class="check-search2"  value="capital-sense2"><span> 循环(R)</span>
        <fieldset class="search-direction">
          <legend>方向</legend>
          <input type="radio" name="direction" value="up">向上(U)
          <input type="radio" name="direction" value="down" checked>向下(D)
        </fieldset>
        <input class="btn-search btn" type="button" value="查找下一个(F)">
        <input class="btn-cancel btn" type="button" value="取消">
      </div>
    </div>
  </div> `;
  let $dlg= $(content),
      $btnSearch  = $dlg.find('.btn-search'),
      $txtContent = $dlg.find('.txt-content'),
      $closeBtn = $dlg.find('.close-btn'),
      $btnCancel  = $dlg.find('.btn-cancel');

  let verify = () => {
    if($txtContent.val() !== '') {
      $btnSearch.removeAttr('disabled');
    } else {
      $btnSearch.attr('disabled', 'disabled');
    }
  };
  let initState = () => {
    $btnSearch.attr('disabled', 'disabled');
    $txtContent.val('');
    $txtContent.focus();
  };
  function show(){
    function destroy(){
      $dlg.remove();
    }
    $('body').append($dlg);
    $dlg.init();
    initState();
    $btnCancel.click(destroy);
    $closeBtn.click(destroy);
    $txtContent.keyup(verify);
    $btnSearch.click(() =>alert(`内容: ${$txtContent.val()}
方向: ${$dlg.find('input[name="direction"]:checked').val()=='up'?'向上':'向下'}
${$dlg.find('input[type="checkbox"]:checked').val()=='capital-sense'?'查找模式为:':$dlg.find('input[type="checkbox"]:checked').val()=='capital-sense2'?'查找模式为:':''} ${$dlg.find('input[type="checkbox"]:checked').val()=='capital-sense'?'区分大小写':''} ${$dlg.find('input[class="check-search2"]:checked').val()=='capital-sense2'?'循环':''}`));

    $txtContent.click((e) => e.stopPropagation());
  }      
  return {show};
})();


