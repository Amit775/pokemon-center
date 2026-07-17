import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutSuperContestEffectInput } from './moves-update-without-super-contest-effect.input';
import { MovesCreateWithoutSuperContestEffectInput } from './moves-create-without-super-contest-effect.input';

@InputType()
export class MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutSuperContestEffectInput, {nullable:false})
    @Type(() => MovesUpdateWithoutSuperContestEffectInput)
    update!: MovesUpdateWithoutSuperContestEffectInput;

    @Field(() => MovesCreateWithoutSuperContestEffectInput, {nullable:false})
    @Type(() => MovesCreateWithoutSuperContestEffectInput)
    create!: MovesCreateWithoutSuperContestEffectInput;
}
