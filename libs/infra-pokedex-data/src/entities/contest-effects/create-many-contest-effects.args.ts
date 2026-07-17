import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestEffectsCreateManyInput } from './contest-effects-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContestEffectsArgs {

    @Field(() => [ContestEffectsCreateManyInput], {nullable:false})
    @Type(() => ContestEffectsCreateManyInput)
    data!: Array<ContestEffectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
