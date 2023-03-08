export const renderInner = () => ({
    __html: `

    <link href="https://fonts.googleapis.com/css?family=Ubuntu:700" rel="stylesheet" type="text/css">
    <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"> -->

    <div class='popUp popUp--connect' id="connecting">
        <h2 class='popUp__title'>Connecting</h2>
        <p class='popUp__text'>If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.</p>
    </div>

    <div class='overlays' id="overlays" style="display: none;">
        <div class='popUp' id="helloDialog">
            <h2 class='popUp__title' id="title">APTOSTRIKE.SPACE</h2>

            <!-- <input id="nick" disabled class="form-control" placeholder="Nickname" maxlength="15"> -->
            <select style="display:none" id="gamemode" class="form-control" onchange="setserver(this.value)" required>
                <option value="ws.aptostrike.io" selected>ws.aptostrike.io</option>
            </select>

            <button class="popUp__btn btn btn--wide btn-play btn-primary btn-needs-server" id="play-btn">Play</button>

            <div id="settings"></div>

            <p class='popUp__instructions' id="instructions">
                Move your mouse to control your cell<br>
                Press <b>Space</b> to split<br>
                Press <b>W</b> to eject some mass<br>
            </p>
            <p id="footer">Have fun!</p>
        </div>
    </div>

    <div id="mobileStuff" style="display: none;">
        <div id="touchpad"></div>
        <div id="touchCircle" style="display: none;"></div>
        <img src="/img/split.png" id="splitBtn">
        <img src="/img/eject.png" id="ejectBtn">
    </div>

    <canvas id="canvas" width="800" height="600"></canvas>
    <input type="text" id="chat_textbox" placeholder="Press enter to chat" maxlength="200">
    <div style="font-family:'Ubuntu'">&nbsp;</div>

`})