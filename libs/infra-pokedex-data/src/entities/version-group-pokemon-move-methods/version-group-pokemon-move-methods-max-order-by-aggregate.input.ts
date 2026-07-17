import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_move_method_id?: `${SortOrder}`;
}
