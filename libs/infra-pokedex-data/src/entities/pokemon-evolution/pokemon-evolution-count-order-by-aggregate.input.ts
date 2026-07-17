import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PokemonEvolutionCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    evolved_species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    trigger_item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minimum_level?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gender_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    held_item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    time_of_day?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    known_move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    known_move_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minimum_happiness?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minimum_beauty?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minimum_affection?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    relative_physical_stats?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    party_species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    party_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    trade_species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    needs_overworld_rain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    turn_upside_down?: `${SortOrder}`;
}
