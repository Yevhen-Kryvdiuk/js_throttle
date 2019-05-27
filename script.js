window.addEventListener('load', () => {
    const body = document.querySelector('body');

    function onMove(event) {
        console.log(`X= ${event.clientX} Y= ${event.clientY}`);
    }

    function throttle(wrapped, delay) {
        let timer;
        let prevCallTime;
        return function debounced() {
            const callTime = Date.now();
            if(!prevCallTime || callTime >= prevCallTime + delay) {
                prevCallTime = Date.now();
                wrapped(...arguments);
            } else {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    wrapped(...arguments);
                }, delay);
            }
        }
    }

    let wrapper = throttle(onMove, 1000);

    body.addEventListener('mousemove', wrapper);

});
