import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateWithoutTypeInput } from './berry-flavors-create-without-type.input';
import { Type } from 'class-transformer';
import { BerryFlavorsCreateOrConnectWithoutTypeInput } from './berry-flavors-create-or-connect-without-type.input';
import { BerryFlavorsCreateManyTypeInputEnvelope } from './berry-flavors-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';

@InputType()
export class BerryFlavorsCreateNestedManyWithoutTypeInput {

    @Field(() => [BerryFlavorsCreateWithoutTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateWithoutTypeInput)
    create?: Array<BerryFlavorsCreateWithoutTypeInput>;

    @Field(() => [BerryFlavorsCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<BerryFlavorsCreateOrConnectWithoutTypeInput>;

    @Field(() => BerryFlavorsCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => BerryFlavorsCreateManyTypeInputEnvelope)
    createMany?: BerryFlavorsCreateManyTypeInputEnvelope;

    @Field(() => [BerryFlavorsWhereUniqueInput], {nullable:true})
    @Type(() => BerryFlavorsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>>;
}
