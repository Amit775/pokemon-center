import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutLocationGameIndicesInput } from './generations-create-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutLocationGameIndicesInput } from './generations-create-or-connect-without-location-game-indices.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutLocationGameIndicesInput {

    @Field(() => GenerationsCreateWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutLocationGameIndicesInput)
    create?: GenerationsCreateWithoutLocationGameIndicesInput;

    @Field(() => GenerationsCreateOrConnectWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutLocationGameIndicesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutLocationGameIndicesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
