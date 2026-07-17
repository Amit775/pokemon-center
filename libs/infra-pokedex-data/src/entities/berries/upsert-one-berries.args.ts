import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { BerriesCreateInput } from './berries-create.input';
import { BerriesUpdateInput } from './berries-update.input';

@ArgsType()
export class UpsertOneBerriesArgs {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesCreateInput, {nullable:false})
    @Type(() => BerriesCreateInput)
    create!: BerriesCreateInput;

    @Field(() => BerriesUpdateInput, {nullable:false})
    @Type(() => BerriesUpdateInput)
    update!: BerriesUpdateInput;
}
