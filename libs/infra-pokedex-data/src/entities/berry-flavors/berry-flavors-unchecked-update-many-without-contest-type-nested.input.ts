import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateWithoutContestTypeInput } from './berry-flavors-create-without-contest-type.input';
import { Type } from 'class-transformer';
import { BerryFlavorsCreateOrConnectWithoutContestTypeInput } from './berry-flavors-create-or-connect-without-contest-type.input';
import { BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput } from './berry-flavors-upsert-with-where-unique-without-contest-type.input';
import { BerryFlavorsCreateManyContestTypeInputEnvelope } from './berry-flavors-create-many-contest-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput } from './berry-flavors-update-with-where-unique-without-contest-type.input';
import { BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput } from './berry-flavors-update-many-with-where-without-contest-type.input';
import { BerryFlavorsScalarWhereInput } from './berry-flavors-scalar-where.input';

@InputType()
export class BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput {

    @Field(() => [BerryFlavorsCreateWithoutContestTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateWithoutContestTypeInput)
    create?: Array<BerryFlavorsCreateWithoutContestTypeInput>;

    @Field(() => [BerryFlavorsCreateOrConnectWithoutContestTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateOrConnectWithoutContestTypeInput)
    connectOrCreate?: Array<BerryFlavorsCreateOrConnectWithoutContestTypeInput>;

    @Field(() => [BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput], {nullable:true})
    @Type(() => BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput)
    upsert?: Array<BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput>;

    @Field(() => BerryFlavorsCreateManyContestTypeInputEnvelope, {nullable:true})
    @Type(() => BerryFlavorsCreateManyContestTypeInputEnvelope)
    createMany?: BerryFlavorsCreateManyContestTypeInputEnvelope;

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

    @Field(() => [BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput], {nullable:true})
    @Type(() => BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput)
    update?: Array<BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput>;

    @Field(() => [BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput], {nullable:true})
    @Type(() => BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput)
    updateMany?: Array<BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput>;

    @Field(() => [BerryFlavorsScalarWhereInput], {nullable:true})
    @Type(() => BerryFlavorsScalarWhereInput)
    deleteMany?: Array<BerryFlavorsScalarWhereInput>;
}
