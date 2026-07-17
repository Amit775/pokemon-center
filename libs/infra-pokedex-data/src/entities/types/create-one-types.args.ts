import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesCreateInput } from './types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTypesArgs {

    @Field(() => TypesCreateInput, {nullable:false})
    @Type(() => TypesCreateInput)
    data!: TypesCreateInput;
}
