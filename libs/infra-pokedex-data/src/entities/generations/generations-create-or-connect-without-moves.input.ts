import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutMovesInput } from './generations-create-without-moves.input';

@InputType()
export class GenerationsCreateOrConnectWithoutMovesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutMovesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutMovesInput)
    create!: Identity<GenerationsCreateWithoutMovesInput>;
}
