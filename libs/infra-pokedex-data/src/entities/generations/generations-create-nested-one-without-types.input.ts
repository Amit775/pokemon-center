import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutTypesInput } from './generations-create-without-types.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutTypesInput } from './generations-create-or-connect-without-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutTypesInput {

    @Field(() => GenerationsCreateWithoutTypesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutTypesInput)
    create?: Identity<GenerationsCreateWithoutTypesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutTypesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
