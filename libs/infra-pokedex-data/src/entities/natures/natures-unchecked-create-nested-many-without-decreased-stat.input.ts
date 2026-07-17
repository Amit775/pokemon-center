import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesCreateWithoutDecreasedStatInput } from './natures-create-without-decreased-stat.input';
import { Type } from 'class-transformer';
import { NaturesCreateOrConnectWithoutDecreasedStatInput } from './natures-create-or-connect-without-decreased-stat.input';
import { NaturesCreateManyDecreasedStatInputEnvelope } from './natures-create-many-decreased-stat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class NaturesUncheckedCreateNestedManyWithoutDecreasedStatInput {

    @Field(() => [NaturesCreateWithoutDecreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateWithoutDecreasedStatInput)
    create?: Array<NaturesCreateWithoutDecreasedStatInput>;

    @Field(() => [NaturesCreateOrConnectWithoutDecreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateOrConnectWithoutDecreasedStatInput)
    connectOrCreate?: Array<NaturesCreateOrConnectWithoutDecreasedStatInput>;

    @Field(() => NaturesCreateManyDecreasedStatInputEnvelope, {nullable:true})
    @Type(() => NaturesCreateManyDecreasedStatInputEnvelope)
    createMany?: NaturesCreateManyDecreasedStatInputEnvelope;

    @Field(() => [NaturesWhereUniqueInput], {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>>;
}
