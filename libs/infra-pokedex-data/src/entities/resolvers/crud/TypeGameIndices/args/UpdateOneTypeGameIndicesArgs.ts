import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesUpdateInput } from "../../../inputs/TypeGameIndicesUpdateInput";
import { TypeGameIndicesWhereUniqueInput } from "../../../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateInput, {
    nullable: false
  })
  data!: TypeGameIndicesUpdateInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;
}
