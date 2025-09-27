import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PokemonDexNumbersSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokedex_number?: `${SortOrder}`;
}
