import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateWithoutTypeInput } from './berry-flavors-create-without-type.input';
import { Type } from 'class-transformer';
import { BerryFlavorsCreateOrConnectWithoutTypeInput } from './berry-flavors-create-or-connect-without-type.input';
import { BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput } from './berry-flavors-upsert-with-where-unique-without-type.input';
import type { Identity } from 'identity-type';
import { BerryFlavorsCreateManyTypeInputEnvelope } from './berry-flavors-create-many-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput } from './berry-flavors-update-with-where-unique-without-type.input';
import { BerryFlavorsUpdateManyWithWhereWithoutTypeInput } from './berry-flavors-update-many-with-where-without-type.input';
import { BerryFlavorsScalarWhereInput } from './berry-flavors-scalar-where.input';

@InputType()
export class BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput {

    @Field(() => [BerryFlavorsCreateWithoutTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateWithoutTypeInput)
    create?: Array<BerryFlavorsCreateWithoutTypeInput>;

    @Field(() => [BerryFlavorsCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<BerryFlavorsCreateOrConnectWithoutTypeInput>;

    @Field(() => [BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput)
    upsert?: Array<BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput>;

    @Field(() => BerryFlavorsCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => BerryFlavorsCreateManyTypeInputEnvelope)
    createMany?: Identity<BerryFlavorsCreateManyTypeInputEnvelope>;

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

    @Field(() => [BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput)
    update?: Array<BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput>;

    @Field(() => [BerryFlavorsUpdateManyWithWhereWithoutTypeInput], {nullable:true})
    @Type(() => BerryFlavorsUpdateManyWithWhereWithoutTypeInput)
    updateMany?: Array<BerryFlavorsUpdateManyWithWhereWithoutTypeInput>;

    @Field(() => [BerryFlavorsScalarWhereInput], {nullable:true})
    @Type(() => BerryFlavorsScalarWhereInput)
    deleteMany?: Array<BerryFlavorsScalarWhereInput>;
}
