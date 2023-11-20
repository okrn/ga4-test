document.addEventListener('DOMContentLoaded', function() {
    // 動的にコンテンツを生成
    var contentDiv = document.getElementById('content');
    
    var dynamicContent = document.createElement('div');
    dynamicContent.className = 'dynamic-content';
    dynamicContent.textContent = 'ここは動的に生成されたコンテンツです。';
    contentDiv.appendChild(dynamicContent);

    // z-indexをテストするためのオーバーレイ要素を追加
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    contentDiv.appendChild(overlay);
});
