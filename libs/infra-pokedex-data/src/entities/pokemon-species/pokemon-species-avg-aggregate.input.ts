import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonSpeciesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    generation_id?: true;

    @Field(() => Boolean, {nullable:true})
    evolves_from_species_id?: true;

    @Field(() => Boolean, {nullable:true})
    evolution_chain_id?: true;

    @Field(() => Boolean, {nullable:true})
    color_id?: true;

    @Field(() => Boolean, {nullable:true})
    shape_id?: true;

    @Field(() => Boolean, {nullable:true})
    habitat_id?: true;

    @Field(() => Boolean, {nullable:true})
    gender_rate?: true;

    @Field(() => Boolean, {nullable:true})
    capture_rate?: true;

    @Field(() => Boolean, {nullable:true})
    base_happiness?: true;

    @Field(() => Boolean, {nullable:true})
    is_baby?: true;

    @Field(() => Boolean, {nullable:true})
    hatch_counter?: true;

    @Field(() => Boolean, {nullable:true})
    has_gender_differences?: true;

    @Field(() => Boolean, {nullable:true})
    growth_rate_id?: true;

    @Field(() => Boolean, {nullable:true})
    forms_switchable?: true;

    @Field(() => Boolean, {nullable:true})
    is_legendary?: true;

    @Field(() => Boolean, {nullable:true})
    is_mythical?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;

    @Field(() => Boolean, {nullable:true})
    conquest_order?: true;
}
