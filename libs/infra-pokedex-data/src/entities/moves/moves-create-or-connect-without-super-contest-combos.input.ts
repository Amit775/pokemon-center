import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutSuperContestCombosInput } from './moves-create-without-super-contest-combos.input';

@InputType()
export class MovesCreateOrConnectWithoutSuperContestCombosInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutSuperContestCombosInput, {nullable:false})
    @Type(() => MovesCreateWithoutSuperContestCombosInput)
    create!: MovesCreateWithoutSuperContestCombosInput;
}
