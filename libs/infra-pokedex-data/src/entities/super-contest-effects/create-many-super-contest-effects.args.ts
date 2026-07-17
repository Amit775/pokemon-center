import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestEffectsCreateManyInput } from './super-contest-effects-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySuperContestEffectsArgs {

    @Field(() => [SuperContestEffectsCreateManyInput], {nullable:false})
    @Type(() => SuperContestEffectsCreateManyInput)
    data!: Array<SuperContestEffectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
