import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LanguagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLanguagesArgs {

    @Field(() => LanguagesWhereUniqueInput, {nullable:false})
    @Type(() => LanguagesWhereUniqueInput)
    where!: Prisma.AtLeast<LanguagesWhereUniqueInput, 'id'>;
}
