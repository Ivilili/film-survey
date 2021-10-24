import { createServer, Model, belongsTo, Response } from "miragejs";

createServer({
  models: {
    surveyAnswer: Model.extend({
      survey: belongsTo(),
    }),

    survey: Model,
  },

  seeds(server) {
    server.create("surveyAnswer", {
      id: "9c7160a4-e9ad-499e-92f6-07d7cdb0382c",
      attributes: {
        answers: [
          {
            questionId: "film",
            answer: "Rocky Horror Picture Show",
          },
          {
            questionId: "review",
            answer: 5,
          },
        ],
      },
    });

    server.create("survey", {
      id: "2660dd24-e2db-42c1-8093-284b1df2664c",
      type: "surveys",
    });
  },

  routes() {
    this.namespace = "api/v1/survey";

    this.get("/", () => {
      const data = {
        data: {
          type: "surveys",
          id: "2660dd24-e2db-42c1-8093-284b1df2664c",
          attributes: {
            title: "Film feedback form",
            description:
              "<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>",
            questions: [
              {
                questionId: "film",
                questionType: "text",
                label: "What film did you watch?",
                required: true,
                attributes: null,
              },
              {
                questionId: "review",
                questionType: "rating",
                label:
                  "How would you rate the film? (1 - Very bad, 5 - Very good)",
                required: true,
                attributes: {
                  min: 1,
                  max: 5,
                },
              },
            ],
          },
        },
      };
      if (!data) {
        let headers = {};
        let data = {
          errors: [
            {
              title: "Internal Server Error",
              detail: "Something went wrong. We're working on it!",
            },
          ],
        };

        return new Response(500, headers, data);
      }

      return data;
    });

    // Responding to a POST request
    this.post("/:id/answers", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      if (!request.requestBody) {
        let headers = {};
        let data = {
          errors: [
            {
              title: "Internal Server Error",
              detail: "Something went wrong. We're working on it!",
            },
          ],
        };

        return new Response(500, headers, data);
      }

      return { type: "surveyAnswers", attributes: attrs };
    });
  },
});
