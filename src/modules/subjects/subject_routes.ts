import express from 'express';
import {
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler,
    getUserBySubjectHandler // Import the new handler
} from '../subjects/subject_controller.js';

const router = express.Router();

router.post('/subjects', createSubjectHandler);
router.get('/subjects', getAllSubjectsHandler);
router.get('/subjects/:id', getSubjectByIdHandler);
router.put('/subjects/:id', updateSubjectHandler);
router.delete('/subjects/:id', deleteSubjectHandler);
router.get('/subjects/:id/alumni', getUserBySubjectHandler); // Add the new route

export default router;
