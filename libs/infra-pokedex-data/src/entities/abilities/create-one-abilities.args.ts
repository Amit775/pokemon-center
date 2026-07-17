import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesCreateInput } from './abilities-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAbilitiesArgs {

    @Field(() => AbilitiesCreateInput, {nullable:false})
    @Type(() => AbilitiesCreateInput)
    data!: Identity<AbilitiesCreateInput>;
}
