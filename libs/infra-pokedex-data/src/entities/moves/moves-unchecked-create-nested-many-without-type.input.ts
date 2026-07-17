import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutTypeInput } from './moves-create-without-type.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutTypeInput } from './moves-create-or-connect-without-type.input';
import type { Identity } from 'identity-type';
import { MovesCreateManyTypeInputEnvelope } from './moves-create-many-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesUncheckedCreateNestedManyWithoutTypeInput {

    @Field(() => [MovesCreateWithoutTypeInput], {nullable:true})
    @Type(() => MovesCreateWithoutTypeInput)
    create?: Array<MovesCreateWithoutTypeInput>;

    @Field(() => [MovesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutTypeInput>;

    @Field(() => MovesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyTypeInputEnvelope)
    createMany?: Identity<MovesCreateManyTypeInputEnvelope>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
