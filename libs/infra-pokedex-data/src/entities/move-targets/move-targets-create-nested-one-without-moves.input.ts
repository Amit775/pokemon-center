import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveTargetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';
import { Type } from 'class-transformer';
import { MoveTargetsCreateOrConnectWithoutMovesInput } from './move-targets-create-or-connect-without-moves.input';
import { Prisma } from '@prisma/client';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';

@InputType()
export class MoveTargetsCreateNestedOneWithoutMovesInput {

    @Field(() => MoveTargetsCreateWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsCreateWithoutMovesInput)
    create?: MoveTargetsCreateWithoutMovesInput;

    @Field(() => MoveTargetsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: MoveTargetsCreateOrConnectWithoutMovesInput;

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:true})
    @Type(() => MoveTargetsWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;
}
