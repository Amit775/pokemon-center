import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutTypeGameIndicesInput } from './generations-create-without-type-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutTypeGameIndicesInput } from './generations-create-or-connect-without-type-game-indices.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutTypeGameIndicesInput {

    @Field(() => GenerationsCreateWithoutTypeGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutTypeGameIndicesInput)
    create?: GenerationsCreateWithoutTypeGameIndicesInput;

    @Field(() => GenerationsCreateOrConnectWithoutTypeGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutTypeGameIndicesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutTypeGameIndicesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
