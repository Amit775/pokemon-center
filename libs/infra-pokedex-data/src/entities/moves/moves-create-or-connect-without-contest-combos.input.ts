import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutContestCombosInput } from './moves-create-without-contest-combos.input';

@InputType()
export class MovesCreateOrConnectWithoutContestCombosInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutContestCombosInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestCombosInput)
    create!: Identity<MovesCreateWithoutContestCombosInput>;
}
