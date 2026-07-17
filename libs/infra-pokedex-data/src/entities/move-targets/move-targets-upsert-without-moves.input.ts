import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveTargetsUpdateWithoutMovesInput } from './move-targets-update-without-moves.input';
import { Type } from 'class-transformer';
import { MoveTargetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';
import { MoveTargetsWhereInput } from './move-targets-where.input';

@InputType()
export class MoveTargetsUpsertWithoutMovesInput {

    @Field(() => MoveTargetsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => MoveTargetsUpdateWithoutMovesInput)
    update!: MoveTargetsUpdateWithoutMovesInput;

    @Field(() => MoveTargetsCreateWithoutMovesInput, {nullable:false})
    @Type(() => MoveTargetsCreateWithoutMovesInput)
    create!: MoveTargetsCreateWithoutMovesInput;

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: MoveTargetsWhereInput;
}
