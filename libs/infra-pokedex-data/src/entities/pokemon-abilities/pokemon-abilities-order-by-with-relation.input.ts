import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { AbilitiesOrderByWithRelationInput } from '../abilities/abilities-order-by-with-relation.input';

@InputType()
export class PokemonAbilitiesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ability_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_hidden?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: Identity<PokemonOrderByWithRelationInput>;

    @Field(() => AbilitiesOrderByWithRelationInput, {nullable:true})
    ability?: Identity<AbilitiesOrderByWithRelationInput>;
}
