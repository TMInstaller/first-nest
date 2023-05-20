import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './create-board.dto';

@Injectable()
export class BoardService {
  private boards: CreateBoardDto[] = [
    {
      title: 'Test Board 1',
      content: 'Hello, this is test board 1',
    },
    {
      title: 'Test Board 2',
      content: 'Hello, this is test board 2',
    },
  ];

  getAllBoards(): CreateBoardDto[] {
    return this.boards;
  }

  createBoard(board: CreateBoardDto) {
    this.boards.push(board);
  }

  updateBoard(index: number, board: CreateBoardDto) {
    this.boards.push(board);
  }

  deleteBoard(index: number) {
    this.boards.splice(index, 1);
  }
}
