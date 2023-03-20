(function () {
    function start() {
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for (button of deleteButton)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are okkk")) {
                    event.preventDefault();
                    window.location.assign('/contactlist');
                }
            });
            }
    }
    window.addEventListener("load", start);
})();