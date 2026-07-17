import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LanguagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { LanguagesOrderByWithRelationInput } from './languages-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { LanguagesWhereUniqueInput } from './languages-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LanguagesScalarFieldEnum } from './languages-scalar-field.enum';

@ArgsType()
export class FindFirstLanguagesOrThrowArgs {

    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    where?: Identity<LanguagesWhereInput>;

    @Field(() => [LanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguagesOrderByWithRelationInput>;

    @Field(() => LanguagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LanguagesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LanguagesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LanguagesScalarFieldEnum}`>;
}
