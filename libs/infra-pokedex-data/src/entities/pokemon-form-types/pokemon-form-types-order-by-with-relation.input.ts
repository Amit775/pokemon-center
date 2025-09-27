import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonFormsOrderByWithRelationInput } from '../pokemon-forms/pokemon-forms-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';

@InputType()
export class PokemonFormTypesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;

    @Field(() => PokemonFormsOrderByWithRelationInput, {nullable:true})
    pokemonForm?: PokemonFormsOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    type?: TypesOrderByWithRelationInput;
}
