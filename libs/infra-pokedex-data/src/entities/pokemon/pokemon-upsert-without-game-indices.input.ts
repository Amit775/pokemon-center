import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonUpdateWithoutGameIndicesInput } from './pokemon-update-without-game-indices.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutGameIndicesInput } from './pokemon-create-without-game-indices.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutGameIndicesInput {

    @Field(() => PokemonUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutGameIndicesInput)
    update!: PokemonUpdateWithoutGameIndicesInput;

    @Field(() => PokemonCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutGameIndicesInput)
    create!: PokemonCreateWithoutGameIndicesInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;
}
