import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateManyPokemonInput } from './pokemon-moves-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonMovesCreateManyPokemonInputEnvelope {

    @Field(() => [PokemonMovesCreateManyPokemonInput], {nullable:false})
    @Type(() => PokemonMovesCreateManyPokemonInput)
    data!: Array<PokemonMovesCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
