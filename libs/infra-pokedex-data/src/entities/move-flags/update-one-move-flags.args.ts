import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagsUpdateInput } from './move-flags-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';

@ArgsType()
export class UpdateOneMoveFlagsArgs {

    @Field(() => MoveFlagsUpdateInput, {nullable:false})
    @Type(() => MoveFlagsUpdateInput)
    data!: MoveFlagsUpdateInput;

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;
}
