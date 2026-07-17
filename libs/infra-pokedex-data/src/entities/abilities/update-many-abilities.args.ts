import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesUpdateManyMutationInput } from './abilities-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AbilitiesWhereInput } from './abilities-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAbilitiesArgs {

    @Field(() => AbilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => AbilitiesUpdateManyMutationInput)
    data!: Identity<AbilitiesUpdateManyMutationInput>;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: Identity<AbilitiesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
