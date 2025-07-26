var isWideScreenButtonClicked = false;
var tryCountsOfwideScreenButtonClicked = 0;

function clickWideScreenButton() {
  const wideScreenButton = document.querySelector(
    ".bpx-player-ctrl-btn-icon.bpx-player-ctrl-web-enter",
  );

  if (wideScreenButton) {
    wideScreenButton.click();
    isWideScreenButtonClicked = true;
  }
}

const interval = setInterval(() => {
  if (tryCountsOfwideScreenButtonClicked > 10) {
    clearInterval(interval);
    return;
  }

  if (!isWideScreenButtonClicked) {
    const wideScreenButton = document.querySelector(
      ".bpx-player-ctrl-btn-icon.bpx-player-ctrl-web-enter",
    );

    if (wideScreenButton) {
      wideScreenButton.click();
      isWideScreenButtonClicked = true;
      clearInterval(interval);
    }
  } else {
    clearInterval(interval);
  }

  tryCountsOfwideScreenButtonClicked += 1;
}, 500);

window.addEventListener("load", clickWideScreenButton);
