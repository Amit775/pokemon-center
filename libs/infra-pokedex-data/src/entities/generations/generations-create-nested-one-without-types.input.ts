import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutTypesInput } from './generations-create-without-types.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutTypesInput } from './generations-create-or-connect-without-types.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutTypesInput {

    @Field(() => GenerationsCreateWithoutTypesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutTypesInput)
    create?: GenerationsCreateWithoutTypesInput;

    @Field(() => GenerationsCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutTypesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutTypesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
