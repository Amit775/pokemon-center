import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateWithoutBerryInput } from './berry-flavors-create-without-berry.input';
import { Type } from 'class-transformer';
import { BerryFlavorsCreateOrConnectWithoutBerryInput } from './berry-flavors-create-or-connect-without-berry.input';
import { BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput } from './berry-flavors-upsert-with-where-unique-without-berry.input';
import type { Identity } from 'identity-type';
import { BerryFlavorsCreateManyBerryInputEnvelope } from './berry-flavors-create-many-berry-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput } from './berry-flavors-update-with-where-unique-without-berry.input';
import { BerryFlavorsUpdateManyWithWhereWithoutBerryInput } from './berry-flavors-update-many-with-where-without-berry.input';
import { BerryFlavorsScalarWhereInput } from './berry-flavors-scalar-where.input';

@InputType()
export class BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput {

    @Field(() => [BerryFlavorsCreateWithoutBerryInput], {nullable:true})
    @Type(() => BerryFlavorsCreateWithoutBerryInput)
    create?: Array<BerryFlavorsCreateWithoutBerryInput>;

    @Field(() => [BerryFlavorsCreateOrConnectWithoutBerryInput], {nullable:true})
    @Type(() => BerryFlavorsCreateOrConnectWithoutBerryInput)
    connectOrCreate?: Array<BerryFlavorsCreateOrConnectWithoutBerryInput>;

    @Field(() => [BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput], {nullable:true})
    @Type(() => BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput)
    upsert?: Array<BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput>;

    @Field(() => BerryFlavorsCreateManyBerryInputEnvelope, {nullable:true})
    @Type(() => BerryFlavorsCreateManyBerryInputEnvelope)
    createMany?: Identity<BerryFlavorsCreateManyBerryInputEnvelope>;

    @Field(() => [BerryFlavorsWhereUniqueInput], {nullable:true})
    @Type(() => BerryFlavorsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>>;

    @Field(() => [BerryFlavorsWhereUniqueInput], {nullable:true})
    @Type(() => BerryFlavorsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>>;

    @Field(() => [BerryFlavorsWhereUniqueInput], {nullable:true})
    @Type(() => BerryFlavorsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>>;

    @Field(() => [BerryFlavorsWhereUniqueInput], {nullable:true})
    @Type(() => BerryFlavorsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>>;

    @Field(() => [BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput], {nullable:true})
    @Type(() => BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput)
    update?: Array<BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput>;

    @Field(() => [BerryFlavorsUpdateManyWithWhereWithoutBerryInput], {nullable:true})
    @Type(() => BerryFlavorsUpdateManyWithWhereWithoutBerryInput)
    updateMany?: Array<BerryFlavorsUpdateManyWithWhereWithoutBerryInput>;

    @Field(() => [BerryFlavorsScalarWhereInput], {nullable:true})
    @Type(() => BerryFlavorsScalarWhereInput)
    deleteMany?: Array<BerryFlavorsScalarWhereInput>;
}
