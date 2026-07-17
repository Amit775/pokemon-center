import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesCreateWithoutIncreasedStatInput } from './natures-create-without-increased-stat.input';
import { Type } from 'class-transformer';
import { NaturesCreateOrConnectWithoutIncreasedStatInput } from './natures-create-or-connect-without-increased-stat.input';
import type { Identity } from 'identity-type';
import { NaturesCreateManyIncreasedStatInputEnvelope } from './natures-create-many-increased-stat-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class NaturesCreateNestedManyWithoutIncreasedStatInput {

    @Field(() => [NaturesCreateWithoutIncreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateWithoutIncreasedStatInput)
    create?: Array<NaturesCreateWithoutIncreasedStatInput>;

    @Field(() => [NaturesCreateOrConnectWithoutIncreasedStatInput], {nullable:true})
    @Type(() => NaturesCreateOrConnectWithoutIncreasedStatInput)
    connectOrCreate?: Array<NaturesCreateOrConnectWithoutIncreasedStatInput>;

    @Field(() => NaturesCreateManyIncreasedStatInputEnvelope, {nullable:true})
    @Type(() => NaturesCreateManyIncreasedStatInputEnvelope)
    createMany?: Identity<NaturesCreateManyIncreasedStatInputEnvelope>;

    @Field(() => [NaturesWhereUniqueInput], {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>>;
}
