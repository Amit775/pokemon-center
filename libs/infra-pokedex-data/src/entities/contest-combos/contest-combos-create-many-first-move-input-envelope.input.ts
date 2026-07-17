import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosCreateManyFirstMoveInput } from './contest-combos-create-many-first-move.input';
import { Type } from 'class-transformer';

@InputType()
export class ContestCombosCreateManyFirstMoveInputEnvelope {

    @Field(() => [ContestCombosCreateManyFirstMoveInput], {nullable:false})
    @Type(() => ContestCombosCreateManyFirstMoveInput)
    data!: Array<ContestCombosCreateManyFirstMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
