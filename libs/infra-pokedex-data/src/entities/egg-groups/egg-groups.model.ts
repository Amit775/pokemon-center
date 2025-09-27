import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonEggGroups } from '../pokemon-egg-groups/pokemon-egg-groups.model';
import { EggGroupsCount } from './egg-groups-count.output';

/**
 * @@TypeGraphQL.type(name: "EggGroup")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EggGroup")'})
export class EggGroups {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [PokemonEggGroups], {nullable:true})
    species?: Array<PokemonEggGroups>;

    @Field(() => EggGroupsCount, {nullable:false})
    _count?: EggGroupsCount;
}
