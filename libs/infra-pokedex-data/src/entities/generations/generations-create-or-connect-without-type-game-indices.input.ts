import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutTypeGameIndicesInput } from './generations-create-without-type-game-indices.input';

@InputType()
export class GenerationsCreateOrConnectWithoutTypeGameIndicesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutTypeGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutTypeGameIndicesInput)
    create!: Identity<GenerationsCreateWithoutTypeGameIndicesInput>;
}
