import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { VersionsOrderByWithRelationInput } from '../versions/versions-order-by-with-relation.input';

@InputType()
export class PokemonGameIndicesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: PokemonOrderByWithRelationInput;

    @Field(() => VersionsOrderByWithRelationInput, {nullable:true})
    version?: VersionsOrderByWithRelationInput;
}
