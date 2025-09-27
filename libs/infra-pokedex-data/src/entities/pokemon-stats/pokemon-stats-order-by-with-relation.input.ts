import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { StatsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';

@InputType()
export class PokemonStatsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base_stat?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    effort?: `${SortOrder}`;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: PokemonOrderByWithRelationInput;

    @Field(() => StatsOrderByWithRelationInput, {nullable:true})
    stat?: StatsOrderByWithRelationInput;
}
