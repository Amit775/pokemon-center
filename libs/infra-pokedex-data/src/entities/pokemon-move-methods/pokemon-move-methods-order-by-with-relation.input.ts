import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonMovesOrderByRelationAggregateInput } from '../pokemon-moves/pokemon-moves-order-by-relation-aggregate.input';
import { VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-order-by-relation-aggregate.input';

@InputType()
export class PokemonMoveMethodsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonMovesOrderByRelationAggregateInput, {nullable:true})
    pokemonMoves?: PokemonMovesOrderByRelationAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput, {nullable:true})
    versionGroups?: VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput;
}
