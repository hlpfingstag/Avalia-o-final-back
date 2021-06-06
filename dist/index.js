"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var uuid_1 = require("uuid");
var app = express_1.default();
app.use(express_1.default.json());
var Scrap = /** @class */ (function () {
    function Scrap(description, detailing) {
        this.id = uuid_1.v4();
        this.description = description;
        this.detailing = detailing;
    }
    return Scrap;
}());
var scraps = [];
//Create
app.post("/scraps", function (request, response) {
    var _a = request.body, description = _a.description, detailing = _a.detailing;
    var scrap = new Scrap(description, detailing);
    scraps.push(scrap);
    return response.json({ scrap: scrap });
});
//Read
app.get("/scraps/:id", function (request, response) {
    var id = request.params.id;
    var scrap = scraps.find(function (p) { return p.id === id; });
    return response.json({ scrap: scrap });
});
app.get("/scraps", function (request, response) {
    return response.json(scraps);
});
//Update
app.put("/scraps/:id", function (request, response) {
    var _a = request.body, description = _a.description, detailing = _a.detailing;
    var scrap = new Scrap(description, detailing);
    scraps.push(scrap);
    return response.json({ scrap: scrap });
});
//Delete
app.delete("/scraps/:id", function (request, response) {
    var id = request.params.id;
    var scrapIndex = scraps.findIndex(function (p) { return p.id === id; });
    scraps.slice(scrapIndex, 1);
    return response.status(204).json();
});
//Porta 3000
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("servidor rodando...");
});
