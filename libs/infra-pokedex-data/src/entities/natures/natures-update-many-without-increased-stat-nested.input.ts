import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesCreateWithoutIncreasedStatInput } from './natures-create-without-increased-stat.input';
import { Type } from 'class-transformer';
import { NaturesCreateOrConnectWithoutIncreasedStatInput } from './natures-create-or-connect-without-increased-stat.input';
import { NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput } from './natures-upsert-with-where-unique-without-increased-stat.input';
import type { Identity } from 'identity-type';
import { NaturesCreateManyIncreasedStatInputEnvelope } from './natures-create-many-increased-stat-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput } from './natures-update-with-where-unique-without-increased-stat.input';
import { NaturesUpdateManyWithWhereWithoutIncreasedStatInput } from './natures-update-many-with-where-without-increased-stat.input';
import { NaturesScalarWhereInput } from './natures-scalar-where.input';

@InputType()
export class NaturesUpdateManyWithoutIncreasedStatNestedInput {

    @Field(() => [NaturesCreateWithoutIncreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateWithoutIncreasedStatInput)
    create?: Array<NaturesCreateWithoutIncreasedStatInput>;

    @Field(() => [NaturesCreateOrConnectWithoutIncreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateOrConnectWithoutIncreasedStatInput)
    connectOrCreate?: Array<NaturesCreateOrConnectWithoutIncreasedStatInput>;

    @Field(() => [NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput], {nullable:true})
    @Type(() => NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput)
    upsert?: Array<NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput>;

    @Field(() => NaturesCreateManyIncreasedStatInputEnvelope, {nullable:true})
    @Type(() => NaturesCreateManyIncreasedStatInputEnvelope)
    createMany?: Identity<NaturesCreateManyIncreasedStatInputEnvelope>;

    @Field(() => [NaturesWhereUniqueInput], {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>>;

    @Field(() => [NaturesWhereUniqueInput], {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>>;

    @Field(() => [NaturesWhereUniqueInput], {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>>;

    @Field(() => [NaturesWhereUniqueInput], {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>>;

    @Field(() => [NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput], {nullable:true})
    @Type(() => NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput)
    update?: Array<NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput>;

    @Field(() => [NaturesUpdateManyWithWhereWithoutIncreasedStatInput], {nullable:true})
    @Type(() => NaturesUpdateManyWithWhereWithoutIncreasedStatInput)
    updateMany?: Array<NaturesUpdateManyWithWhereWithoutIncreasedStatInput>;

    @Field(() => [NaturesScalarWhereInput], {nullable:true})
    @Type(() => NaturesScalarWhereInput)
    deleteMany?: Array<NaturesScalarWhereInput>;
}
