import { Router } from 'express';
import {createProject, getProjects, getProject} from '../controllers/project.controller'

const router = Router();

router.post('/', createProject );
router.get('/', getProjects);
router.get('/:id', getProject);

export default router;