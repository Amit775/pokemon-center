import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutLocationAreaInput } from './encounters-create-without-location-area.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutLocationAreaInput } from './encounters-create-or-connect-without-location-area.input';
import { EncountersUpsertWithWhereUniqueWithoutLocationAreaInput } from './encounters-upsert-with-where-unique-without-location-area.input';
import type { Identity } from 'identity-type';
import { EncountersCreateManyLocationAreaInputEnvelope } from './encounters-create-many-location-area-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { EncountersUpdateWithWhereUniqueWithoutLocationAreaInput } from './encounters-update-with-where-unique-without-location-area.input';
import { EncountersUpdateManyWithWhereWithoutLocationAreaInput } from './encounters-update-many-with-where-without-location-area.input';
import { EncountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class EncountersUpdateManyWithoutLocationAreaNestedInput {

    @Field(() => [EncountersCreateWithoutLocationAreaInput], {nullable:true})
    @Type(() => EncountersCreateWithoutLocationAreaInput)
    create?: Array<EncountersCreateWithoutLocationAreaInput>;

    @Field(() => [EncountersCreateOrConnectWithoutLocationAreaInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutLocationAreaInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutLocationAreaInput>;

    @Field(() => [EncountersUpsertWithWhereUniqueWithoutLocationAreaInput], {nullable:true})
    @Type(() => EncountersUpsertWithWhereUniqueWithoutLocationAreaInput)
    upsert?: Array<EncountersUpsertWithWhereUniqueWithoutLocationAreaInput>;

    @Field(() => EncountersCreateManyLocationAreaInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyLocationAreaInputEnvelope)
    createMany?: Identity<EncountersCreateManyLocationAreaInputEnvelope>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersUpdateWithWhereUniqueWithoutLocationAreaInput], {nullable:true})
    @Type(() => EncountersUpdateWithWhereUniqueWithoutLocationAreaInput)
    update?: Array<EncountersUpdateWithWhereUniqueWithoutLocationAreaInput>;

    @Field(() => [EncountersUpdateManyWithWhereWithoutLocationAreaInput], {nullable:true})
    @Type(() => EncountersUpdateManyWithWhereWithoutLocationAreaInput)
    updateMany?: Array<EncountersUpdateManyWithWhereWithoutLocationAreaInput>;

    @Field(() => [EncountersScalarWhereInput], {nullable:true})
    @Type(() => EncountersScalarWhereInput)
    deleteMany?: Array<EncountersScalarWhereInput>;
}
