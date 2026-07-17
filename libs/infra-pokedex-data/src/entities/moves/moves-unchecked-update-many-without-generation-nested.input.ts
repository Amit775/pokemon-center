import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutGenerationInput } from './moves-create-without-generation.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutGenerationInput } from './moves-create-or-connect-without-generation.input';
import { MovesUpsertWithWhereUniqueWithoutGenerationInput } from './moves-upsert-with-where-unique-without-generation.input';
import { MovesCreateManyGenerationInputEnvelope } from './moves-create-many-generation-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateWithWhereUniqueWithoutGenerationInput } from './moves-update-with-where-unique-without-generation.input';
import { MovesUpdateManyWithWhereWithoutGenerationInput } from './moves-update-many-with-where-without-generation.input';
import { MovesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class MovesUncheckedUpdateManyWithoutGenerationNestedInput {

    @Field(() => [MovesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => MovesCreateWithoutGenerationInput)
    create?: Array<MovesCreateWithoutGenerationInput>;

    @Field(() => [MovesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutGenerationInput>;

    @Field(() => [MovesUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => MovesUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<MovesUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => MovesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyGenerationInputEnvelope)
    createMany?: MovesCreateManyGenerationInputEnvelope;

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

    @Field(() => [MovesUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => MovesUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<MovesUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [MovesUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => MovesUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<MovesUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    @Type(() => MovesScalarWhereInput)
    deleteMany?: Array<MovesScalarWhereInput>;
}
