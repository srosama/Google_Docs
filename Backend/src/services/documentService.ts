// import Document from '../models/documentModel';

// const createDocument = async (userId: string, content: string) => {
//     const document = new Document({ userId, content });
//     await document.save();
//     return document;
// };

// const getDocumentsByUser = async (userId: string) => {
//     return Document.find({ userId });
// };

// const updateDocument = async (documentId: string, content: string) => {
//     return Document.findByIdAndUpdate(documentId, { content }, { new: true });
// };

// const deleteDocument = async (documentId: string) => {
//     return Document.findByIdAndDelete(documentId);
// };

// const getDocumentById = async (documentId: string) => {
//     return Document.findById(documentId);
// };

// export { createDocument, getDocumentsByUser, updateDocument, deleteDocument, getDocumentById };
