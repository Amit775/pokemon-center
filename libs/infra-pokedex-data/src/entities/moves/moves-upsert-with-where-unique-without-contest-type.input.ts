import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutContestTypeInput } from './moves-update-without-contest-type.input';
import { MovesCreateWithoutContestTypeInput } from './moves-create-without-contest-type.input';

@InputType()
export class MovesUpsertWithWhereUniqueWithoutContestTypeInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutContestTypeInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestTypeInput)
    update!: MovesUpdateWithoutContestTypeInput;

    @Field(() => MovesCreateWithoutContestTypeInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestTypeInput)
    create!: MovesCreateWithoutContestTypeInput;
}
