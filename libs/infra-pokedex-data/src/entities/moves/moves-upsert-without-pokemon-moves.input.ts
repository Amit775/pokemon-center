import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateWithoutPokemonMovesInput } from './moves-update-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutPokemonMovesInput } from './moves-create-without-pokemon-moves.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutPokemonMovesInput {

    @Field(() => MovesUpdateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => MovesUpdateWithoutPokemonMovesInput)
    update!: MovesUpdateWithoutPokemonMovesInput;

    @Field(() => MovesCreateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => MovesCreateWithoutPokemonMovesInput)
    create!: MovesCreateWithoutPokemonMovesInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;
}
