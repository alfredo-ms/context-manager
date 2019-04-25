const eventsScope = document;
const valueArray = new Array();

export function listen(_event, _callback) {
    eventsScope.addEventListener(_event, (_data) => _callback(_data.detail));
    return {
        lastValue: () => {
            valueArray[_event];
        }
    }
}

export function dispatch(_event, _data) {
    valueArray[_event] = _data;
    const event = new CustomEvent(_event, { detail: _data });
    eventsScope.dispatchEvent(event);
}