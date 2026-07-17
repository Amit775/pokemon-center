import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VersionGroupPokemonMoveMethodsCountAggregate {

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
