import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutVersionInput } from './encounters-create-without-version.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutVersionInput } from './encounters-create-or-connect-without-version.input';
import { EncountersUpsertWithWhereUniqueWithoutVersionInput } from './encounters-upsert-with-where-unique-without-version.input';
import type { Identity } from 'identity-type';
import { EncountersCreateManyVersionInputEnvelope } from './encounters-create-many-version-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { EncountersUpdateWithWhereUniqueWithoutVersionInput } from './encounters-update-with-where-unique-without-version.input';
import { EncountersUpdateManyWithWhereWithoutVersionInput } from './encounters-update-many-with-where-without-version.input';
import { EncountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class EncountersUncheckedUpdateManyWithoutVersionNestedInput {

    @Field(() => [EncountersCreateWithoutVersionInput], {nullable:true})
    @Type(() => EncountersCreateWithoutVersionInput)
    create?: Array<EncountersCreateWithoutVersionInput>;

    @Field(() => [EncountersCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutVersionInput>;

    @Field(() => [EncountersUpsertWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => EncountersUpsertWithWhereUniqueWithoutVersionInput)
    upsert?: Array<EncountersUpsertWithWhereUniqueWithoutVersionInput>;

    @Field(() => EncountersCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyVersionInputEnvelope)
    createMany?: Identity<EncountersCreateManyVersionInputEnvelope>;

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

    @Field(() => [EncountersUpdateWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => EncountersUpdateWithWhereUniqueWithoutVersionInput)
    update?: Array<EncountersUpdateWithWhereUniqueWithoutVersionInput>;

    @Field(() => [EncountersUpdateManyWithWhereWithoutVersionInput], {nullable:true})
    @Type(() => EncountersUpdateManyWithWhereWithoutVersionInput)
    updateMany?: Array<EncountersUpdateManyWithWhereWithoutVersionInput>;

    @Field(() => [EncountersScalarWhereInput], {nullable:true})
    @Type(() => EncountersScalarWhereInput)
    deleteMany?: Array<EncountersScalarWhereInput>;
}
