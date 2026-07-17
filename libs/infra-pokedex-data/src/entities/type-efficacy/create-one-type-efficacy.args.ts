import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeEfficacyCreateInput } from './type-efficacy-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTypeEfficacyArgs {

    @Field(() => TypeEfficacyCreateInput, {nullable:false})
    @Type(() => TypeEfficacyCreateInput)
    data!: Identity<TypeEfficacyCreateInput>;
}
