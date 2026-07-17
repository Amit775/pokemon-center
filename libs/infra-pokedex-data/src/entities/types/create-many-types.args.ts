import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesCreateManyInput } from './types-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTypesArgs {

    @Field(() => [TypesCreateManyInput], {nullable:false})
    @Type(() => TypesCreateManyInput)
    data!: Array<TypesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
