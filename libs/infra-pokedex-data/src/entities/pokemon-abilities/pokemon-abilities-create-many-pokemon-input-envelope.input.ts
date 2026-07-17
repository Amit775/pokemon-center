import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateManyPokemonInput } from './pokemon-abilities-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonAbilitiesCreateManyPokemonInputEnvelope {

    @Field(() => [PokemonAbilitiesCreateManyPokemonInput], {nullable:false})
    @Type(() => PokemonAbilitiesCreateManyPokemonInput)
    data!: Array<PokemonAbilitiesCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
