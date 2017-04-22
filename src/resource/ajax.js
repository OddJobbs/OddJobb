import request from 'superagent';
import Promise from 'bluebird';


function get(url) {
    return new Promise((resolve, reject) => {
        request.get(url).accept('json').end((err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res);
        });
    });
}

export default { get };