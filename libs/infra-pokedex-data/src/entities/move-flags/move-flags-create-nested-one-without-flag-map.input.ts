import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagsCreateWithoutFlagMapInput } from './move-flags-create-without-flag-map.input';
import { Type } from 'class-transformer';
import { MoveFlagsCreateOrConnectWithoutFlagMapInput } from './move-flags-create-or-connect-without-flag-map.input';
import { Prisma } from '@prisma/client';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';

@InputType()
export class MoveFlagsCreateNestedOneWithoutFlagMapInput {

    @Field(() => MoveFlagsCreateWithoutFlagMapInput, {nullable:true})
    @Type(() => MoveFlagsCreateWithoutFlagMapInput)
    create?: MoveFlagsCreateWithoutFlagMapInput;

    @Field(() => MoveFlagsCreateOrConnectWithoutFlagMapInput, {nullable:true})
    @Type(() => MoveFlagsCreateOrConnectWithoutFlagMapInput)
    connectOrCreate?: MoveFlagsCreateOrConnectWithoutFlagMapInput;

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:true})
    @Type(() => MoveFlagsWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;
}
