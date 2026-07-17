import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    species_id?: number;

    @Field(() => Float, {nullable:true})
    height?: number;

    @Field(() => Float, {nullable:true})
    weight?: number;

    @Field(() => Float, {nullable:true})
    base_experience?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Float, {nullable:true})
    is_default?: number;
}
