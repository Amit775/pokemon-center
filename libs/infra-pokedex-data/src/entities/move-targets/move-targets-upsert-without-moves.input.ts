import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsUpdateWithoutMovesInput } from './move-targets-update-without-moves.input';
import { Type } from 'class-transformer';
import { MoveTargetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';
import { MoveTargetsWhereInput } from './move-targets-where.input';

@InputType()
export class MoveTargetsUpsertWithoutMovesInput {

    @Field(() => MoveTargetsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => MoveTargetsUpdateWithoutMovesInput)
    update!: Identity<MoveTargetsUpdateWithoutMovesInput>;

    @Field(() => MoveTargetsCreateWithoutMovesInput, {nullable:false})
    @Type(() => MoveTargetsCreateWithoutMovesInput)
    create!: Identity<MoveTargetsCreateWithoutMovesInput>;

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: Identity<MoveTargetsWhereInput>;
}
