import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonUpdateWithoutMovesInput } from './pokemon-update-without-moves.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutMovesInput } from './pokemon-create-without-moves.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutMovesInput {

    @Field(() => PokemonUpdateWithoutMovesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutMovesInput)
    update!: PokemonUpdateWithoutMovesInput;

    @Field(() => PokemonCreateWithoutMovesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutMovesInput)
    create!: PokemonCreateWithoutMovesInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;
}
