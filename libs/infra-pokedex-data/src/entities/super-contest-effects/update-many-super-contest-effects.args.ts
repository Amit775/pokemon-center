import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestEffectsUpdateManyMutationInput } from './super-contest-effects-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySuperContestEffectsArgs {

    @Field(() => SuperContestEffectsUpdateManyMutationInput, {nullable:false})
    @Type(() => SuperContestEffectsUpdateManyMutationInput)
    data!: SuperContestEffectsUpdateManyMutationInput;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    where?: SuperContestEffectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
