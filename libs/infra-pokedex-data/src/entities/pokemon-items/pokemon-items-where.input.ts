import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { VersionsScalarRelationFilter } from '../versions/versions-scalar-relation-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';

@InputType()
export class PokemonItemsWhereInput {

    @Field(() => [PokemonItemsWhereInput], {nullable:true})
    AND?: Array<PokemonItemsWhereInput>;

    @Field(() => [PokemonItemsWhereInput], {nullable:true})
    OR?: Array<PokemonItemsWhereInput>;

    @Field(() => [PokemonItemsWhereInput], {nullable:true})
    NOT?: Array<PokemonItemsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    rarity?: Identity<IntFilter>;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonScalarRelationFilter>;

    @Field(() => VersionsScalarRelationFilter, {nullable:true})
    version?: Identity<VersionsScalarRelationFilter>;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    item?: Identity<ItemsScalarRelationFilter>;
}
