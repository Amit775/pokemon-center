import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutContestCombosInput } from './moves-create-without-contest-combos.input';

@InputType()
export class MovesCreateOrConnectWithoutContestCombosInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutContestCombosInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestCombosInput)
    create!: MovesCreateWithoutContestCombosInput;
}
