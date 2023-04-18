"use strict";

const http = require("node:http");

class Brainshop {
    /**
     * Create a Brainshop client.
     * @arg {String | Number} [options.bid] The brain ID (required).
     * @arg {string} [options.key] The access key for the brain (required).
     * @arg {String | Number} [options.uid] The ID you assign to end user.
     * @param {BrainshopOptions} options
     */
    constructor (options) {
        this.baseurl = "http://api.brainshop.ai";
        this.bid = options.bid ? options.bid : null;
        this.uid = options.uid ? options.uid : "123789";

        Object.defineProperty(this, "key", { value: options.key ? options.key : null, enumerable: false });
    }

    /**
     * Make a "GET" request for your message response.
     * @arg {String} message The message from user (required).
     * @arg {(response: BrainshopAPIObject) => void} callback The function to call upon response (optional).
     * @returns {Promise<BrainshopAPIObject>}
     */
    async get (message, callback = (response) => null) {
        if (!this.bid) notProvidedError("bid");
        if (!this.key) notProvidedError("key");
        if (!message) notProvidedError("message");

        const params = new URLSearchParams({
            bid: this.bid,
            key: this.key,
            uid: this.uid,
            msg: message
        });
        
        const url = this.baseurl + "/get?" + params;
        return new Promise((resolve, reject) => {
            http.get(url, (res) => {
                let data = "";

                res.on("data", (chunk) => {
                    data += chunk;
                });

                res.on("end", () => {
                    data = JSON.parse(data);

                    callback(data);
                    resolve(data);
                });
            }).on("error", (e) => {
                reject(e);
            });
        });
    }
}

function notProvidedError(property) {
    throw new Error(`[Brainshop] The '${property}' was not provided.`);
}

module.exports = Brainshop;