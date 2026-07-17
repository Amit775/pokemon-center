import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateManyInput } from './pokemon-egg-groups-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonEggGroupsArgs {

    @Field(() => [PokemonEggGroupsCreateManyInput], {nullable:false})
    @Type(() => PokemonEggGroupsCreateManyInput)
    data!: Array<PokemonEggGroupsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
