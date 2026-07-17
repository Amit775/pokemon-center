import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosCreateManySecondMoveInput } from './contest-combos-create-many-second-move.input';
import { Type } from 'class-transformer';

@InputType()
export class ContestCombosCreateManySecondMoveInputEnvelope {

    @Field(() => [ContestCombosCreateManySecondMoveInput], {nullable:false})
    @Type(() => ContestCombosCreateManySecondMoveInput)
    data!: Array<ContestCombosCreateManySecondMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
