import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesWhereUniqueInput } from "../../../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;
}
