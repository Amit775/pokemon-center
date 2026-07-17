import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateWithoutItemInput } from './berries-create-without-item.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutItemInput } from './berries-create-or-connect-without-item.input';
import type { Identity } from 'identity-type';
import { BerriesCreateManyItemInputEnvelope } from './berries-create-many-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class BerriesCreateNestedManyWithoutItemInput {

    @Field(() => [BerriesCreateWithoutItemInput], {nullable:true})
    @Type(() => BerriesCreateWithoutItemInput)
    create?: Array<BerriesCreateWithoutItemInput>;

    @Field(() => [BerriesCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<BerriesCreateOrConnectWithoutItemInput>;

    @Field(() => BerriesCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => BerriesCreateManyItemInputEnvelope)
    createMany?: Identity<BerriesCreateManyItemInputEnvelope>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;
}
