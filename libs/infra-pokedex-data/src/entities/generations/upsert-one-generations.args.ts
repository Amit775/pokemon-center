import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationsCreateInput } from './generations-create.input';
import { GenerationsUpdateInput } from './generations-update.input';

@ArgsType()
export class UpsertOneGenerationsArgs {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateInput, {nullable:false})
    @Type(() => GenerationsCreateInput)
    create!: GenerationsCreateInput;

    @Field(() => GenerationsUpdateInput, {nullable:false})
    @Type(() => GenerationsUpdateInput)
    update!: GenerationsUpdateInput;
}
