import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutDamageClassInput } from './moves-create-without-damage-class.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutDamageClassInput } from './moves-create-or-connect-without-damage-class.input';
import type { Identity } from 'identity-type';
import { MovesCreateManyDamageClassInputEnvelope } from './moves-create-many-damage-class-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesUncheckedCreateNestedManyWithoutDamageClassInput {

    @Field(() => [MovesCreateWithoutDamageClassInput], {nullable:true})
    @Type(() => MovesCreateWithoutDamageClassInput)
    create?: Array<MovesCreateWithoutDamageClassInput>;

    @Field(() => [MovesCreateOrConnectWithoutDamageClassInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutDamageClassInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutDamageClassInput>;

    @Field(() => MovesCreateManyDamageClassInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyDamageClassInputEnvelope)
    createMany?: Identity<MovesCreateManyDamageClassInputEnvelope>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
