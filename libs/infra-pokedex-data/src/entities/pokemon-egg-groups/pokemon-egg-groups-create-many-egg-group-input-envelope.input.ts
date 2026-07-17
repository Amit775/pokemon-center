import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateManyEggGroupInput } from './pokemon-egg-groups-create-many-egg-group.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEggGroupsCreateManyEggGroupInputEnvelope {

    @Field(() => [PokemonEggGroupsCreateManyEggGroupInput], {nullable:false})
    @Type(() => PokemonEggGroupsCreateManyEggGroupInput)
    data!: Array<PokemonEggGroupsCreateManyEggGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
