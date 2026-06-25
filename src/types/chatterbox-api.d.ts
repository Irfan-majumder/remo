export type paths = {
  "/generate": {
    post: {
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object";
              properties: {
                prompt: { type: "string" };
                voice_key: { type: "string" };
                temperature: { type: "number" };
                top_p: { type: "number" };
                top_k: { type: "number" };
                repetition_penalty: { type: "number" };
                norm_loudness: { type: "boolean" };
              };
              required: [
                "prompt",
                "voice_key",
                "temperature",
                "top_p",
                "top_k",
                "repetition_penalty",
                "norm_loudness"
              ];
            };
          };
        };
      };
      responses: {
        "200": {
          content: {
            "application/octet-stream": {
              schema: { type: "string" };
            };
          };
        };
      };
    };
  };
};
