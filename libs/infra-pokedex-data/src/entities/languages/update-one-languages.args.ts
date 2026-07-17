import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LanguagesUpdateInput } from './languages-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { LanguagesWhereUniqueInput } from './languages-where-unique.input';

@ArgsType()
export class UpdateOneLanguagesArgs {

    @Field(() => LanguagesUpdateInput, {nullable:false})
    @Type(() => LanguagesUpdateInput)
    data!: Identity<LanguagesUpdateInput>;

    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    where!: Prisma.AtLeast<LanguagesWhereUniqueInput, 'id'>;
}
