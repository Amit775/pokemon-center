import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateWithoutContestTypeInput } from './berry-flavors-create-without-contest-type.input';
import { Type } from 'class-transformer';
import { BerryFlavorsCreateOrConnectWithoutContestTypeInput } from './berry-flavors-create-or-connect-without-contest-type.input';
import { BerryFlavorsCreateManyContestTypeInputEnvelope } from './berry-flavors-create-many-contest-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';

@InputType()
export class BerryFlavorsUncheckedCreateNestedManyWithoutContestTypeInput {

    @Field(() => [BerryFlavorsCreateWithoutContestTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateWithoutContestTypeInput)
    create?: Array<BerryFlavorsCreateWithoutContestTypeInput>;

    @Field(() => [BerryFlavorsCreateOrConnectWithoutContestTypeInput], {nullable:true})
    @Type(() => BerryFlavorsCreateOrConnectWithoutContestTypeInput)
    connectOrCreate?: Array<BerryFlavorsCreateOrConnectWithoutContestTypeInput>;

    @Field(() => BerryFlavorsCreateManyContestTypeInputEnvelope, {nullable:true})
    @Type(() => BerryFlavorsCreateManyContestTypeInputEnvelope)
    createMany?: BerryFlavorsCreateManyContestTypeInputEnvelope;

    @Field(() => [BerryFlavorsWhereUniqueInput], {nullable:true})
    @Type(() => BerryFlavorsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>>;
}
