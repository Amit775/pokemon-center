import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguagesUpdateInput } from './languages-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LanguagesWhereUniqueInput } from './languages-where-unique.input';

@ArgsType()
export class UpdateOneLanguagesArgs {

    @Field(() => LanguagesUpdateInput, {nullable:false})
    @Type(() => LanguagesUpdateInput)
    data!: LanguagesUpdateInput;

    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    where!: Prisma.AtLeast<LanguagesWhereUniqueInput, 'id'>;
}
