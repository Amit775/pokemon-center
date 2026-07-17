import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosCreateManySecondMoveInput } from './super-contest-combos-create-many-second-move.input';
import { Type } from 'class-transformer';

@InputType()
export class SuperContestCombosCreateManySecondMoveInputEnvelope {

    @Field(() => [SuperContestCombosCreateManySecondMoveInput], {nullable:false})
    @Type(() => SuperContestCombosCreateManySecondMoveInput)
    data!: Array<SuperContestCombosCreateManySecondMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
