import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutSuperContestCombosInput } from './moves-create-without-super-contest-combos.input';

@InputType()
export class MovesCreateOrConnectWithoutSuperContestCombosInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutSuperContestCombosInput, {nullable:false})
    @Type(() => MovesCreateWithoutSuperContestCombosInput)
    create!: Identity<MovesCreateWithoutSuperContestCombosInput>;
}
