import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutSuperContestCombosSecondInput } from './moves-create-without-super-contest-combos-second.input';

@InputType()
export class MovesCreateOrConnectWithoutSuperContestCombosSecondInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutSuperContestCombosSecondInput, {nullable:false})
    @Type(() => MovesCreateWithoutSuperContestCombosSecondInput)
    create!: MovesCreateWithoutSuperContestCombosSecondInput;
}
