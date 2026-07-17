import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GendersCreateInput } from './genders-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGendersArgs {

    @Field(() => GendersCreateInput, {nullable:false})
    @Type(() => GendersCreateInput)
    data!: GendersCreateInput;
}
