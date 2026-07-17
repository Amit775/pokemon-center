import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutVersionInput } from './encounters-create-without-version.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutVersionInput } from './encounters-create-or-connect-without-version.input';
import { EncountersCreateManyVersionInputEnvelope } from './encounters-create-many-version-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class EncountersCreateNestedManyWithoutVersionInput {

    @Field(() => [EncountersCreateWithoutVersionInput], {nullable:true})
    @Type(() => EncountersCreateWithoutVersionInput)
    create?: Array<EncountersCreateWithoutVersionInput>;

    @Field(() => [EncountersCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutVersionInput>;

    @Field(() => EncountersCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyVersionInputEnvelope)
    createMany?: EncountersCreateManyVersionInputEnvelope;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;
}
