import {ListMailUseCase} from './ListMailUseCase';
import {ListMailController} from './ListMailController';

const listMailUseCase = new ListMailUseCase()

const listMailController = new ListMailController(
    listMailUseCase
)

export {listMailController}