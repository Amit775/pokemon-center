import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutTargetInput } from './moves-create-without-target.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutTargetInput } from './moves-create-or-connect-without-target.input';
import type { Identity } from 'identity-type';
import { MovesCreateManyTargetInputEnvelope } from './moves-create-many-target-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesUncheckedCreateNestedManyWithoutTargetInput {

    @Field(() => [MovesCreateWithoutTargetInput], {nullable:true})
    @Type(() => MovesCreateWithoutTargetInput)
    create?: Array<MovesCreateWithoutTargetInput>;

    @Field(() => [MovesCreateOrConnectWithoutTargetInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutTargetInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutTargetInput>;

    @Field(() => MovesCreateManyTargetInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyTargetInputEnvelope)
    createMany?: Identity<MovesCreateManyTargetInputEnvelope>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
