import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonFormsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    pokemon_id?: number;

    @Field(() => Float, {nullable:true})
    introduced_in_version_group_id?: number;

    @Field(() => Float, {nullable:true})
    is_default?: number;

    @Field(() => Float, {nullable:true})
    is_battle_only?: number;

    @Field(() => Float, {nullable:true})
    is_mega?: number;

    @Field(() => Float, {nullable:true})
    form_order?: number;

    @Field(() => Float, {nullable:true})
    order?: number;
}
