import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUpdateInput } from './berries-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';

@ArgsType()
export class UpdateOneBerriesArgs {

    @Field(() => BerriesUpdateInput, {nullable:false})
    @Type(() => BerriesUpdateInput)
    data!: Identity<BerriesUpdateInput>;

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;
}
