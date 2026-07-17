import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutContestEffectInput } from './moves-update-without-contest-effect.input';

@InputType()
export class MovesUpdateWithWhereUniqueWithoutContestEffectInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutContestEffectInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestEffectInput)
    data!: Identity<MovesUpdateWithoutContestEffectInput>;
}
