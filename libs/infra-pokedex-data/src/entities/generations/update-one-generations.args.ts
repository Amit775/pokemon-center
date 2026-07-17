import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateInput } from './generations-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@ArgsType()
export class UpdateOneGenerationsArgs {

    @Field(() => GenerationsUpdateInput, {nullable:false})
    @Type(() => GenerationsUpdateInput)
    data!: Identity<GenerationsUpdateInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
