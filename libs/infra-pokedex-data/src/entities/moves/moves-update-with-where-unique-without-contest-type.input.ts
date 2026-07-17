import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutContestTypeInput } from './moves-update-without-contest-type.input';

@InputType()
export class MovesUpdateWithWhereUniqueWithoutContestTypeInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutContestTypeInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestTypeInput)
    data!: Identity<MovesUpdateWithoutContestTypeInput>;
}
