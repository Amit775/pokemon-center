import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutFlagMapInput } from './moves-create-without-flag-map.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutFlagMapInput } from './moves-create-or-connect-without-flag-map.input';
import { MovesUpsertWithoutFlagMapInput } from './moves-upsert-without-flag-map.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutFlagMapInput } from './moves-update-to-one-with-where-without-flag-map.input';

@InputType()
export class MovesUpdateOneRequiredWithoutFlagMapNestedInput {

    @Field(() => MovesCreateWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesCreateWithoutFlagMapInput)
    create?: MovesCreateWithoutFlagMapInput;

    @Field(() => MovesCreateOrConnectWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutFlagMapInput)
    connectOrCreate?: MovesCreateOrConnectWithoutFlagMapInput;

    @Field(() => MovesUpsertWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesUpsertWithoutFlagMapInput)
    upsert?: MovesUpsertWithoutFlagMapInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutFlagMapInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutFlagMapInput)
    update?: MovesUpdateToOneWithWhereWithoutFlagMapInput;
}
