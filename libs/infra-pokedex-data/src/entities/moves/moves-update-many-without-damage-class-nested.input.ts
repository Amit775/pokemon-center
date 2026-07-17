import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutDamageClassInput } from './moves-create-without-damage-class.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutDamageClassInput } from './moves-create-or-connect-without-damage-class.input';
import { MovesUpsertWithWhereUniqueWithoutDamageClassInput } from './moves-upsert-with-where-unique-without-damage-class.input';
import type { Identity } from 'identity-type';
import { MovesCreateManyDamageClassInputEnvelope } from './moves-create-many-damage-class-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateWithWhereUniqueWithoutDamageClassInput } from './moves-update-with-where-unique-without-damage-class.input';
import { MovesUpdateManyWithWhereWithoutDamageClassInput } from './moves-update-many-with-where-without-damage-class.input';
import { MovesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class MovesUpdateManyWithoutDamageClassNestedInput {

    @Field(() => [MovesCreateWithoutDamageClassInput], {nullable:true})
    @Type(() => MovesCreateWithoutDamageClassInput)
    create?: Array<MovesCreateWithoutDamageClassInput>;

    @Field(() => [MovesCreateOrConnectWithoutDamageClassInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutDamageClassInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutDamageClassInput>;

    @Field(() => [MovesUpsertWithWhereUniqueWithoutDamageClassInput], {nullable:true})
    @Type(() => MovesUpsertWithWhereUniqueWithoutDamageClassInput)
    upsert?: Array<MovesUpsertWithWhereUniqueWithoutDamageClassInput>;

    @Field(() => MovesCreateManyDamageClassInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyDamageClassInputEnvelope)
    createMany?: Identity<MovesCreateManyDamageClassInputEnvelope>;

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

    @Field(() => [MovesUpdateWithWhereUniqueWithoutDamageClassInput], {nullable:true})
    @Type(() => MovesUpdateWithWhereUniqueWithoutDamageClassInput)
    update?: Array<MovesUpdateWithWhereUniqueWithoutDamageClassInput>;

    @Field(() => [MovesUpdateManyWithWhereWithoutDamageClassInput], {nullable:true})
    @Type(() => MovesUpdateManyWithWhereWithoutDamageClassInput)
    updateMany?: Array<MovesUpdateManyWithWhereWithoutDamageClassInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    @Type(() => MovesScalarWhereInput)
    deleteMany?: Array<MovesScalarWhereInput>;
}
