import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateWithoutKnownMovesInput } from './moves-update-without-known-moves.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutKnownMovesInput } from './moves-create-without-known-moves.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutKnownMovesInput {

    @Field(() => MovesUpdateWithoutKnownMovesInput, {nullable:false})
    @Type(() => MovesUpdateWithoutKnownMovesInput)
    update!: MovesUpdateWithoutKnownMovesInput;

    @Field(() => MovesCreateWithoutKnownMovesInput, {nullable:false})
    @Type(() => MovesCreateWithoutKnownMovesInput)
    create!: MovesCreateWithoutKnownMovesInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;
}
