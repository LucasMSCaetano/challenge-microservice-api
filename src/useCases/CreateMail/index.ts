import { MailgunMailProvider } from "../../providers/implementations/MailgunMailProvider";
import {  PostgresMailRepository } from "../../repositories/implementations/PostgresMailRepositories";
import { CreateMailController } from "./CreateMailController";
import {  CreateMailUseCase } from "./CreateMailUseCase";

const mailgunMailProvider = new MailgunMailProvider();
const postgresMailRepository = new PostgresMailRepository();

const createMailUseCase = new CreateMailUseCase(
    postgresMailRepository,
    mailgunMailProvider
)

const createMailController = new CreateMailController(
    createMailUseCase
)

export { createMailUseCase, createMailController}