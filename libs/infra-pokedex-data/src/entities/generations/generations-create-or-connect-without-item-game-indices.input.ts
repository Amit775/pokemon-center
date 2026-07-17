import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutItemGameIndicesInput } from './generations-create-without-item-game-indices.input';

@InputType()
export class GenerationsCreateOrConnectWithoutItemGameIndicesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutItemGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutItemGameIndicesInput)
    create!: GenerationsCreateWithoutItemGameIndicesInput;
}
