import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateManyGenerationInput } from './types-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class TypesCreateManyGenerationInputEnvelope {

    @Field(() => [TypesCreateManyGenerationInput], {nullable:false})
    @Type(() => TypesCreateManyGenerationInput)
    data!: Array<TypesCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
