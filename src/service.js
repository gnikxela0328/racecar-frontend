import http from './http-common';

class ControlService {
    moveForward() {
        return http.post('/control', {},  {
            params: {
                'controlType': 'accel'
            }
        })
    }
    moveBackward() {
        return http.post('/control', {},  {
            params: {
                'controlType': 'reverse'
            }
        })
    }
    moveLeft() {
        return http.post('/control', {},  {
            params: {
                'controlType': 'left'
            }
        })
    }
    moveRight() {
        return http.post('/control', {},  {
            params: {
                'controlType': 'right'
            }
        })
    }
    stop() {
        return http.post('/control', {},  {
            params: {
                'controlType': 'stop'
            }
        })
    }
}

export default new ControlService();