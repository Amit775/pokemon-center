import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutFlagMapInput } from './moves-create-without-flag-map.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutFlagMapInput } from './moves-create-or-connect-without-flag-map.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutFlagMapInput {

    @Field(() => MovesCreateWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesCreateWithoutFlagMapInput)
    create?: MovesCreateWithoutFlagMapInput;

    @Field(() => MovesCreateOrConnectWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutFlagMapInput)
    connectOrCreate?: MovesCreateOrConnectWithoutFlagMapInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
