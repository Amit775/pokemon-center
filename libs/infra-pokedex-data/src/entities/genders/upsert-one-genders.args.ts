import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { Type } from 'class-transformer';
import { GendersCreateInput } from './genders-create.input';
import { GendersUpdateInput } from './genders-update.input';

@ArgsType()
export class UpsertOneGendersArgs {

    @Field(() => GendersWhereUniqueInput, {nullable:false})
    @Type(() => GendersWhereUniqueInput)
    where!: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;

    @Field(() => GendersCreateInput, {nullable:false})
    @Type(() => GendersCreateInput)
    create!: GendersCreateInput;

    @Field(() => GendersUpdateInput, {nullable:false})
    @Type(() => GendersUpdateInput)
    update!: GendersUpdateInput;
}
