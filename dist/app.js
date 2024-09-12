"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mime_types_1 = __importDefault(require("mime-types"));
const serve_index_1 = __importDefault(require("serve-index"));
const app = (0, express_1.default)();
const yearLongCacheMimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/webp',
    'text/javascript',
    'text/css',
    'video/mp4'
];
// const dayLongCacheMimeTypes = [
//   'text/html'
// ]
const maxAgePeriod = 1000 * 60 * 60 * 24 * 1;
app.use(express_1.default.static('public', {
    maxAge: maxAgePeriod,
    setHeaders: (res, path) => {
        let mimeType = mime_types_1.default.lookup(path);
        // let maxAge = ''
        if (yearLongCacheMimeTypes.indexOf(mimeType) > -1) {
            res.setHeader('Cache-Control', 'public, max-age=31536000');
            // } else if (dayLongCacheMimeTypes.indexOf(mimeType) > -1) {
            //   maxAge = '8640'
        }
        // if (maxAge) {
        //   res.setHeader('Cache-Control', 'public, max-age=' + maxAge)
        // }
    }
}));
app.use('/', (0, serve_index_1.default)('public'));
module.exports = app;
//# sourceMappingURL=app.js.map