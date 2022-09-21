import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateNoteDto {
    @IsString()
    @MaxLength(512)
    @IsNotEmpty()
    content: string
}
