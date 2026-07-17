import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesCreateManyTypeInput } from './type-game-indices-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class TypeGameIndicesCreateManyTypeInputEnvelope {

    @Field(() => [TypeGameIndicesCreateManyTypeInput], {nullable:false})
    @Type(() => TypeGameIndicesCreateManyTypeInput)
    data!: Array<TypeGameIndicesCreateManyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
