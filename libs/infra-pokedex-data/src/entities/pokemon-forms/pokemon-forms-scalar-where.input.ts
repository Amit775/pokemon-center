import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PokemonFormsScalarWhereInput {

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    AND?: Array<PokemonFormsScalarWhereInput>;

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    OR?: Array<PokemonFormsScalarWhereInput>;

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonFormsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_identifier?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    introduced_in_version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_default?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_battle_only?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_mega?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    form_order?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;
}
