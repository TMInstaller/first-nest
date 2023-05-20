// prettier-ignore
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './create-board.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('board')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  @ApiOperation({ summary: 'Get all boards' })
  @ApiResponse({ status: 200, description: 'Success' })
  getAllBoards(): CreateBoardDto[] {
    return this.boardService.getAllBoards();
  }

  @Post()
  @ApiOperation({ summary: 'Create a board' })
  @ApiResponse({ status: 201, description: 'Created' })
  createBoard(@Body() board: CreateBoardDto) {
    this.boardService.createBoard(board);
  }

  @Put(':index')
  @ApiOperation({ summary: 'Update a board' })
  @ApiParam({
    name: 'index',
    required: true,
    description: 'Index of a board',
  })
  @ApiResponse({ status: 200, description: 'Updated' })
  updateBoard(@Param('index') index: number, @Body() board: CreateBoardDto) {
    this.boardService.updateBoard(index, board);
  }

  @Delete(':index')
  @ApiOperation({ summary: 'Delete a board' })
  @ApiParam({ name: 'index', required: true, description: 'Index of a board' })
  @ApiResponse({ status: 200, description: 'Deleted' })
  deleteBoard(@Param('index') index: number) {
    this.boardService.deleteBoard(index);
  }
}
