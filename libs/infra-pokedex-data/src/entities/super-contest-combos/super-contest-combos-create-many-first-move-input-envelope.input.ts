import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosCreateManyFirstMoveInput } from './super-contest-combos-create-many-first-move.input';
import { Type } from 'class-transformer';

@InputType()
export class SuperContestCombosCreateManyFirstMoveInputEnvelope {

    @Field(() => [SuperContestCombosCreateManyFirstMoveInput], {nullable:false})
    @Type(() => SuperContestCombosCreateManyFirstMoveInput)
    data!: Array<SuperContestCombosCreateManyFirstMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
