// supertest, app import
import { expectedError } from "@babel/core/lib/errors/rewrite-stack-trace.js";
import request from "supertest";

import app from "../app.js";

describe("Test", () => {

    it("api", (done) => {
      request(app)
        .get('/api/test')
        .end((err, res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toBe(true);
            done();
        });   
    });
});