import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateInput } from './pokemon-egg-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonEggGroupsArgs {

    @Field(() => PokemonEggGroupsCreateInput, {nullable:false})
    @Type(() => PokemonEggGroupsCreateInput)
    data!: PokemonEggGroupsCreateInput;
}
