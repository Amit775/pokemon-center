import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LanguagesWhereInput } from './languages-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class LanguagesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [LanguagesWhereInput], {nullable:true})
    AND?: Array<LanguagesWhereInput>;

    @Field(() => [LanguagesWhereInput], {nullable:true})
    OR?: Array<LanguagesWhereInput>;

    @Field(() => [LanguagesWhereInput], {nullable:true})
    NOT?: Array<LanguagesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    iso639?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    iso3166?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    official?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;
}
