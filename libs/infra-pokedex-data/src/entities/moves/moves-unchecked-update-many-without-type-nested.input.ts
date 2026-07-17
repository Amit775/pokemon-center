import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutTypeInput } from './moves-create-without-type.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutTypeInput } from './moves-create-or-connect-without-type.input';
import { MovesUpsertWithWhereUniqueWithoutTypeInput } from './moves-upsert-with-where-unique-without-type.input';
import { MovesCreateManyTypeInputEnvelope } from './moves-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateWithWhereUniqueWithoutTypeInput } from './moves-update-with-where-unique-without-type.input';
import { MovesUpdateManyWithWhereWithoutTypeInput } from './moves-update-many-with-where-without-type.input';
import { MovesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class MovesUncheckedUpdateManyWithoutTypeNestedInput {

    @Field(() => [MovesCreateWithoutTypeInput], {nullable:true})
    @Type(() => MovesCreateWithoutTypeInput)
    create?: Array<MovesCreateWithoutTypeInput>;

    @Field(() => [MovesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutTypeInput>;

    @Field(() => [MovesUpsertWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => MovesUpsertWithWhereUniqueWithoutTypeInput)
    upsert?: Array<MovesUpsertWithWhereUniqueWithoutTypeInput>;

    @Field(() => MovesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyTypeInputEnvelope)
    createMany?: MovesCreateManyTypeInputEnvelope;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesUpdateWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => MovesUpdateWithWhereUniqueWithoutTypeInput)
    update?: Array<MovesUpdateWithWhereUniqueWithoutTypeInput>;

    @Field(() => [MovesUpdateManyWithWhereWithoutTypeInput], {nullable:true})
    @Type(() => MovesUpdateManyWithWhereWithoutTypeInput)
    updateMany?: Array<MovesUpdateManyWithWhereWithoutTypeInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    @Type(() => MovesScalarWhereInput)
    deleteMany?: Array<MovesScalarWhereInput>;
}
