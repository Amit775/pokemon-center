import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutContestTypeInput } from './moves-create-without-contest-type.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestTypeInput } from './moves-create-or-connect-without-contest-type.input';
import { MovesCreateManyContestTypeInputEnvelope } from './moves-create-many-contest-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesUncheckedCreateNestedManyWithoutContestTypeInput {

    @Field(() => [MovesCreateWithoutContestTypeInput], {nullable:true})
    @Type(() => MovesCreateWithoutContestTypeInput)
    create?: Array<MovesCreateWithoutContestTypeInput>;

    @Field(() => [MovesCreateOrConnectWithoutContestTypeInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestTypeInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutContestTypeInput>;

    @Field(() => MovesCreateManyContestTypeInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyContestTypeInputEnvelope)
    createMany?: MovesCreateManyContestTypeInputEnvelope;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
