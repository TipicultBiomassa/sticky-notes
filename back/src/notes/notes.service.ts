import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Note} from "./entities/note.entity";
import {Repository} from "typeorm";
import {Connection} from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
      @InjectRepository(Note)
      private readonly noteRepository: Repository<Note>,
      private readonly connection: Connection,
) {
  }
  async create(createNoteDto: CreateNoteDto) {
    const note = new Note();
    note.content = createNoteDto.content;
    return await this.noteRepository.save(note)
  }

  async findAll() {
    return await this.noteRepository.find();
    // return `This action returns all notes`;
  }

  async findOne(id: number) {
      return await this.noteRepository.findOneById(id);
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
      const note = await this.noteRepository.findOneById(id);
      const updatedPlaylist = await this.noteRepository.save(
          Object.assign(note, updateNoteDto),
      );
      return updatedPlaylist;
  }

 async remove(id: number) {
    return await this.noteRepository.delete(id);
    //return `This action removes a #${id} note`;
  }
}
