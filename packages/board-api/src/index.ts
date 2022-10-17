export type Document = {
  fileId: string; // "FR00133873543354",
  fileName: string; // "Test01",
  uploadedBy: string; // "Adrien",
  uploadedDate: string; // "2022-03-31",
  status: string; // "OK",
};

export type APIResponse<D = unknown, E = unknown> = D extends any[]
  ? {
      outcome: "found" | "errored";
      reason?: "timeout";
      entities?: D;
      error?: E;
    }
  : {
      outcome: "found" | "errored" | "added" | "removed";
      reason?: "timeout" | "couldNotAdd";
      entity?: D;
      error?: E;
    };

const documentsStub: Document[] = [
  {
    fileId: "FR00133873543354",
    fileName: "Test01",
    uploadedBy: "Adrien",
    uploadedDate: "2022-03-31",
    status: "OK",
  },
  {
    fileId: "FR00133873543354",
    fileName: "Test02",
    uploadedBy: "Victor",
    uploadedDate: "2022-03-31",
    status: "FAILED",
  },
  {
    fileId: "FR00133873543354",
    fileName: "Test03",
    uploadedBy: "Marco",
    uploadedDate: "2022-03-31",
    status: "OK",
  },
  {
    fileId: "FR00133873543354",
    fileName: "Test04",
    uploadedBy: "Charles-Edouard",
    uploadedDate: "2022-03-31",
    status: "FAILED",
  },
];

export const buildApi = () => ({
  getDocuments: (allowRandom: boolean) =>
    new Promise<APIResponse<Document[]>>((resolve, reject) => {
      setTimeout(() => {
        if (!allowRandom) {
          resolve({
            outcome: "found",
            entities: documentsStub,
          });
        }

        const maybeResolve = Math.floor(Math.random() * 2);
        if (maybeResolve) {
          resolve({
            outcome: "found",
            entities: documentsStub,
          });
        } else {
          reject({
            outcome: "errored",
            reason: "timeout",
            error: {
              message: "something went wrong.",
            },
          });
        }
      }, 3000);
    }),
  addDocument: (input: Omit<Document, "fieldId">) =>
    new Promise<APIResponse>((resolve) => {
      documentsStub.push({
        ...input,
        fileId: new Date().getTime().toString(),
      });

      return resolve({
        outcome: "added",
      });
    }),
  delete: (id: string) =>
    new Promise<APIResponse>((resolve) => {
      const elementIndex = documentsStub.findIndex(
        (item) => item.fileId === id
      );
      documentsStub.splice(elementIndex, 1);

      return resolve({
        outcome: "removed",
      });
    }),
});
