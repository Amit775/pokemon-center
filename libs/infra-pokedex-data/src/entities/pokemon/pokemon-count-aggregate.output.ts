import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    identifier!: number;

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    weight!: number;

    @Field(() => Int, {nullable:false})
    base_experience!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
