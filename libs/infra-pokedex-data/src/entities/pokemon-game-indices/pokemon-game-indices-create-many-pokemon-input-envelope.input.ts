import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateManyPokemonInput } from './pokemon-game-indices-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonGameIndicesCreateManyPokemonInputEnvelope {

    @Field(() => [PokemonGameIndicesCreateManyPokemonInput], {nullable:false})
    @Type(() => PokemonGameIndicesCreateManyPokemonInput)
    data!: Array<PokemonGameIndicesCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
