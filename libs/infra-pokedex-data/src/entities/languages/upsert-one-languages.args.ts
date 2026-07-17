import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LanguagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { LanguagesCreateInput } from './languages-create.input';
import { LanguagesUpdateInput } from './languages-update.input';

@ArgsType()
export class UpsertOneLanguagesArgs {

    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    where!: Prisma.AtLeast<LanguagesWhereUniqueInput, 'id'>;

    @Field(() => LanguagesCreateInput, {nullable:false})
    @Type(() => LanguagesCreateInput)
    create!: LanguagesCreateInput;

    @Field(() => LanguagesUpdateInput, {nullable:false})
    @Type(() => LanguagesUpdateInput)
    update!: LanguagesUpdateInput;
}
