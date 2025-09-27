import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonSpeciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';
import { EggGroupsOrderByWithRelationInput } from '../egg-groups/egg-groups-order-by-with-relation.input';

@InputType()
export class PokemonEggGroupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: `${SortOrder}`;

    @Field(() => PokemonSpeciesOrderByWithRelationInput, {nullable:true})
    species?: PokemonSpeciesOrderByWithRelationInput;

    @Field(() => EggGroupsOrderByWithRelationInput, {nullable:true})
    eggGroup?: EggGroupsOrderByWithRelationInput;
}
