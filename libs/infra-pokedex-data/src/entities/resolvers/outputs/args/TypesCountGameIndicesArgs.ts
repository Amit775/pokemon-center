import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesWhereInput } from "../../inputs/TypeGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class TypesCountGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereInput, {
    nullable: true
  })
  where?: TypeGameIndicesWhereInput | undefined;
}
