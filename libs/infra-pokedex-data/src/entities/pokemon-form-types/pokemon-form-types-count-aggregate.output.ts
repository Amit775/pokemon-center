import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonFormTypesCountAggregate {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
