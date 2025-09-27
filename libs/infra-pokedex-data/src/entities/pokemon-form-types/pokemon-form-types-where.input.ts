import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonFormsScalarRelationFilter } from '../pokemon-forms/pokemon-forms-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';

@InputType()
export class PokemonFormTypesWhereInput {

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
