import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenerationsOrderByRelationAggregateInput } from '../generations/generations-order-by-relation-aggregate.input';
import { LocationsOrderByRelationAggregateInput } from '../locations/locations-order-by-relation-aggregate.input';
import { PokedexesOrderByRelationAggregateInput } from '../pokedexes/pokedexes-order-by-relation-aggregate.input';
import { VersionGroupRegionsOrderByRelationAggregateInput } from '../version-group-regions/version-group-regions-order-by-relation-aggregate.input';

@InputType()
export class RegionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => GenerationsOrderByRelationAggregateInput, {nullable:true})
    generations?: GenerationsOrderByRelationAggregateInput;

    @Field(() => LocationsOrderByRelationAggregateInput, {nullable:true})
    locations?: LocationsOrderByRelationAggregateInput;

    @Field(() => PokedexesOrderByRelationAggregateInput, {nullable:true})
    pokedexes?: PokedexesOrderByRelationAggregateInput;

    @Field(() => VersionGroupRegionsOrderByRelationAggregateInput, {nullable:true})
    versionGroups?: VersionGroupRegionsOrderByRelationAggregateInput;
}
