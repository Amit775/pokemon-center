import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AbilitiesUpdateManyMutationInput } from './abilities-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AbilitiesWhereInput } from './abilities-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAbilitiesArgs {

    @Field(() => AbilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => AbilitiesUpdateManyMutationInput)
    data!: AbilitiesUpdateManyMutationInput;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: AbilitiesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
