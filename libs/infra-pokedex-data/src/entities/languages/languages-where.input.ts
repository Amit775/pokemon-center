import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class LanguagesWhereInput {

    @Field(() => [LanguagesWhereInput], {nullable:true})
    AND?: Array<LanguagesWhereInput>;

    @Field(() => [LanguagesWhereInput], {nullable:true})
    OR?: Array<LanguagesWhereInput>;

    @Field(() => [LanguagesWhereInput], {nullable:true})
    NOT?: Array<LanguagesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    iso639?: Identity<StringFilter>;

    @Field(() => StringFilter, {nullable:true})
    iso3166?: Identity<StringFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    official?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;
}
