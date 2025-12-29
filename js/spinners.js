function createSpinnerInline(uniqueId = null) {
    const spinnerId = uniqueId || `inlineSpinner_${Date.now()}`;

    if (document.getElementById(spinnerId)) return;

    const spinner = `
        <div id="${spinnerId}" class="inline-spinner">
            <div class="spinner-grow text-secondary" role="status"></div>
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-warning" role="status"></div>
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow text-info" role="status"></div>

            <div class="spinner-grow text-secondary" role="status"></div>
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-warning" role="status"></div>
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow text-info" role="status"></div>

            <div class="spinner-grow text-secondary" role="status"></div>
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-warning" role="status"></div>
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow text-info" role="status"></div>

            <div class="spinner-grow text-secondary" role="status"></div>
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-warning" role="status"></div>
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow text-info" role="status"></div>

            <div class="spinner-grow text-secondary" role="status"></div>
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-warning" role="status"></div>
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow text-info" role="status"></div>

            <div class="spinner-grow text-secondary" role="status"></div>
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-warning" role="status"></div>
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow text-info" role="status"></div>

        </div>
    `;

    const scriptTag = document.currentScript;
    scriptTag.insertAdjacentHTML("afterend", spinner);

    // Trigger fade-in
    setTimeout(() => {
        document.getElementById(spinnerId).classList.add("show");
    }, 50);

    return spinnerId;
}

function removeSpinnerInline(spinnerId) {
    const spinner = document.getElementById(spinnerId);
    if (!spinner) return;

    // Fade-out effect
    spinner.classList.remove("show");
    setTimeout(() => {
        spinner.remove();
    }, 400); // match the CSS transition
}
