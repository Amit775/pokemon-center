import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { MoveDamageClassesScalarRelationFilter } from '../move-damage-classes/move-damage-classes-scalar-relation-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';
import { PokemonTypesListRelationFilter } from '../pokemon-types/pokemon-types-list-relation-filter.input';
import { PokemonFormTypesListRelationFilter } from '../pokemon-form-types/pokemon-form-types-list-relation-filter.input';
import { TypeGameIndicesListRelationFilter } from '../type-game-indices/type-game-indices-list-relation-filter.input';
import { TypeEfficacyListRelationFilter } from '../type-efficacy/type-efficacy-list-relation-filter.input';
import { BerryFlavorsListRelationFilter } from '../berry-flavors/berry-flavors-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';
import { BerriesListRelationFilter } from '../berries/berries-list-relation-filter.input';

@InputType()
export class TypesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [TypesWhereInput], {nullable:true})
    AND?: Array<TypesWhereInput>;

    @Field(() => [TypesWhereInput], {nullable:true})
    OR?: Array<TypesWhereInput>;

    @Field(() => [TypesWhereInput], {nullable:true})
    NOT?: Array<TypesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: Identity<IntFilter>;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: Identity<GenerationsScalarRelationFilter>;

    @Field(() => MoveDamageClassesScalarRelationFilter, {nullable:true})
    damageClass?: Identity<MoveDamageClassesScalarRelationFilter>;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: Identity<MovesListRelationFilter>;

    @Field(() => PokemonTypesListRelationFilter, {nullable:true})
    pokemonTypes?: Identity<PokemonTypesListRelationFilter>;

    @Field(() => PokemonFormTypesListRelationFilter, {nullable:true})
    formTypes?: Identity<PokemonFormTypesListRelationFilter>;

    @Field(() => TypeGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: Identity<TypeGameIndicesListRelationFilter>;

    @Field(() => TypeEfficacyListRelationFilter, {nullable:true})
    efficacy?: Identity<TypeEfficacyListRelationFilter>;

    @Field(() => TypeEfficacyListRelationFilter, {nullable:true})
    efficacyTarget?: Identity<TypeEfficacyListRelationFilter>;

    @Field(() => BerryFlavorsListRelationFilter, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    knownMoveTypes?: Identity<PokemonEvolutionListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    partyTypes?: Identity<PokemonEvolutionListRelationFilter>;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    naturalGiftTypes?: Identity<BerriesListRelationFilter>;
}
