import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AbilitiesCreateManyInput } from './abilities-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAbilitiesArgs {

    @Field(() => [AbilitiesCreateManyInput], {nullable:false})
    @Type(() => AbilitiesCreateManyInput)
    data!: Array<AbilitiesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
