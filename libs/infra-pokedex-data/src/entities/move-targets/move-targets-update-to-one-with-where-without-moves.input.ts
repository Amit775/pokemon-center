import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Type } from 'class-transformer';
import { MoveTargetsUpdateWithoutMovesInput } from './move-targets-update-without-moves.input';

@InputType()
export class MoveTargetsUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: MoveTargetsWhereInput;

    @Field(() => MoveTargetsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => MoveTargetsUpdateWithoutMovesInput)
    data!: MoveTargetsUpdateWithoutMovesInput;
}
