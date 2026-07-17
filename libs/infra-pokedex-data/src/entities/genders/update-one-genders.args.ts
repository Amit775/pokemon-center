import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GendersUpdateInput } from './genders-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';

@ArgsType()
export class UpdateOneGendersArgs {

    @Field(() => GendersUpdateInput, {nullable:false})
    @Type(() => GendersUpdateInput)
    data!: GendersUpdateInput;

    @Field(() => GendersWhereUniqueInput, {nullable:false})
    @Type(() => GendersWhereUniqueInput)
    where!: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;
}
