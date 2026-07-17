import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput } from './pokemon-abilities-pokemon-id-ability-id-compound-unique.input';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { AbilitiesScalarRelationFilter } from '../abilities/abilities-scalar-relation-filter.input';

@InputType()
export class PokemonAbilitiesWhereUniqueInput {

    @Field(() => PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput, {nullable:true})
    pokemon_id_ability_id?: Identity<PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput>;

    @Field(() => [PokemonAbilitiesWhereInput], {nullable:true})
    AND?: Array<PokemonAbilitiesWhereInput>;

    @Field(() => [PokemonAbilitiesWhereInput], {nullable:true})
    OR?: Array<PokemonAbilitiesWhereInput>;

    @Field(() => [PokemonAbilitiesWhereInput], {nullable:true})
    NOT?: Array<PokemonAbilitiesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_hidden?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    slot?: Identity<IntFilter>;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonScalarRelationFilter>;

    @Field(() => AbilitiesScalarRelationFilter, {nullable:true})
    ability?: Identity<AbilitiesScalarRelationFilter>;
}
