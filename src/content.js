var isWideScreenButtonClicked = false;

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
}, 500);

window.addEventListener("load", clickWideScreenButton);
