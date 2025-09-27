import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { MoveDamageClassesNullableScalarRelationFilter } from '../move-damage-classes/move-damage-classes-nullable-scalar-relation-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';
import { PokemonTypesListRelationFilter } from '../pokemon-types/pokemon-types-list-relation-filter.input';
import { PokemonFormTypesListRelationFilter } from '../pokemon-form-types/pokemon-form-types-list-relation-filter.input';
import { TypeGameIndicesListRelationFilter } from '../type-game-indices/type-game-indices-list-relation-filter.input';
import { TypeEfficacyListRelationFilter } from '../type-efficacy/type-efficacy-list-relation-filter.input';
import { BerryFlavorsListRelationFilter } from '../berry-flavors/berry-flavors-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';
import { BerriesListRelationFilter } from '../berries/berries-list-relation-filter.input';

@InputType()
export class TypesWhereInput {

    @Field(() => [TypesWhereInput], {nullable:true})
    AND?: Array<TypesWhereInput>;

    @Field(() => [TypesWhereInput], {nullable:true})
    OR?: Array<TypesWhereInput>;

    @Field(() => [TypesWhereInput], {nullable:true})
    NOT?: Array<TypesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    damage_class_id?: IntNullableFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;

    @Field(() => MoveDamageClassesNullableScalarRelationFilter, {nullable:true})
    damageClass?: MoveDamageClassesNullableScalarRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => PokemonTypesListRelationFilter, {nullable:true})
    pokemonTypes?: PokemonTypesListRelationFilter;

    @Field(() => PokemonFormTypesListRelationFilter, {nullable:true})
    formTypes?: PokemonFormTypesListRelationFilter;

    @Field(() => TypeGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: TypeGameIndicesListRelationFilter;

    @Field(() => TypeEfficacyListRelationFilter, {nullable:true})
    efficacy?: TypeEfficacyListRelationFilter;

    @Field(() => TypeEfficacyListRelationFilter, {nullable:true})
    efficacyTarget?: TypeEfficacyListRelationFilter;

    @Field(() => BerryFlavorsListRelationFilter, {nullable:true})
    berryFlavors?: BerryFlavorsListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    knownMoveTypes?: PokemonEvolutionListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    partyTypes?: PokemonEvolutionListRelationFilter;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    naturalGiftTypes?: BerriesListRelationFilter;
}
