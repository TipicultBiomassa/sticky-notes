import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Note} from "./entities/note.entity";
import {Repository} from "typeorm";

@Injectable()
export class NotesService {
  constructor(
      @InjectRepository(Note)
      private readonly noteRepository: Repository<Note>
  ) {
  }
  create(createNoteDto: CreateNoteDto) {
    return 'This action adds a new note';
  }

  async findAll() {
    const dbNotes = await this.noteRepository.find();
    return `This action returns all notes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
