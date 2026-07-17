import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutFlagMapInput } from './moves-create-without-flag-map.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutFlagMapInput } from './moves-create-or-connect-without-flag-map.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutFlagMapInput {

    @Field(() => MovesCreateWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesCreateWithoutFlagMapInput)
    create?: Identity<MovesCreateWithoutFlagMapInput>;

    @Field(() => MovesCreateOrConnectWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutFlagMapInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutFlagMapInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
