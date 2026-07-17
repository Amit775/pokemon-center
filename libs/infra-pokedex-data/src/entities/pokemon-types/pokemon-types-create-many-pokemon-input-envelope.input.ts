import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonTypesCreateManyPokemonInput } from './pokemon-types-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonTypesCreateManyPokemonInputEnvelope {

    @Field(() => [PokemonTypesCreateManyPokemonInput], {nullable:false})
    @Type(() => PokemonTypesCreateManyPokemonInput)
    data!: Array<PokemonTypesCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
