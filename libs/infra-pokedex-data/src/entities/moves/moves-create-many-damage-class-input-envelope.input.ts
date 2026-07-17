import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateManyDamageClassInput } from './moves-create-many-damage-class.input';
import { Type } from 'class-transformer';

@InputType()
export class MovesCreateManyDamageClassInputEnvelope {

    @Field(() => [MovesCreateManyDamageClassInput], {nullable:false})
    @Type(() => MovesCreateManyDamageClassInput)
    data!: Array<MovesCreateManyDamageClassInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
