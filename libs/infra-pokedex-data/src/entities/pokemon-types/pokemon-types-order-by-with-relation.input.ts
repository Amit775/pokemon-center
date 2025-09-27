import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';

@InputType()
export class PokemonTypesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: PokemonOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    type?: TypesOrderByWithRelationInput;
}
