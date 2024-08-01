// const Document = require('../models/documentModel');

const createDocument = async (req, res) => {
    const { title, content } = req.body;
    try {
        const document = await Document.create({ title, content, user: req.user.id });
        res.status(201).json(document);
    } catch (error) {
        res.status(400).json({ message: 'Document creation failed', error });
    }
};

// exports.getDocuments = async (req, res) => {
//   try {
//     const documents = await Document.find({ user: req.user.id });
//     res.status(200).json(documents);
//   } catch (error) {
//     res.status(400).json({ message: 'Failed to fetch documents', error });
//   }
// };

// exports.updateDocument = async (req, res) => {
//   const { id } = req.params;
//   const { content } = req.body;
//   try {
//     const document = await Document.findByIdAndUpdate(id, { content }, { new: true });
//     res.status(200).json(document);
//   } catch (error) {
//     res.status(400).json({ message: 'Document update failed', error });
//   }
// };

// exports.deleteDocument = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Document.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Document deleted' });
//   } catch (error) {
//     res.status(400).json({ message: 'Document deletion failed', error });
//   }
// };

// import { Request, Response } from 'express';
// import {
//     createDocument,
//     getDocumentsByUser,
//     updateDocument,
//     deleteDocument,
//     getDocumentById
// } from '../services/documentService';

// const create = async (req: Request, res: Response) => {

module.exports = { createDocument };
