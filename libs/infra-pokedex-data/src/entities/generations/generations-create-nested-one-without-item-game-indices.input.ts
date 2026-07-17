import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutItemGameIndicesInput } from './generations-create-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutItemGameIndicesInput } from './generations-create-or-connect-without-item-game-indices.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutItemGameIndicesInput {

    @Field(() => GenerationsCreateWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutItemGameIndicesInput)
    create?: GenerationsCreateWithoutItemGameIndicesInput;

    @Field(() => GenerationsCreateOrConnectWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutItemGameIndicesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutItemGameIndicesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
