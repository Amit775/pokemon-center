import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeGameIndicesCreateManyInput } from './type-game-indices-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTypeGameIndicesArgs {

    @Field(() => [TypeGameIndicesCreateManyInput], {nullable:false})
    @Type(() => TypeGameIndicesCreateManyInput)
    data!: Array<TypeGameIndicesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
