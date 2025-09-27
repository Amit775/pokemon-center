import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGendersArgs {

    @Field(() => GendersWhereUniqueInput, {nullable:false})
    @Type(() => GendersWhereUniqueInput)
    where!: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;
}
