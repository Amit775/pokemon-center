import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeEfficacyCreateManyInput } from './type-efficacy-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTypeEfficacyArgs {

    @Field(() => [TypeEfficacyCreateManyInput], {nullable:false})
    @Type(() => TypeEfficacyCreateManyInput)
    data!: Array<TypeEfficacyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
