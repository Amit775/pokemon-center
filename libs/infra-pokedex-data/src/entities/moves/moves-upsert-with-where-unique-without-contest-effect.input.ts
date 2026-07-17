import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutContestEffectInput } from './moves-update-without-contest-effect.input';
import { MovesCreateWithoutContestEffectInput } from './moves-create-without-contest-effect.input';

@InputType()
export class MovesUpsertWithWhereUniqueWithoutContestEffectInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutContestEffectInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestEffectInput)
    update!: MovesUpdateWithoutContestEffectInput;

    @Field(() => MovesCreateWithoutContestEffectInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestEffectInput)
    create!: MovesCreateWithoutContestEffectInput;
}
