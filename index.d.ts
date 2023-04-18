export class Brainshop {
    public baseurl: string;
    public bid: string | number | null;
    public key: string | null;
    public uid: string | number;
    /**
     * Create a Brainshop client.
     * @arg {String | Number} [options.bid] The brain ID (required).
     * @arg {string} [options.key] The access key for the brain (required).
     * @arg {String | Number} [options.uid] The ID you assign to end user.
     * @param {BrainshopOptions} options
     */
    public constructor(options: BrainshopOptions);
    /**
     * Make a "GET" request for your message response.
     * @arg {String} message The message from user (required).
     * @arg {(response: BrainshopAPIObject) => void} callback The function to call upon response (optional).
     * @returns {Promise<BrainshopAPIObject>}
     */
    public get(message: string): Promise<BrainshopAPIObject>;
}

export interface BrainshopOptions {
    bid: string | number;
    key: string;
    uid?: string | number;
}

export interface BrainshopAPIObject {
    cnt: string;
    status?: {
        code: string;
        errorType: string;
    }
}

export = Brainshop;