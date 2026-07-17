import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutSuperContestEffectInput } from './moves-update-without-super-contest-effect.input';

@InputType()
export class MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutSuperContestEffectInput, {nullable:false})
    @Type(() => MovesUpdateWithoutSuperContestEffectInput)
    data!: Identity<MovesUpdateWithoutSuperContestEffectInput>;
}
