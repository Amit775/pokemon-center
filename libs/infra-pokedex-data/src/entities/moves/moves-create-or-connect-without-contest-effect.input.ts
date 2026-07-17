import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutContestEffectInput } from './moves-create-without-contest-effect.input';

@InputType()
export class MovesCreateOrConnectWithoutContestEffectInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutContestEffectInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestEffectInput)
    create!: Identity<MovesCreateWithoutContestEffectInput>;
}
