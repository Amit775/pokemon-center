import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesCreateManyInput } from './move-damage-classes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveDamageClassesArgs {

    @Field(() => [MoveDamageClassesCreateManyInput], {nullable:false})
    @Type(() => MoveDamageClassesCreateManyInput)
    data!: Array<MoveDamageClassesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
