import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutEvolvesToInput } from './pokemon-species-update-without-evolves-to.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesUpdateWithoutEvolvesToInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolvesToInput)
    data!: PokemonSpeciesUpdateWithoutEvolvesToInput;
}
