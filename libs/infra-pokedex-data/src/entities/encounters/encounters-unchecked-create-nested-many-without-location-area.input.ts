import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutLocationAreaInput } from './encounters-create-without-location-area.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutLocationAreaInput } from './encounters-create-or-connect-without-location-area.input';
import { EncountersCreateManyLocationAreaInputEnvelope } from './encounters-create-many-location-area-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class EncountersUncheckedCreateNestedManyWithoutLocationAreaInput {

    @Field(() => [EncountersCreateWithoutLocationAreaInput], {nullable:true})
    @Type(() => EncountersCreateWithoutLocationAreaInput)
    create?: Array<EncountersCreateWithoutLocationAreaInput>;

    @Field(() => [EncountersCreateOrConnectWithoutLocationAreaInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutLocationAreaInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutLocationAreaInput>;

    @Field(() => EncountersCreateManyLocationAreaInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyLocationAreaInputEnvelope)
    createMany?: EncountersCreateManyLocationAreaInputEnvelope;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;
}
