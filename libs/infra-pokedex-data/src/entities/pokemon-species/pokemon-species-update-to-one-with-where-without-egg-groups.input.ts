import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutEggGroupsInput } from './pokemon-species-update-without-egg-groups.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesUpdateWithoutEggGroupsInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEggGroupsInput)
    data!: PokemonSpeciesUpdateWithoutEggGroupsInput;
}
