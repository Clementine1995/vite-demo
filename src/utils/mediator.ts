export interface MediatorProps {
    uuid?: number;
    publish?: (topic: string, ...args: unknown[]) => void;
    subscribe?: (topic: string, callback: (...args: unknown[]) => void) => void;
}

const mediator = (function () {
    let topics = [], uuid = 0
    function subscribe(topic: string, callback: (...args: unknown[]) => void) {
        uuid++
        topics[topic] = topics[topic] ? [...topics[topic], { callback, uuid }] : [{ callback, uuid }]
    }

    function publish(topic: string, ...args: unknown[]) {
        if (topics[topic]) {
            topics[topic].map(item => item.callback(...args))
        }
    }
})()
