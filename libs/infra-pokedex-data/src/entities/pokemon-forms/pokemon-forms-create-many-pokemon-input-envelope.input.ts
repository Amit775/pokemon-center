import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateManyPokemonInput } from './pokemon-forms-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonFormsCreateManyPokemonInputEnvelope {

    @Field(() => [PokemonFormsCreateManyPokemonInput], {nullable:false})
    @Type(() => PokemonFormsCreateManyPokemonInput)
    data!: Array<PokemonFormsCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
