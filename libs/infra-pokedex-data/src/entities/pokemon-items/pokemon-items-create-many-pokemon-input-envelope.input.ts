import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateManyPokemonInput } from './pokemon-items-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonItemsCreateManyPokemonInputEnvelope {

    @Field(() => [PokemonItemsCreateManyPokemonInput], {nullable:false})
    @Type(() => PokemonItemsCreateManyPokemonInput)
    data!: Array<PokemonItemsCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
