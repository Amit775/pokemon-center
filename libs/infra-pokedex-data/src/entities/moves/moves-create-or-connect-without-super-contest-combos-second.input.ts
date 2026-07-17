import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutSuperContestCombosSecondInput } from './moves-create-without-super-contest-combos-second.input';

@InputType()
export class MovesCreateOrConnectWithoutSuperContestCombosSecondInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutSuperContestCombosSecondInput, {nullable:false})
    @Type(() => MovesCreateWithoutSuperContestCombosSecondInput)
    create!: Identity<MovesCreateWithoutSuperContestCombosSecondInput>;
}
