import Subject, { ISubject } from '../subjects/subject_models.js';

export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await Subject.find();
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id).populate('alumni');
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteSubject = async (id: string) => {
    return await Subject.findByIdAndDelete(id);
};

export const getUserBySubject = async (id: string) => {
    return await Subject.findById(id).populate('alumni').exec();
};
