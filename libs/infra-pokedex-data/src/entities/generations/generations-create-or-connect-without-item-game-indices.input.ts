import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutItemGameIndicesInput } from './generations-create-without-item-game-indices.input';

@InputType()
export class GenerationsCreateOrConnectWithoutItemGameIndicesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutItemGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutItemGameIndicesInput)
    create!: Identity<GenerationsCreateWithoutItemGameIndicesInput>;
}
