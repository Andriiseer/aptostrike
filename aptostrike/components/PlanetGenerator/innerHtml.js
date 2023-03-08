export const InnerHtml = {
  __html: `
  <div>

<canvas id="c" width="800" height="800"></canvas>
  <div style="display:none" id="stats"></div>
  <div style="display:none" id="txt">

  </div>
  
  <div style="display:none" id="DownloadDiv" style="width: 100% !important; position: absolute;">
  
  
  <a download="planet.txt" id="downloadText" class="button"><img src="/download-text.png"><div class="tooltip">Download Text</div></a>
  <a download="Planet.png" id="download" onmouseover="writeImageData();" class="button"><img src="/download-image.png"><div class="tooltip">Download Image</div></a>
  <a id="mapSwitch" class="button" onclick="doMapSwitch();"><img src="/map.png"><div class="tooltip">Switch to Map</div></a>
  <a id="setID" class="button" onclick="setID();"><img src="/id.png"><div class="tooltip">View/Set ID</div></a>
  <a id="nextPlanet" class="button" onclick="genFromRandomID();"><img src="/next.png"><div class="tooltip">Random New Planet</div></a>
  
  
      </br>
  </div>
  
  <style>
  .button {
    top: 1em;
    position:relative;
    cursor: pointer;
    text-decoration: none !important;
    color: white;
  }
  
  .button img {
    width: 40px;
  }
  
  .button .tooltip {
    position: absolute;
    display: none;
    top: 40px;
    left: 0px;
    width: 300px;
    text-align: left;
  }
  
  .button:hover .tooltip {
    display: block;
  }
  
  #download, #mapSwitch, #setID, #nextPlanet {
    margin-left: 1em;
  }
  
  #DownloadDiv{
    text-align:center;
  }
  
  
  
  </style>
  </div>
  `
}