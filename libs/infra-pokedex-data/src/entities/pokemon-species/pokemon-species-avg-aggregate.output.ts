import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonSpeciesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    generation_id?: number;

    @Field(() => Float, {nullable:true})
    evolves_from_species_id?: number;

    @Field(() => Float, {nullable:true})
    evolution_chain_id?: number;

    @Field(() => Float, {nullable:true})
    color_id?: number;

    @Field(() => Float, {nullable:true})
    shape_id?: number;

    @Field(() => Float, {nullable:true})
    habitat_id?: number;

    @Field(() => Float, {nullable:true})
    gender_rate?: number;

    @Field(() => Float, {nullable:true})
    capture_rate?: number;

    @Field(() => Float, {nullable:true})
    base_happiness?: number;

    @Field(() => Float, {nullable:true})
    is_baby?: number;

    @Field(() => Float, {nullable:true})
    hatch_counter?: number;

    @Field(() => Float, {nullable:true})
    has_gender_differences?: number;

    @Field(() => Float, {nullable:true})
    growth_rate_id?: number;

    @Field(() => Float, {nullable:true})
    forms_switchable?: number;

    @Field(() => Float, {nullable:true})
    is_legendary?: number;

    @Field(() => Float, {nullable:true})
    is_mythical?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Float, {nullable:true})
    conquest_order?: number;
}
