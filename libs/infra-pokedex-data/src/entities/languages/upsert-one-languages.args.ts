import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LanguagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LanguagesCreateInput } from './languages-create.input';
import { LanguagesUpdateInput } from './languages-update.input';

@ArgsType()
export class UpsertOneLanguagesArgs {

    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    where!: Prisma.AtLeast<LanguagesWhereUniqueInput, 'id'>;

    @Field(() => LanguagesCreateInput, {nullable:false})
    @Type(() => LanguagesCreateInput)
    create!: Identity<LanguagesCreateInput>;

    @Field(() => LanguagesUpdateInput, {nullable:false})
    @Type(() => LanguagesUpdateInput)
    update!: Identity<LanguagesUpdateInput>;
}
