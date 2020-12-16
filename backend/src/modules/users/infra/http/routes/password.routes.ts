import { Router} from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();

const forgotPassswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();


passwordRouter.post('/forgot', forgotPassswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
