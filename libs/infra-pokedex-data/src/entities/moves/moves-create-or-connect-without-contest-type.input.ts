import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutContestTypeInput } from './moves-create-without-contest-type.input';

@InputType()
export class MovesCreateOrConnectWithoutContestTypeInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutContestTypeInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestTypeInput)
    create!: Identity<MovesCreateWithoutContestTypeInput>;
}
