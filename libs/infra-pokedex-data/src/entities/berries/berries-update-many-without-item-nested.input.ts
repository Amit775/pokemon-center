import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateWithoutItemInput } from './berries-create-without-item.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutItemInput } from './berries-create-or-connect-without-item.input';
import { BerriesUpsertWithWhereUniqueWithoutItemInput } from './berries-upsert-with-where-unique-without-item.input';
import { BerriesCreateManyItemInputEnvelope } from './berries-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { BerriesUpdateWithWhereUniqueWithoutItemInput } from './berries-update-with-where-unique-without-item.input';
import { BerriesUpdateManyWithWhereWithoutItemInput } from './berries-update-many-with-where-without-item.input';
import { BerriesScalarWhereInput } from './berries-scalar-where.input';

@InputType()
export class BerriesUpdateManyWithoutItemNestedInput {

    @Field(() => [BerriesCreateWithoutItemInput], {nullable:true})
    @Type(() => BerriesCreateWithoutItemInput)
    create?: Array<BerriesCreateWithoutItemInput>;

    @Field(() => [BerriesCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<BerriesCreateOrConnectWithoutItemInput>;

    @Field(() => [BerriesUpsertWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => BerriesUpsertWithWhereUniqueWithoutItemInput)
    upsert?: Array<BerriesUpsertWithWhereUniqueWithoutItemInput>;

    @Field(() => BerriesCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => BerriesCreateManyItemInputEnvelope)
    createMany?: BerriesCreateManyItemInputEnvelope;

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

    @Field(() => [BerriesUpdateWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => BerriesUpdateWithWhereUniqueWithoutItemInput)
    update?: Array<BerriesUpdateWithWhereUniqueWithoutItemInput>;

    @Field(() => [BerriesUpdateManyWithWhereWithoutItemInput], {nullable:true})
    @Type(() => BerriesUpdateManyWithWhereWithoutItemInput)
    updateMany?: Array<BerriesUpdateManyWithWhereWithoutItemInput>;

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    @Type(() => BerriesScalarWhereInput)
    deleteMany?: Array<BerriesScalarWhereInput>;
}
