import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutContestCombosSecondInput } from './moves-create-without-contest-combos-second.input';

@InputType()
export class MovesCreateOrConnectWithoutContestCombosSecondInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutContestCombosSecondInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestCombosSecondInput)
    create!: MovesCreateWithoutContestCombosSecondInput;
}
