import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateWithoutFirmnessInput } from './berries-create-without-firmness.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutFirmnessInput } from './berries-create-or-connect-without-firmness.input';
import { BerriesUpsertWithWhereUniqueWithoutFirmnessInput } from './berries-upsert-with-where-unique-without-firmness.input';
import type { Identity } from 'identity-type';
import { BerriesCreateManyFirmnessInputEnvelope } from './berries-create-many-firmness-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { BerriesUpdateWithWhereUniqueWithoutFirmnessInput } from './berries-update-with-where-unique-without-firmness.input';
import { BerriesUpdateManyWithWhereWithoutFirmnessInput } from './berries-update-many-with-where-without-firmness.input';
import { BerriesScalarWhereInput } from './berries-scalar-where.input';

@InputType()
export class BerriesUncheckedUpdateManyWithoutFirmnessNestedInput {

    @Field(() => [BerriesCreateWithoutFirmnessInput], {nullable:true})
    @Type(() => BerriesCreateWithoutFirmnessInput)
    create?: Array<BerriesCreateWithoutFirmnessInput>;

    @Field(() => [BerriesCreateOrConnectWithoutFirmnessInput], {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutFirmnessInput)
    connectOrCreate?: Array<BerriesCreateOrConnectWithoutFirmnessInput>;

    @Field(() => [BerriesUpsertWithWhereUniqueWithoutFirmnessInput], {nullable:true})
    @Type(() => BerriesUpsertWithWhereUniqueWithoutFirmnessInput)
    upsert?: Array<BerriesUpsertWithWhereUniqueWithoutFirmnessInput>;

    @Field(() => BerriesCreateManyFirmnessInputEnvelope, {nullable:true})
    @Type(() => BerriesCreateManyFirmnessInputEnvelope)
    createMany?: Identity<BerriesCreateManyFirmnessInputEnvelope>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesUpdateWithWhereUniqueWithoutFirmnessInput], {nullable:true})
    @Type(() => BerriesUpdateWithWhereUniqueWithoutFirmnessInput)
    update?: Array<BerriesUpdateWithWhereUniqueWithoutFirmnessInput>;

    @Field(() => [BerriesUpdateManyWithWhereWithoutFirmnessInput], {nullable:true})
    @Type(() => BerriesUpdateManyWithWhereWithoutFirmnessInput)
    updateMany?: Array<BerriesUpdateManyWithWhereWithoutFirmnessInput>;

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    @Type(() => BerriesScalarWhereInput)
    deleteMany?: Array<BerriesScalarWhereInput>;
}
