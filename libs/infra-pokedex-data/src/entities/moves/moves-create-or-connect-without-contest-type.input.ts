import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutContestTypeInput } from './moves-create-without-contest-type.input';

@InputType()
export class MovesCreateOrConnectWithoutContestTypeInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutContestTypeInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestTypeInput)
    create!: MovesCreateWithoutContestTypeInput;
}
