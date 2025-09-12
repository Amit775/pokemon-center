import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesUpdateManyMutationInput } from "../../../inputs/TypeGameIndicesUpdateManyMutationInput";
import { TypeGameIndicesWhereInput } from "../../../inputs/TypeGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeGameIndicesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesWhereInput, {
    nullable: true
  })
  where?: TypeGameIndicesWhereInput | undefined;
}
