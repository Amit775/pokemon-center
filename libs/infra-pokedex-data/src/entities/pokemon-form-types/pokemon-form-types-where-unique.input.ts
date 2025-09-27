import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput } from './pokemon-form-types-pokemon-form-id-type-id-compound-unique.input';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonFormsScalarRelationFilter } from '../pokemon-forms/pokemon-forms-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';

@InputType()
export class PokemonFormTypesWhereUniqueInput {

    @Field(() => PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput, {nullable:true})
    pokemon_form_id_type_id?: PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput;

    @Field(() => [PokemonFormTypesWhereInput], {nullable:true})
    AND?: Array<PokemonFormTypesWhereInput>;

    @Field(() => [PokemonFormTypesWhereInput], {nullable:true})
    OR?: Array<PokemonFormTypesWhereInput>;

    @Field(() => [PokemonFormTypesWhereInput], {nullable:true})
    NOT?: Array<PokemonFormTypesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;

    @Field(() => PokemonFormsScalarRelationFilter, {nullable:true})
    pokemonForm?: PokemonFormsScalarRelationFilter;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    type?: TypesScalarRelationFilter;
}
