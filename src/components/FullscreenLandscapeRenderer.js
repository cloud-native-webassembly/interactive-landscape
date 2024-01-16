const { calculateSize } = require("../utils/landscapeCalculations");
const headerHeight = 40;
module.exports.render = function({landscapeSettings, landscapeContent, version}) {
  const { fullscreenWidth, fullscreenHeight } = calculateSize(landscapeSettings);
  return `
      <div class="gradient-bg" style="
        width: ${fullscreenWidth}px;
        height: ${fullscreenHeight}px;
        overflow: hidden;
        "><div class="inner-landscape" style="
          width: ${fullscreenWidth}px;
          height: ${fullscreenHeight}px;
          padding-top: ${headerHeight + 20}px;
          padding-left: 20px;
          position: relative;
        ">
          ${landscapeContent }
          <div style="
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 18px,
            background: rgb(64,89,163);
            color: white;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 3px;
            padding-bottom: 3px;
            border-radius: 5px;
          ">${landscapeSettings.fullscreen_header}</div>
          <div style="
            position: absolute;
            top: 10px;
            left: 15px;
            font-size: 14px;
            color: white;
          ">${landscapeSettings.title} </div>
          <div style="
            position: absolute;
            top: 30px;
            left: 15px;
            font-size: 12px;
            color: #eee;
          ">${version}</div>
        </div>
      </div>`;
}
