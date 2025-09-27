import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { PokemonFormGenerationsOrderByRelationAggregateInput } from '../pokemon-form-generations/pokemon-form-generations-order-by-relation-aggregate.input';
import { PokemonFormTypesOrderByRelationAggregateInput } from '../pokemon-form-types/pokemon-form-types-order-by-relation-aggregate.input';

@InputType()
export class PokemonFormsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    form_identifier?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    introduced_in_version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_mega?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    form_order?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: PokemonOrderByWithRelationInput;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: VersionGroupsOrderByWithRelationInput;

    @Field(() => PokemonFormGenerationsOrderByRelationAggregateInput, {nullable:true})
    generations?: PokemonFormGenerationsOrderByRelationAggregateInput;

    @Field(() => PokemonFormTypesOrderByRelationAggregateInput, {nullable:true})
    types?: PokemonFormTypesOrderByRelationAggregateInput;
}
