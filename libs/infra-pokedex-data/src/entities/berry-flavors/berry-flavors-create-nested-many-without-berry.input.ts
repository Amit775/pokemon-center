import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateWithoutBerryInput } from './berry-flavors-create-without-berry.input';
import { Type } from 'class-transformer';
import { BerryFlavorsCreateOrConnectWithoutBerryInput } from './berry-flavors-create-or-connect-without-berry.input';
import { BerryFlavorsCreateManyBerryInputEnvelope } from './berry-flavors-create-many-berry-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';

@InputType()
export class BerryFlavorsCreateNestedManyWithoutBerryInput {

    @Field(() => [BerryFlavorsCreateWithoutBerryInput], {nullable:true})
    @Type(() => BerryFlavorsCreateWithoutBerryInput)
    create?: Array<BerryFlavorsCreateWithoutBerryInput>;

    @Field(() => [BerryFlavorsCreateOrConnectWithoutBerryInput], {nullable:true})
    @Type(() => BerryFlavorsCreateOrConnectWithoutBerryInput)
    connectOrCreate?: Array<BerryFlavorsCreateOrConnectWithoutBerryInput>;

    @Field(() => BerryFlavorsCreateManyBerryInputEnvelope, {nullable:true})
    @Type(() => BerryFlavorsCreateManyBerryInputEnvelope)
    createMany?: BerryFlavorsCreateManyBerryInputEnvelope;

    @Field(() => [BerryFlavorsWhereUniqueInput], {nullable:true})
    @Type(() => BerryFlavorsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>>;
}
