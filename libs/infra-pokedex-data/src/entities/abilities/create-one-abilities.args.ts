import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AbilitiesCreateInput } from './abilities-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAbilitiesArgs {

    @Field(() => AbilitiesCreateInput, {nullable:false})
    @Type(() => AbilitiesCreateInput)
    data!: AbilitiesCreateInput;
}
