import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateManyDamageClassInput } from './types-create-many-damage-class.input';
import { Type } from 'class-transformer';

@InputType()
export class TypesCreateManyDamageClassInputEnvelope {

    @Field(() => [TypesCreateManyDamageClassInput], {nullable:false})
    @Type(() => TypesCreateManyDamageClassInput)
    data!: Array<TypesCreateManyDamageClassInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
