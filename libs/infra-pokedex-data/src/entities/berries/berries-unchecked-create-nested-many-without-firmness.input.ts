import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateWithoutFirmnessInput } from './berries-create-without-firmness.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutFirmnessInput } from './berries-create-or-connect-without-firmness.input';
import { BerriesCreateManyFirmnessInputEnvelope } from './berries-create-many-firmness-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class BerriesUncheckedCreateNestedManyWithoutFirmnessInput {

    @Field(() => [BerriesCreateWithoutFirmnessInput], {nullable:true})
    @Type(() => BerriesCreateWithoutFirmnessInput)
    create?: Array<BerriesCreateWithoutFirmnessInput>;

    @Field(() => [BerriesCreateOrConnectWithoutFirmnessInput], {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutFirmnessInput)
    connectOrCreate?: Array<BerriesCreateOrConnectWithoutFirmnessInput>;

    @Field(() => BerriesCreateManyFirmnessInputEnvelope, {nullable:true})
    @Type(() => BerriesCreateManyFirmnessInputEnvelope)
    createMany?: BerriesCreateManyFirmnessInputEnvelope;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;
}
