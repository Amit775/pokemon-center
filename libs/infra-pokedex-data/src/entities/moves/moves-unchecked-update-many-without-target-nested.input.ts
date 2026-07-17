import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutTargetInput } from './moves-create-without-target.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutTargetInput } from './moves-create-or-connect-without-target.input';
import { MovesUpsertWithWhereUniqueWithoutTargetInput } from './moves-upsert-with-where-unique-without-target.input';
import { MovesCreateManyTargetInputEnvelope } from './moves-create-many-target-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateWithWhereUniqueWithoutTargetInput } from './moves-update-with-where-unique-without-target.input';
import { MovesUpdateManyWithWhereWithoutTargetInput } from './moves-update-many-with-where-without-target.input';
import { MovesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class MovesUncheckedUpdateManyWithoutTargetNestedInput {

    @Field(() => [MovesCreateWithoutTargetInput], {nullable:true})
    @Type(() => MovesCreateWithoutTargetInput)
    create?: Array<MovesCreateWithoutTargetInput>;

    @Field(() => [MovesCreateOrConnectWithoutTargetInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutTargetInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutTargetInput>;

    @Field(() => [MovesUpsertWithWhereUniqueWithoutTargetInput], {nullable:true})
    @Type(() => MovesUpsertWithWhereUniqueWithoutTargetInput)
    upsert?: Array<MovesUpsertWithWhereUniqueWithoutTargetInput>;

    @Field(() => MovesCreateManyTargetInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyTargetInputEnvelope)
    createMany?: MovesCreateManyTargetInputEnvelope;

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

    @Field(() => [MovesUpdateWithWhereUniqueWithoutTargetInput], {nullable:true})
    @Type(() => MovesUpdateWithWhereUniqueWithoutTargetInput)
    update?: Array<MovesUpdateWithWhereUniqueWithoutTargetInput>;

    @Field(() => [MovesUpdateManyWithWhereWithoutTargetInput], {nullable:true})
    @Type(() => MovesUpdateManyWithWhereWithoutTargetInput)
    updateMany?: Array<MovesUpdateManyWithWhereWithoutTargetInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    @Type(() => MovesScalarWhereInput)
    deleteMany?: Array<MovesScalarWhereInput>;
}
