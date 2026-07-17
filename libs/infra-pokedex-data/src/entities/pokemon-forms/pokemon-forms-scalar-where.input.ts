import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PokemonFormsScalarWhereInput {

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    AND?: Array<PokemonFormsScalarWhereInput>;

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    OR?: Array<PokemonFormsScalarWhereInput>;

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonFormsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => StringFilter, {nullable:true})
    form_identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    introduced_in_version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_default?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_battle_only?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_mega?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    form_order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;
}
