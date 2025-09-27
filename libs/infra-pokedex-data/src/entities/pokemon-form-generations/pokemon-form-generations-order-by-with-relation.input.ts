import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonFormsOrderByWithRelationInput } from '../pokemon-forms/pokemon-forms-order-by-with-relation.input';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';

@InputType()
export class PokemonFormGenerationsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => PokemonFormsOrderByWithRelationInput, {nullable:true})
    pokemonForm?: PokemonFormsOrderByWithRelationInput;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: GenerationsOrderByWithRelationInput;
}
