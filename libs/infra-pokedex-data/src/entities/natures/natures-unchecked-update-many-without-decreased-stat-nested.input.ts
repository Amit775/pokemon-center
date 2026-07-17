import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesCreateWithoutDecreasedStatInput } from './natures-create-without-decreased-stat.input';
import { Type } from 'class-transformer';
import { NaturesCreateOrConnectWithoutDecreasedStatInput } from './natures-create-or-connect-without-decreased-stat.input';
import { NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput } from './natures-upsert-with-where-unique-without-decreased-stat.input';
import { NaturesCreateManyDecreasedStatInputEnvelope } from './natures-create-many-decreased-stat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput } from './natures-update-with-where-unique-without-decreased-stat.input';
import { NaturesUpdateManyWithWhereWithoutDecreasedStatInput } from './natures-update-many-with-where-without-decreased-stat.input';
import { NaturesScalarWhereInput } from './natures-scalar-where.input';

@InputType()
export class NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput {

    @Field(() => [NaturesCreateWithoutDecreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateWithoutDecreasedStatInput)
    create?: Array<NaturesCreateWithoutDecreasedStatInput>;

    @Field(() => [NaturesCreateOrConnectWithoutDecreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateOrConnectWithoutDecreasedStatInput)
    connectOrCreate?: Array<NaturesCreateOrConnectWithoutDecreasedStatInput>;

    @Field(() => [NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput], {nullable:true})
    @Type(() => NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput)
    upsert?: Array<NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput>;

    @Field(() => NaturesCreateManyDecreasedStatInputEnvelope, {nullable:true})
    @Type(() => NaturesCreateManyDecreasedStatInputEnvelope)
    createMany?: NaturesCreateManyDecreasedStatInputEnvelope;

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

    @Field(() => [NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput], {nullable:true})
    @Type(() => NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput)
    update?: Array<NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput>;

    @Field(() => [NaturesUpdateManyWithWhereWithoutDecreasedStatInput], {nullable:true})
    @Type(() => NaturesUpdateManyWithWhereWithoutDecreasedStatInput)
    updateMany?: Array<NaturesUpdateManyWithWhereWithoutDecreasedStatInput>;

    @Field(() => [NaturesScalarWhereInput], {nullable:true})
    @Type(() => NaturesScalarWhereInput)
    deleteMany?: Array<NaturesScalarWhereInput>;
}
